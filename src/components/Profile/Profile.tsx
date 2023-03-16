import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { Controller, useForm } from 'react-hook-form';

import useUser from '../../hook/useUser';
import AvatarChanger from '../AvatarChanger';
import ProfileMenu from '../ProfileMenu';
import Switcher from '../Switcher';

import { useSignOutMutation, useUpdateAvatarMutation } from '../../store';
import { Urls } from '../../utils/constants';

import ThemeContext from '../../context/ThemeContext';

export type FormPayload = Omit<User, 'id'>;

export default function Profile() {
  const userData = useUser();
  const errorHandler = useErrorHandler();
  const [signOut] = useSignOutMutation();
  const [updateAvatar] = useUpdateAvatarMutation();
  const [newSrc, setNewSrc] = useState('');
  const { style, setStyle } = useContext(ThemeContext);

  const signOutHandler = async () => {
    await signOut();
  };

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      avatar: userData?.avatar || 'null',
    },
  });

  const onSubmit = (data: FormPayload) => {
    const actions = [];
    actions.push(updateAvatar(data));

    Promise.all(actions)
      .then(() => {
        setNewSrc('');
      })
      .catch(({ status, data: { reason } }) => errorHandler(new Error(`${status}: ${reason}`)));
  };

  const toggleTheme = () => {
    setStyle(style === 'light' ? 'dark' : 'light');
    localStorage.setItem('wp-theme', style === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('wp-theme');
    setStyle(currentTheme === 'light' ? 'light' : 'dark');
  }, []);

  return (
    <section className="profile">
      <form className="profile__avatar" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="avatar"
          render={({ field }) => (
            <>
              <AvatarChanger
                avatar={userData!.avatar}
                onChange={field.onChange}
                setNewSrc={setNewSrc}
              />
              <button
                className={`avatar__button${newSrc === ''
                  ? ' avatar__button_disabled'
                  : ''}`}
                type="submit"
                disabled={newSrc === ''}
                aria-label="Submit"
              />
            </>
          )}
        />
      </form>
      <h2 className="profile__title">Profile</h2>
      <ul className="list">
        <li className="list__item">
          <p className="list__label">Email</p>
          <p className="list__value">
            {userData?.email || '-'}
          </p>
        </li>
        <li className="list__item">
          <p className="list__label">Login</p>
          <p className="list__value">
            {userData?.login || '-'}
          </p>
        </li>
        <li className="list__item">
          <p className="list__label">First name</p>
          <p className="list__value">
            {userData?.first_name || '-'}
          </p>
        </li>
        <li className="list__item">
          <p className="list__label">Second name</p>
          <p className="list__value">
            {userData?.second_name || '-'}
          </p>
        </li>
        <li className="list__item">
          <p className="list__label">Disdplay name</p>
          <p className="list__value">
            {userData?.display_name || '-'}
          </p>
        </li>
        <li className="list__item">
          <p className="list__label">Phone</p>
          <p className="list__value">
            {userData?.phone || '-'}
          </p>
        </li>
      </ul>
      <div className="center">
        <Switcher
          label="Dark theme"
          handlerSwitchClick={toggleTheme}
          value={(localStorage.getItem('wp-theme') === 'dark')}
        />
      </div>
      <ProfileMenu signOutHandler={signOutHandler} />
      <div className="back">
        <Link className="back__button" to={Urls.BASE} />
      </div>
    </section>
  );
}
