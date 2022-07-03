import { router } from '../index';
import { auth } from '../api/AuthAPI';

function handleLogoutClick() {
  const link: HTMLElement|null = document.querySelector('.profile__link_logout');
  if (link) {
    link.addEventListener('click', (evt: Event) => {
      evt.preventDefault();
      auth
        .logOut()
        .then(() => router.go('/'))
        .catch((error) => console.log(error));

    });
  }

}

export default handleLogoutClick;
