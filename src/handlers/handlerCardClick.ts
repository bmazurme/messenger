import { INDEX } from '../data/const';
import { router } from '../index';

export default function handlerCardClick(element: HTMLElement, className = '.card') {
  const card = Array.from(element.querySelectorAll(className));
  card.forEach((item: HTMLElement ,i: number) => {
    item.addEventListener('click', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      console.log(i);

      router.go(`${INDEX}/${i}`);
    });
  });
}