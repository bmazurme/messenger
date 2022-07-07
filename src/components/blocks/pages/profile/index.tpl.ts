import {compile} from 'handlebars';

const source = `
  <section class="profile">
    <div class="profile__avatar">
    </div>
    <h2 class="profile__title">
      {{ first_name }}
    </h2> 

    <ul class="list">
      <li class="list__item">
        <p class="list__label">Почта</p>
        <p class="list__value">{{email}}</p>
      </li>
      <li class="list__item">
        <p class="list__label">Логин</p>
        <p class="list__value">{{login}}</p>
      </li>
      <li class="list__item">
        <p class="list__label">Имя</p>
        <p class="list__value">{{first_name}}</p>
      </li>
      <li class="list__item">
        <p class="list__label">Фамилия</p>
        <p class="list__value">{{second_name}}</p>
      </li>
      <li class="list__item">
        <p class="list__label">Имя в чате</p>
        <p class="list__value">{{display_name}}</p>
      </li>
      <li class="list__item">
        <p class="list__label">Телефон</p>
        <p class="list__value">{{phone}}</p>
      </li>
    </ul>

    <ul class="profile__menu">
      <li class="list__item">
        <a class="profile__link" href="/profile-edit">
          Изменить данные
        </a>
      </li>
      <li class="list__item">
        <a class="profile__link" href="/profile-password">
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
      <a href="/chats" class="back__button"></a>
    </div>
    {{{popup}}}
  </section>`
;

export const tmp = compile(source);

