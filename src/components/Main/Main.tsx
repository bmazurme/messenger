import React, { useState } from 'react';

import SideBar from '../Sidebar';
import Board from '../Board';

export default function Main() {
  const [chat, setChat] = useState<Chat | null>(null);
  const [token, setToken] = useState(null);

  return (
    <>
      <SideBar setChat={setChat} setToken={setToken} />
      <Board setChat={setChat} chat={chat} token={token} />
    </>
  );
}
