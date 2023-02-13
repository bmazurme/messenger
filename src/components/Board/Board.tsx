/* eslint-disable no-new */
import React, { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Messages from '../Messages';
import Footer from '../Footer';

import WebSocketService from '../../store/api/wssApi/WebSocketService';
import makeDataSelector from '../../store/makeDataSelector';

const chatSelector = makeDataSelector('chat');

export default function Board() {
  const { data: chat } = useSelector(chatSelector);
  const [message, setMessage] = useState('');
  // @ts-ignore
  const onChange = (evt: FormEvent<HTMLInputElement>) => setMessage(evt.target.value);

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    new WebSocketService().send({ type: 'message', content: message });
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
          : <div className="board__choose">Выберите чат, чтобы отправить сообщение</div>}
      </div>
    </div>
  );
}
