import Block from '../../../../core/block';
import { tmp } from './index.tpl';
import { auth } from '../../../../api/AuthAPI';
import { Popup } from '../../../ui/popup';
import { Form } from '../../../ui/forms/form';
import { IProfile } from './IProfile';
import handlerPopupClick from '../../../../handles/handlerPopupClick';
import handleLogoutClick from '../../../../handles/handleLogoutClick';
import handleEditAvatarSubmit from '../../../../handles/handleEditAvatarSubmit';
import protectedRoute from '../../../../utils/protected';

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
      },
      popup: new Popup(new Form(), ''),
      handlers: [
        handlerPopupClick,
        handleLogoutClick,
        handleEditAvatarSubmit
      ]
    })
  }

  async componentDidMount() {
    const userDataDTO = await auth.getUser();
    const userData = JSON.parse(userDataDTO.response);
    protectedRoute(userData.id);
    this.setProps({userData});
  }

  render() {
    const {userData, popup} = this.props;
    return tmp({
      popup: popup.render(),
      first_name: userData.first_name || '',
      second_name: userData.second_name || '',
      display_name: userData.display_name || '',
      login: userData.login || '',
      email: userData.email || '',
      phone: userData.phone || '',
      avatar: userData.avatar || 'src/vendor/images/ava.svg'
    })
  }
}
