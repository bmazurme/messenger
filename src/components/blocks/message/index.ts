import {tmp} from './index.tpl';
import Block from '../../../core/block';
import { IMessageOptions } from './options';

export default class Message extends Block {
  constructor(props: IMessageOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
