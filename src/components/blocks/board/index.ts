import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {IBoardOptions} from './options';

export default class Board extends Block {
  constructor(props: IBoardOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
