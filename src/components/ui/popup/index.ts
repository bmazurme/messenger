import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { Form } from '../../blocks/forms/form';

export class Popup extends Block {
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
