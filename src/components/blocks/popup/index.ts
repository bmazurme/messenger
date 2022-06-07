import Block from '../../../core/block';
import {tmp} from './index.tpl';
import {IPopupOptions} from './options';

export default class Popup extends Block {
  constructor(props: IPopupOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
