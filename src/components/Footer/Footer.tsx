import React from 'react';

export default function Footer({ message, onChange, onSubmit }: any) {
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
