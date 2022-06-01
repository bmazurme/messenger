import { SELECTORS } from "./utils/config";
import render from "./utils/render";
import Popup from "./utils/popup";
import redirect from "./utils/redirect";
//import Block from './utils/block';

render();

const popup = new Popup(SELECTORS);
popup.initPopups();

redirect();


// const block = new Block();
// class Button extends Block {
//   constructor(props) {
// 		// Создаём враппер дом-элемент button
//     super("button", props);
//   }
//   render() {
// 		// В проекте должен быть ваш собственный шаблонизатор
//     return `<div>${this.props.text}</div>`;
//   }
// }
// const button = new Button({
//   text: 'Click me',
// });
// //const button: HTMLElement = document.querySelector('.footer__button_send');

// function _render(query: string, block: unknown) {
//   const root: HTMLElement = document.querySelector(query);
//   root.appendChild(block.getContent());
//   return root;
// }
// _render(".root", button);

// // // Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//   button.setProps({
//     text: 'Click me, please',
//   });
// }, 1000);
