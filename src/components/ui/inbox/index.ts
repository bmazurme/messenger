import Block from '../../../core/block';
import {tmp} from './index.tpl';
import { IInput } from '../input/IInput';

export class Inbox extends Block {
  constructor(props: IInput) {
    super('div', props);
  }
  render() {
    return tmp(this.props);
  }
}
