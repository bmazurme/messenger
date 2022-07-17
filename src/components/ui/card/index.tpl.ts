import { compile } from 'handlebars';

const source = `
  <div class="card" data-chat-id={{id}}>
    <div class="card__image"></div>
    <h3 class="card__title"> {{title}} </h3>
    <p class="card__text"> 
    {{#if fromYou}}
      <span class="card__from-you">Вы: </span> 
    {{/if}} 
    {{ last_message.content }}
    </p>  
    <time class="card__time"> {{ time }} </time>
    {{#if unread_count}}
      <p class="card__counter">{{unread_count}}</p>
    {{/if}}
  </div>
`;

export const tmp = compile(source);
