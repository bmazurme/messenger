import Block from '../../../../../core/block';
import { Button } from '../../../../ui/button';
import { tmp } from './edit-pass.tpl';
import { Popup } from '../../../../ui/popup';
import { Form } from '../../../../ui/forms/form';
import { IChangePassword } from './IChangePassword';
import handlerPopupClick from '../../../../../handles/handlerPopupClick';
import handleValidation from '../../../../../handles/handleValidation';
import handleEditPasswordSubmit from '../../../../../handles/handleEditPasswordSubmit';
import handleEditAvatarSubmit from '../../../../../handles/handleEditAvatarSubmit';
import { PROFILE } from '../../../../../utils/constants';
import { router } from '../../../../../index';
import protectedRoute from '../../../../../utils/protected';
import { auth } from '../../../../../api/AuthAPI';
import { inputs } from './inputs';
import { IUserData } from '../IProfile';

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
        text: 'Сохранить'
      }),
      events: {
        click: (e: Event) => this._handleClick(e),
      },
      handlers: [
        handleValidation,
        handlerPopupClick,
        handleEditPasswordSubmit,
        handleEditAvatarSubmit
      ]
    });
  }

  private async _handleClick(e: Event) {
    if (e.target === document?.querySelector('.back__button')) {
      router.go(PROFILE);
    }
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
