import React from 'react';

import Message from '../Message';

export default function Messages({ messages, userId }: { messages: any, userId: number }) {
  return (
    <div className="message-list">
      {messages.map((message: any) => (
        <Message key={message.id} userId={userId} message={message} />
      ))}
    </div>
  );
}
