import { compile } from 'handlebars';

export const source = `
  <div class="error">
    <h1 class="error__code"> {{ code }} </h1>
    <p class="error__text"> {{ text }} </p>
    <a class="error__link" href="/chats"> {{ link }} </a>
  </div>
`;

export const tmp = compile(source);
