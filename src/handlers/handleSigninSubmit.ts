import { checkValid, toggleStyle } from './validator';
import { auth } from '../api/AuthAPI';
import { INDEX } from '../data/const';
import { router } from '../index';

export default function handleSigninSubmit(element: HTMLElement, className = '.form') {
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

      const {login, password} = data;

      if (isValidForm) {
        auth
          .signIn({data: {login, password}})
          .then(() =>router.go(INDEX))
          .catch(console.log);
      }
    });
  });
}
