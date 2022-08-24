import { Button } from '../../../../components/ui/button';
import { IForm } from '../form/IForm';

export interface IBoardForm extends IForm {
  attachButton: Button,
  submitButton: Button,
};
