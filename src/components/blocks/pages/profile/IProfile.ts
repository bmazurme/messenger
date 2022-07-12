import { Popup } from '../../../ui/popup';
import Block from '../../../../core/block';
import { Button } from '../../../../components/ui/button';

export interface IProfile {
  popup: Popup,
  userData: IUserData,
  backButton: Button,
  handlers: Array<Function>,
  events: {[key:string]: Function}
};

export interface IUserData {
  popup: Block|null,
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: number,
  avatar: string,
  id: number
};
