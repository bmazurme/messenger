import './index.css';
import Router from './core/router';
import { Signin } from './components/blocks/pages/signin';
import { Signup } from './components/blocks/pages/signup';
import { ChangePassword } from './components/blocks/pages/profile/edit-pass/edit-pass';
import { ChangeProfileInfo } from './components/blocks/pages/profile/edit/edit';
import { Chats } from './components/blocks/pages/chats/chats';
import { Profile } from './components/blocks/pages/profile';
import { Error404 } from './components/blocks/pages/error/error404';
import { Error500 } from './components/blocks/pages/error/error500';

import {
  SIGN_IN,
  SIGN_UP,
  PROFILE_PASSWORD,
  PROFILE_EDIT,
  CHATS,
  PROFILE,
  ERROR_NOT_FOUND,
  ERROR_INTERNAL_SERVER,
} from './utils/constants';

export const router = new Router('.app');
  router
    .use(SIGN_IN, Signin)
    .use(SIGN_UP, Signup)
    .use(PROFILE, Profile)
    .use(PROFILE_EDIT, ChangeProfileInfo)
    .use(PROFILE_PASSWORD, ChangePassword)
    .use(CHATS, Chats)
    .use(ERROR_NOT_FOUND, Error404)
    .use(ERROR_INTERNAL_SERVER, Error500)
    .start();
