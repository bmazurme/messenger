import Block from '../../../../core/block';
import { Button } from '../../../ui/button';
import { tmp } from './index.tpl';

type FormProps = {
  submitButton: Button;
};

export class Form extends Block<FormProps> {
  constructor() {
    super('div', {
      submitButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Поменять',
      }),
    });
  }

  render() {
    const {submitButton} = this.props;
    return tmp({
      submitButton: submitButton.render(),
    })
  }
}
