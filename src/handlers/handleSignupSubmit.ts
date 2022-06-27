import { checkValid, toggleStyle } from './validator';
import { auth } from '../api/AuthAPI';
import { router } from '../index';
import { SIGN_IN } from '../data/const';

export default function handleSignupSubmit(element: HTMLElement, className = '.form') {
  let isValidForm: boolean = true;
  const formList = Array.from(element.querySelectorAll(className));

  formList.forEach((item: HTMLElement) => {
    item.addEventListener('submit', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      const form = evt.target as HTMLFormElement;
      const data: any = {};

      Array.from(form.querySelectorAll('.input')).forEach((input: HTMLInputElement) => {
        const isValid = checkValid(input)
        const name = input.getAttribute('name');
        if (name) {
          data[name] = input.value;
          data[`${name}-isValid`] = isValid;
        }
        if (!isValid) {
          isValidForm = false;
        }
        toggleStyle(isValid, input);
      });

      const {
        email,
        first_name,
        second_name,
        login,
        password,
        phone,
      } = data;

      if (isValidForm) {
        auth
          .signUp({
            data: {
              email,
              first_name,
              second_name,
              login,
              password,
              phone
            }
          })
          .then(() =>router.go(SIGN_IN))
          .catch(console.log);
      }
    });
  });
}