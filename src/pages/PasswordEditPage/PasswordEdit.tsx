import React from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import { Button, Input } from '../../components/form-components';

import { useUpdateUserPasswordMutation } from '../../store';

import { Urls } from '../../utils/constants';

type FormPayload = {
  oldPassword: string;
  newPassword: string;
};

const inputs = [
  {
    name: 'oldPassword',
    label: 'Password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Password is invalid',
    },
    required: true,
    autoComplete: 'current-oldPassword',
  },
  {
    name: 'newPassword',
    label: 'New password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'New password is invalid',
    },
    required: true,
    autoComplete: 'current-newPassword',
  },
];

export default function PasswordEdit() {
  const errorHandler = useErrorHandler();
  const [updatePassword] = useUpdateUserPasswordMutation();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updatePassword(data);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <section className="profile">
      <h2 className="profile__title">Profile edit</h2>

      <form className="profile__form form_save" onSubmit={onSubmit}>
        <ul className="list form">
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
          Обновить
        </Button>
      </form>

      <div className="back">
        <Link className="back__button" to={Urls.PROFILE} />
      </div>
    </section>
  );
}
