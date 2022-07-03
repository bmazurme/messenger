import Block from '../../../../core/block';
import { Button } from '../../../ui/button';
import {tmp} from './index.tpl';
//import handleEditAvatarSubmit from '../../../../handles/handleEditAvatarSubmit';

export class Form extends Block {
  constructor() {
    super('div', {
      submitButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Поменять',
        //handlers: [handleEditAvatarSubmit],
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
