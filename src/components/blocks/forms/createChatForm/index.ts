import Block from '../../../../core/block';
import { Button } from '../../../ui/button';
import {tmp} from './index.tpl';

export class CreateChatForm extends Block {
  constructor() {
    super('div', {
      submitButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Создать'
      }),
    });
  }
  render() {
    const {submitButton} = this.props;
    return tmp({
      submitButton: submitButton.render(),
    })
  }
}
