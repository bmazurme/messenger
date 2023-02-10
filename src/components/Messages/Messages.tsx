import React from 'react';

export default function MessageList() {
  return (
    <div className="message-list">

      <div className="message ">
        <div className="message__container">
          <div className="message__content">
            content
            <time className="message__time">
              {new Date().toDateString()}
            </time>
          </div>
        </div>
      </div>

      <div className="message message_to">
        <div className="message__container message__container_to">
          <div className="message__content">
            content
            <time className="message__time message__time_read">
              {new Date().toDateString()}
            </time>
          </div>
        </div>
      </div>

    </div>
  );
}
