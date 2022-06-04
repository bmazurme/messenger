import Box from "../../src/components/blocks/box/index";
import handlerSubmit from "../handlers/handlerSubmit";
import handlerCardClick from "../handlers/handlerCardClick";
import handlerValidation from "../handlers/handlerValidation";
import handlerPopupClick from "../handlers/handlerPopupClick";
import { indexContext } from "./indexContext";
import { error404Context } from "./error404Context";
import { error500Context } from "./error500Context";
import { signupContext } from "./signupContext";
import { signinContext } from "./signinContext";
import { profileContext } from "./profileContext";
import { profileEditContext } from "./profileEditContext";
import { profileEditPassContext } from "./profileEditPassContext";

import {
  INDEX,
  SIGN_UP,
  SIGN_IN,
  PROFILE,
  PROFILE_EDIT,
  PROFILE_PASSWORD,
  ERROR_NOT_FOUND,
  ERROR_INTERNAL_SERVER,
} from "./const";

export const routes = new Map([
  [
    INDEX, {
      block: new Box({ 
        components: indexContext,
        handlers: [handlerSubmit, handlerCardClick, handlerValidation, handlerPopupClick],
      }),
    }
  ],
  [
    SIGN_UP, {
      block: new Box({ 
        components: signupContext,
        handlers: [handlerSubmit, handlerValidation],
      }),
    }
  ],
  [
    SIGN_IN, {
      block: new Box({ 
        components: signinContext,
        handlers: [handlerSubmit, handlerValidation],
      }),
    }
  ],
  [
    PROFILE, {
      block: new Box({ 
        components: profileContext,
        handlers: [handlerSubmit, handlerValidation, handlerPopupClick],
      }),
    }
  ],
  [
    PROFILE_EDIT, {
      block: new Box({ 
        components: profileEditContext,
        handlers: [handlerSubmit, handlerValidation, handlerPopupClick],
      }),
    }
  ],
  [
    PROFILE_PASSWORD, {
      block: new Box({ 
        components: profileEditPassContext,
        handlers: [handlerSubmit, handlerValidation, handlerPopupClick],
      }),
    }
  ],
  [
    ERROR_NOT_FOUND, {
      block: new Box({
        components: error404Context,
      }),
    }
  ],
  [
    ERROR_INTERNAL_SERVER, {
      block: new Box({
        components: error500Context,
      }),
    }
  ],
]);
