import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import { Button, Input } from '../form-components';
import { InfoTooltip } from '../popups';

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
  const [notification, setNotification] = useState<{ type: string; message: string; } | null>(null);
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { data: res } = await updatePassword(data) as { data: string };
      setNotification({
        type: res === 'OK' ? 'success' : 'failed',
        message: 'Password has been updated!',
      });
      setTimeout(() => setNotification(null), 3000);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
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
        <Button className="button button_profile" variant="filled">
          Update
        </Button>
      </form>
      {!notification !== null ? (
        <InfoTooltip
          isOpen={notification !== null}
          onClose={() => setNotification(null)}
          isSuccess={notification?.type === 'success'}
          text={
            notification?.type === 'success'
              ? notification.message
              : 'Oops..! Something went wrong'
          }
        />
      ) : null}
      <div className="back">
        <Link className="back__button" to={Urls.PROFILE} />
      </div>
    </section>
  );
}
