import EventBus from './eventBus';
import { Props } from './types';

interface IMeta {
  tagName: string,
  props: object
}

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };
  private blockElement: any = null;
  private meta: IMeta = null;
  protected props: Props;
  private eventBus: () => EventBus;
  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(props: Props, tagName: string = 'div') {
    const eventBus = new EventBus();
    this.meta = {
      tagName,
      props,
    };
    this.props = this.makePropsProxy(props);
    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }
  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.blockComponentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.blockComponentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.blockRender.bind(this));
  }
  private createResources() {
    const { tagName } = this.meta;
    this.blockElement = this.createDocumentElement(tagName);
    this.blockElement.classList.add('root');
  }
  public init() {
    this.createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  private blockComponentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.setHandlers();
  }
  componentDidMount() {}

  private blockComponentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }
    this.blockRender();
  }
  componentDidUpdate() {
    return true;
  }
  public setProps(nextProps: ProxyHandler<object>) {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  }
  public get element() {
    return this.blockElement;
  }
  private blockRender() {
    const block = this.render();
    this.blockElement.innerHTML = block;
  }
  private setHandlers() {
    const { handlers } = this.props;
    if (handlers) {
      handlers.forEach((item:  any) => {
        item(this.blockElement);
      });
    }
  }
  public render() {}
  getContent() {
    return this.element;
  }
  private makePropsProxy(props: Props) {
    const self = this;
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }
  private createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }
  public show() {
    this.getContent().style.display = 'block';
  }
  public hide() {
    this.getContent().style.display = 'none';
  }
}
