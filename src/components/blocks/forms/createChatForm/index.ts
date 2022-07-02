import Block from '../../../../core/block';
import { Button } from '../../../ui/button';
import {tmp} from './index.tpl';
//import handleCreateChatSubmit from '../../../../handles/handleCreateChatSubmit';

export class CreateChatForm extends Block {
  constructor() {
    super('div', {
      submitButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Создать'
      }),
      //handlers: [ ...data.handlers
      //],
    });
  }
  // handleSubmit(e: Event) {
  //   e.preventDefault();
  //   alert(1);
  // }

  render() {
    const {submitButton} = this.props;
    return tmp({
      submitButton: submitButton.render(),
    })
  }
}

// function handleCreateChatSubmit(element: HTMLElement, className = '.form') {
//   const buttonCChat = element.querySelector('.create-chat_form');
//   if (buttonCChat) {
//     console.log(buttonCChat)
//     //buttonCChat.addEventListener('submit', (evt) => this.handleCreateChatSubmit(evt));
//   }
// }



