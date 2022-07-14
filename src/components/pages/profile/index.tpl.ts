import {compile} from 'handlebars';

const source = `
  <section class="profile">
    <div class="profile__avatar">
      <img class="profile__avatar" src={{avatar}} alt="avatar"/>
    </div>
    <h2 class="profile__title">
      {{ first_name }}
    </h2> 

    <ul class="list">
      {{{textBlocks}}}
    </ul>

    <ul class="profile__menu">
      <li class="list__item">
        <a class="profile__link profile-edit" href="/profile-edit">
          Изменить данные
        </a>
      </li>
      <li class="list__item">
        <a class="profile__link profile-edit-pass" href="/profile-password">
          Изменить пароль
        </a>
      </li>
      <li class="list__item">
        <a class="profile__link profile__link_logout" href="/">
          Выйти
        </a>
      </li>
    </ul>

    <div class="back">
      {{{backButton}}}
    </div>
    {{{popup}}}
  </section>`
;

export const tmp = compile(source);

