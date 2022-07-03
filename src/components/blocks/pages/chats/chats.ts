import Block from '../../../../core/block';
import { tmp } from './chats.tpl';
import { chats } from '../../../../api/ChatsAPI';
import { Popup } from '../../../ui/popup/index';
import { CreateChatForm } from '../../forms/createChatForm';
import handlerPopupClick from '../../../../handles/handlerPopupClick';
import handleCreateChatSubmit from '../../../../handles/handleCreateChatSubmit';
import handleOpenChat from '../../../../handles/handleOpenChat';
import handleValidation from '../../../../handles/handleValidation';
import { ChatWindow } from '../../../../components/blocks/chatWindow/chatWindow';

export class Chats extends Block {
  constructor() {
    super('main', 
    {
      popup: new Popup( new CreateChatForm(), '' ),
      handlers: [
        handlerPopupClick,
        handleCreateChatSubmit,
        handleOpenChat,
        handleValidation
      ],
      events: {
        click: (e: Event) => this.handleClick(e)
      }
    });
  }

  handleClick(e: any) {
    const el = e.target.closest('.card');
    if (el) {
      const chatWindow = new ChatWindow({
        chatName: el.querySelector('.card__title').textContent,
        chatId: el.dataset.chatId
      });
      const chatsPage = document.querySelector('.chat')!;
      const chooseChatWindow = document.querySelector('.board')!;
      chatsPage.removeChild(chooseChatWindow);
      chatsPage.appendChild(chatWindow.getContent()!);
    }
  }

  componentDidMount() {
    // @ts-ignore
    chats
      .getChats()
      .then(result => this.setProps({
        ...this.props,
        chats: JSON.parse(result.response)
       }))
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { chats, popup } = this.props;
    return tmp({
      popup: popup.render(),
      chats
    })
  }
}