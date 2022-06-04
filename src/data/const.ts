export const INDEX = '/';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const PROFILE = '/profile';
export const PROFILE_EDIT = '/profile-edit';
export const PROFILE_PASSWORD = '/profile-password';
export const ERROR_NOT_FOUND = '/not-found';
export const ERROR_INTERNAL_SERVER = '/internal-server-error';

export const NAME_REGEXP: RegExp  = /^[A-ZА-ЯЁ]{1}[a-zа-яё-]{1,20}$/;
export const LOGIN_REGEXP: RegExp = /^[A-Za-z0-9!_.-]{3,20}$/;
export const EMAIL_REGEXP: RegExp = /^[^\s@]+@[^\s@]+[.]+[a-z]+$/;
export const PHONE_REGEXP: RegExp = /^[+]{0,1}[0-9]{10,15}$/g;
export const PASSWORD_REGEXP: RegExp = /^[A-Za-z0-9!_.-]{8,40}$/;
