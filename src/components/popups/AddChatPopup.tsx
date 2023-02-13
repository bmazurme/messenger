/* eslint-disable max-len */
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import { IAddChatProps } from '../../interfaces';
import { Button, Input } from '../form-components';

type FormPayload = {
  title: string;
};

const inputs = [
  {
    name: 'title',
    placeholder: 'Title',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Title is invalid',
    },
    required: true,
    autoComplete: 'current-title',
  },
];

export default function AddChatPopup(props: IAddChatProps) {
  const {
    isOpen,
    onClose,
    isLoading,
    onAddChat,
  } = props;

  const errorHandler = useErrorHandler();
  const buttonText = isLoading ? 'Loading...' : 'Create';
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      title: '',
    },
  });

  const handleCloseClick = (evt: React.MouseEvent<HTMLElement>) => evt.currentTarget === evt.target && onClose();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await onAddChat(data);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <div
      onClick={handleCloseClick}
      className={`popup popup_type_edit ${isOpen && 'popup_active'}`}
      aria-hidden="true"
    >
      <div className="popup__container">
        <button
          aria-label="Close"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <form className="form form_type_edit" onSubmit={onSubmit}>
          <h2 className="form__title">New chat</h2>
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
                <Input
                  {...field}
                  {...input}
                  className="input inbox__input"
                  black
                  errorText={fieldState.error?.message}
                />
              )}
            />
          ))}
          <Button className="button button_submit" variant="filled">
            <span>{buttonText}</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
