import Block from '../../../../core/block';
import handlerPopupClick from '../../../../handles/handlerPopupClick';
import handleCreateChatSubmit from '../../../../handles/handleCreateChatSubmit';
import handleOpenChat from '../../../../handles/handleOpenChat';
import handleValidation from '../../../../handles/handleValidation';
import { ChatWindow } from '../../../../components/blocks/chatWindow/chatWindow';
import { tmp } from './chats.tpl';
import { chats } from '../../../../api/ChatsAPI';
import { auth } from '../../../../api/AuthAPI';
import { Popup } from '../../../ui/popup/index';
import { CreateChatForm } from '../../../ui/forms/createChatForm';
import { IChats } from './IChats';
import { Button } from '../../../../components/ui/button';
import { Card } from '../../../ui/card';
import { ICard } from '../../../../components/ui/card/ICard';
import protectedRoute from '../../../../utils/protected';
import { Form } from '../../../../components/ui/forms/form';
import { BoardForm } from '../../../ui/forms/boardForm';
import { Header } from '../../header';

export class Chats extends Block<IChats> {
  constructor() {
    super('main', 
    {
      cards: [], 
      popup: new Popup(new CreateChatForm() as Form, '' ),
      submitButton: new Button({
        class: 'button button_create-chat',
        type: 'button',
        text: 'Создать чат',
      }),
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
    const target: HTMLElement|null = e.target as HTMLElement;
//button button_create-chat
    const element: HTMLElement|null =target?.closest('.card');
    const el: HTMLElement|null = element?.querySelector('.card__title') as HTMLElement;
    
    
    if (el) {
      const textContent: string = el.textContent!;
      const chatWindow = new ChatWindow({
        chatName: textContent,
        chatId: Number(el.dataset.chatId),
        className: '',
        addPopup: new Popup(new Form(), ''),
        boardForm: new BoardForm(),
        events: {},
        header: new Header({chatName: textContent}),
        handlers: [],
        chatToken: '',
        userId: 0
      });
      const chatsPage = document.querySelector('.chat')!;
      const chooseChatWindow = document.querySelector('.board')!;
      chatsPage.removeChild(chooseChatWindow);
      chatsPage.appendChild(chatWindow.getContent()!);
    }
  }

  async componentDidMount() {
    const userDTO: any = await auth.getUser();
    const userInfo = JSON.parse(userDTO.response);
    protectedRoute(userInfo.id);
    const chatsDataDTO: any = await chats.getChats();
    const chatsData: Array<ICard> = JSON.parse(chatsDataDTO.response);

    this.setProps({
      ...this.props,
      cards: chatsData.map((card: ICard) => {
        return (new Card({
          ...card,
          fromYou: card?.last_message?.user?.email === userInfo?.email
        })).render();
      })        
    });
  }

  render() {
    const { cards, popup, submitButton } = this.props;
    return tmp({
      cards: cards.join(''),
      submitButton: submitButton.render(),
      popup: popup.render(),
    })
  }
}
