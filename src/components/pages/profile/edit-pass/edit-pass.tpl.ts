export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>

    <h2 class="profile__title">{{ firstName.value }} </h2> 
    <form class="form profile__form form_save">
    <ul class="list">

      <li class="list__item">
        <p class="list__label">{{oldPassword.label}}</p>
        <input type="password" data-validation="password"
          autocomplete="on"
          name="oldPassword" 
          class="input list__value list__value_input" 
          value="********" placeholder="********"></input>
       </li>

      <li class="list__item">
        <p class="list__label">{{newPassword.label}}</p>
        <input type="password" data-validation="password"
          autocomplete="on"
          name="newPassword"
          class="input list__value
          list__value_input" 
          value="********" placeholder="********"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{newPasswordConfirm.label}}</p>
        <input type="password" name="newPassword" 
          data-validation="password" 
          autocomplete="on"
          class="input list__value list__value_input" 
          value="********" placeholder="********"></input>
      </li>
    </ul>
      {{{button}}}
    </form>

    <div class="back">
      <a href="/profile" class="back__button"></a>
    </div>

    {{{popup}}}
  </section>
`;
