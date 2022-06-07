import { checkValid, toggleStyle } from './validator';

export default function handlerSubmit(element: HTMLElement, className = '.form') {
  let isValidForm: boolean = true;
  const formList = Array.from(element.querySelectorAll(className));

  formList.forEach((item: HTMLElement) => {
    item.addEventListener('submit', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      const form = evt.target as HTMLFormElement;
      const data: any = {};
      const formName = form.getAttribute('name');

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
      console.log(data);

      if (isValidForm) {
        console.log(`redirect to path from ${formName}`);
      } else {
        console.log('fall');
      }
    });
  });
}