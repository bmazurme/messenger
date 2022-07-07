import Block from '../../../../core/block';
import {source} from './error.tpl';
import {compile} from 'handlebars';

export class Error500 extends Block {
  constructor() {
    super('main', {})
  }

  render() {
    return compile(source)({
      code: 500,
      text: 'Мы уже фиксим',
      link: 'Назад к чатам',
    })
  }
}
