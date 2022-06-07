import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {ISideBarOptions} from './options';

export default class Sidebar extends Block {
  constructor(props: ISideBarOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
