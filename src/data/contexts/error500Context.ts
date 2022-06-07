import Error from '../../components/pages/error/index';
export const error500Context = new Error({
  code: 500,
  text: 'Мы уже фиксим',
  link: 'Назад к чатам',
});