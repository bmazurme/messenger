import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import AvatarChanger from '../AvatarChanger';
import UserAddPopup from '../popups/UserAddPopup';

import { useUpdateChatAvatarMutation, store } from '../../store';
import makeDataSelector from '../../store/makeDataSelector';

const chatSelector = makeDataSelector('chat');

export type FormPayload = {
  avatar: string | null;
  chatId: string;
};

export default function Header() {
  const handleError = useErrorHandler();
  const [newSrc, setNewSrc] = useState('');
  const [popupAdd, setPopupAdd] = useState(false);
  const { data: chat } = useSelector(chatSelector);
  const [updateChatAvatar, { isError }] = useUpdateChatAvatarMutation();

  if (isError) {
    handleError(isError);
  }

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      avatar: '',
      chatId: '',
    },
  });

  const onSubmit = (data: FormPayload) => {
    updateChatAvatar({ ...data, chatId: chat?.id })
      .then((res: unknown) => {
        store.dispatch({
          type: 'chat/setChat',
          payload: (res as { data: Chat }).data,
        });
      }).catch((e) => console.log(e));
  };

  return (
    <>
      <form className="header" onSubmit={handleSubmit(onSubmit)}>
        <div className="header__image">
          <Controller
            control={control}
            name="avatar"
            render={({ field }) => (
              <>
                <AvatarChanger
                  chat={chat!}
                  onChange={field.onChange}
                  setNewSrc={setNewSrc}
                />
                <button
                  className="avatar__button"
                  type="submit"
                  disabled={newSrc === ''}
                >
                  .
                </button>
              </>
            )}
          />
        </div>
        <div className="header__text">{chat?.title}</div>
        <button
          type="button"
          aria-label="Menu"
          className="header__toggle"
          onClick={() => setPopupAdd(true)}
        />
      </form>
      <UserAddPopup
        chat={chat!}
        onClose={() => setPopupAdd(false)}
        isOpen={popupAdd}
        onAction={() => console.log(1)}
        isLoading={false}
      />
    </>
  );
}
