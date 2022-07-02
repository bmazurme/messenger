import Block from '../../../../core/block';
import { Button } from '../../../ui/button';
import {tmp} from './index.tpl';

export class EditChatForm extends Block {
  constructor() {
    super('div', {
      addButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Добавить пользователя'
      }),
      removeButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Удалить пользователя'
      }),
      newButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Создать чат'
      }),
    });
  }

  render() {
    const {addButton, removeButton, newButton} = this.props;
    return tmp({
      addButton: addButton.render(),
      removeButton: removeButton.render(),
      newButton: newButton.render(),
    })
  }
}
