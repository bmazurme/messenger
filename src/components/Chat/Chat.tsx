/* eslint-disable max-len */
/* eslint-disable no-new */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Avatar from '../Avatar';
import { useGetTokenMutation, store } from '../../store';
import useUser from '../../hook/useUser';

import { formatDate } from '../../utils/formatDate';

import WebSocketService from '../../store/api/wssApi/WebSocketService';

export default function Chat({ chat }: { chat: Chat }) {
  const [getToken] = useGetTokenMutation();
  const userData = useUser();

  const handleClick = () => {
    store.dispatch({ type: 'chat/setChat', payload: chat });

    getToken({ id: chat.id })
      .then(({ data }: any) => {
        new WebSocketService((userData as User & { id: number }).id, chat.id, data.token);
        store.dispatch({
          type: 'token/setToken',
          payload: {
            token: data.token,
            chatId: chat.id,
            userId: (userData as User & { id: number }).id,
          },
        });
      })
      .catch();
  };

  return (
    <li className="chat" onClick={handleClick}>
      <div className="chat__container">
        <div className="chat__image">
          <Avatar avatar={chat?.avatar} />
        </div>
        <div className="chat__title">{chat?.title}</div>
        <div className="chat__text">
          {chat?.last_message?.user.login === userData?.login
            ? (<span className="chat__from-you">You:</span>)
            : null}
          {chat?.last_message?.content}
        </div>
        <div className="chat__time">{formatDate(chat?.last_message?.time)}</div>
        {chat?.unread_count > 0
          ? (<div className="chat__counter">{chat?.unread_count}</div>)
          : null}
      </div>
    </li>
  );
}
