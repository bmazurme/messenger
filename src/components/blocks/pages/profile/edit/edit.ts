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
import { PROFILE } from '../../../../../utils/constants';
import { router } from '../../../../../index';
import { inputs } from './inputs';

export class ChangeProfileInfo extends Block<IChangeProfileInfo> {
  constructor() {
    super('main', {
      userData: {},
      popup: new Popup(new Form(),''),
      inputs,
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
        handleEditProfileSubmit,
        handleEditAvatarSubmit
      ],
    });
  }

  private async _handleClick(e: Event) {
    if (e.target === document?.querySelector('.back__button')) {
      router.go(PROFILE);
    }
  }

  async componentDidMount() {
    const userDataDTO: any = await auth.getUser();
    const userData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({...this.props, userData});
  }

  render() {
    const {inputs, submitButton, popup, userData} = this.props;
    return tmp({
      popup: popup.render(),
      inputs: (inputs.map((x: {[key:string]:string}) => {
        return new Input({...x, value: userData[x.name]}).render()
      })).join(''),
      avatar: userData.avatar 
        ? `https://ya-praktikum.tech/api/v2/resources/${userData.avatar}` 
        : '',
      submitButton: submitButton.render()
    })
  }
}
