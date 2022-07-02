// import { users } from '../api/UsersAPI';

// export default function handleEditAvatarSubmit(element: HTMLElement, className = '.form') {


//   // const formList: Array<HTMLElement> = Array.from(element.querySelectorAll(className));
//   // formList.forEach((item: HTMLElement) => {
//     const form: HTMLInputElement = element.querySelector(className);
//     console.log(form)
//     form.addEventListener('submit', (evt: Event) => {
//       evt.preventDefault();
//       evt.stopPropagation();

     
//       const form = evt.target as HTMLFormElement;
//       const inputElem: HTMLInputElement = form.querySelector('.avatar');
//       const formData: FormData = new FormData();
//       // @ts-ignore
//       formData.append('avatar', inputElem.files[0]);

//       console.log(formData)

//       users
//         .changeAvatar({
//           headers: {
//             'content-type': 'multipart/form-data'
//           },
//           data: formData
//         })
//         .then(() => console.log('Ok'))
//         .catch(console.log);
//     });

// }
