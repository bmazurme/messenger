import { chats } from '../api/ChatsAPI';
import { router } from '../index';
import { checkValid, toggleStyle } from '../utils/validator';
import { CHATS } from '../utils/constants';

export default function handleCreateChatSubmit(element: HTMLElement, className = '.form') {
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
        const { title } = data;
        await chats.createChat({data: {title} });
        router.go(CHATS)
      }
    });
  });
}
