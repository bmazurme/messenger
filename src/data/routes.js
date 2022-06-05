import signup from "../components/pages/signup";
import signin from "../components/pages/signin";
import profile from "../components/pages/profile";
import profileEdit from "../components/pages/profile/edit";
import profileEditPass from "../components/pages/profile/edit-pass";
import error from "../components/pages/error";
import chat from "../components/pages/chat";

import {
  INDEX,
  SIGN_UP,
  SIGN_IN,
  PROFILE,
  PROFILE_EDIT,
  PROFILE_PASSWORD,
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
    INDEX,
    {
      view: chat,
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
        avatarLink: {label: 'Ава', value: '/'},
        firstName: {label: 'Имя', value: 'Иван'},
        secondName: {label: 'Фамилия', value: 'Иванов'},
        displayName: {label: 'Имя в чате', value: 'Иван'},
        login: {label: 'Логин', value: 'ivanivanov'},
        email: {label: 'Почта', value: 'pochta@yandex.ru'},
        phone: {label: 'Телефон', value: '+7 (909) 967 30 30'},
      }
    }
  ],
  [
    PROFILE_EDIT,
    {
      view: profileEdit,
      context: {
        avatarLink: {label: 'Ава', value: '/'},
        firstName: {label: 'Имя', value: 'Иван'},
        secondName: {label: 'Фамилия', value: 'Иванов'},
        displayName: {label: 'Имя в чате', value: 'Иван'},
        login: {label: 'Логин', value: 'ivanivanov'},
        email: {label: 'Почта', value: 'pochta@yandex.ru'},
        phone: {label: 'Телефон', value: '+7 (909) 967 30 30'}
      }
    }
  ],
  [
    PROFILE_PASSWORD,
    {
      view: profileEditPass,
      context: {
        avatarLink: {label: 'Ава', value: '/'},
        oldPassword: {label: 'Старый пароль', value: '********'},
        newPassword: {label: 'Новый пароль', value: ''},
        newPasswordConfirm: {label: 'Повторите новый пароль', value: ''},
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