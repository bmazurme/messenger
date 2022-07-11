import Block from '../../../../core/block';
import { Button } from '../../../ui/button';
import { tmp } from './index.tpl';
import { ISign } from '../signin/ISign';
import handleValidation from '../../../../handles/handleValidation';
import handleSignupSubmit from '../../../../handles/handleSignupSubmit';
import { inboxes } from './inboxes';

export class Signup extends Block<ISign> {
  constructor() {
    super('main', {
      inboxes,
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
