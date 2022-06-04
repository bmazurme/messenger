export const tmp = `
      <div class="board">
        <div class="board__header">
          <div class="header">
            <div class="header__image">
            </div>
            <p class="header__text">
              Вадим
            </p>
            <a href="/" class="header__link">
            </a>
          </div>
        </div>

        <div class="board__main">
          <div class="feed">
            {{{message}}}
          </div>
        </div>

        <div class="board__footer">
          <form class="form footer">
            <input name="message" data-validation="message" 
                   class="input footer__input" 
                   placeholder="Сообщение">
            </input>
              {{{button}}}
            </button>
          </form>

        </div>
      </div>
    </div>                                                    

`