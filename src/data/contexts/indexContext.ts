import Chat from '../../components/pages/chat';
import Sidebar from '../../components/blocks/sidebar';
import Card from '../../components/blocks/card';
import Message from '../../components/blocks/message';
import Board from '../../components/blocks/board';
import Button from '../../components/blocks/button';
import Input from '../../components/blocks/input';
import Header from '../../components/blocks/header';
import Popup from '../../components/blocks/popup';

export const indexContext = new Chat(
  {
    sidebar: new Sidebar({
      card: [
        new Card(
          {
            image: '',
            title: 'Андрей',
            text: 'Изображение',
            time: '10:49',
            counter: 2,
          }
        ).render(), 
        new Card(
          {
            image: '',
            title: 'Андрей',
            text: 'Изображение',
            time: '10:49',
            counter: 2,
          }
        ).render(),
        new Card(
          {
            image: '',
            title: 'Андрей',
            text: 'Изображение',
            time: '10:49',
            counter: 2,
          }
        ).render(),   
      ].join(''),
    }).render(),
    board: new Board({
      header: new Header({}).render(),
      message: [
        new Message({
          type: '',
          containerType: 'message__container_from',
          // eslint-disable-next-line max-len
          content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
          time: '11:56',
          read: ''
        }).render(),
        new Message({
          type: 'message_to',
          containerType: 'message__container_to',
          content: 'Круто!',
          time: '12:00',
          read: 'message__time_read'
        }).render(),
      ].join(''),
      button: [
        new Input({}).render(),
        new Button({
          type: 'button',
          class: 'footer__button footer__button_attach',
          text: ''
        }).render(),
        new Button({
          type: 'submit',
          class: 'footer__button footer__button_send',
          text: ''
        }).render(),
      ].join(''),
    }).render(),
    popup: new Popup({}).render(),
  });
  