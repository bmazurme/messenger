import { compile } from 'handlebars';

const source = `
  <li class="{{boxClass}}" >
    <input
      name={{name}}
      class="input {{inputStyle}}" 
      type="{{inputType}}"
      autocomplete="{{inputAutocomplete}}"
      id="{{inputId}}" required 
      data-validation="{{inputValidation}}"
      {{#if value}}value="{{value}}"{{/if}}
      {{#if placeholder}}placeholder="{{placeholder}}"{{/if}}
    />
    <label class="{{labelClass}}" >
      {{labelText}}
    </label>
    {{#if spanStyle}}<span class="{{spanStyle}}"></span>{{/if}}
    {{#if errorStyle}}<span class="{{errorStyle}}"></span>{{/if}}
  </li>
`;

export const tmp = compile(source);
