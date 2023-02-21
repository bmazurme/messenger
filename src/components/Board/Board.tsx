import React, { useState, FormEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Messages from '../Messages';
import Footer from '../Footer';

import { usePostFileMutation } from '../../store';

import WebSocketService from '../../store/api/wssApi/WebSocketService';
import makeDataSelector from '../../store/makeDataSelector';

const chatSelector = makeDataSelector('chat');
const tokenSelector = makeDataSelector('token');
const messagesSelector = makeDataSelector('messages');

type Parcel = {
  id: number,
  user_id: number,
  path: string,
  filename: string,
  content_type: string,
  content_size: number,
  upload_date: string,
}

export default function Board() {
  const [message, setMessage] = useState('');
  const [parcel, setParcel] = useState<Parcel | null>(null);
  const [item, setItem] = useState<Record<number, WebSocketService>>({});
  const [curr, setCurr] = useState('');
  const [postFile] = usePostFileMutation();
  const { data: messages = [] } = useSelector(messagesSelector);
  const { data: chat } = useSelector(chatSelector) as { data: Chat };
  const { data: token } = useSelector(tokenSelector) as {
    data: { userId: number, chatId: number, token: string }
  };

  // @ts-ignore
  const onChange = (evt: FormEvent<HTMLInputElement>) => setMessage(evt.target.value);
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (message !== '') {
      item[chat.id]?.send({
        type: 'message',
        content: message,
        file: parcel,
      });
    }
    setMessage('');
  };

  useEffect(() => {
    if (token?.token && curr !== token.token) {
      setCurr(token.token);
      const wss = new WebSocketService(token?.userId, chat?.id, token?.token);
      setItem({ ...item, [chat.id]: wss });
    }
  }, [token, messages]);

  const onSubmitFile = async (data: unknown) => {
    const { data: res } = await postFile(data) as { data: Parcel };
    setParcel(res);
  };

  return (
    <div className="content__board">
      <div className="board">
        {chat
          ? (
            <>
              <div className="board__header">
                <Header />
              </div>
              <div className="board__main">
                <Messages />
              </div>
              <div className="board__footer">
                <Footer
                  message={message}
                  onChange={onChange}
                  onSubmit={onSubmit}
                  onSubmitFile={onSubmitFile}
                />
              </div>
            </>
          )
          : (
            <div className="board__choose">
              Select a chat to send a message
            </div>
          )}
      </div>
    </div>
  );
}
