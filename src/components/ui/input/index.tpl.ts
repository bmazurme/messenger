import { compile } from 'handlebars';

export const source = `
  <li class="list__item">
    <p class="list__label">{{label}}</p>
    <input 
      name="{{name}}"
      class="{{inputClass}}" 
      type="{{type}}" 
      data-validation="{{validationType}}"
      {{#if placeholder}}placeholder="{{placeholder}}"{{/if}}
      {{#if value}}value="{{value}}"{{/if}}
    />
  </li>`;

export const tmp = compile(source);
