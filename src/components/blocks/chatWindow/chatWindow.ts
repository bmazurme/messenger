import 'regenerator-runtime/runtime';
import Block from '../../../core/block';
import { tmp } from './chatWindow.tpl';
import { chats } from '../../../api/ChatsAPI';
import { auth } from '../../../api/AuthAPI';
import { users } from '../../../api/UsersAPI';
import { AddUserForm } from '../forms/addUserForm';
import { router } from '../../../index';
import { connectToChat } from '../../../handles/handleSendMessageSubmit';
import WebSocketService from '../../../utils/webSocket';

export class ChatWindow extends Block {
  constructor(props: any) {
    super('div', {
      ...props,
      className: 'board',
      addPopup: new AddUserForm(),
      events: {
        submit: (e: Event) => this._handleSubmit(e), 
        click: (e: Event) => this.handleClick(e)
      }
    });
  }
  _handleSubmit(e: Event) {
    e.preventDefault();
    const chatData: any = {
      users: [],
      chatId: Number(this.props.chatId)
    };

    const el: any = e.target;

    if (el.name === 'message') {
      this.send(el);
    } else if (el.querySelector('.button').textContent === 'Добавить') {
      this
        .searchUser(chatData)
        .then(() => this
        .addUser(chatData));
    } else if (el.querySelector('.button').textContent === 'Удалить') {
      this
        .searchUser(chatData)
        .then(() => this
        .removeUser(chatData));
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

  handleClick(e: any) {
    if (e.target === document.querySelector('.add_user')) {
      this.openPopup('.add-remove-user-popup', 'Добавить')
    }

    if (e.target.classList.contains('popup_active')) {
      this.closePopup();
    }

    if (e.target === document.querySelector('.remove_user')) {
      this.openPopup('.add-remove-user-popup', 'Удалить')
    } 
  }

  async componentDidMount() {
    await this.getChatToken();
    await this.getUserInfo();
    connectToChat(this.props);
  }

  async getChatToken() {
    return chats.getChatToken(this.props.chatId.toString())
      // @ts-ignore
      .then(result => this.setProps({...this.props, 
        chatToken: JSON.parse(result.response).token
      }))
      .catch((error) => console.log(error));
  }

  async getUserInfo() {
    return auth.userInfo()
      // @ts-ignore
      .then(result => {
        this.setProps({
          ...this.props, userId: JSON.parse(result.response).id
        })
      })
      .catch((error) => console.log(error));
  }

  renderChatHistory() {
    return `this is going to be chat history`;
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

  addUser(data: any) {
    console.log(data)
    chats.addUsers({
      data
    })
      .then(() => router.go('/chats'))
      .catch((error) => console.log(error));
  }

  removeUser(data: any) {
    chats.deleteUsers({
      data
    })
      .then(() => router.go('/chats'))
      .catch((error) => console.log(error));
  }

  searchUser(data: any) {
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
        const response = JSON.parse(result.response);
        data.users.push(response[0].id);

      })
      .catch((error) => console.log(error));
  }

  send(form: any) {
    const data: any = {};
    Array.from(form.querySelectorAll('.input')).forEach((input: any) => {
      const name = input.getAttribute('name');
      if (name) {
        data[name] = input.value;
      }
    });
    const { message } = data;
    this.sendChatMessage(message);
  }

  connectToChat(props: any) {
    const {userId, chatId, token} = props;
    new WebSocketService(userId, chatId, token);
  }
  
  sendChatMessage(message: string) {
    new WebSocketService().send({
      content: message,
      type: 'message',
    });
  }
}
