import {compile} from 'handlebars';

const source = ` 
  <section class="identity">
    <h1 class="identity__title">Регистрация</h1>
    <form class="form identity__form" action="" id="form-root">
      {{{inboxes}}}
      {{{submitButton}}}
      <a href="/" class="link link-signin">Войти</a>
    </form>
  </section>
`;

export const tmp = compile(source);
