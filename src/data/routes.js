import signup from "../components/pages/signup";
import signin from "../components/pages/signin";
import profile from "../components/pages/profile";
import error from "../components/pages/error";

import {
  INDEX,
  SIGN_UP,
  SIGN_IN,
  PROFILE,
  ERROR_NOT_FOUND,
  ERROR_INTERNAL_SERVER,
} from "./const";

export const routes = new Map([
  [
    INDEX,
    {
      view: signin,
      context: {}
    }
  ],
  [
    SIGN_UP,
    {
      view: signup,
      context: {}
    }
  ],
  [
    SIGN_IN,
    {
      view: signin,
      context: {}
    }
  ],
  [
    PROFILE,
    {
      view: profile,
      context: {
        avatarLink: '/',
        firstName: 'Иван',
        secondName: 'Иванов',
        displayName: 'Иван',
        login: 'ivanivanov',
        email: 'pochta@yandex.ru',
        phone: '+7 (909) 967 30 30'
      }
    }
  ],
  [
    ERROR_NOT_FOUND,
    {
      view: error,
      context: {
        code: 404,
        text: 'Не туда попали',
        link: 'Назад к чатам'
      }
    }
  ],
  [
    ERROR_INTERNAL_SERVER,
    {
      view: error,
      context: {
        code: 500,
        text: 'Мы уже фиксим',
        link: 'Назад к чатам'
      }
    }
  ],
]);