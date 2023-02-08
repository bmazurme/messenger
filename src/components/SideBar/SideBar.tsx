/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../form-components';
import Cards from '../Cards';

import { Urls } from '../../utils/constants';

export default function SideBar() {
  const cards: Card[] = [
    {
      id: 1,
      title: 'title',
      text: 'text',
      image: '/',
      time: new Date(),
      count: 4,
      you: true,
    },
    {
      id: 2,
      title: 'title',
      text: 'text',
      image: '/',
      time: new Date(),
      count: 4,
      you: false,
    },
  ];

  return (
    <div className="chat__sidebar">
      <div className="sidebar">
        <Link className="sidebar__profile" to={Urls.PROFILE}>
          Профиль
          <span className="sidebar__icon" />
        </Link>
        <input className="sidebar__search" placeholder="Поиск" />
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
