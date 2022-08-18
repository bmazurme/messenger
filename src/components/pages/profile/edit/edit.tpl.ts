import {compile} from 'handlebars';
import {source as inputTemplate} from '../../../ui/input/index.tpl';

const source = `
<section class="profile">
  <div class="profile__avatar">
    <img class="profile__avatar" src={{avatar}} alt="avatar"/>
  </div>
  <h2 class="profile__title">{{ first_name.value }} </h2> 
    <form class="form profile__form form_save" action="" id="form-root">
      <ul class="list">
      {{{inputs}}}
        {{#each inputs}}
          ${inputTemplate}
        {{/each}}
      </ul>
      {{{submitButton}}}
    </form>
   <div class="back">
    <a href="/profile" class="back__button"></a>
  </div>
  {{{popup}}}
</section>`;

export const tmp = compile(source);
