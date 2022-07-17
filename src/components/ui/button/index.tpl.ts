import { compile } from 'handlebars';

const source = `
  <button class="{{class}}" 
    {{#if type}}type="{{type}}"{{/if}}>
      {{text}}
  </button>`;

export const tmp = compile(source);
