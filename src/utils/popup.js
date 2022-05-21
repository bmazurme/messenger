class Popup {
  constructor() {
    this._popup = document.querySelector('.popup');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._openPopup = 'popup_active';
  }

  _handleButtonClose = (evt) => {
    if (evt.target.classList.contains(this._openPopup)) {
      this.close();
    }
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleButtonClose);
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add(this._openPopup);
  }

  close() {
    this._popup.classList.remove(this._openPopup);
    this._popup.removeEventListener('mousedown', this._handleButtonClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
const popup = new Popup('.popup');

function openPopup() {
  popup.open();
}
const button = document.querySelector('.profile__avatar');
button.addEventListener('click', openPopup);