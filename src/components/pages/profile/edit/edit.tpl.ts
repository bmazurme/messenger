import { compile } from 'handlebars';

const source = `
<section class="profile">
  <div class="profile__avatar">
    <img class="profile__avatar" src={{avatar}} alt="avatar"/>
  </div>
  <h2 class="profile__title"> {{ first_name }} </h2> 
    <form class="form profile__form form_save" action="" id="form-root">
      <ul class="list">
      {{{inboxes}}}
      </ul>
      {{{submitButton}}}
    </form>
   <div class="back">
    <a href="/profile" class="back__button"></a>
  </div>
  {{{popup}}}
</section>`;

export const tmp = compile(source);
