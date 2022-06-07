import Block from '../../../core/block';
import {tmp} from './index.tpl';
import {IChatOptions} from './options';

export default class Chat extends Block {
  constructor(props: IChatOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
