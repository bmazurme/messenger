import Signup from '../../components/pages/signup';
import Button from '../../components/blocks/button';
import Inbox from '../../components/blocks/inbox';

export const signupContext = new Signup({
  inbox: [
    new Inbox({
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
      inputStyle: 'inbox__input inbox__input_phone',
      inputType: 'text',
      inputAutocomplete: 'off',
      inputId: 'phone-input',
      inputValidation: 'name',
      spanStyle: 'inbox__bar phone-input-bar',
      labelClass: 'inbox__label phone-input-label',
      labelText: 'Телефон',
      errorStyle: 'inbox__input_error phone-input-error',
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
    new Inbox({
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

  button: [
    new Button({
      type: 'submit',
      class: 'button_signup button_submit',
      text: 'Зарегистрироваться'
    }).render(),
  ].join(''),
});
