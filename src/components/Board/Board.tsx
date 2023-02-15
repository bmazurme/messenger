import React, { useState, FormEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Messages from '../Messages';
import Footer from '../Footer';

import WebSocketService from '../../store/api/wssApi/WebSocketService';
import makeDataSelector from '../../store/makeDataSelector';

const chatSelector = makeDataSelector('chat');
const tokenSelector = makeDataSelector('token');
const messagesSelector = makeDataSelector('messages');

export default function Board() {
  const [message, setMessage] = useState('');
  const [curr, setCurr] = useState('');

  const { data: messages = [] } = useSelector(messagesSelector);
  const { data: chat } = useSelector(chatSelector) as { data: Chat };
  const { data: token } = useSelector(tokenSelector) as {
    data: { userId: number, chatId: number, token: string }
  };
  const [item, setItem] = useState<Record<number, WebSocketService>>({});

  useEffect(() => {
    if (token?.token && curr !== token.token) {
      setCurr(token.token);
      const wss = new WebSocketService(token?.userId, chat?.id, token?.token);
      setItem({ ...item, [chat.id]: wss });
    }
  }, [token, messages]);

  // @ts-ignore
  const onChange = (evt: FormEvent<HTMLInputElement>) => setMessage(evt.target.value);
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (message !== '') {
      item[chat.id]?.send({ type: 'message', content: message });
    }
    setMessage('');
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
