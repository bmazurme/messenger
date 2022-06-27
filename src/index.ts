import Router from './core/router';
import {
  chats,
  signUp,
  signIn,
  profile,
  profileEdit,
  profilePassword,
  errorNotFound,
  errorInternalServer,
} from './data/routes';

export const router = new Router('.app');

router
  .use(chats.path, chats.block)
  .use(signUp.path, signUp.block)
  .use(signIn.path, signIn.block)
  .use(profile.path, profile.block)
  .use(profileEdit.path, profileEdit.block)
  .use(profilePassword.path, profilePassword.block)
  .use(errorNotFound.path, errorNotFound.block)
  .use(errorInternalServer.path, errorInternalServer.block)
  .start();

