import 'regenerator-runtime/runtime';
import Block from '../../../core/block';
import {tmp} from './chatWindow.tpl';
import {chats} from '../../../api/ChatsAPI';
import {auth} from '../../../api/AuthAPI';
import { EditChatForm } from '../forms/editChatForm';
import handleSendMessageSubmit from '../../../handles/handleSendMessageSubmit';
import { connectToChat } from '../../../handles/handleSendMessageSubmit';
import handlerPopupClick from '../../../handles/handlerPopupClick';

export class ChatWindow extends Block {
  constructor(props: any) {
    super('div', {
      ...props,
      className: 'board',
      popup: new EditChatForm(),
      handlers: [
        handleSendMessageSubmit,
        handlerPopupClick,
      ],
    });
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
      .then(result => this.setProps({
        ...this.props, userId: JSON.parse(result.response).id
      }))
      .catch((error) => console.log(error));
  }

  renderChatHistory() {
    return `this is going to be chat history`;
  }

  render() {
    const { chatName, popup } = this.props;
    return tmp({
      chatName,
      popup: popup.render(),
      chatHistory: this.renderChatHistory()
    })
  }
}
