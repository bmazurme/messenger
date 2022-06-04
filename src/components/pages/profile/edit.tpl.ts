export const tmp = `
  <section class="profile">
    <div class="profile__avatar">
    </div>

    <h2 class="profile__title">{{ firstName.value }} </h2> 
    <form class="form profile__form form_save">
      <ul class="list">
        <li class="list__item">
          <p type="text" class="list__label">{{email.label}}</p>
          <input type="text" name="email" data-validation="email"
            class="input list__value list__value_input" 
            value="{{ email.value}}">
          </input>
        </li>
        <li class="list__item">
          <p class="list__label">{{login.label}}</p>
          <input type="text" name="login" data-validation="login"
            class="input list__value list__value_input" 
                 value="{{login.value}}">
          </input>
        </li>
        <li class="list__item">
          <p class="list__label">{{firstName.label}}</p>
          <input type="text" name="first_name" data-validation="name" 
            class="input list__value list__value_input" 
            value="{{firstName.value}}">
          </input>
        </li>
        <li class="list__item">
          <p class="list__label">{{secondName.label}}</p>
          <input type="text" name="second_name" data-validation="name"
            class="input list__value list__value_input" 
            value="{{secondName.value}}">
          </input>
        </li>
        <li class="list__item">
          <p class="list__label">{{displayName.label}}</p>
          <input type="text" name="display_name" data-validation="name"
            class="input list__value list__value_input" 
            value="{{displayName.value}}">
          </input>
        </li>
        <li class="list__item">
          <p class="list__label">{{phone.label}}</p>
          <input type="text" name="phone" data-validation="phone"
            class="input list__value list__value_input" 
            value="{{phone.value}}">
          </input>
        </li>
      </ul>
      {{{button}}}
    </form>
    
    <div class="back">
      <a href="/profile" class="back__button"></a>
    </div>

    <div class="popup">
      <div class="popup__container">
        <form class="popup__form">
          <h2 class="popup__title">Загрузить файл</h2>
          <label class="popup__label" for="avatar">Выбрать файл на компьютере</label>
          <input name="avatar" type="file" class="popup__input" id="avatar"></input>
          <button class="popup__button">Поменять</button>
          <span class="popup__error"></span>
        </form>
      </div>
    </div>
  </section>
`;
