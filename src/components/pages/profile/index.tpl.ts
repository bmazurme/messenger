export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>
    <h2 class="profile__title">
      {{ firstName.value }}
    </h2> 

    <ul class="list">
      {{{field}}}
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
      <a href="/messenger" class="back__button"></a>
    </div>
    {{{popup}}}
  </section>
`;
