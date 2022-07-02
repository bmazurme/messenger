import Block from '../../../core/block';
import { tmp } from './index.tpl';
import { Form } from '../../blocks/forms/form';

export class Popup extends Block {
  constructor(form: Form) {
    super('div', {
      form,
    });
  }

  render() {
    const {form} = this.props;
    return tmp({
      form: form.render()
    })
  }
}
