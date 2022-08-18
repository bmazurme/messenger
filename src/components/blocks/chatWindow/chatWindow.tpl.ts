import {compile} from 'handlebars';

const source = `
  <div class="board__header">
    {{{header}}}
  </div>

  <div class="board__main">
    {{{messageList}}}
  </div>
  <div class="board__footer">
    {{{boardForm}}}
  </div>
  {{{addPopup}}}
  {{{removePopup}}}
`;

export const tmp = compile(source);
