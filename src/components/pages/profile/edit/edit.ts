import { auth } from '../../../../api/AuthAPI';
import { users } from '../../../../api/UsersAPI';

import Block from '../../../../core/block';
import { tmp } from './edit.tpl';

import { Button } from '../../../ui/button';
import { Popup } from '../../../ui/popup';
import { Form } from '../../../ui/forms/form';
import { Input } from '../../../ui/input/index';
import { IChangeProfileInfo } from './IChangeProfileInfo';
import { router } from '../../../../index';
import { inputs } from './inputs';

import handleValidation from '../../../../handles/handleValidation';
import handleEditAvatarSubmit from '../../../../handles/handleEditAvatarSubmit';
import protectedRoute from '../../../../utils/protected';
import { checkValid, toggleStyle } from '../../../../utils/validator';

import { PROFILE } from '../../../../utils/constants';
import DEFAULT_USER_IMG from '../../../../vendor/images/ava.svg';

export class ChangeProfileInfo extends Block<IChangeProfileInfo> {
  constructor() {
    super('main', {
      userData: {},
      popup: new Popup(new Form(),''),
      inputs,
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
        // focusout: () => this._handleValidation(),
        // _validation
      },
      handlers: [
        handleValidation,
        handleEditAvatarSubmit
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
    router.go(PROFILE);
  }

  async componentDidMount() {
    const userDataDTO: any = await auth.getUser();
    const userData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({...this.props, userData});
  }

  render() {
    const { inputs, submitButton, popup, userData } = this.props;
    return tmp({
      popup: popup.render(),
      inputs: (inputs.map((input: Record<string, string>) => {
        return new Input({...input, value: userData[input.name]}).render()
      })).join(''),
      avatar: userData.avatar 
        ? `https://ya-praktikum.tech/api/v2/resources/${userData.avatar}` 
        : DEFAULT_USER_IMG,
      submitButton: submitButton.render()
    })
  }
}
