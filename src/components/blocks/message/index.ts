import Block from '../../../core/block';
import { IMessage } from './IMessage';
import { tmp } from './index.tpl';

export class Message extends Block {
  constructor(props: Array<IMessage>) {
    super('div', props);
  }
  render() {
    return tmp(this.props);
  }
}
