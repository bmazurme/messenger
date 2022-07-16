import Block from './block';
import { renderBlock } from './render';

class Route {
  private _pathname: string;
  readonly _blockClass: Block|any;
  public block: Block | null;
  private _props: { [key: string]: string };

  constructor(pathname: string, view: Block, props: {}) {
    this._pathname = pathname;
    this._blockClass = view;
    this.block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    this.block = new this._blockClass();
    renderBlock(this._props.rootQuery, this.block!);
  }
}

export default Route;
