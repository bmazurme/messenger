import { Popup } from '../../../ui/popup';
import { Button } from '../../../ui/button';
import { IUserData } from '../IProfile';

export interface IChangePassword {
  inputs: Array<object>,
  submitButton: Button,
  popup: Popup,
  handlers: Array<Function>,
  events: {[key:string]: Function},
  userData: IUserData,
};
