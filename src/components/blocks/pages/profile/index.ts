import Block from '../../../../core/block';
import {tmp} from './index.tpl';
import {auth} from '../../../../api/AuthAPI';
import {Popup} from '../../../ui/popup';
import handlerPopupClick from '../../../../handles/handlerPopupClick';
import handleLogoutClick from '../../../../handles/handleLogoutClick';
import handleEditAvatarSubmit from '../../../../handles/handleEditAvatarSubmit';
import { Form } from '../../forms/form';

export class Profile extends Block {
  constructor() {
    super('main', {
      userData: {},
      popup: new Popup(new Form(), ''),
      handlers: [
        handlerPopupClick,
        handleLogoutClick,
        handleEditAvatarSubmit
      ]
    })
  }

  componentDidMount() {
    auth
      .userInfo()
      .then((result) => {
        this.setProps({...this.props, userData: JSON.parse(result.response)})
      })
      .catch((error) =>{console.log(error)});
  }

  render() {
    const {userData, popup} = this.props;
    return tmp({
      popup: popup.render(),
      firstName: userData.first_name || '',
      secondName: userData.second_name || '',
      nickname: userData.display_name || '',
      login: userData.login || '',
      email: userData.email || '',
      phone: userData.phone || '',
      avatar: userData.avatar || 'src/vendor/images/ava.svg'
    })
  }
}
