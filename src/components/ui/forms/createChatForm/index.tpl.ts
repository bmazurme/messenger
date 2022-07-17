import { compile } from 'handlebars';

export const source = `
    <form class="form popup__form create-chat_form">
      <h2 class="popup__title">
        Введите название чата
      </h2>
      <input name="title" class="input popup__input_create input_avatar" type="text" />
    {{{submitButton}}}
</form>
`;

export const tmp = compile(source);
