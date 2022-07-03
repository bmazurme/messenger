import Block from '../../../../../core/block';
import { Button } from '../../../../ui/button';
import { tmp } from './edit-pass.tpl';
import { Popup } from '../../../../ui/popup';
import { Form } from '../../../forms/form';
import handlerPopupClick from '../../../../../handles/handlerPopupClick';
import handleValidation from '../../../../../handles/handleValidation';
import handleEditPasswordSubmit from '../../../../../handles/handleEditPasswordSubmit';
import handleEditAvatarSubmit from '../../../../../handles/handleEditAvatarSubmit';

export class ChangePassword extends Block {
  constructor() {
    super('main', {
      popup: new Popup(new Form(), ''),
      inputs: [
        {
          label: 'Старый пароль',
          name: 'oldPassword',
          placeholder: '********',
          type: 'password',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input password-old',
          errClass: 'password-old-err',
          validationType: 'password',
          errSelector: '.password-old-err'
        },
        {
          label: 'Новый пароль',
          name: 'newPassword',
          placeholder: '********',
          type: 'password',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input password-new',
          errClass: 'password-new-err',
          validationType: 'password',
          errSelector: '.password-new-err'
        },
        {
          label: 'Повторите новый пароль',
          name: 'newPasswordConfirm',
          placeholder: '********',
          type: 'password',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input confirm-password',
          errClass: 'confirm-password-err',
          validationType: 'password',
          errSelector: '.confirm-password-err'
        }
      ],
      submitButton: new Button({
        class: 'button button_submit',
        type: 'submit',
        text: 'Сохранить'
      }),
      handlers: [
        handleValidation,
        handlerPopupClick,
        handleEditPasswordSubmit,
        handleEditAvatarSubmit
      ]
    });
  }

  render() {
    const {inputs, submitButton, popup} = this.props;
    return tmp({
      popup: popup.render(),
      inputs,
      submitButton: submitButton.render()
    });
  }
}
