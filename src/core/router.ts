
import Route from './route';
// import Block from './block';
import { ERROR_NOT_FOUND } from '../utils/constants';

class Router {
  private routes: Route[] | undefined;
  public history: History | undefined;
  private _currentRoute: Route | null | undefined;
  private _rootQuery: string | undefined;
  private static _instance: Router;

  constructor(rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    Router._instance = this;
  }

  use(pathname: string, block: any) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes!.push(route);
    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return this.go(ERROR_NOT_FOUND);
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route!.render();
  }

  go(pathname: string) {
    this.history!.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history!.back();
    this._onRoute(window.location.pathname);
  }

  forward() {
    this.history!.forward();
    this._onRoute(window.location.pathname);
  }

  getRoute(pathname: string) {
    return this.routes!.find(route => route.match(pathname));
  }

  getCurrentRoute() {
    return this._currentRoute;
  }
}

export default Router;
