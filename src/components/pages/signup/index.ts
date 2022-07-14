import Block from '../../../core/block';
import { tmp } from './index.tpl';

import { Button } from '../../ui/button';
import { ISign } from '../signin/ISign';
import { inboxes } from './inboxes';

import handleValidation from '../../../handles/handleValidation';
import handleSignupSubmit from '../../../handles/handleSignupSubmit';

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
