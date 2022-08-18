import { Button } from '../../../../components/ui/button';

export interface IForm {
  submitButton: Button,
  events: Record<string, Function>
};
