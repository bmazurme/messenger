import ProfileEditPass from '../../components/pages/profile/edit-pass/edit-pass';
import Button from '../../components/blocks/button';
import Popup from '../../components/blocks/popup';

export const profileEditPassContext = new ProfileEditPass(
  {
    button: [new Button({
      type: 'submit',
      class:'button_submit',
      text:'Сохранить',
    }).render()],
    avatarLink: {
      label: 'Ава', 
      value: '/',
    },
    firstName: {
      label: 'Имя', 
      value: 'Иван',
    },
    oldPassword: {
      label: 'Старый пароль', 
      value: '********',
    },
    newPassword: {
      label: 'Новый пароль', 
      value: '',
    },
    newPasswordConfirm: {
      label: 'Повторите новый пароль', 
      value: '',
    },
    popup: new Popup({}).render(),
  }
);
