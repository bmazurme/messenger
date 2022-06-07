import {tmp} from './edit.tpl';
import Block from '../../../../core/block';
import {IProfileOptions} from '../options';

export default class ProfileEdit extends Block {
  constructor(props: IProfileOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
