/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-constructor-return */
/* eslint-disable class-methods-use-this */
import { store } from '../..';

const SOCKET_URL = 'wss://ya-praktikum.tech/ws/chats/';

interface IMessage {
  content: string | number,
  type: string,
}

export default class WebSocketService {
  static _instance: WebSocketService | null;

  private _socket;

  constructor(userId?: number, chatId?: number, chatToken?: string) {
    if (userId && chatId && chatToken) {
      if (WebSocketService._instance) {
        WebSocketService._instance = null;
      }

      this._socket = new WebSocket(`${SOCKET_URL}${userId}/${chatId}/${chatToken}`);

      this._socket.addEventListener('open', this.onOpen.bind(this));
      this._socket.addEventListener('message', this.onMessage.bind(this));
      this._socket.addEventListener('close', this.onClose.bind(this));
      this._socket.addEventListener('error', this.onError.bind(this));
    }

    if (WebSocketService._instance) {
      return WebSocketService._instance;
    }
    WebSocketService._instance = this;
  }

  public send(payload: IMessage): void {
    console.log('Message sent');
    this._socket?.send(JSON.stringify(payload));
  }

  private onOpen(): void {
    console.log('Connection established');
    this.send({ type: 'get old', content: '0' });
    this.ping();
  }

  onMessage(event: any): void {
    console.log('Data received: ', event);
    const messages = JSON.parse(event.data);

    if (messages.type === 'user connected' || messages.type === 'pong') {
      return;
    }

    store.dispatch({
      type: Array.isArray(messages)
        ? 'messages/setMessages'
        : 'messages/setMessage',
      payload: messages,
    });
  }

  ping() {
    this.send({ type: 'ping', content: 'ping' });

    setTimeout(this.ping.bind(this), 10000);
  }

  onClose(event: any): void {
    if (event.wasClean) {
      console.log('Connection closed');
    } else {
      console.log('Connection interrupted');
    }
  }

  onError(event: any): void {
    console.log('Error: ', event.message);
  }
}
