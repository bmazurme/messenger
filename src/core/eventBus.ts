export default class EventBus {
  listeners: {
    [key: string]: string[]
  };

  constructor() {
    this.listeners = {};
  }
  // eslint-disable-next-line no-unused-vars
  on(event: string, callback: (...args: unknown[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: unknown) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}
