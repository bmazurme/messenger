// eslint-disable-next-line no-unused-vars
type Handler = (...args: unknown[]) => void;

export default class EventBus {
  private listeners: Record<string, Handler[]> = {};
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Handler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Handler) {
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
    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}

//const eventBus = new EventBus();

//export default eventBus;
