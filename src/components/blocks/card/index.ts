import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {ICardOptions} from './options';

export default class Card extends Block {
  constructor(props: ICardOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
