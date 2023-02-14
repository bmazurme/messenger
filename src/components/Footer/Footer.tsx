import React, { FormEvent } from 'react';

export default function Footer({ message, onChange, onSubmit }
  : {
    message: string,
    onChange: (evt: FormEvent<HTMLInputElement>) => void,
    onSubmit: (evt: FormEvent<HTMLFormElement>) => void,
  }) {
  const onUpload = () => console.log('click');

  return (
    <form className="footer" onSubmit={onSubmit}>
      <button
        type="button"
        className="footer__button"
        aria-label="Upload"
        onClick={onUpload}
      />
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
  );
}
