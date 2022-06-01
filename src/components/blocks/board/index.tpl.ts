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
            {{#each board}}
              {{{.}}}
            {{/each}}
          </div>
        </div>

        <div class="board__footer">

            <form class="footer">
              <button class="footer__button">
              </button>
              <input name="message" class="footer__input" placeholder="Сообщение">
              </input>
              <button type="submit" class="footer__button footer__button_send">
              </button>
            </form>

        </div>
      </div>
    </div>                                                    

`