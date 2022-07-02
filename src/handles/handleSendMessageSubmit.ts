import { checkValid, toggleStyle } from '../utils/validator';
import WebSocketService from '../utils/webSocket';

export default function handleSendMessageSubmit(element: HTMLElement, className = '.form') {
  let isValidForm: boolean = true;
  const formList: Array<HTMLElement> = Array.from(element.querySelectorAll(className));

  formList.forEach((item: HTMLElement) => {
    item.addEventListener('submit', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      const form = evt.target as HTMLFormElement;
      const data: any = {};

      Array.from(form.querySelectorAll('.input')).forEach((input: any) => {
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
      
      const { message } = data;
      
      if (isValidForm) {
        sendChatMessage(message);
      }
    });
  });
}

export function connectToChat(props) {
  const {userId, chatId, token} = props;
  new WebSocketService(userId, chatId, token);
}

function sendChatMessage(message: string) {
  new WebSocketService().send({
    content: message,
    type: 'message',
  });
}
