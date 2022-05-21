export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>
    <h2 class="profile__title">{{ firstName.value }}</h2> 
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
        <a class="profile__link profile__link_logout" href="/signin">Выйти</a>
      </li>
    </ul>
    <div class="back">
      <a href="/" class="back__button"></a>
    </div>
    <div class="popup">
      <div class="popup__container">
        <form class="popup__form">
          <h2 class="popup__title">Загрузить файл</h2>
          <label class="popup__label" for="avatar">Выбрать файл на компьютере</label>
          <input name="avatar" type="file" class="popup__input" id="avatar"></input>
          <button class="popup__button">Поменять</button>
          <button class="popup__error"></button>
        </form>
      </div>
    </div>
  </section>
`;
