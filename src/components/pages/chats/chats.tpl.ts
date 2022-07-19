import { compile } from 'handlebars';

const source = `
  <section class="chat">
    <div class="chat__sidebar">
      <div class="sidebar">
        <a href="/profile" class="sidebar__profile">
          Профиль<span class="sidebar__icon"></span>
        </a>
        <input class="sidebar__search" 
          type="search" placeholder="Поиск">
        </input>
        {{{submitButton}}}
        {{{cards}}}
      </div>
    </div>
    <div class="board">
      <div class="board__choose">
        Выберите чат, чтобы отправить сообщение
      </div>
    </div>
    {{{popup}}}
    {{{editPopup}}}
  </section>`;

export const tmp = compile(source);
