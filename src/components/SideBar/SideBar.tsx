/* eslint-disable react/self-closing-comp */
import React, {
  KeyboardEvent, FormEvent, useState, useEffect, useMemo,
} from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../form-components';
import Cards from '../Cards';

import { Urls } from '../../utils/constants';
import mcards from '../../mock/cards';

export default function SideBar() {
  const [word, setWord] = useState('');
  // const [cards, setCards] = useState([]);
  const cards = useMemo(() => mcards, []);
  // const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
  //   if (evt.key === 'Enter' && word && word !== '') {
  //     console.log(word);
  //   }
  // };

  const onChange = (evt: FormEvent<HTMLInputElement>) => {
    setWord(evt.target.value);
  };

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    if (word && word !== '') {
      console.log(word);
      // setMessage('');
    }
  };

  return (
    <div className="chat__sidebar">
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

        {cards.length === 0
          ? (
            <Button className="button button_create-chat" variant="filled">
              Создать чат
            </Button>
          )
          : <Cards cards={cards} />}
      </div>
    </div>
  );
}
