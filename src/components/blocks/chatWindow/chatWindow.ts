import { auth } from '../../../api/AuthAPI';
import { users } from '../../../api/UsersAPI';
import { chats } from '../../../api/ChatsAPI';
import WebSocketService from '../../../api/WebSocket';

import Block from '../../../core/block';
import { tmp } from './chatWindow.tpl';

import { store } from '../../../core/store';
import { ActionTypes } from '../../../core/types';

import { AddUserForm } from '../../ui/forms/addUserForm';
import { BoardForm } from '../../ui/forms/boardForm';

import { router } from '../../../index';

import { IChatWindow } from './IChatWindow';
import { IUser } from './IUser';

import { MessageList } from '../messageList';
import { Header } from '../header';
import handleValidation from '../../../handles/handleValidation';

import { CHATS } from '../../../utils/constants';

export class ChatWindow extends Block<IChatWindow> {
  constructor(props: IChatWindow) {
    super('div', {
      ...props,
      className: 'board',
      header: new Header({chatName: props.chatName}),
      addPopup: new AddUserForm(),
      boardForm: new BoardForm(),
      events: {
        submit: (e: Event) => this._handleSubmit(e), 
        click: (e: Event) => this._handleClick(e)
      },
      handlers: [handleValidation]
    });
  }
  
  private _handleSubmit(e: Event) {
    e.preventDefault();
    const chatData: {users: Array<number>, chatId: number} = {
      users: [],
      chatId: Number(this.props.chatId)
    };
    const form: HTMLFormElement|null = e.target as HTMLFormElement;
    const button: HTMLFormElement|null = form.querySelector('.button') as HTMLFormElement;

    if (form) {
      if (form.name === 'message') {
        this.send(form);
      } else if (button?.textContent === 'Добавить') {
        this.searchUser(chatData).then(() => this.addUser(chatData));
      } else if (button?.textContent === 'Удалить') {
        this.searchUser(chatData).then(() => this.removeUser(chatData));
      }
      form.reset();
    }
  }

  private _handleClick(e: Event) {
    const element: HTMLElement|null = e.target as HTMLElement;
    const bt1 = document.querySelector('.add_user') as HTMLElement;
    const bt2 = document.querySelector('.remove_user') as HTMLElement;

    if (element) {
      if (element === document.querySelector('.toggle_button')) {
        if (bt1.classList.contains('header_hidden')) {
          bt1?.classList.remove('header_hidden');
          bt2?.classList.remove('header_hidden');
        } else {
          bt1?.classList.add('header_hidden');
          bt2?.classList.add('header_hidden');
        }
      }

      if (element === document.querySelector('.add_user')) {
        this.openPopup('.add-remove-user-popup', 'Добавить');
      }
  
      if (element.classList.contains('popup_active')) {
        this.closePopup();
        bt1?.classList.add('header_hidden');
        bt2?.classList.add('header_hidden');
      }
  
      if (element === document.querySelector('.remove_user')) {
        this.openPopup('.add-remove-user-popup', 'Удалить');
      } 
    }
  }

  openPopup(selector: string, label: string) {
    const popup: HTMLElement|null = document.querySelector(selector) as HTMLElement;
    const button: HTMLElement|null = popup?.querySelector('.button') as HTMLElement;

    if (button) {
      button.textContent = label;
    }
    popup.classList.add('popup_active');
  }

  closePopup() {
    const popup: HTMLElement|null = document.querySelector('.popup_active') as HTMLElement;
    popup.classList.remove('popup_active');
  }

  async componentDidMount() {
    await this.getChatToken();
    await this.getUserInfo();
    const { userId, chatId, chatToken } = this.props;
    this._connectToChat({userId, chatId, chatToken});
    store.subscribe(ActionTypes.GET_CHAT_MESSAGES, this.setMessageList.bind(this));
    store.dispatchAction(ActionTypes.GET_CHAT_TOKEN, chatToken);
  }

  setMessageList() {
    this.setProps({
      ...this.props,
      messageList: store.get('messageList')
    });
  }

  async getChatToken() {
    const result: any = await chats.getChatToken(this.props.chatId.toString());
    const token: any = result.response;
    this.setProps({...this.props, chatToken: JSON.parse(token).token});
  }

  async getUserInfo() {
    const result: any = await auth.getUser();
    const userInfo = JSON.parse(result.response);
    this.setProps({...this.props, userId: userInfo.id});
  }

  renderMessageList() {
    return new MessageList({...this.props}).render();
  }

  async addUser(data: {users: Array<Object>}) {
    if (data.users.length === 0) {
      alert('Пользователь не найден');
    }
    await chats.addUsers({ data });
    router.go(CHATS);
  }

  async removeUser(data: {users: Array<number>, chatId: number}) {
    if (data.users.length === 0) {
      alert('Пользователь не найден');
    }
    await chats.deleteUsers({data});
    router.go(CHATS);
  }

  async searchUser(data: {users: Array<number>, chatId: number}) {
    const userLoginInput: HTMLInputElement = document.querySelector('.add-remove-user')!;
    const userLogin: string = userLoginInput.value;
    const searchByLoginData = {
      login: userLogin
    };
    const result: any = await users.searchByLogin({data: searchByLoginData});
    const userDate: Array<IUser> = JSON.parse(result.response);
    const user: IUser = userDate[0];

    if (user) {
      return data.users.push(user.id);
    }
  }

  private send(form: HTMLElement) {
    const data: Record<string, string> = {};

    Array.from(form.querySelectorAll('.input')).forEach((input: HTMLInputElement) => {
      const name = input.getAttribute('name');
      if (name) {
        data[name] = input.value;
      }
    });
    const { message } = data;
    this._sendChatMessage(message);
  }

  private _connectToChat(props: { userId: number, chatId: number, chatToken: string }) {
    const { userId, chatId, chatToken } = props;
    (new WebSocketService(userId, chatId, chatToken));
  }
  
  private _sendChatMessage(message: string) {
    if (message === '') {
      return;
    }
    (new WebSocketService()).send({
      content: message,
      type: 'message',
    });
  }

  render() {
    const { header, chatName, addPopup, boardForm } = this.props;
    return tmp({
      chatName,
      header: header.render(),
      boardForm: boardForm.render(),
      addPopup: addPopup.render(),
      messageList: this.renderMessageList()
    })
  }
}
