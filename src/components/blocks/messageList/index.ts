import Block from '../../../core/block';
import { IMessage } from '../message/IMessage';
import { tmp } from './index.tpl';
import { Message } from '../message';

export class MessageList extends Block {
  constructor(props: Array<IMessage>) {
    super('div', props);
  }
  render() {
    const { messageList, userId } = this.props;
    const messages = (Array.isArray(messageList)) 
      ? messageList.map((message: IMessage) => {
          return new Message({
            ...message,
            fromYou: userId === message.user_id
          }).render();
        }).join('')
      : [];
    return tmp({
      messageList: messages,
    });
  }
}
