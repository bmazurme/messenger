import {compile} from 'handlebars';

export const source = `
  <div class="popup {{selector}}">
    <div class="popup__container">
      {{{form}}}
    </div>
  </div>                                                                               
`;

export const tmp = compile(source);
