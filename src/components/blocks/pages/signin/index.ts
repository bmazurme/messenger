import Block from '../../../../core/block';
import {Button} from '../../../ui/button';
import {tmp} from './index.tpl';
import { Inbox } from '../../../ui/inbox';
import handleValidation from '../../../../handles/handleValidation';
import handleSigninSubmit from '../../../../handles/handleSigninSubmit';

export class Signin extends Block {
  constructor() {
    super('main', {
      inboxes: [
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
      submitButton: new Button({
        class: 'button button_signin button_submit',
        type: 'submit',
        text: 'Авторизоваться'
      }),
      handlers: [handleValidation, handleSigninSubmit]
    });
  }

  render() {
    const {inboxes, submitButton} = this.props;
    return tmp({
      inboxes,
      submitButton: submitButton.render(),
    });
  }
}
