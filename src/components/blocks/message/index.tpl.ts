import {compile} from 'handlebars';

const source = `
  <div class="message {{#if fromYou}} message_to {{/if}} "> 
    <div class="message__container 
      {{#if fromYou}} message__container_to {{/if}} 
      {{#if is_read}} message__time_read {{/if}}"
    > 
      <div class="message__content">
        {{content}}
        <time class="message__time">
          {{time}}
        </time> 
      </div> 
    </div> 
  </div>
`;

export const tmp = compile(source);
