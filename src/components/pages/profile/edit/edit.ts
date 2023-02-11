import { auth, users } from '../../../../api';

import Block from '../../../../core/block';
import { tmp } from './edit.tpl';

import { Button } from '../../../ui/button';
import { Popup } from '../../../ui/popup';
import { Form } from '../../../ui/forms/form';
import { Inbox } from '../../../ui/inbox';
import { IChangeProfileInfo } from './IChangeProfileInfo';
import { router } from '../../../../index';
import { inboxes } from './inboxes';

import handleValidation from '../../../../handles/handleValidation';
import handleEditAvatarSubmit from '../../../../handles/handleEditAvatarSubmit';
import handlerPopupClick from '../../../../handles/handlerPopupClick';
import protectedRoute from '../../../../utils/protected';
import { checkValid, toggleStyle } from '../../../../utils/validator';

import { Urls } from '../../../../utils/constants';
import DEFAULT_USER_IMG from '../../../../vendor/images/ava.svg';

export class ChangeProfileInfo extends Block<IChangeProfileInfo> {
  constructor() {
    super('main', {
      userData: {},
      popup: new Popup(new Form(),''),
      inboxes: inboxes,
      submitButton: new Button({
        class: 'button button_submit',
        type: 'submit',
        text: 'Сохранить',
        events: {
          click: () => this._goToProfile(),
        }
      }),
      events: {
        submit: (e: Event) => this._handleEditProfileSubmit(e),
      },
      handlers: [
        handleValidation,
        handleEditAvatarSubmit,
        handlerPopupClick,
      ],
    });
  }

  private async _handleEditProfileSubmit(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    const form = evt.target as HTMLFormElement;
    const data: Record<string, string|boolean> = {};
    let isValidForm: boolean = true;

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
      await users.changeInfo({data});
      console.log('Ok')
    }
  }

  private _goToProfile() {
    router.go(Urls.PROFILE.INDEX);
  }

  async componentDidMount() {
    const userDataDTO: any = await auth.getUser();
    const userData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({...this.props, userData});
  }

  render() {
    const { inboxes, submitButton, popup, userData } = this.props;
    return tmp({
      popup: popup.render(),
      first_name: userData.first_name,
      inboxes : (inboxes.map((input: Record<string, string>) => {
        return new Inbox({...input, value: userData[input.name]}).render()
      })).join(''),
      avatar: userData.avatar
        ? `https://ya-praktikum.tech/api/v2/resources/${userData.avatar}`
        : DEFAULT_USER_IMG,
      submitButton: submitButton.render()
    })
  }
}
