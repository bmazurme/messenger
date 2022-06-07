import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {IProfileOptions} from './options';

export default class Profile extends Block {
  constructor(props: IProfileOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
