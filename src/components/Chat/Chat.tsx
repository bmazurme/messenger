/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { useGetTokenMutation } from '../../store';
import useUser from '../../hook/useUser';
import { RESOURCES } from '../../utils/constants';
import { formatDate } from '../../utils/formatDate';

export default function Chat({ chat, setChat, setToken }
: { chat: Chat, setChat: any, setToken: any }) {
  const [getToken] = useGetTokenMutation();
  const userData = useUser();

  const handleClick = () => {
    setChat(chat);
    getToken({ id: chat.id })
      .then(({ data }: any) => setToken({
        token: data.token,
        chatId: chat.id,
        userId: (userData as User & { id: number }).id,
      }))
      .catch();
  };

  return (
    <li className="chat" onClick={handleClick}>
      <div className="chat__container">
        <img className="chat__image" src={`${RESOURCES}${chat?.avatar}`} alt="img" />
        <div className="chat__title">{chat?.title}</div>
        <div className="chat__text">
          {chat?.created_by
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
