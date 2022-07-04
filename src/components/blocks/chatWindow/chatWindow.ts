import 'regenerator-runtime/runtime';
import Block from '../../../core/block';
import { tmp } from './chatWindow.tpl';
import { chats } from '../../../api/ChatsAPI';
import { auth } from '../../../api/AuthAPI';
import { users } from '../../../api/UsersAPI';
import { AddUserForm } from '../forms/addUserForm';
import { router } from '../../../index';
import { CHATS } from '../../../utils/constants';
import WebSocketService from '../../../api/WebSocket';
import handleValidation from '../../../handles/handleValidation';

export type ChatWindowProps = {
  className: string|null;
  addPopup: Block;
  // eslint-disable-next-line no-unused-vars
  events: {[key: string]: (e: Event) => void };
  handlers: Array<Function>;
  chatId: number;
  chatName: string;
  chatToken: string;
  userId: number;
};
type User = {
  id: number;
};

export class ChatWindow extends Block<ChatWindowProps> {
  constructor(props: ChatWindowProps) {
    super('div', {
      ...props,
      className: 'board',
      addPopup: new AddUserForm(),
      events: {
        submit: (e: Event) => this._handleSubmit(e), 
        click: (e: Event) => this.handleClick(e)
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

    const el: HTMLFormElement|null = e.target as HTMLFormElement;

    if (el) {
      if (el.name === 'message') {
        this.send(el);
      } else if (el.querySelector('.button')?.textContent === 'Добавить') {
        this.searchUser(chatData)
            .then(() => this.addUser(chatData));
      } else if (el.querySelector('.button')?.textContent === 'Удалить') {
        this.searchUser(chatData)
            .then(() => this.removeUser(chatData));
      }
      el.reset();
    }
  }

  openPopup(selector: string, label: string) {
    const popup = document.querySelector(selector) as HTMLElement;
    const button: HTMLElement|null = popup.querySelector('.button');

    if (button) {
      button.textContent=label;
    }
    popup.classList.add('popup_active');
  }

  closePopup() {
    const popup = document.querySelector('.popup_active') as HTMLElement;
    popup.classList.remove('popup_active');
  }

  handleClick(e: Event) {
    const el: HTMLElement|null = e.target as HTMLElement;
    const bt1 = document.querySelector('.add_user') as HTMLElement;
    const bt2 = document.querySelector('.remove_user') as HTMLElement;
    if (el) {
      if (el === document.querySelector('.toggle_button')) {
        if (bt1.classList.contains('header_hidden')) {
          bt1?.classList.remove('header_hidden');
          bt2?.classList.remove('header_hidden');
        } else {
          bt1?.classList.add('header_hidden');
          bt2?.classList.add('header_hidden');
        }
      }

      if (el === document.querySelector('.add_user')) {
        this.openPopup('.add-remove-user-popup', 'Добавить');
      }
  
      if (el.classList.contains('popup_active')) {
        this.closePopup();
        bt1?.classList.add('header_hidden');
        bt2.classList.add('header_hidden');
      }
  
      if (el === document.querySelector('.remove_user')) {
        this.openPopup('.add-remove-user-popup', 'Удалить');
      } 
    }
  }

  async componentDidMount() {
    await this.getChatToken();
    await this.getUserInfo();
    const {userId, chatId, chatToken } = this.props;
    this._connectToChat({userId, chatId, chatToken } );
  }

  async getChatToken() {
    return chats.getChatToken(this.props.chatId.toString())
      // @ts-ignore
      .then((result: {[key:string]: object|any}) => {
        this.setProps({
          ...this.props, 
          chatToken: JSON.parse(result.response).token
        })
      })
      .catch((error) => console.log(error));
  }

  async getUserInfo() {
    return auth
      .getUser()
      // @ts-ignore
      .then((result: {[key:string]: object|any}) => {
        this.setProps({
          ...this.props,
          userId: JSON.parse(result.response).id
        })
      })
      .catch((error) => console.log(error));
  }

  renderChatHistory() {
    return 'this is going to be chat history';
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

  searchUser(data: {users: Array<number>, chatId: number}) {
    const userLoginInput: HTMLInputElement = document.querySelector('.add-remove-user')!;
    const userLogin = userLoginInput.value;

    const searchByLoginData = {
      login: userLogin
    };
    return users
      .searchByLogin({
        data: searchByLoginData
      })
      .then(result => {
        // @ts-ignore
        const response: Array<User> = JSON.parse(result.response);
        const user: User = response[0]; 
        if (user) {
          data.users.push(user.id);
        }
      })
      .catch((error) => console.log(error));
  }

  send(form: HTMLElement) {
    const data: {[key: string]: string} = {};
    Array.from(form.querySelectorAll('.input')).forEach((input: HTMLInputElement) => {
      const name = input.getAttribute('name');
      if (name) {
        data[name] = input.value;
      }
    });
    const { message } = data;
    this._sendChatMessage(message);
  }

  private _connectToChat(props: {userId: number, chatId: number, chatToken: string}) {
    const {userId, chatId, chatToken} = props;
    new WebSocketService(userId, chatId, chatToken);
  }
  
  private _sendChatMessage(message: string) {
    new WebSocketService().send({
      content: message,
      type: 'message',
    });
  }

  render() {
    const {
      chatName,
      addPopup,
    } = this.props;
    return tmp({
      chatName,
      addPopup: addPopup.render(),
      chatHistory: this.renderChatHistory()
    })
  }
}
