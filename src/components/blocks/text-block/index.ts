import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { ITextBlock } from './ITextBlock';

export class TextBlock extends Block<ITextBlock> {
  constructor(props: ITextBlock) {
    super('main', props)
  }
  render() {
    return tmp(this.props)
  }
}
