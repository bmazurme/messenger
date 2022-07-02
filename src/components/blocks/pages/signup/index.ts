import Block from '../../../../core/block';
import {Button} from '../../../ui/button';
import {tmp} from './index.tpl';
import { Inbox } from '../../../ui/inbox';
import handleValidation from '../../../../handles/handleValidation';
import handleSignupSubmit from '../../../../handles/handleSignupSubmit';

export class Signup extends Block {
constructor() {
  super('main', {
    inboxes: [
      new Inbox({
        name: 'email',
        inputStyle: 'inbox__input inbox__input_email',
        inputType: 'text',
        inputAutocomplete: 'off',
        inputId: 'email-input',
        inputValidation: 'email',
        spanStyle: 'inbox__bar email-input-bar',
        labelClass: 'inbox__label email-input-label',
        labelText: 'Почта',
        errorStyle: 'inbox__input_error email-input-error',
      }).render(),
      new Inbox({
        name: 'login',
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
        name: 'first_name',
        inputStyle: 'inbox__input inbox__input_first_name',
        inputType: 'text',
        inputAutocomplete: 'off',
        inputId: 'first_name-input',
        inputValidation: 'name',
        spanStyle: 'inbox__bar first_name-input-bar',
        labelClass: 'inbox__label first_name-input-label',
        labelText: 'Имя',
        errorStyle: 'inbox__input_error first_name-input-error',
      }).render(),
      new Inbox({
        name: 'second_name',
        inputStyle: 'inbox__input inbox__input_second_name',
        inputType: 'text',
        inputAutocomplete: 'off',
        inputId: 'second_name-input',
        inputValidation: 'name',
        spanStyle: 'inbox__bar second_name-input-bar',
        labelClass: 'inbox__label second_name-input-label',
        labelText: 'Фамилия',
        errorStyle: 'inbox__input_error second_name-input-error',
      }).render(),
      new Inbox({
        name: 'phone',
        inputStyle: 'inbox__input inbox__input_phone',
        inputType: 'text',
        inputAutocomplete: 'off',
        inputId: 'phone-input',
        inputValidation: 'phone',
        spanStyle: 'inbox__bar phone-input-bar',
        labelClass: 'inbox__label phone-input-label',
        labelText: 'Телефон',
        errorStyle: 'inbox__input_error phone-input-error',
      }).render(),
      new Inbox({
        name: 'password',
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
      new Inbox({
        name: 'password_confirm',
        inputStyle: 'inbox__input inbox__input_password_confirm',
        inputType: 'password',
        inputAutocomplete: 'new-password',
        inputId: 'password_confirm-input',
        inputValidation: 'password',
        spanStyle: 'inbox__bar password_confirm-input-bar',
        labelClass: 'inbox__label password_confirm-input-label',
        labelText: 'Пароль',
        errorStyle: 'inbox__input_error password_confirm-input-error',
      }).render(),
    ].join(''),
    submitButton: new Button({
      class: 'button button_signup button_submit',
      type: 'submit',
      text: 'Зарегистрироваться'
    }),
    handlers: [handleValidation, handleSignupSubmit]
  });
}

render() {
  const {inboxes, submitButton} = this.props;
  return tmp({
    inboxes,
    submitButton: submitButton.render()
  });
  }
}
