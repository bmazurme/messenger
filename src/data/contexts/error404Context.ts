import Error from '../../components/pages/error/index';
export const error404Context = new Error({
  code: 404,
  text: 'Не туда попали',
  link: 'Назад к чатам'
});