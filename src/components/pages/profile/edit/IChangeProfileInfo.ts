import { Button } from '../../../ui/button';
import { Popup } from '../../../ui/popup';
import { IUserData } from '../IProfile';

export interface IChangeProfileInfo {
  inputs: Record<string, string>[],
  submitButton: Button,
  popup: Popup,
  handlers: Array<Function>,
  userData: IUserData|{},
  events: Record<string, Function>
};