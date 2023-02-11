/* eslint-disable no-new */
import React, { useEffect, useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Messages from '../Messages';
import Footer from '../Footer';

import WebSocketService from '../../utils/WebSocket';
import makeDataSelector from '../../store/makeDataSelector';

const statsSelector = makeDataSelector('messages');

export default function Board({ chat, setChat, token }
  : { chat: Chat | null, setChat: any, token: any }) {
  const { data = [] } = useSelector(statsSelector);
  const [message, setMessage] = useState('');
  // @ts-ignore
  const onChange = (evt: FormEvent<HTMLInputElement>) => setMessage(evt.target.value);

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    new WebSocketService().send({ type: 'message', content: message });
    setMessage('');
  };

  useEffect(() => {
    if (token?.token) {
      new WebSocketService(token.userId, token.chatId, token.token);
    }
  }, [token]);

  const onTogglePopupMenu = () => {
    console.log('click-menu');
  };

  return (
    <div className="content__board">
      <div className="board">
        {chat
          ? (
            <>
              <div className="board__header">
                <Header chat={chat} onTogglePopupMenu={onTogglePopupMenu} setChat={setChat} />
              </div>
              <div className="board__main">
                <Messages messages={data} userId={token?.userId} />
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
