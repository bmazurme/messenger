import Block from '../../../../core/block';
import handlerPopupClick from '../../../../handles/handlerPopupClick';
import handleCreateChatSubmit from '../../../../handles/handleCreateChatSubmit';
import handleOpenChat from '../../../../handles/handleOpenChat';
import handleValidation from '../../../../handles/handleValidation';
import { ChatWindow } from '../../../../components/blocks/chatWindow/chatWindow';
import { tmp } from './chats.tpl';
import { chats } from '../../../../api/ChatsAPI';
import { Popup } from '../../../ui/popup/index';
import { CreateChatForm } from '../../forms/createChatForm';

type ChatsProps = {
  chats: {};
  popup: Popup;
  handlers: Array<Function>;
  events: any;
};

export class Chats extends Block<ChatsProps> {
  constructor() {
    super('main', 
    {
      chats: {},
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

  handleClick(e: Event) {
    const el: HTMLElement|null = e.target?.closest('.card');

    if (el) {
      const chatWindow = new ChatWindow({
        chatName: el.querySelector('.card__title')?.textContent,
        chatId: Number(el.dataset.chatId)
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
      .then((result: {[key:string]: object|any}) => {
        this.setProps({
          ...this.props,
          chats: JSON.parse(result.response)
         })
      })
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
