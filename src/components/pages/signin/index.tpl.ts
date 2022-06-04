export const tmp = `
  <section class="identity">
    <h1 class="identity__title">
      Вход
    </h1>
    <form class="form identity__form identity_signin"  name="signin" novalidate>
      <div class="inbox" >
        <input
          class="input inbox__input inbox__input_login" 
          type="text"
          autocomplete="off"
          id="login-input" required 
          data-validation="login"
        />
        <span class="inbox__bar login-input-bar"></span>
        <label class="inbox__label login-input-label" >
          Логин
        </label>
        <span class="input inbox__input_error login-input-error"></span>
      </div>

      <div class="inbox" >
        <input
          class="input inbox__input inbox__input_password" 
          type="password"
          autocomplete="on"
          id="password-input" required
          data-validation="password"
        />
        <span class="inbox__bar password-input-bar"></span>
        <label class="inbox__label password-input-label">
          Пароль
        </label>
        <span class="input inbox__input_error password-input-error"></span>
      </div>
        {{{button}}}
      <a class="link" href="/signup">
        Нет аккаунта?
      </a>
    </form>
  </section>
`;