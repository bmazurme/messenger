import { Popup } from 'components/ui/popup';
import { Button } from 'components/ui/button';

export interface IChangePassword {
  inputs: Array<object>,
  submitButton: Button,
  popup: Popup,
  handlers: Array<Function>,
};
