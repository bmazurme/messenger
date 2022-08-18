import { checkValid, toggleStyle } from '../utils/validator';
import { auth } from '../api/AuthAPI';
import { CHATS } from '../utils/constants';
import { router } from '../index';

export default function handleSigninSubmit(element: HTMLElement, className = '.form') {
  let isValidForm: boolean = true;
  const formList: Array<HTMLElement> = Array.from(element.querySelectorAll(className));

  formList.forEach((item: HTMLElement) => {
    item.addEventListener('submit', async (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      const form = evt.target as HTMLFormElement;
      const data: {[key:string]: string|boolean} = {};

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

      if (isValidForm) {
        const {login, password} = data;
        await auth.signIn({data: {login, password}})
        router.go(CHATS)
      }
    });
  });
}
