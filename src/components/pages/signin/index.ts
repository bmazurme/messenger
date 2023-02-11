import { auth } from '../../../api';

import Block from '../../../core/block';
import { tmp } from './index.tpl';

import { inboxes } from './inboxes';
import { Button } from '../../ui/button';
import { ISign } from './ISign';

import { Urls } from '../../../utils/constants';
import { router } from '../../../index';

import { checkValid, toggleStyle } from '../../../utils/validator';

import handleValidation from '../../../handles/handleValidation';

export class Signin extends Block<ISign> {
  constructor() {
    super('main', {
      inboxes,
      submitButton: new Button({
        class: 'button button_signin button_submit',
        type: 'submit',
        text: 'Авторизоваться',
        events: {}
      }),
      handlers: [
        handleValidation,
      ],
      events: {
        submit: (e: Event) => this._handleSubmitSignIn(e)
      }
    });
  }

  private async _handleSubmitSignIn(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    const form = evt.target as HTMLFormElement;
    const data: Record<string, string|boolean> = {};
    let isValidForm: boolean = true;

    Array.from(form.querySelectorAll('.input')).forEach((input: HTMLInputElement) => {
      const isValid = checkValid(input)
      const name = input.getAttribute('name');
      if (name) {
        data[name] = input.value;
        data[`${name}-isValid`] = isValid;
      }
      if (!isValid) {
        isValidForm = false;
      }
      toggleStyle(isValid, input);
    });

    if (isValidForm) {
      const { login, password } = data;
      await auth.signIn({data: {login, password}});
      router.go(Urls.CHATS.INDEX);
    }
  }

  render() {
    const { inboxes, submitButton } = this.props;
    return tmp({
      inboxes,
      submitButton: submitButton.render(),
    });
  }
}
