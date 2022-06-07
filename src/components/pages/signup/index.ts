import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {ISignupOptions} from './options';

export default class Signup extends Block {
  constructor(props: ISignupOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
