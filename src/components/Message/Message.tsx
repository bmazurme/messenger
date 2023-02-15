import React from 'react';

import { formatDate } from '../../utils/formatDate';

export default function Message({ message, userId }: { message: MessageType, userId: number }) {
  return (
    <div key={message.id} className={`message${userId === message.user_id ? ' message_to' : ''}`}>
      <div className={`message__container${userId === message.user_id ? ' message__container_to' : ''}`}>
        <div className="message__content">
          {message.content}
          <time className={`message__time${userId === message.user_id && message.is_read ? ' message__time_read' : ''}`}>
            {formatDate(message.time)}
          </time>
        </div>
      </div>
    </div>
  );
}
