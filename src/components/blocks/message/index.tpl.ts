import {compile} from 'handlebars';

const source = `
  <div class="message {{#if fromYou}} message_to {{/if}} "> 
    <div class="message__container {{#if is_read}} message__time_read {{/if}}"> 
      <div class="message__content">
          {{content}}
        <div class="message__time">
          {{time}}
        </div> 
      </div> 
    </div> 
  </div>
`;

export const tmp = compile(source);
