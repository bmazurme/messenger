export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>

    <h2 class="profile__title">{{ firstName.value }} </h2> 
    <ul class="list">

      <li class="list__item">
        <p type="text" name="email" class="list__label">{{email.label}}</p>
        <input class="list__value list__value_input" value="{{ email.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{login.label}}</p>
        <input type="text" name="login" class="list__value list__value_input" value="{{login.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{firstName.label}}</p>
        <input type="text" name="first_name" class="list__value list__value_input" value="{{firstName.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{secondName.label}}</p>
        <input type="text" name="second_name" class="list__value list__value_input" value="{{secondName.value}}"></input>
       </li>

      <li class="list__item">
        <p class="list__label">{{displayName.label}}</p>
        <input type="text" name="display_name" class="list__value list__value_input" value="{{displayName.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{phone.label}}</p>
        <input type="text" name="phone" class="list__value list__value_input" value="{{phone.value}}"></input>
      </li>
    </ul>

    <button
      aria-label="Save"
      class="button button_submit"
      type="submit"
    >
      Сохранить
    </button>

    <div class="back">
      <a href="/" class="back__button"></a>
    </div>

  </section>
`;
