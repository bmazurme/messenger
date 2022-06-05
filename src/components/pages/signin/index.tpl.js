export const tmp = `
<section class="identity">
  <h1 class="identity__title">
    Вход
  </h1>
  <form class="identity__form identity_signin">
    <div class="inbox" >
      <input
        class="inbox__input inbox__input_login" 
        aria-invalid="true"
        type="text"
        autocomplete="off"
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
        class="inbox__input inbox__input_password" 
        aria-invalid="true"
        type="password"
        autocomplete="new-password"
        id="password-input" required 
      />
      <span class="inbox__bar password-input-bar"></span>
      <label class="inbox__label password-input-label">
        Пароль
      </label>
      <span class="inbox__input_error password-input-error"></span>
    </div>
    <button
      class="button button_submit"
      type="submit"
    >
      Авторизоваться
    </button>
    <a class="link" href="/signup">
      Нет аккаунта?
    </a>
  </form>
</section>
`;