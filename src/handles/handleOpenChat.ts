import { ChatWindow } from '../components/blocks/chatWindow/chatWindow';

export default function handleOpenChat(element: HTMLElement, className = '.card') {
  const card: Array<HTMLElement> = Array.from(element.querySelectorAll(className));
  card.forEach((item: HTMLElement) => {
    item.addEventListener('click', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      const el: any = evt.target.closest('.card');

      if (el) {
        const chatWindow = new ChatWindow({
          chatName: el.querySelector('.card__title').textContent,
          chatId: el.dataset.chatId
        });
        const chatsPage = document.querySelector('.chat')!;
        const chooseChatWindow = document.querySelector('.board')!;
        chatsPage.removeChild(chooseChatWindow);
        chatsPage.appendChild(chatWindow.getContent()!);
      }
    });
  });
}