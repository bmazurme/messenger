import { ValidationType } from '../core/types';
import {
  NAME_REGEXP,
  LOGIN_REGEXP,
  EMAIL_REGEXP,
  PHONE_REGEXP,
  PASSWORD_REGEXP,
} from '../data/const';

export function validateInput(evt: Event): void {
  const input = evt.target as HTMLInputElement;
  const isValid = checkValid(input);
  toggleStyle(isValid, input);
}

export function toggleStyle(isValid: boolean, input: HTMLElement) {
  if (!isValid) {
    input.classList.add('text-field__input-error');
  } else {
    input.classList.remove('text-field__input-error');
  }
}

export function removeInvalid(evt: Event): void {
  const currentElement = evt.target as HTMLElement;
  if (currentElement.classList.contains('text-field__input-error')) {
    currentElement.classList.remove('text-field__input-error');
  }
}

export function checkValid(input: HTMLInputElement): boolean {
  let isValid: boolean;
  switch (input.dataset.validation) {
    case ValidationType.message:
      isValid = input.value.length > 0;
      break;
    case ValidationType.name:
      isValid = input.value.search(NAME_REGEXP) !== -1;
      break;
    case ValidationType.password:
      isValid = input.value.search(PASSWORD_REGEXP) !== -1;
      break;
    case ValidationType.login:
      isValid = input.value.search(LOGIN_REGEXP) !== -1;
      break;
    case ValidationType.email:
      isValid = input.value.search(EMAIL_REGEXP) !== -1;
      break;
    case ValidationType.phone:
      isValid = input.value.search(PHONE_REGEXP) !== -1;
      break;
    default:
      isValid = true;
  }
  return isValid;
}