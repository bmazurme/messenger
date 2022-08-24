import { Popup } from '../../../ui/popup';
import { Button } from '../../../ui/button';
import { IUserData } from '../IProfile';

export interface IChangePassword {
  inboxes: Array<object>,
  submitButton: Button,
  popup: Popup,
  handlers: Array<Function>,
  events: Record<string, Function>,
  userData: IUserData,
};
