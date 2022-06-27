import { auth } from '../api/AuthAPI';
import { router } from '../index';
import { SIGN_IN } from '../data/const';

export default function handleLogout(element: HTMLElement, className = '.profile__link_logout') {
  const card = Array.from(element.querySelectorAll(className));
  card.forEach((item: HTMLElement) => {
    item.addEventListener('click', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      auth
        .logOut()
        .then(() =>router.go(SIGN_IN))
        .catch(console.log);
    });
  }); 
}
