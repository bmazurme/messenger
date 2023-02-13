import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import useUser from '../../hook/useUser';
import { Button, Input } from '../form-components';
import { useUpdateUserMutation } from '../../store';

import { Urls } from '../../utils/constants';

type FormPayload = {
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  email: string;
  login: string;
};

const inputs = [
  {
    name: 'email',
    label: 'E-mail',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+[.{0}][a-z]{2,3}$/,
      message: 'Email is invalid',
    },
    required: true,
    autoComplete: 'current-email',
  },
  {
    name: 'login',
    label: 'Login',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'current-login',
  },
  {
    name: 'first_name',
    label: 'First name',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'First name is invalid',
    },
    required: true,
    autoComplete: 'current-first_name',
  },
  {
    name: 'second_name',
    label: 'Second name',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Second name is invalid',
    },
    required: true,
    autoComplete: 'current-second_name',
  },
  {
    name: 'display_name',
    label: 'Display name',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Display name is invalid',
    },
    required: true,
    autoComplete: 'current-display_name',
  },
  {
    name: 'phone',
    label: 'Phone',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Phone name is invalid',
    },
    required: true,
    autoComplete: 'current-phone_name',
  },
];

export default function ProfileEdit() {
  const userData = useUser();
  const errorHandler = useErrorHandler();
  const [updateUser] = useUpdateUserMutation();
  const [notification, setNotification] = useState<{ type: any; message: string; } | null>(null);
  console.log(notification);

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      email: userData?.email || '',
      login: userData?.login || '',
      first_name: userData?.first_name || '',
      second_name: userData?.second_name || '',
      display_name: userData?.display_name || '',
      phone: userData?.phone || '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const actions = [];
    actions.push(updateUser(data));

    Promise.all(actions)
      .then(() => setNotification({
        type: 'success',
        message: 'Profile updated',
      }))
      .then(() => setTimeout(() => setNotification(null), 3000))
      .catch(({ status, data: { reason } }) => errorHandler(new Error(`${status}: ${reason}`)));
  });

  return (
    <section className="profile">
      <h2 className="profile__title">Profile edit</h2>
      <form className="profile__form form_save" onSubmit={onSubmit}>
        <ul className="list">
          {inputs.map((input) => (
            <Controller
              key={input.name}
              name={input.name as keyof FormPayload}
              rules={{
                pattern: input.pattern,
                required: input.required,
              }}
              control={control}
              render={({ field, fieldState }) => (
                <li className="list__item">
                  <Input
                    {...field}
                    {...input}
                    className="input list__value list__value_input"
                    errorText={fieldState.error?.message}
                    black
                  />
                </li>
              )}
            />
          ))}
        </ul>
        <Button className="button button_submit" variant="filled">
          Save
        </Button>
      </form>

      <div className="back">
        <Link className="back__button" to={Urls.PROFILE} />
      </div>
    </section>
  );
}
