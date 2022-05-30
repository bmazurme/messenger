export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>

    <h2 class="profile__title">{{ firstName.value }} </h2> 
    <form class="profile__form form_save">
    <ul class="list">

      <li class="list__item">
        <p class="list__label">{{oldPassword.label}}</p>
        <input type="password" 
               name="oldPassword" 
               class="list__value list__value_input" 
               value="********" placeholder="********"></input>
       </li>

      <li class="list__item">
        <p class="list__label">{{newPassword.label}}</p>
        <input type="password" 
               name="newPassword"
               class="list__value
               list__value_input" 
               value="********" placeholder="********"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{newPasswordConfirm.label}}</p>
        <input type="password" name="newPassword" 
               class="list__value list__value_input" 
               value="********" placeholder="********"></input>
      </li>
    </ul>

    <button
      aria-label="Save"
      class="button button_submit"
      type="submit"
    >
      Сохранить
    </button>
    </form>

    <div class="back">
      <a href="/profile" class="back__button"></a>
    </div>

  </section>
`;
