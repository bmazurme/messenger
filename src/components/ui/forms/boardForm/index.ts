import Block from '../../../../core/block';
import { Button } from '../../button';
import { tmp } from './index.tpl';
import { IBoardForm } from './IBoardForm';

export class BoardForm extends Block<IBoardForm> {
  constructor() {
    super('div', {
      attachButton: new Button({
        class: 'button footer__button footer__button_attach',
        type: 'button',
        text: '',
        events: {}
      }),
      submitButton: new Button({
        class: 'button footer__button footer__button_send',
        type: 'submit',
        text: '',
        events: {},
      }),
      events: {}
    });
  }

  render() {
    const {submitButton, attachButton} = this.props;
    return tmp({
      attachButton: attachButton.render(),
      submitButton: submitButton.render(),
    })
  }
}
