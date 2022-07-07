import {compile} from 'handlebars';

const source = `
  <div class="inbox" >
    <input
      name={{name}}
      class="input {{inputStyle}}" 
      type="{{inputType}}"
      autocomplete="{{inputAutocomplete}}"
      id="{{inputId}}" required 
      data-validation="{{inputValidation}}"
    />
    <span class="{{spanStyle}}"></span>
    <label class="{{labelClass}}" >
      {{labelText}}
    </label>
    <span class="{{errorStyle}}"></span>
  </div>
`;

export const tmp = compile(source);
