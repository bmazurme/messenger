import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {ISigninOptions} from './options';

export default class Signin extends Block {
  constructor(props: ISigninOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
