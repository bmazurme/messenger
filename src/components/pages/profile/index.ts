import { auth } from '../../../api/AuthAPI';

import Block from '../../../core/block';
import { tmp } from './index.tpl';

import { Popup } from '../../ui/popup';
import { Form } from '../../ui/forms/form';
import { Button } from '../../ui/button';
import { router } from '../../../index';
import { TextBlock } from '../../blocks/text-block';

import { IProfile } from './IProfile';

import handlerPopupClick from '../../../handles/handlerPopupClick';
import handleEditAvatarSubmit from '../../../handles/handleEditAvatarSubmit';
import protectedRoute from '../../../utils/protected';

import DEFAULT_USER_IMG from '../../../vendor/images/ava.svg';

import { Urls } from '../../../utils/constants';

export class Profile extends Block<IProfile> {
  constructor() {
    super('main', {
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
      backButton: new Button({
        class: 'button back__button',
        type: 'button',
        text: '',
        events: {
          // click: () => this._goToChat(),
        },
      }),
      events: {
        click: (e: Event) => this._handleClick(e),
      },
      handlers: [
        handlerPopupClick,
        handleEditAvatarSubmit
      ]
    })
  }

  private async _handleClick(e: Event) {
    if (e.target === document?.querySelector('.back__button')) {
      router.go(Urls.CHATS.INDEX);
    } else if (e.target === document?.querySelector('.profile__link_logout')) {
      e.preventDefault();
      await auth.logOut();
      router.go(Urls.SIGN.IN);
    } else if (e.target === document?.querySelector('.profile-edit')) {
      router.go(Urls.PROFILE.EDIT);
    } else if (e.target === document?.querySelector('.profile-edit-pass')) {
      router.go(Urls.PASSWORD.EDIT);
    }
  }

  async componentDidMount() {
    const userDataDTO: any = await auth.getUser();
    const userData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({ userData });
  }

  render() {
    const { userData, backButton, popup } = this.props;
    return tmp({
      first_name: userData.first_name,
      textBlocks: [
        new TextBlock({
          label: 'Почта',
          value: userData.email || '',
        }).render(),
        new TextBlock({
          label: 'Логин',
          value: userData.login || '',
        }).render(),
        new TextBlock({
          label: 'Имя',
          value: userData.first_name || '',
        }).render(),
        new TextBlock({
          label: 'Фамилия',
          value: userData.second_name || '',
        }).render(),
        new TextBlock({
          label: 'Имя в чате',
          value: userData.display_name || '',
        }).render(),
        new TextBlock({
          label: 'Телефон',
          value: userData.phone.toString(),
        }).render(),
      ].join(''),
      popup: popup.render(),
      backButton: backButton.render(),
      avatar: userData.avatar
        ? `https://ya-praktikum.tech/api/v2/resources/${userData.avatar}`
        : DEFAULT_USER_IMG
    })
  }
}
