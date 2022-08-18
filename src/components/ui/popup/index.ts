import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { Form } from '../forms/form';
import { IPopup } from './IPopup';

export class Popup extends Block<IPopup> {
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
