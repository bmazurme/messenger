import React from 'react';
import { useSelector } from 'react-redux';

import makeDataSelector from '../../store/makeDataSelector';
import useUser from '../../hook/useUser';
import Message from '../Message';

export default function Messages() {
  const userData = useUser() as User & { id: number };
  const messagesSelector = makeDataSelector('messages');
  const { data = [] } = useSelector(messagesSelector);

  return (
    <div className="message-list">
      {data
        .filter(({ id }) => id)
        .map((message: MessageType) => (
          <Message
            key={`${message.id}${message.time}`}
            userId={userData?.id}
            message={message}
          />
        ))}
    </div>
  );
}
