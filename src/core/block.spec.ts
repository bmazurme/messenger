import { expect } from 'chai';
import { compile } from 'handlebars';
import Block from './block';

const source = '<div>{{text}}</div>';
const tmp = compile(source);

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`
  <html>
    <head>
      <link href="./index.css" rel="stylesheet" />
    </head>
    <body>
      <div class="app" id="app"></div>
      <script src="./index.ts" type="module"></script>
    </body>
  </html>
`,
  { url: 'http://localhost' },
  { runScripts: 'dangerously' },
);

global.document = dom.window.document;
global.window = dom.window;
if (dom.window.document.defaultView) {
  global.DocumentFragment = dom.window.document.defaultView.DocumentFragment;
}

export class Component extends Block {
  constructor(props: any) {
    super('div', {
      text: props.text,
    });
  }
  render() {
    return tmp(this.props);
  }
}

describe('Component', () => {
  const component: any = new Component({ text: 'Test' });

  it('should render content', () => {
    expect(component.getContent().textContent).equals('Test');
  });

  it('should change content', () => {
    component.setProps({ text: 'New test' });
    expect(component.getContent().textContent).equals('New test');
  });
});
