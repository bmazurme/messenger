/* eslint-disable no-new */
import React, { useState, FormEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Messages from '../Messages';
import Footer from '../Footer';

import WebSocketService from '../../store/api/wssApi/WebSocketService';
import makeDataSelector from '../../store/makeDataSelector';

const chatSelector = makeDataSelector('chat');
const tokenSelector = makeDataSelector('token');

let wss: WebSocketService;

export default function Board() {
  const { data: chat } = useSelector(chatSelector) as { data: Chat };
  const { data: token } = useSelector(tokenSelector) as {
    data: { userId: number, chatId: number, token: string }
  };
  const [message, setMessage] = useState('');

  const [curr, setCurr] = useState('');

  useEffect(() => {
    if (token?.token && curr !== token.token) {
      setCurr(token.token);
      wss = new WebSocketService(token?.userId, chat?.id, token?.token);
      console.log(token.chatId, token.token, wss);
    }
  }, [token]);

  // @ts-ignore
  const onChange = (evt: FormEvent<HTMLInputElement>) => setMessage(evt.target.value);
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    wss.send({ type: 'message', content: message });
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
                <Footer message={message} onChange={onChange} onSubmit={onSubmit} />
              </div>
            </>
          )
          : <div className="board__choose">Select a chat to send a message</div>}
      </div>
    </div>
  );
}
