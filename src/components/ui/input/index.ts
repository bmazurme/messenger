import Block from '../../../core/block';
import {tmp} from './index.tpl';

export type inputType = {
  [key: string]: any
}

export class Input extends Block {
  constructor(props: inputType) {
    super('div', props);
  }

  render() {
    return tmp(this.props);
  }
}
