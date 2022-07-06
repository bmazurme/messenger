import Block from 'core/block';
import { BoardForm } from '../../ui/forms/boardForm';

export interface IChatWindow {
  className: string,
  addPopup: Block,
  boardForm: BoardForm,
  // eslint-disable-next-line no-unused-vars
  events: {[key: string]: (e: Event) => void },
  handlers: Array<Function>,
  chatId: number,
  chatName: string,
  chatToken: string,
  userId: number
};
