import React, {
  useCallback,
  useRef,
  type ChangeEvent,
} from 'react';
import classnames from 'classnames';

import Avatar from '../Avatar';

type AvatarChangerProps = {
  avatar?: string;
  chat?: Chat;
  onChange: (formData: FormData) => void;
  setNewSrc: (src: string) => void;
};

export default function AvatarChanger({
  onChange, setNewSrc, chat, avatar,
}: AvatarChangerProps) {
  const elementInputFile = useRef<HTMLInputElement>(null);
  const validateImgFile = (file: File | undefined) => !!file?.type.match('image.*');

  const onInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const { files, name } = evt.target;

    if (!files?.[0]) {
      return;
    }

    if (!validateImgFile(files[0])) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setNewSrc(e.target?.result as string);
    };
    reader.readAsDataURL(files[0]);

    const form = new FormData();
    form.append('avatar', files[0]);

    if (name !== '') {
      form.append('chatId', name);
    }
    onChange(form);
  }, []);

  return (
    <label className={classnames('avatar__label')} htmlFor="avatar">
      <Avatar avatar={chat?.avatar ?? avatar!} />
      <input
        name={chat?.id ? chat.id.toString() : ''}
        ref={elementInputFile}
        type="file"
        onChange={onInputChange}
        id="avatar"
        className={classnames('visually-hidden')}
      />
    </label>
  );
}
