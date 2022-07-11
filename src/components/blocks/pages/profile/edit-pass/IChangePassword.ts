import { Popup } from 'components/ui/popup';
import { Button } from 'components/ui/button';
import { IUserData } from '../IProfile';

export interface IChangePassword {
  inputs: Array<object>,
  submitButton: Button,
  popup: Popup,
  handlers: Array<Function>,
  events: {[key:string]: Function},
  userData: IUserData,
};
