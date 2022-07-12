import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { IHeader } from './IHeader';

export class Header extends Block {
  constructor(props: IHeader) {
    console.log(props)
    super('div', props);
  }
  render() {
    return tmp(this.props);
  }
}
