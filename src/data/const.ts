export const INDEX: string = '/';
export const SIGN_UP: string = '/signup';
export const SIGN_IN: string = '/signin';
export const PROFILE: string = '/profile';
export const PROFILE_EDIT: string = '/profile-edit';
export const PROFILE_PASSWORD: string = '/profile-password';
export const ERROR_NOT_FOUND: string = '/not-found';
export const ERROR_INTERNAL_SERVER: string = '/internal-server-error';

export const NAME_REGEXP: RegExp  = /^[A-ZА-ЯЁ]{1}[a-zа-яё-]{1,20}$/;
export const LOGIN_REGEXP: RegExp = /^[A-Za-z0-9!_.-]{3,20}$/;
export const EMAIL_REGEXP: RegExp = /^[^\s@]+@[^\s@]+[.]+[a-z]+$/;
export const PHONE_REGEXP: RegExp = /^[+]{0,1}[0-9]{10,15}$/g;
export const PASSWORD_REGEXP: RegExp = /^[A-Za-z0-9!_.-]{8,40}$/;
