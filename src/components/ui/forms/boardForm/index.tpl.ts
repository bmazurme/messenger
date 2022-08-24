import { compile } from 'handlebars';

export const source = `
  <form class="form footer" name="message">
    <input name="message" 
      data-validation="message"
      class="input footer__input" 
      type="text" placeholder="Сообщение"
    >
    {{{attachButton}}}
    {{{submitButton}}}
  </form>                                                    
`;

export const tmp = compile(source);
