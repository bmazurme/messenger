import Block from './block';
import render from './render';

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

class Route {
  private _pathname: string;
  private _blockClass: typeof Block;
  private _block: Block | null;
  private _props: any;

  constructor(pathname: string, view: typeof Block, props: object) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }
  navigate(pathname: string) {
    // alert(pathname);
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }
  leave() {
    if (this._block) {
      this._block.hide();
    }
  }
  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }
  render() {
    console.log(this._props.rootQuery);
    console.log(this._blockClass);
    render(this._props.rootQuery, this._blockClass);
  }
}

export default Route;
