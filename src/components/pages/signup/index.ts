import { auth } from '../../../api/AuthAPI';

import Block from '../../../core/block';
import { tmp } from './index.tpl';

import { Button } from '../../ui/button';
import { ISign } from '../signin/ISign';
import { inboxes } from './inboxes';

import handleValidation from '../../../handles/handleValidation';

import { Urls } from '../../../utils/constants';
import { router } from '../../../index';
import { checkValid, toggleStyle } from '../../../utils/validator';

export class Signup extends Block<ISign> {
  constructor() {
    super('main', {
      inboxes,
      submitButton: new Button({
        class: 'button button_signup button_submit',
        type: 'submit',
        text: 'Зарегистрироваться',
        events: {},
      }),
      handlers: [
        handleValidation,
      ],
      events: {
        submit: (e: Event) => this._handleSubmitSignUp(e)
      }
    });
  }

  private async _handleSubmitSignUp(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    const form = evt.target as HTMLFormElement;
    const data: Record<string, string|boolean> = {};
    let isValidForm: boolean = true;

    Array.from(form.querySelectorAll('.input')).forEach((input: HTMLInputElement) => {
      const isValid = checkValid(input);
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
      await auth.signUp({data});
      router.go(Urls.SIGN.IN);
    }
  }

  render() {
    const { inboxes, submitButton } = this.props;
    return tmp({
      inboxes,
      submitButton: submitButton.render()
    });
  }
}
