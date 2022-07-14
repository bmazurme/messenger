import Block from './block';
import Router from './router';
import { ISign } from '../components/pages/signin/ISign';
import { Button } from '../components/ui/button';
import {compile} from 'handlebars';
import { expect } from 'chai';
import Route from './route';
import { ERROR_NOT_FOUND } from '../utils/constants';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const source = `
  <section class="identity">
    <h1 class="identity__title"> Вход </h1>
  </section>
`;
const tmp = compile(source);

class Error404 extends Block {
  constructor() {
    super('main', {})
  }
  render() {
    return compile(source)({
      code: 404,
      text: 'Не туда попали',
      link: 'Назад к чатам'
    });
  }
}

class Signin extends Block<ISign> {
  constructor() {
    super('main', {
      inboxes: '',
      handlers: [],
      submitButton: new Button({
        class: 'button button_signup button_submit',
        type: 'submit',
        text: 'Зарегистрироваться',
        events: {}
      }),
    });
  }
  render() {
    return tmp(this.props);
  }
}

class Signup extends Block<ISign> {
  constructor() {
    super('main', {
      inboxes: '',
      handlers: [],
      submitButton: new Button({
        class: 'button button_signup button_submit',
        type: 'submit',
        text: 'Зарегистрироваться',
        events: {}
      }),
    });
  }
  render() {
    const {inboxes, submitButton} = this.props;
    return tmp({
      inboxes,
      submitButton: submitButton.render()
    });
  }
}

const dom = new JSDOM(
  '<html><body><div id="app"></div></body></html>',
  { url: 'http://localhost' },
  { runScripts: 'test' },
);

global.document = dom.window.document;
global.window = dom.window;
if (dom.window.document.defaultView) {
  global.DocumentFragment = dom.window.document.defaultView.DocumentFragment;
}

describe('Router', function () {
  const router = new Router('#app');
  router
    .use('/', Signin)
    .use('/signup', Signup)
    .use(ERROR_NOT_FOUND, Error404)
    .start();

  it('Should add "/signin" page to routes list', () => {
    expect(router.getRoute('/')).instanceOf(Route);
  });

  it('Should add "/signup" page to routes list', () => {
    expect(router.getRoute('/signup')).instanceOf(Route);
  });

  it('Should go to Signin page', () => {
    router.go('/');
    expect(router.getCurrentRoute()?.block).instanceOf(Signin);
  });

  it('Should go to Signup page', () => {
    router.go('/signup');
    expect(router.getCurrentRoute()?.block).instanceOf(Signup);
  });

  it('and affect history length', () => {
    const history: History = router.history!;
    const length: number = history.length;
    router.go('/');
    expect(window.history.length).equals(length + 1);
  });
});
