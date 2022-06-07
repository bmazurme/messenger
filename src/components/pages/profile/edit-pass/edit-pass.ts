import {tmp} from './edit-pass.tpl';
import Block from '../../../../core/block';
import {IProfileOptions} from '../options';
export default class ProfileEditPass extends Block {
  constructor(props: IProfileOptions) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
}
