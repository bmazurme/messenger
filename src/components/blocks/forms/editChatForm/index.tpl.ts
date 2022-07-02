import {compile} from 'handlebars';

export const source = `
  <div class="popup">
    <div class="popup__container">
      <form class="form popup__form edit-chat_form">
        {{{addButton}}}
        {{{removeButton}}}
        {{{newButton}}}
      </form>
    </div>
  </div>
`

export const tmp = compile(source);
