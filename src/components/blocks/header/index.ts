import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {IHeaderOptions} from './options';

export default class Header extends Block {
  constructor(props: IHeaderOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
