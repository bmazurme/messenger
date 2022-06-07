import Signin from '../../components/pages/signin';
import Button from '../../components/blocks/button';
import Inbox from '../../components/blocks/inbox';

export const signinContext = new Signin({
  inbox: [
    new Inbox({
      inputStyle: 'inbox__input inbox__input_login',
      inputType: 'text',
      inputAutocomplete: 'off',
      inputId: 'login-input',
      inputValidation: 'login',
      spanStyle: 'inbox__bar login-input-bar',
      labelClass: 'inbox__label login-input-label',
      labelText: 'Логин',
      errorStyle: 'inbox__input_error login-input-error',
    }).render(),
    new Inbox({
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
  ].join(''),
  button: [
    new Button({
      type: 'submit',
      class: 'button_signin button_submit',
      text: 'Авторизоваться'
    }).render(),
  ].join(''),
});
