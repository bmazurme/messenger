import './index.css';

import Router from './core/router';

import { Signin } from './components/pages/signin';
import { Signup } from './components/pages/signup';
import { ChangePassword } from './components/pages/profile/edit-pass/edit-pass';
import { ChangeProfileInfo } from './components/pages/profile/edit/edit';
import { Chats } from './components/pages/chats/chats';
import { Profile } from './components/pages/profile';
import { Error404 } from './components/pages/error/error404';
import { Error500 } from './components/pages/error/error500';

import { Urls } from './utils/constants';

export const router = new Router('.app');
  router
    .use(Urls.SIGN.IN, Signin)
    .use(Urls.SIGN.UP, Signup)
    .use(Urls.PROFILE.INDEX, Profile)
    .use(Urls.PROFILE.EDIT, ChangeProfileInfo)
    .use(Urls.PASSWORD.EDIT, ChangePassword)
    .use(Urls.CHATS.INDEX, Chats)
    .use(Urls.ERROR.NOT_FOUND, Error404)
    .use(Urls.ERROR.INTERNAL_SERVER, Error500)
    .start();
