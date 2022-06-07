import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {IInputOptions} from './options';

export default class Input extends Block {
  constructor(props: IInputOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
