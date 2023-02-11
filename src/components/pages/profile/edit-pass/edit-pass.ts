import { auth, users } from '../../../../api';

import Block from '../../../../core/block';
import { tmp } from './edit-pass.tpl';

import { Button } from '../../../ui/button';
import { Inbox } from '../../../ui/inbox';
import { Popup } from '../../../ui/popup';
import { Form } from '../../../ui/forms/form';
import { Urls } from '../../../../utils/constants';
import { router } from '../../../../index';

import { inboxes } from './inboxes';
import { IUserData } from '../IProfile';
import { IChangePassword } from './IChangePassword';

import handlerPopupClick from '../../../../handles/handlerPopupClick';
import handleValidation from '../../../../handles/handleValidation';
import handleEditAvatarSubmit from '../../../../handles/handleEditAvatarSubmit';
import protectedRoute from '../../../../utils/protected';
import DEFAULT_USER_IMG from '../../../../vendor/images/ava.svg';
import { checkValid, toggleStyle } from '../../../../utils/validator';

export class ChangePassword extends Block<IChangePassword> {
  constructor() {
    super('main', {
      inboxes,
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
        submit: (e: Event) => this._handleEditPasswordSubmit(e)
      },
      handlers: [
        handleValidation,
        handlerPopupClick,
        handleEditAvatarSubmit
      ]
    });
  }

  private _goToProfile() {
    router.go(Urls.PROFILE.INDEX);
  }

  private async _handleEditPasswordSubmit(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    let isValidForm: boolean = true;
    const form = evt.target as HTMLFormElement;
    const data: Record<string, string|boolean> = {};

    Array.from(form.querySelectorAll('.input')).forEach((input: HTMLInputElement) => {
      const isValid = checkValid(input)
      const name = input.getAttribute('name');

      if (name) {
        data[name] = input.value;
        data[`${name}-isValid`] = isValid;
      }
      if (!isValid) {
        isValidForm = false;
      }
      toggleStyle(isValid, input);
    });

    if (isValidForm) {
      const { oldPassword, newPassword } = data;
      await users.changePassword({data: { oldPassword, newPassword }})
      console.log('Ok');
    }
  }

  async componentDidMount() {
    const userDataDTO: any = await auth.getUser();
    const userData:IUserData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({...this.props, userData});
  }

  render() {
    const {inboxes, submitButton, popup, userData} = this.props;
    return tmp({
      inboxes : (inboxes.map((input: Record<string, string>) => {
        return new Inbox(input).render()
      })).join(''),
      submitButton: submitButton.render(),
      avatar: userData?.avatar
      ? `https://ya-praktikum.tech/api/v2/resources/${userData.avatar}`
      : DEFAULT_USER_IMG,
      popup: popup.render(),
    });
  }
}
