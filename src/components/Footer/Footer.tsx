import React, { FormEvent, useState } from 'react';

export default function Footer() {
  const [message, setMessage] = useState('');
  const onChange = (evt: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    setMessage(evt.target.value);
  };
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    if (message && message !== '') {
      console.log(message);
      setMessage('');
    }
  };
  const onUpload = () => {
    console.log('click');
  };

  return (
    <form className="footer" onSubmit={onSubmit}>
      <button
        type="button"
        aria-label="Upload"
        className="footer__button"
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
