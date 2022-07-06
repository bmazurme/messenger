import Block from '../../../core/block';
import { tmp } from './index.tpl';

export class Button extends Block {
  constructor(props: {}) {
    super('div', props);
  }

  render() {
    return tmp(this.props);
  }
}
