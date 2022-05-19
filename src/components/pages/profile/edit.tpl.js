export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>

    <h2 class="profile__title">{{ firstName.value }} </h2> 
    <ul class="list">

      <li class="list__item">
        <p class="list__label">{{email.label}}</p>
        <input class="list__value list__value_input" value="{{ email.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{login.label}}</p>
        <input class="list__value list__value_input" value="{{login.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{firstName.label}}</p>
        <input class="list__value list__value_input" value="{{firstName.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{secondName.label}}</p>
        <input class="list__value list__value_input" value="{{secondName.value}}"></input>
       </li>

      <li class="list__item">
        <p class="list__label">{{displayName.label}}</p>
        <input class="list__value list__value_input" value="{{displayName.value}}"></input>
      </li>

      <li class="list__item">
        <p class="list__label">{{phone.label}}</p>
        <input class="list__value list__value_input" value="{{phone.value}}"></input>
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
      <div class="back__button"></div>
    </div>

  </section>
`;
