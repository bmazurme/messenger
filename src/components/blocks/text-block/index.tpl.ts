import { compile } from 'handlebars';

const source = `
  <li class='list__item'>
    <p class='list__label'>{{label}}</p>
    <p class='list__value'>{{value}}</p>
  </li>
`;

export const tmp = compile(source);
