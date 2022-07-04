import Block from '../../../core/block';
import {tmp} from './index.tpl';

export type InputType = {
  [key: string]: string
}

export class Inbox extends Block {
  constructor(props: InputType) {
    super('div', props);
  }

  render() {
    return tmp(this.props);
  }
}
