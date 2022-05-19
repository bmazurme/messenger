export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>


    <h2 class="profile__title">{{ firstName.value }} </h2> 
    <ul class="list">

      <li class="list__item">
        <p class="list__label">{{email.label}}</p>
        <p class="list__value">{{ email.value}}</p>
      </li>

      <li class="list__item">
        <p class="list__label">{{login.label}}</p>
        <p class="list__value">{{login.value}}</p>
      </li>

      <li class="list__item">
        <p class="list__label">{{firstName.label}}</p>
        <p class="list__value">{{firstName.value}}</p>
      </li>

      <li class="list__item">
        <p class="list__label">{{secondName.label}}</p>
        <p class="list__value">{{secondName.value}}</p>
       </li>

      <li class="list__item">
        <p class="list__label">{{displayName.label}}</p>
        <p class="list__value">{{displayName.value}}</p>
      </li>

      <li class="list__item">
        <p class="list__label">{{phone.label}}</p>
        <p class="list__value">{{phone.value}}</p>
      </li>

    </ul>

    <ul class="profile__menu">
      <li class="list__item">
        <a class="profile__link" href="/profile-edit">Изменить данные</a>
      </li>
      <li class="list__item">
        <a class="profile__link" href="/profile-password">Изменить пароль</a>
      </li>
      <li class="list__item">
        <a class="profile__link profile__link_logout" href="/">Выйти</a>
      </li>
    </ul>

    <div class="back">
      <div class="back__button"></div>
    </div>

  </section>
`;
