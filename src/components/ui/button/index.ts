import Block from '../../../core/block';
import { tmp } from './index.tpl';

import { IButton } from './IButton';

export class Button extends Block<IButton> {
  constructor(props: IButton) {
    super('div', props);
  }
  render() {
    return tmp(this.props);
  }
}
