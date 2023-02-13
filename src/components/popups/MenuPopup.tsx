/* eslint-disable max-len */
import React from 'react';

export default function MenuPopup({
  isOpen, onClose, onActionAdd, onActionRemove,
}: { isOpen: boolean, onClose: () => void, onActionAdd: () => void, onActionRemove: () => void }) {
  const handleCloseClick = (evt: React.MouseEvent<HTMLElement>) => evt.currentTarget === evt.target && onClose();
  return (
    <div
      onClick={handleCloseClick}
      className={`popup popup__menu popup_type_edit ${isOpen && 'popup_active'}`}
      aria-hidden="true"
    >
      <div className="popup__container">
        <div className="menu">
          <button type="button" className="menu-button" onClick={onActionAdd}>
            <span className="button header__link add_user" />
            <span className="button__label">Добавить пользователя</span>
          </button>
          <button type="button" className="menu-button" onClick={onActionRemove}>
            <span className="button header__delete remove_user" />
            <span className="button__label">Удалить пользователя</span>
          </button>
        </div>
      </div>
    </div>
  );
}
