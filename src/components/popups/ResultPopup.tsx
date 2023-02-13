/* eslint-disable max-len */
import React from 'react';

import { Button } from '../form-components';

export default function ResultPopup({ isLoading, isOpen, onClose }
  : { isLoading: boolean, isOpen: boolean, onClose: () => void }) {
  const buttonText = isLoading ? 'Загрузка...' : 'Сохранить';
  const handleCloseClick = (evt: React.MouseEvent<HTMLElement>) => evt.currentTarget === evt.target && onClose();

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
          onClick={onClose}
        />

        <form className="form form_type_edit">
          <h2 className="form__title">Result</h2>
          <Button className="button button_submit" variant="filled">
            <span>{buttonText}</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
