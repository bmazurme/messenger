import Block from '../../../../core/block';
import { Button } from '../../button';
import { tmp } from './index.tpl';
import { IForm } from '../form/IForm';

export class CreateChatForm extends Block<IForm> {
  constructor() {
    super('div', {
      submitButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Создать',
        events: {}
      }),
      events: {}
    });
  }
  render() {
    const { submitButton } = this.props;
    return tmp({
      submitButton: submitButton.render(),
    })
  }
}
