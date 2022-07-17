import { validateInput, removeInvalid } from '../utils/validator';

export default function handleValidation(element: HTMLElement, className = '.form') {
  const formList: Array<HTMLElement> = Array.from(element.querySelectorAll(className));
  formList.forEach((form: HTMLElement) => {
    
    form.addEventListener('focusout', validateInput);
    const inputs = Array.from(form.querySelectorAll(
      // eslint-disable-next-line max-len
      'input[type=message],input[type=text],input[type=password],input[type=phone],input[type=email]'));
    inputs.forEach((input) => input.addEventListener('blur', removeInvalid));
  });
}
