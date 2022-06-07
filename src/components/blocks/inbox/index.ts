import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {IInboxOptions} from './options';

export default class Inbox extends Block {
  constructor(props: IInboxOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
