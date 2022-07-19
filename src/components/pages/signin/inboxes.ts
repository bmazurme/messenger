import { Inbox } from '../../ui/inbox';

export const inboxes = [
  new Inbox({
    boxClass: 'inbox',
    name: 'login',
    inputStyle: 'inbox__input inbox__input_login',
    inputType: 'text',
    inputAutocomplete: 'on',
    inputId: 'login-input',
    inputValidation: 'login',
    spanStyle: 'inbox__bar login-input-bar',
    labelClass: 'inbox__label login-input-label',
    labelText: 'Логин',
    errorStyle: 'inbox__input_error login-input-error',
  }).render(),
  new Inbox({
    boxClass: 'inbox',
    name: 'password ',
    inputStyle: 'inbox__input inbox__input_password',
    inputType: 'password',
    inputAutocomplete: 'on',
    inputId: 'password-input',
    inputValidation: 'password',
    spanStyle: 'inbox__bar password-input-bar',
    labelClass: 'inbox__label password-input-label',
    labelText: 'Пароль',
    errorStyle: 'inbox__input_error password-input-error',
  }).render(),
].join('');
