import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { Form } from '../../blocks/forms/form';

type PopupProps = {
  form: Form,
  selector: string;
};
export class Popup extends Block<PopupProps> {
  constructor(form: Form, selector: string) {
    super('div', {
      form,
      selector,
    });
  }

  render() {
    const {form, selector} = this.props;
    return tmp({
      selector,
      form: form.render()
    })
  }
}
