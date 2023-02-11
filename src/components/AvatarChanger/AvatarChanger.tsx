import React, {
  useCallback,
  useRef,
  type ChangeEvent,
} from 'react';
import classnames from 'classnames';
import Avatar from '../Avatar';

type AvatarChangerProps = {
  avatar: string | null;
  onChange: (formData: FormData) => void;
  setNewSrc: any;
  chatId?: number | undefined;
};

export default function AvatarChanger({
  onChange, avatar, setNewSrc, chatId,
}: AvatarChangerProps) {
  const elementInputFile = useRef<HTMLInputElement>(null);
  const validateImgFile = (file: File | undefined) => !!file?.type.match('image.*');

  const onInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target;

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
    if (chatId) {
      form.append('chatId', chatId.toString());
    }

    onChange(form);
  }, []);

  return (
    <label className={classnames('avatar__label')} htmlFor="avatar">
      <Avatar avatar={avatar} />
      <input
        ref={elementInputFile}
        type="file"
        onChange={onInputChange}
        id="avatar"
        className={classnames('visually-hidden')}
      />
    </label>
  );
}
