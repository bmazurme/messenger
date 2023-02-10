/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Chat({ chat, setChat }
: { chat: Chat, setChat: any }) {
  const url = 'https://ya-praktikum.tech/api/v2/resources';
  return (
    <li className="chat" onClick={() => setChat(chat)}>
      <div className="chat__container">
        <img className="chat__image" src={`${url}${chat?.avatar}`} alt="img" />
        <div className="chat__title">{chat?.title}</div>
        <div className="chat__text">
          {chat?.created_by
            ? (<span className="chat__from-you">You:</span>)
            : null}
          {chat?.title}
        </div>
        <div className="chat__time">{chat?.last_message}</div>
        {chat?.unread_count > 0
          ? (<div className="chat__counter">{chat?.unread_count}</div>)
          : null}
      </div>
    </li>
  );
}
