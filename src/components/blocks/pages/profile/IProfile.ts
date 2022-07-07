import { Popup } from '../../../ui/popup';
import Block from 'core/block';

export interface IProfile {
  popup: Popup;
  userData: IUserData;
  handlers: Array<Function>;
};

export interface IUserData {
  popup: Block|null,
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: number,
  avatar: string
};
