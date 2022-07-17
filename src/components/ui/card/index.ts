import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { ICard } from './ICard';
import { formatDate } from '../../blocks/message/formatDate';

export class Card extends Block<ICard> {
  constructor(props: ICard) {
    super('main', {
      ...props,
      time: formatDate(props?.last_message.time)
    });
  }
  render() {
    return tmp(this.props);
  }
}
