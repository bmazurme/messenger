import React from 'react';

import { formatDate } from '../../utils/formatDate';

export default function Message({ message, userId }: { message: any, userId: number }) {
  return (
    <div key={message.id} className={`message${userId === message.user_id ? ' message_to' : ''}`}>
      <div className={`message__container${userId === message.user_id ? ' message__container_to' : ''}`}>
        <div className="message__content">
          {message.content}
          <time className="message__time">
            {formatDate(message.time)}
          </time>
        </div>
      </div>
    </div>
  );
}
