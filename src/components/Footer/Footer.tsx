import React, { FormEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import UploadButton from '../UploadButton';

export type FormPayload = {
  file: string | null;
};

export default function Footer({
  message, onChange, onSubmit, onSubmitFile,
}: {
    message: string,
    onChange: (evt: FormEvent<HTMLInputElement>) => void,
    onSubmit: (evt: FormEvent<HTMLFormElement>) => void,
    onSubmitFile: (evt: unknown) => void,
  }) {
  const [newSrc, setNewSrc] = useState('');
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      file: '',
    },
  });

  const uploadFile = (data: FormPayload) => {
    onSubmitFile(data);
    setNewSrc('');
  };

  return (
    <div className="footer">
      <form onSubmit={handleSubmit(uploadFile)} className="footer__button">
        <Controller
          control={control}
          name="file"
          render={({ field }) => (
            <>
              <UploadButton onChange={field.onChange} setNewSrc={setNewSrc} />
              <button
                className={`upload__button${newSrc === '' ? ' upload__button_disabled' : ''}`}
                type="submit"
                aria-label="Submit"
                disabled={newSrc === ''}
              />
            </>
          )}
        />
      </form>
      <form onSubmit={onSubmit} className="footer__form">
        <input
          className="footer__input"
          value={message}
          onChange={onChange}
        />
        <button
          type="submit"
          aria-label="Submit"
          className="footer__button footer__button_send"
        />
      </form>
    </div>
  );
}
