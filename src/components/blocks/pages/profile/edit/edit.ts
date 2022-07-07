import Block from '../../../../../core/block';
import { Button } from '../../../../ui/button';
import { tmp } from './edit.tpl';
import { auth } from '../../../../../api/AuthAPI';
import { Popup } from '../../../../ui/popup';
import { Form } from '../../../../ui/forms/form';
import { Input } from '../../../../ui/input/index';
import { IChangeProfileInfo } from './IChangeProfileInfo';
import handlerPopupClick from '../../../../../handles/handlerPopupClick';
import handleEditProfileSubmit from '../../../../../handles/handleEditProfileSubmit';
import handleValidation from '../../../../../handles/handleValidation';
import handleEditAvatarSubmit from '../../../../../handles/handleEditAvatarSubmit';
import protectedRoute from '../../../../../utils/protected';

export class ChangeProfileInfo extends Block<IChangeProfileInfo> {
  constructor() {
    super('main', {
      userData: {},
      popup: new Popup(new Form(),''),
      inputs: [
        {
          label: 'Почта',
          name: 'email',
          type: 'email',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input email',
          placeholder: '',
          errClass: 'email-err',
          validationType: 'email',
          errSelector: '.email-err',
        },
        {
          label: 'Логин',
          name: 'login',
          type: 'text',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input login',
          placeholder: '',
          errClass: 'login-err',
          validationType: 'login',
          errSelector: '.login-err'
        },
        {
          label: 'Имя',
          name: 'first_name',
          type: 'text',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input first-name',
          placeholder: '',
          errClass: 'first-name-err',
          validationType: 'first_name',
          errSelector: '.first-name-err'
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          type: 'text',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input second-name',
          placeholder: '',
          errClass: 'second-name-err',
          validationType: 'second_name',
          errSelector: '.second-name-err'
        },
        {
          label: 'Имя в чате',
          name: 'display_name',
          type: 'text',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input nickname',
          placeholder: '',
          errClass: 'nickname-err',
          validationType: 'nickname',
          errSelector: '.nickname-err'
        },
        {
          label: 'Телефон',
          name: 'phone',
          type: 'tel',
          labelClass: 'list__label',
          inputClass: 'input list__value list__value_input phone',
          placeholder: '',
          errClass: 'phone-err',
          validationType: 'phone',
          errSelector: '.phone-err'
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
        handleEditProfileSubmit,
        handleEditAvatarSubmit
      ]
    });
  }

  async componentDidMount() {
    const userDataDTO = await auth.getUser();
    const userData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({...this.props, userData});
  }

  render() {
    const {inputs, submitButton, popup, userData} = this.props;
    return tmp({
      popup: popup.render(),
      inputs: (inputs.map(x => {
        return new Input({...x, value: userData[x.name]}).render()
      })).join(''),
      avatar: this.props.userData.avatar || 'assets/icons/profile-picture.svg',
      submitButton: submitButton.render()
    })
  }
}
