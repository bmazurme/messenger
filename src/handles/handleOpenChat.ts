import { ChatWindow } from '../components/blocks/chatWindow/chatWindow';

export default function handleOpenChat(element: HTMLElement, className = '.card') {
  const card: Array<HTMLElement> = Array.from(element.querySelectorAll(className));
  card.forEach((item: HTMLElement) => {
    item.addEventListener('click', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      const el: HTMLElement|null = evt.target as HTMLElement
      
      if (el) {
        const container:HTMLElement|null = el.closest('.card');
        const chatWindow: ChatWindow = new ChatWindow({
          chatName: container?.querySelector('.card__title')?.textContent,
          chatId: Number(container?.dataset.chatId)
        });
        const chatsPage = document.querySelector('.chat')!;
        const chooseChatWindow = document.querySelector('.board')!;
        chatsPage.removeChild(chooseChatWindow);
        chatsPage.appendChild(chatWindow.getContent()!);
      }
    });
  });
}