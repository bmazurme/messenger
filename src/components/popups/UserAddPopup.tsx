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
import Avatar from '../Avatar';

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
  const {
    chat,
    isOpen,
    onClose,
    isLoading,
    // onAction,
  } = props;
  const [result, setResult] = useState<User[]>([]);
  const [addUser] = useAddUserToChatChatMutation();
  const [removeUser] = useDeleteUserFromChatMutation();
  const [searchUser] = useSearchUserMutation();
  const { data: chatUsers = [] } = useGetChatUsersQuery({ id: chat.id });
  const errorHandler = useErrorHandler();
  // const buttonText = isLoading ? 'Добавление...' : 'Добавить';
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
      const { data: users } = await searchUser(data) as { data: User[]};
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
          <h2 className="form__title">
            {`Chat - ${chat.title}[${chat.id}]`}
          </h2>
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

          <h2 className="form__title form__title_users">
            Users of the chat
          </h2>
          <ul className="users">
            {chatUsers.concat(result).reduce((o, i) => {
              if (!o.find((v: User & { id: number}) => v.id === i.id)) {
                o.push(i);
              }
              return o;
            }, []).map((user: User & { id: number}) => (
              <div className="item" key={user.login}>
                <div className="item__avatar">
                  <Avatar avatar={user.avatar} />
                </div>
                <span className="item__name">
                  {user.login}
                </span>
                <button
                  type="button"
                  aria-label="Menu"
                  className={`button header__link${chatUsers.some((u) => u.id === user.id)
                    ? ' header__delete remove_user'
                    : ' add_user'}`}
                  onClick={chatUsers.some((u) => u.id === user.id)
                    ? () => onRemoveUser(user.id)
                    : () => onAddUserToChat(user.id)}
                />
              </div>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}
