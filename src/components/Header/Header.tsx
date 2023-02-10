import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';
import AvatarChanger from '../AvatarChanger';

import { useUpdateChatAvatarMutation } from '../../store';

export type FormPayload = {
  avatar: string | null;
  chatId: number;
};

export default function Header({ chat, onTogglePopupMenu, setChat }
: { chat: Chat, onTogglePopupMenu: () => void, setChat: any }) {
  const handleError = useErrorHandler();
  const [newSrc, setNewSrc] = useState('');
  const [updateChatAvatar, { data: chatData, isError }] = useUpdateChatAvatarMutation();

  if (isError) {
    handleError(isError);
  }

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      avatar: chat.avatar,
      chatId: chat.id,
    },
  });

  const onSubmit = (data: FormPayload) => {
    updateChatAvatar(data);
    if (chatData?.avatar) {
      setChat({ ...chat, avatar: chatData?.avatar });
    }
    console.log(chat);
  };

  useEffect(() => {
    if (chatData?.avatar) {
      setChat({ ...chat, avatar: chatData?.avatar });
    }
  }, [chatData]);

  return (
    <form className="header" onSubmit={handleSubmit(onSubmit)}>
      <div className="header__image">
        <Controller
          control={control}
          name="avatar"
          render={({ field }) => (
            <>
              <AvatarChanger
                avatar={chat.avatar}
                onChange={field.onChange}
                newSrc={newSrc}
                setNewSrc={setNewSrc}
                chatId={chat.id}
              />
              {/* <input type="input" className="visually-hidden" value={chat.id} /> */}
              <button className="avatar__button" type="submit" disabled={newSrc === ''}>.</button>
            </>

          )}
        />
      </div>
      <div className="header__text">
        {chat?.title}
      </div>
      <button
        type="button"
        aria-label="Menu"
        className="header__toggle"
        onClick={onTogglePopupMenu}
      />
    </form>
  );
}
