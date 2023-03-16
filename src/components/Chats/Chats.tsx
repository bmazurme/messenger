/* eslint-disable max-len */
import React, { FormEvent, useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import { useGetChatsQuery } from '../../store';

import Chat from '../Chat';
import Preloader from '../Preloader';

export default function Chats() {
  const handleError = useErrorHandler();
  const [word, setWord] = useState('');
  const [chatList, setChatList] = useState<Chat[]>([]);
  const { data = [], error, isLoading } = useGetChatsQuery(1, {
    pollingInterval: 3000,
    // refetchOnReconnect: true,
  });

  if (error) {
    handleError(error);
  }

  const onChange = (evt: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    setWord(evt.target.value);
    const refList = data.filter((chat: Chat) => chat.title.includes(word));
    setChatList(refList);
  };

  useEffect(() => {
    if (word !== '') {
      const refList = data.filter((chat: Chat) => chat.title.includes(word));
      setChatList(refList);
    } else {
      setChatList(data);
    }
  }, [JSON.stringify(data) === JSON.stringify(chatList), word]);

  return (
    <>
      <input
        type="search"
        value={word}
        className="sidebar__search"
        placeholder="Search"
        onChange={onChange}
      />
      <ul className="chats">
        {isLoading
          ? <Preloader />
          : chatList.map((chat) => (<Chat key={chat?.id} chat={chat} />))}
      </ul>
    </>
  );
}
