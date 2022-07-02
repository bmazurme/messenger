import { POPUP, POPUP_ACTIVE} from './config';
import { users } from '../api/UsersAPI';

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

  submit(evt: Event) {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData: FormData = new FormData(form);
    users
      .changeAvatar({
        headers: {
          'accept': 'application/json',
          'content-type': 'multipart/form-data',
        },
        data: formData
      })
      .then(() => console.log('Ok'))
      .catch((error) => console.log(error));
  }
  handleCreateChatSubmit(evt: Event) {
    evt.preventDefault();
    alert(1);
  }

  initPopups(element: HTMLElement) {
    this._popup = element.querySelector(POPUP) as HTMLElement;
    this._buttons.forEach((selector: string) => {
      const button = element.querySelector(selector);
      const buttonAva = element.querySelector('.form_avatar');
      const buttonEdit = element.querySelector('.edit_chat');



      if (buttonAva) {
        buttonAva.addEventListener('submit', (evt) => this.submit(evt));
      }

      if (button) {
        button.addEventListener('click', () => this.open());
      }
      if (buttonEdit) {
        buttonEdit.addEventListener('click', () => this.open());
      }
    });
  }
}

export default Popup;
