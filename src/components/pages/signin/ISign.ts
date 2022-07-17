import { Button } from '../../ui/button';

export interface ISign {
  inboxes: string,
  submitButton: Button,
  handlers: Array<Function>,
  events: Record<string, Function>
};
