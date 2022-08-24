import EventBus from './eventBus';
import { isEqual } from './isEqual';

export default abstract class Block<Props extends object = {}> {
  render() {
    throw new Error('Method not implemented.');
  }
  
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update'
  };

  eventBus: () => EventBus;
  _element: HTMLElement | null = null;

  readonly meta: {
    tagName: string,
    props: Props
  }
  oldProps: any;//Props;
  protected props: any;//Props;

  constructor(tagName: string = 'div', propsAndChildren: Props = <Props>{}) {
    const eventBus = new EventBus();
    this.meta = {
      tagName,
      props: propsAndChildren,
    };
    this.props = <Props>this.makePropsProxy(propsAndChildren);
    this.oldProps = <Props>{};
    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private createResources() {
    const {tagName} = this.meta;
    this._element = this.createDocumentElement(tagName);
    this._element.classList.add('root');
  }

  init(): void {
    this.createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.setHandlers();
  }
  private setHandlers(): void {
    const {handlers} = this.props;
    if (handlers) {
      handlers.forEach((item: Function) => {
        item(this._element);
      });
    }
  }

  componentDidMount(): void {
  }

  private _componentDidUpdate(): void {
    const response: boolean = !isEqual(this.oldProps, this.props);
    if (response) {
      this._componentDidMount();
    }
  }

  public setProps = (nextProps: Record<string, string>) => {
    if (!nextProps) {
      return;
    }
    this.oldProps = Object.assign({}, this.props);

    Object.keys(nextProps).forEach(key => {
      this.props[key] = nextProps[key];
    })
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  public get element(): HTMLElement | null {
    return this._element;
  }

  private addEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element!.addEventListener(eventName, events[eventName]);
    });
  }

  private removeEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element!.removeEventListener(eventName, events[eventName]);
    });
  }

  private _render() {
    //@ts-ignore
    const block: string = this.render();
    this.removeEvents();
    
    if (this.props.className) {
      this._element!.classList.add(this.props.className);
    }
    this._element!.innerHTML = block;
    this.addEvents();
  }

  public getContent(): HTMLElement | null {
    return this.element;
  }

  private makePropsProxy(props: Props): Props {
    return new Proxy(props, {
      get(target: any, prop: string) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Отказано в доступе');
        }
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Props, prop: string, value: string) {
        // @ts-expect-error
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('Отказано в доступе');
      }
    });
  }

  private createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  public show() {
    this.getContent()!.style.display = 'block';
  }

  public hide() {
    this.getContent()!.style.display = 'none';
  }
}
