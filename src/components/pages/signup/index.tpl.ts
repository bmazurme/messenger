export const tmp = `
<section class="identity">
  <h1 class="identity__title">
    Регистрация
  </h1>
  <form class="form identity__form" name="signup" novalidate>
    <div class="inbox" >
      <input
        class="input inbox__input inbox__input_email" 
        aria-invalid="true"
        type="text"
        autocomplete="off"
        id="email-input" required 
        data-validation="email"
      />
      <span class="inbox__bar email-input-bar"></span>
      <label class="inbox__label email-input-label" >
        Почта
      </label>
      <span class="inbox__input_error email-input-error"></span>
    </div>

    <div class="inbox" >
      <input
        class="input inbox__input inbox__input_login" 
        aria-invalid="true"
        type="text"
        autocomplete="off"
        data-validation="login"
        id="login-input" required 
      />
      <span class="inbox__bar login-input-bar"></span>
      <label class="inbox__label login-input-label" >
        Логин
      </label>
      <span class="inbox__input_error login-input-error"></span>
    </div>

    <div class="inbox" >
      <input
        class="input inbox__input inbox__input_first_name" 
        aria-invalid="true"
        type="text"
        autocomplete="off"
        id="first_name-input" required 
        data-validation="name"
      />
      <span class="inbox__bar first_name-input-bar"></span>
      <label class="inbox__label first_name-input-label" >
        Имя
      </label>
      <span class="inbox__input_error first_name-input-error"></span>
    </div>

    <div class="inbox" >
      <input
        class="input inbox__input inbox__input_second_name" 
        aria-invalid="true"
        type="text"
        autocomplete="off"
        id="second_name-input" required 
        data-validation="name"
      />
      <span class="inbox__bar second_name-input-bar"></span>
      <label class="inbox__label second_name-input-label" >
        Фамилия
      </label>
      <span class="inbox__input_error second_name-input-error"></span>
    </div>

    <div class="inbox" >
      <input
        class="input inbox__input inbox__input_phone" 
        aria-invalid="true"
        type="text"
        autocomplete="off"
        id="phone-input" required 
        data-validation="phone"
      />
      <span class="inbox__bar phone-input-bar"></span>
      <label class="inbox__label phone-input-label" >
        Телефон
      </label>
      <span class="inbox__input_error phone-input-error"></span>
    </div>

    <div class="inbox" >
      <input
        class="input inbox__input inbox__input_password" 
        aria-invalid="true"
        type="password"
        autocomplete="new-password"
        id="password-input" required 
        data-validation="password"
      />
      <span class="inbox__bar password-input-bar"></span>
      <label class="inbox__label password-input-label">
        Пароль
      </label>
      <span class="inbox__input_error password-input-error"></span>
    </div>

    <div class="inbox" >
    <input
      class="input inbox__input inbox__input_password_confirm" 
      aria-invalid="true"
      type="password"
      autocomplete="new-password"
      id="password_confirm-input" required 
      data-validation="password"
    />
    <span class="inbox__bar password_confirm-input-bar"></span>
    <label class="inbox__label password_confirm-input-label">
      Пароль
    </label>
    <span class="inbox__input_error password_confirm-input-error"></span>
  </div>
    {{{button}}}

    <a class="link" href="/signin">
      Войти
    </a>
  </form>
</section>
`;