import Block from '../../../../core/block';
import {source} from './error.tpl';
import {compile} from 'handlebars';

export class Error404 extends Block {
  constructor() {
    super('main', {})
  }

  render() {
    return compile(source)({
      code: 404,
      text: 'Не туда попали',
      link: 'Назад к чатам'
    });
  }
}
