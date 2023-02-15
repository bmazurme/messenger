import React from 'react';
import { useSelector } from 'react-redux';

import makeDataSelector from '../../store/makeDataSelector';
import useUser from '../../hook/useUser';
import Message from '../Message';

type TokenType = { userId: number, chatId: number, token: string };

const messagesSelector = makeDataSelector('messages');
const tokenSelector = makeDataSelector('token');
const getLocateDate = (el: string) => new Date(el).toLocaleDateString('ru-RU');
const getChatId = (token: TokenType) => (token?.chatId ? token?.chatId : 0);

export default function Messages() {
  const userData = useUser() as User & { id: number };
  const { data: token } = useSelector(tokenSelector) as { data: TokenType };
  const { data: messages } = useSelector(messagesSelector) as {
    data: Record<number, MessageType[]>};
  const currentChat: MessageType[] = messages[getChatId(token)] ? messages[getChatId(token)] : [];

  const formatedList = [
    ...new Set(currentChat?.filter(({ time }) => getLocateDate(time))
      .map(({ time }) => getLocateDate(time))),
  ].map((item) => ({
    date: item,
    data: currentChat?.filter(({ time }) => getLocateDate(time) === item).map((el) => el),
  }));

  return (
    <div className="message-list">
      {formatedList.map((day) => (
        <div className="message-list" key={day.date}>
          {day.data.map((message: MessageType) => (
            <Message
              key={`${message.id}${message.time}`}
              userId={userData?.id}
              message={message}
            />
          ))}
          {new Date().toLocaleDateString('ru-RU') !== day.date
            ? (
              <div className="message__date">
                <span className="badge">{day.date}</span>
              </div>
            )
            : null}
        </div>
      ))}
    </div>
  );
}
