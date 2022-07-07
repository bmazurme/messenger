import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { ICard } from './ICard';

export class Card extends Block<ICard> {
  constructor(props: ICard) {
    super('main', props);
    this.props = props;
  }
  render() {
    return tmp(this.props);
  }
}
