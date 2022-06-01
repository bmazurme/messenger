export const tmp = `
      <div class="chat__sidebar">
        <div class="sidebar">
          <a href="/profile" class="sidebar__profile">
            Профиль <span class="sidebar__icon"></span>
          </a>
          <input class="sidebar__search" placeholder="Поиск">
          </input>

            {{#each sidebar}}
              {{{.}}}
            {{/each}}
          
        </div>
      </div>

`