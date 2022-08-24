export const Urls = {
  CHATS: {
    INDEX: '/chats',
  },
  SIGN: {
    IN: '/',
    UP: '/signup',
  },
  PROFILE: {
    INDEX: '/profile',
    EDIT: '/profile-edit',
  },
  PASSWORD: {
    EDIT: '/profile-password',
  },
  ERROR: {
    NOT_FOUND: '/not-found',
    INTERNAL_SERVER: '/internal-server-error',
  },
  BASE: {
    INDEX: 'https://ya-praktikum.tech/api/v2',
    SOCKET_URL: 'wss://ya-praktikum.tech/ws/chats/',
  }
};

export const NAME_REGEXP: RegExp  = /^[A-ZА-ЯЁ]{1}[a-zа-яё-]{1,20}$/;
export const LOGIN_REGEXP: RegExp = /^[A-Za-z0-9!_.-]{3,20}$/;
export const EMAIL_REGEXP: RegExp = /^[^\s@]+@[^\s@]+[.]+[a-z]+$/;
export const PHONE_REGEXP: RegExp = /^[+]{0,1}[0-9]{10,15}$/g;
export const PASSWORD_REGEXP: RegExp = /^[A-Za-z0-9!_.-]{8,40}$/;
