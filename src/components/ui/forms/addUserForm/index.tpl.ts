import {compile} from 'handlebars';

export const source = `
  <div class="popup add-remove-user-popup">
    <div class="popup__container">
      <form class="form popup__form add_user" name="name">
        <h2 class="popup__title">
          Введите логин пользователя
        </h2>
        <input name="title" class="input popup__input_create 
          input_avatar add-remove-user" type="text" />
        {{{submitButton}}}
      </form>
    </div>
  </div>
`;

export const tmp = compile(source);
