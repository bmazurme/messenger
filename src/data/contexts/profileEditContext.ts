import Button from '../../components/blocks/button';
import ProfileEdit from '../../components/pages/profile/edit/edit';
import Popup from '../../components/blocks/popup';

export const profileEditContext = new ProfileEdit(
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
    secondName: {
      label: 'Фамилия',
      value: 'Иванов',
    },
    displayName: {
      label: 'Имя в чате',
      value: 'Иван',
    },
    login: {
      label: 'Логин',
      value: 'ivanivanov',
    },
    email: {
      label: 'Почта',
      value: 'pochta@yandex.ru',
    },
    phone: {
      label: 'Телефон',
      value: '+7 (909) 967 30 30',
    },
    popup: new Popup({}).render(),
  }
);
