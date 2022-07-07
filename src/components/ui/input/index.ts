import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { IInput } from './IInput';

export class Input extends Block<IInput> {
  constructor(props: IInput) {
    super('div', props);
  }
  render() {
    return tmp(this.props);
  }
}
