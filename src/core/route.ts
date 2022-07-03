import Block from './block';
import {renderBlock} from './render';

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

class Route {
  private _pathname: string;
  readonly _blockClass: any;
  private _block: Block | null;
  private _props: { [key: string]: any };

  constructor(pathname: string, view: any, props: {}) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    this._block = new this._blockClass();
    renderBlock(this._props.rootQuery, this._block!);
  }
}

export default Route;
