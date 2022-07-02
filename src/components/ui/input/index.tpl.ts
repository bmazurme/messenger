import {compile} from 'handlebars';

export const source = `
  <li class="list__item">
    <p type="text" class="list__label">{{label}}</p>
    <input 
      name="{{name}}"
      class="{{inputClass}}" 
      type="{{type}}" 
      {{#if placeholder}}placeholder="{{placeholder}}"{{/if}}
      {{#if value}}value="{{value}}"{{/if}}
      ></input>
  </li>`;

export const tmp = compile(source);
