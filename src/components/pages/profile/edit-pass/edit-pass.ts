import { auth } from '../../../../api/AuthAPI';

import Block from '../../../../core/block';
import { tmp } from './edit-pass.tpl';

import { Button } from '../../../ui/button';
import { Popup } from '../../../ui/popup';
import { Form } from '../../../ui/forms/form';
import { PROFILE } from '../../../../utils/constants';
import { router } from '../../../../index';

import { inputs } from './inputs';
import { IUserData } from '../IProfile';
import { IChangePassword } from './IChangePassword';

import handlerPopupClick from '../../../../handles/handlerPopupClick';
import handleValidation from '../../../../handles/handleValidation';
import handleEditPasswordSubmit from '../../../../handles/handleEditPasswordSubmit';
import handleEditAvatarSubmit from '../../../../handles/handleEditAvatarSubmit';
import protectedRoute from '../../../../utils/protected';

export class ChangePassword extends Block<IChangePassword> {
  constructor() {
    super('main', {
      inputs,
      userData: {
        popup: null,
        first_name: '',
        second_name: '',
        display_name: '',
        login: '',
        email: '',
        phone: 0,
        avatar: '',
        id: 0
      },
      popup: new Popup(new Form(), ''),
      submitButton: new Button({
        class: 'button button_submit',
        type: 'submit',
        text: 'Сохранить',
        events: {
          click: () => this._goToProfile(),
        },
      }),
      events: {
        // click: (e: Event) => this._handleClick(e),
      },
      handlers: [
        handleValidation,
        handlerPopupClick,
        handleEditPasswordSubmit,
        handleEditAvatarSubmit
      ]
    });
  }

  private _goToProfile() {
    router.go(PROFILE);
  }

  async componentDidMount() {
    const userDataDTO: any = await auth.getUser();
    const userData:IUserData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({...this.props, userData});
  }

  render() {
    const {inputs, submitButton, popup, userData} = this.props;
    return tmp({
      inputs,
      submitButton: submitButton.render(),
      avatar: userData?.avatar 
      ? `https://ya-praktikum.tech/api/v2/resources/${userData.avatar}` 
      : '',
      popup: popup.render(),
    });
  }
}
