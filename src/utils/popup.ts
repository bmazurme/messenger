import { POPUP, POPUP_ACTIVE} from './config';

class Popup {
  private _openPopup: string;
  private _popup: HTMLElement;
  private _buttons: string[];
  
  constructor(buttons: string[]) {
    this._buttons = buttons;
    this._popup = document.querySelector(POPUP) as HTMLElement;

    this._handleEscClose = this._handleEscClose.bind(this);
    this._openPopup = POPUP_ACTIVE;
  }

  _handleButtonClose = (evt: Event) => {
    const target = evt.target as HTMLButtonElement
    if (target.classList.contains(this._openPopup)) {
      this.close();
    }
  };

  _handleEscClose(evt: KeyboardEvent) {
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

  initPopups(element: HTMLElement) {
    this._popup = element.querySelector(POPUP) as HTMLElement;
    this._buttons.forEach((selector: string) => {
      const button = element.querySelector(selector);

      if (button) {
        button.addEventListener('click', () => this.open());
      }
    });
  }
}

export default Popup;