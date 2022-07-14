import Block from '../../../core/block';
import { BoardForm } from '../../ui/forms/boardForm';
import { Header } from '../header';

export interface IChatWindow {
  className: string,
  addPopup: Block,
  boardForm: BoardForm,
  // eslint-disable-next-line no-unused-vars
  events: Record<string, Function>,
  header: Header,
  handlers: Array<Function>,
  chatId: number,
  chatName: string,
  chatToken: string,
  userId: number
};
