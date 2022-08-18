import { chats } from '../../../api/ChatsAPI';
import { auth } from '../../../api/AuthAPI';

import Block from '../../../core/block';
import { tmp } from './chats.tpl';

import { ChatWindow } from '../../blocks/chatWindow/chatWindow';
import { Popup } from '../../ui/popup/index';
import { BoardForm } from '../../ui/forms/boardForm';
import { CreateChatForm } from '../../ui/forms/createChatForm';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { ICard } from '../../ui/card/ICard';
import { Form } from '../../ui/forms/form';
import { Header } from '../../blocks/header';

import { IChats } from './IChats';

import protectedRoute from '../../../utils/protected';
import handlerPopupClick from '../../../handles/handlerPopupClick';
import handleCreateChatSubmit from '../../../handles/handleCreateChatSubmit';
import handleOpenChat from '../../../handles/handleOpenChat';
import handleValidation from '../../../handles/handleValidation';

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
        events: {}
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
    const card: HTMLElement|null =target?.closest('.card');
    const title: HTMLElement|null = card?.querySelector('.card__title') as HTMLElement;
    
    if (title) {
      const textContent: string = title.textContent!;
      const chatWindow = new ChatWindow({
        chatName: textContent,
        chatId: Number(title.dataset.chatId),
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
    let chatsData: Array<ICard> = [];
    
    try {
      chatsData = JSON.parse(chatsDataDTO.response);
    } catch (err) {
      console.log(err);
    }
    
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
