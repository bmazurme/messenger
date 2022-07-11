import {compile} from 'handlebars';

const source = `
  <div class="header">
    <div class="header__image"></div>
    <p class="header__text"> {{ chatName }} </p>
    <button type="button" class="header__toggle toggle_button" />
    <button type="button" class="header_hidden header__link add_user" />
    <button type="button" class="header_hidden header__delete remove_user" />
  </div> 
`;

export const tmp = compile(source);
