import { IUser } from '../../blocks/chatWindow/IUser';
import { IMessage } from '../../blocks/message/IMessage';

interface ICardMessage extends IMessage {
  user: IUser,
}

export interface ICard {
  id: number,
  avatar: string|null,
  title: string,
  last_message: ICardMessage,
  unread_count: number,
  created_by: number,
  fromYou: boolean,
  // user: IUser
};
