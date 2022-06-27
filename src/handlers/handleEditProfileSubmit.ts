import { checkValid, toggleStyle } from './validator';
import { users } from '../api/UserAPI';

export default function handleEditProfileSubmit(element: HTMLElement, className = '.form') {
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
        first_name,
        second_name,
        display_name,
        login,
        email,
        phone
      } = data;

      if (isValidForm) {
        users
          .changeInfo({data: {
            id: 1786,
            first_name,
            second_name,
            display_name,
            login,
            email,
            phone,
            avatar: 'https://avatars.githubusercontent.com/u/105745391?v=4'
          }})
          .then(() => console.log('Ok'))
          .catch(console.log);
      }
    });
  });
}
