import {compile} from 'handlebars';

export const source = `
  <div class="popup">
    <div class="popup__container">
      {{{form}}}
    </div>
  </div>                                                                               
`

export const tmp = compile(source);
