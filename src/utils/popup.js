import { POPUP,  POPUP_ACTIVE} from "./config";

class Popup {
  constructor(buttons) {
    this._buttons = buttons;
    this._popup = document.querySelector(POPUP);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._openPopup = POPUP_ACTIVE;
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

  initPopups() {
    this._buttons.forEach(selector => {
      const button = document.querySelector(selector);
      if (button) {
        button.addEventListener('click', () => this.open());
      }
    });
  }
}

export default Popup;