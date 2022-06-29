import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {ISigninOptions} from './options';
import Button from '../../../components/blocks/button';
import Inbox from '../../../components/blocks/inbox';

const _props = {
  inbox: [
    new Inbox({
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
  ].join(''),
  button: [
    new Button({
      type: 'submit',
      class: 'button_signin button_submit',
      text: 'Авторизоваться'
    }).render(),
  ].join(''),
}

export default class Signin extends Block {
  constructor(props: ISigninOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}

export const signinContext = new Signin(_props);
