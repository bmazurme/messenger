/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FormEvent, FormEventHandler, useState } from 'react';

import Avatar from '../Avatar';
import useUser from '../../hook/useUser';

export default function SideBar() {
  const userData = useUser();
  const [message, setMessage] = useState('');

  const chat = true;
  const onChange = (evt: FormEvent<HTMLInputElement>) => {
    setMessage(evt.target.value);
  };
  const onUpload = () => {
    console.log('click');
  };
  const onTogglePopupMenu = () => {
    console.log('click-menu');
  };

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    if (message && message !== '') {
      console.log(message);
      setMessage('');
    }
  };

  return (chat
    ? (
      <div className="board">
        <div className="board__header">
          <div className="header">
            <div className="header__image">
              <Avatar user={userData!} />
            </div>
            <div className="header__text">text</div>
            <button
              type="button"
              className="header__toggle"
              onClick={onTogglePopupMenu}
            />
          </div>
        </div>

        <div className="board__main" />

        <div className="board__footer">
          <form className="footer" onSubmit={onSubmit}>
            <button
              type="button"
              className="footer__button"
              onClick={onUpload}
            />
            <input
              className="footer__input"
              value={message}
              onChange={onChange}
            />
            <button type="submit" className="footer__button footer__button_send" />
          </form>
        </div>
      </div>
    )
    : (
      <div className="board">
        Выберите чат, чтобы отправить сообщение
      </div>
    )
  );
}
