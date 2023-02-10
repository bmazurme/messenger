import React from 'react';

import Header from '../Header';
import Messages from '../Messages';
import Footer from '../Footer';

export default function Board({ chat, setChat }: { chat: Chat | null, setChat: any }) {
  const onTogglePopupMenu = () => {
    console.log('click-menu');
  };

  return (
    <div className="board">
      {chat
        ? (
          <>
            <div className="board__header">
              <Header chat={chat} onTogglePopupMenu={onTogglePopupMenu} setChat={setChat} />
            </div>
            <div className="board__main">
              <Messages />
            </div>
            <div className="board__footer">
              <Footer />
            </div>
          </>
        )
        : <div className="board__choose">Выберите чат, чтобы отправить сообщение</div>}
    </div>
  );
}
