import React, { useState } from 'react';

import SideBar from '../Sidebar';
import Board from '../Board';

export default function Main() {
  const [chat, setChat] = useState<Chat | null>(null);
  return (
    <>
      <SideBar setChat={setChat} />
      <Board setChat={setChat} chat={chat} />
    </>
  );
}
