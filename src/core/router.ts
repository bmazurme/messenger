import Route from './route';
import Block from './block';
import render from './render';
import { ERROR_NOT_FOUND } from '../data/const';

class Router {
  public routes: Route[];
  public history: History;
  private _currentRoute: Route | null;
  private _rootQuery: string;
  static __instance: Router;
  
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((event: { currentTarget: { location: { pathname: string; }; }; }) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname) 
      ? this.getRoute(pathname)
      : this.getRoute(ERROR_NOT_FOUND);
      
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }    
    this._currentRoute = route;
    render('.app', route)
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default Router;
