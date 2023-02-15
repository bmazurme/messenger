/* eslint-disable max-len */
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';
import {
  useAddUserToChatChatMutation,
  useDeleteUserFromChatMutation,
  useSearchUserMutation,
  useGetChatUsersQuery,
} from '../../store';

import { Input } from '../form-components';
import Users from '../Users';

type FormPayload = {
  login: string;
};

const inputs = [
  {
    name: 'login',
    placeholder: 'Login',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'current-login',
  },
];

export default function UserAddPopup(props: {
  chat: Chat;
  isOpen: boolean,
  onClose: () => void,
  isLoading: boolean,
  onAction: () => void,
}) {
  const { chat, isOpen, onClose } = props;
  const [result, setResult] = useState<(User & { id: number })[]>([]);
  const [addUser] = useAddUserToChatChatMutation();
  const [removeUser] = useDeleteUserFromChatMutation();
  const [searchUser] = useSearchUserMutation();
  const { data: chatUsers = [] } = useGetChatUsersQuery({ id: chat.id }) as { data: unknown };
  const errorHandler = useErrorHandler();
  const { control, handleSubmit, reset } = useForm<FormPayload>({
    defaultValues: {
      login: '',
    },
  });

  const handleCloseClick = (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.currentTarget === evt.target) {
      reset();
      onClose();
      setResult([]);
    }
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const { data: users } = await searchUser(data) as { data: (User & { id: number })[]};
      setResult(users);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  const onAddUserToChat = (userId: number) => {
    addUser({ chatId: chat.id, users: [userId] });
  };

  const onRemoveUser = (userId: number) => {
    removeUser({ chatId: chat.id, users: [userId] });
  };

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
          onClick={handleCloseClick}
        />
        <form className="form form_type_edit" onSubmit={onSubmit}>
          <h2 className="form__title">{`Chat - ${chat.title}[${chat.id}]`}</h2>
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
                  type="search"
                  black
                  errorText={fieldState.error?.message}
                />
              )}
            />
          ))}
          <Users
            result={result}
            chatUsers={chatUsers as (User & { id: number })[]}
            onAddUserToChat={onAddUserToChat}
            onRemoveUser={onRemoveUser}
          />
        </form>
      </div>
    </div>
  );
}
