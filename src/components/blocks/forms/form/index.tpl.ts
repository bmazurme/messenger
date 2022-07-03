import {compile} from 'handlebars';

export const source = `
  <form class="form form_avatar popup__form">
    <h2 class="popup__title">Загрузить файл</h2>
    <label class="popup__label" for="avatar">
      Выбрать файл на компьютере
    </label>
    <input class="popup__input input_avatar"
      id="avatar"
      type="file"
      name="avatar"
      accept="image/*"
      >
    </input>
    {{{submitButton}}}
    <span class="popup__error"></span>
  </form>                                                                            
`

export const tmp = compile(source);
