import React from 'react';

import Chat from '../Chat';

export default function Chats({ chats, setChat, setToken }
  : { chats: Chat[], setChat: any, setToken: any }) {
  return (
    <ul className="chats">
      {chats.map((chat) => (
        <Chat key={chat?.id} chat={chat} setChat={setChat} setToken={setToken} />
      ))}
    </ul>
  );
}
