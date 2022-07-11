import { Button } from 'components/ui/button';
import { Popup } from 'components/ui/popup';
import { Card } from 'components/ui/card';

export interface IChats {
  cards: Array<Card>,
  popup: Popup,
  submitButton: Button,
  handlers: Array<Function>,
  events: {[key: string]: object},
};
