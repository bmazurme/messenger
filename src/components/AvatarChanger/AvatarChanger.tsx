import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  type ChangeEvent,
} from 'react';
import classnames from 'classnames';
import Avatar from '../Avatar';

type AvatarChangerProps = {
  user: User;
  onChange: (formData: FormData) => void;
  newSrc: string;
  setNewSrc: any;
};

export default function AvatarChanger({ onChange, user, newSrc, setNewSrc }: AvatarChangerProps) {
  const elementInputFile = useRef<HTMLInputElement>(null);
  // const [newSrc, setNewSrc] = useState('');
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

    onChange(form);
  }, []);

  useEffect(() => {
    console.log(newSrc);
  }, [newSrc]);

  return (
    <label className={classnames('avatar__label')} htmlFor="avatar">
      <Avatar user={user} />
      <input
        ref={elementInputFile}
        type="file"
        onChange={onInputChange}
        id="avatar"
        className={classnames(
          'visually-hidden',
        )}
      />
    </label>
  );
}
