import { compile } from 'handlebars';

const source = `
  <section class="identity">
    <h1 class="identity__title"> Вход </h1>
    <form class="form identity__form identity_signin" action="">
      {{{inboxes}}}
      {{{submitButton}}}
      <a href="/signup" class="link link-signup">Нет аккаунта?</a>
    </form>
  </section>
`;

export const tmp = compile(source);
