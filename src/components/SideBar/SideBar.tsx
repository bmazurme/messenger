/* eslint-disable react/self-closing-comp */
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import { Button } from '../form-components';
import { AddChatPopup } from '../popups';
import Chats from '../Chats';
import { Urls } from '../../utils/constants';
import { useCreateChatMutation } from '../../store';

export default function Sidebar() {
  const errorHandler = useErrorHandler();
  const [addChat] = useCreateChatMutation();
  const [word, setWord] = useState('');
  const [popup, setPopup] = useState(false);

  const closePopup = () => {
    setPopup(false);
  };

  const onChange = (evt: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    setWord(evt.target.value);
  };

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    if (word && word !== '') {
      console.log(word);
    }
  };
  const handleAddChatSubmit = async (title: Record<string, string>) => {
    try {
      await addChat(title);
      closePopup();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  };

  return (
    <div className="content__sidebar">
      <div className="sidebar">
        <Link className="sidebar__profile" to={Urls.PROFILE}>
          Профиль
          <span className="sidebar__icon" />
        </Link>
        <form onSubmit={onSubmit}>
          <input
            value={word}
            className="sidebar__search"
            placeholder="Поиск"
            onChange={onChange}
          />
        </form>
        <Button
          className="button button_create-chat"
          variant="filled"
          onClick={() => setPopup(true)}
        >
          Создать чат
        </Button>
        <Chats />
        <AddChatPopup
          onAddChat={handleAddChatSubmit}
          onClose={closePopup}
          isOpen={popup}
        />
      </div>
    </div>
  );
}
