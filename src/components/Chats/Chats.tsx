import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useGetChatsQuery } from '../../store';

import Chat from '../Chat';
import Preloader from '../Preloader';

export default function Chats() {
  const handleError = useErrorHandler();
  const { data = [], error, isLoading } = useGetChatsQuery(1, {
    pollingInterval: 3000,
    // refetchOnReconnect: true,
  });

  if (error) {
    handleError(error);
  }

  return (
    <ul className="chats">
      {isLoading
        ? <Preloader />
        : data.map((chat) => (
          <Chat key={chat?.id} chat={chat} />
        ))}
    </ul>
  );
}
