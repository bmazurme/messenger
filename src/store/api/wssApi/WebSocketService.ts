/* eslint-disable class-methods-use-this */
import { store } from '../..';

const SOCKET_URL = 'wss://ya-praktikum.tech/ws/chats/';

interface IMessage {
  content: string | number,
  type: string,
}

export default class WebSocketService {
  private _socket;

  constructor(userId?: number, chatId?: number, chatToken?: string) {
    this._socket = new WebSocket(`${SOCKET_URL}${userId}/${chatId}/${chatToken}`);

    this._socket.addEventListener('open', this.onOpen.bind(this));
    this._socket.addEventListener('message', this.onMessage.bind(this));
    this._socket.addEventListener('close', this.onClose.bind(this));
    this._socket.addEventListener('error', this.onError.bind(this));
  }

  public send(payload: IMessage): void {
    console.log('Message sent');
    this._socket?.send(JSON.stringify(payload));
  }

  public onOpen(): void {
    console.log('Connection established');
    this.send({ type: 'get old', content: '0' });
    this.ping();
  }

  onMessage(event: MessageEvent): void {
    console.log('Data received: ', event);
    const messages = JSON.parse(event.data);
    // @ts-ignore
    const key = Number(event.currentTarget?.url?.split(':')[1].split('/')[6]);

    if (messages.type === 'user connected' || messages.type === 'pong') {
      return;
    }

    store.dispatch({
      type: 'messages/setMessages',
      payload: Array.isArray(messages)
        ? { key, messages }
        : { key, messages: [messages] },
    });
  }

  ping() {
    this.send({ type: 'ping', content: 'ping' });

    setTimeout(this.ping.bind(this), 10000);
  }

  onClose(event: CloseEvent): void {
    if (event.wasClean) {
      console.log('Connection closed');
    } else {
      console.log('Connection interrupted');
    }
  }

  onError(event: ErrorEventInit): void {
    console.log('Error: ', event.message);
  }
}
