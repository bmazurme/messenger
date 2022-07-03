import {compile} from 'handlebars';

const source = `
  <section class="chat">
    <div class="chat__sidebar">
      <div class="sidebar">
        <a href="/profile" class="sidebar__profile">
          Профиль<span class="sidebar__icon"></span>
        </a>
        <input class="sidebar__search" 
          type="search" placeholder="Поиск">
        </input>
        <button class="button button_create-chat">
          Создать чат
        </button>
        
        {{{card}}}

        {{#if chats}}
          {{#each chats}}
            <div class="card" data-chat-id={{id}}>
              
            {{#if avatar}}
              <img src={{avatar}} alt="ava"/>
              {{else}}
              <div class="card__image"></div>
            {{/if}}
              <h3 class="card__title"> {{title}} </h3>
              <p class="card__text"> 
                {{#if fromYou}} <span class="is-from-you">Вы: </span> {{/if}} 
                {{ last_message.content }}
              </p>  
              <p class="card__time"> {{ last_message.time }} </p>
              {{#if unread_count}}
                <p class="card__counter">{{unread_count}}</p>
              {{/if}}
            </div>
            {{/each}}
          {{else}}

          <div class="no-chats">
            У вас ещё нет чатов
          </div>
        {{/if}}
      </div>
    </div>

    <div class="board">
      <div class="board__choose">
        Выберите чат, чтобы отправить сообщение
      </div>
    </div>
    {{{popup}}}
    {{{editPopup}}}
  </section>`;

export const tmp = compile(source);
