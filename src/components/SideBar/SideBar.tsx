/* eslint-disable react/self-closing-comp */
import React, {
  FormEvent, useState,
} from 'react';
import { Link } from 'react-router-dom';
// import { useErrorHandler } from 'react-error-boundary';

import { Button } from '../form-components';
import Chats from '../Chats';

import { Urls } from '../../utils/constants';
import { useGetChatsQuery } from '../../store';

export default function Sidebar({ setChat }: { setChat: any }) {
  // const handleError = useErrorHandler();
  const [word, setWord] = useState('');
  const { data = [] } = useGetChatsQuery(1, {
    pollingInterval: 5000,
    // keepUnusedDataFor: 120,
    refetchOnReconnect: true,
  });
  // const navMode = data ? 'all-options' : 'none';

  console.log(data);

  // if (error) {
  //   handleError(error);
  // }

  const onChange = (evt: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
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

        {data!.length > 0
          ? <Chats chats={data!} setChat={setChat} />
          : (
            <Button className="button button_create-chat" variant="filled">
              Создать чат
            </Button>
          )}
      </div>
    </div>
  );
}
