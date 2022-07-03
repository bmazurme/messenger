import Block from '../../../../core/block';
import { Button } from '../../../ui/button';
import { tmp } from './index.tpl';

export class AddUserForm extends Block {
  constructor() {
    super('div', {
      addButton: new Button({
        class: 'button popup__button add_button',
        type: 'submit',
        text: 'Добавить пользователя'
      }),
    });
  }

  render() {
    const {
      addButton,
    } = this.props;
    return tmp({
      addButton: addButton.render(),
    })
  }
}
