import { Button } from '../../ui/button';
import { Popup } from '../../ui/popup';
import { Card } from '../../ui/card';

export interface IChats {
  cards: Array<Card>,
  popup: Popup,
  submitButton: Button,
  handlers: Array<Function>,
  events: Record<string, object>
};
