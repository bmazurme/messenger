import {compile} from 'handlebars';

const source = `
  <div class="board__header">
    <div class="header">
      <div class="header__image"></div>
      <p class="header__text"> {{ chatName }} </p>
      <button type="button" class="header__link edit_chat">
    </div>      
  </div>

  <div class="board__main">
    {{{chatHistory}}}
  </div>
    
  <div class="board__footer">
    <form class="form footer">
      <input name="message" 
        data-validation="message"
        class="input footer__input" 
        type="text" placeholder="Сообщение">
      <button type="button" class="button footer__button footer__button_attach" />
      <button type="submit" class="button footer__button footer__button_send" />
    </form>
  </div>
  {{{popup}}}
`;

export const tmp = compile(source);
