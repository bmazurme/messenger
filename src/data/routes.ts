import Box from '../../src/components/blocks/box/index';
import handlerSubmit from '../handlers/handleSignupSubmit';
import handlerCardClick from '../handlers/handlerCardClick';
import handlerValidation from '../handlers/handlerValidation';
import handlerPopupClick from '../handlers/handlerPopupClick';
import handleSigninSubmit from '../handlers/handleSigninSubmit';
import handleSignupSubmit from '../handlers/handleSignupSubmit';
import handleLogout from '../handlers/handleLogoutSubmit';
import handleEditProfileSubmit from '../handlers/handleEditProfileSubmit';
import {indexContext} from './contexts/indexContext';
import {error404Context} from './contexts/error404Context';
import {error500Context} from './contexts/error500Context';
import {profileEditContext} from './contexts/profileEditContext';
import {profileEditPassContext} from './contexts/profileEditPassContext';
import { profileContext } from '../components/pages/profile/index';
import { signinContext } from '../components/pages/signin/index';
import { signupContext } from '../components/pages/signup/index';

import {
  INDEX,
  SIGN_UP,
  SIGN_IN,
  PROFILE,
  PROFILE_EDIT,
  PROFILE_PASSWORD,
  ERROR_NOT_FOUND,
  ERROR_INTERNAL_SERVER,
} from './const';

export const chats: any = {
  path: INDEX, 
  block: new Box({ 
    components: indexContext,
    handlers: [handlerSubmit, handlerCardClick, handlerValidation, handlerPopupClick],
  }),
};

export const signUp: any = {
  path: SIGN_UP, 
  block: new Box({ 
    components: signupContext,
    handlers: [handleSignupSubmit, handlerValidation],
  }),
};

export const signIn: any = {
  path: SIGN_IN, 
  block: new Box({ 
    components: signinContext,
    handlers: [handleSigninSubmit, handlerValidation],
  }),
};

export const profile: any = {
  path: PROFILE, 
  block: new Box({ 
    components: profileContext,
    handlers: [handlerSubmit, handlerValidation, handlerPopupClick, handleLogout],
  }),
};

export const profileEdit: any = {
  path: PROFILE_EDIT, 
  block: new Box({ 
    components: profileEditContext,
    handlers: [handleEditProfileSubmit, handlerValidation, handlerPopupClick],
  }),
};

export const profilePassword: any = {
  path: PROFILE_PASSWORD, 
  block: new Box({ 
    components: profileEditPassContext,
    handlers: [handlerSubmit, handlerValidation, handlerPopupClick],
  }),
};

export const errorNotFound: any = {
  path: ERROR_NOT_FOUND, 
  block: new Box({ 
    components: error404Context,
  }),
};

export const errorInternalServer: any = {
  path: ERROR_INTERNAL_SERVER, 
  block: new Box({ 
    components: error500Context,
  }),
};
