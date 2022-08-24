import { users } from '../api/UsersAPI';

export default function handleEditAvatarSubmit(element: HTMLElement, className = '.form_avatar') {
  const formList: Array<HTMLElement> = Array.from(element.querySelectorAll(className));
  formList.forEach((item: HTMLElement) => {
    item.addEventListener('submit', (evt: Event) => {
      evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const formData: FormData = new FormData(form);
    users
      .changeAvatar({
        headers: {},
        data: formData
      })
      .then(() => console.log('Ok'))
      .catch((error) => console.log(error));
     });
  });
}
