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
          <p class="list__label">{{first_name.label}}</p>
          <input type="text" name="first_name" data-validation="name" 
            class="input list__value list__value_input" 
            value="{{first_name.value}}">
          </input>
        </li>

        <li class="list__item">
          <p class="list__label">{{second_name.label}}</p>
          <input type="text" name="second_name" data-validation="name"
            class="input list__value list__value_input" 
            value="{{second_name.value}}">
          </input>
        </li>

        <li class="list__item">
          <p class="list__label">{{display_name.label}}</p>
          <input type="text" name="display_name" data-validation="name"
            class="input list__value list__value_input" 
            value="{{display_name.value}}">
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

    {{{popup}}}
  </section>
`;
