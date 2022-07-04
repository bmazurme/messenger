import Block from '../../../core/block';
import {tmp} from './index.tpl';

export type inputType = {
  [key: string]: string
}

export class Input extends Block<inputType> {
  constructor(props: inputType) {
    super('div', props);
  }

  render() {
    return tmp(this.props);
  }
}
