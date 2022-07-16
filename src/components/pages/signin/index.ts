import Block from '../../../core/block';
import { tmp } from './index.tpl';

import { inboxes } from './inboxes';
import { Button } from '../../ui/button';
import { ISign } from './ISign';

import handleValidation from '../../../handles/handleValidation';
import handleSigninSubmit from '../../../handles/handleSigninSubmit';

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
