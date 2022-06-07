import Profile from '../../components/pages/profile/index';
import Popup from '../../components/blocks/popup';
import Field from '../../components/blocks/field';

export const profileContext = new Profile(
  {
    avatarLink: {
      label: 'Ава', 
      value: '/'
    },
    field: [
      new Field({
        label: 'Почта', 
        value: 'pochta@yandex.ru'
      }).render(),
      new Field({
        label: 'Логин', 
        value: 'ivanivanov',
      }).render(),
      new Field({
        label: 'Имя', 
        value: 'Иван',
      }).render(),
      new Field({
        label: 'Фамилия', 
        value: 'Иванов',
      }).render(),
      new Field({
        label: 'Имя в чате', 
        value: 'Иван',
      }).render(),
      new Field({
        label: 'Телефон', 
        value: '+7 (909) 967 30 30',
      }).render(),
    ].join(''),
    popup: new Popup({}).render(),
  }
);