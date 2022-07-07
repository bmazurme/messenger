import { Button } from 'components/ui/button';
import { Popup } from 'components/ui/popup';
import { IUserData } from '../IProfile';

export interface IChangeProfileInfo {
  inputs: {[key: string]: string}[];
  submitButton: Button;
  popup: Popup;
  handlers: Array<Function>;
  userData: IUserData|{};
};