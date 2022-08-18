import Block from '../../../core/block';
import { IMessage } from './IMessage';
import { tmp } from './index.tpl';
import { formatDate } from './formatDate';

export class Message extends Block<IMessage> {
  constructor(props: IMessage) {
    super('div', {
      ...props,
      time: formatDate(props.time)
    });
  }
  render() {
    return tmp(this.props);
  }
}
