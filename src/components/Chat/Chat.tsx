import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '../Avatar';
import { useGetTokenMutation, store } from '../../store';
import makeDataSelector from '../../store/makeDataSelector';
import useUser from '../../hook/useUser';

import { formatDate } from '../../utils/formatDate';

const chatSelector = makeDataSelector('chat');

export default function Chat({ chat }: { chat: Chat }) {
  const { data: currentChat } = useSelector(chatSelector);
  const [getToken] = useGetTokenMutation();
  const userData = useUser();

  const handleClick = () => {
    store.dispatch({ type: 'chat/setChat', payload: chat });

    getToken({ id: chat.id })
      .then((res) => {
        store.dispatch({
          type: 'token/setToken',
          payload: {
            token: (res as { data: { token: string }}).data.token,
            chatId: chat.id,
            userId: (userData as User & { id: number }).id,
          },
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <button type="button" aria-label="Chat" className="chat" onClick={handleClick}>
      <div className={`chat__container${currentChat?.id === chat?.id
        ? ' chat__container_active'
        : ''} `}
      >
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
    </button>
  );
}
