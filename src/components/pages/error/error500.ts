import Block from '../../../core/block';
import { tmp } from './error.tpl';

export class Error500 extends Block {
  constructor() {
    super('main', {})
  }
  render() {
    return tmp({
      code: 500,
      text: 'Мы уже фиксим',
      link: 'Назад к чатам',
    })
  }
}
