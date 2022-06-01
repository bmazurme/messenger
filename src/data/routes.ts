import signup from "../components/pages/signup";
import signin from "../components/pages/signin";
import profile from "../components/pages/profile";
import profileEdit from "../components/pages/profile/edit";
import profileEditPass from "../components/pages/profile/edit-pass";
import error from "../components/pages/error";
import sidebar from "../components/blocks/sidebar/index";
import board from "../components/blocks/board/index";
import chat from "../components/pages/chat";
import { sidebarContext } from "./sidebarContext";
import { profileContext } from "./profileContext";
import { profileEditContext } from "./profileEditContext";
import { profileEditPassContext } from "./profileEditPassContext";
import { error404Context } from "./error404Context";
import { error500Context } from "./error500Context";
import { messageContext } from "./messageContext";

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
    '/board',
    {
      view: board,
      context: messageContext
      ,
    }
  ],
  [
    INDEX,
    {
      view: signin,
      context: {}
    }
  ],
  [
    INDEX,
    {
      view: chat,
      context: [
        {
          view: sidebar,
          context: sidebarContext,
        },
        {
          view: board,
          context: messageContext,
        },
      ],
    }
  ],
  [
    SIGN_UP,
    {
      view: signup,
      context: {}
    }
  ],
  [
    SIGN_IN,
    {
      view: signin,
      context: {}
    }
  ],
  [
    PROFILE,
    {
      view: profile,
      context: profileContext,
    },
  ],
  [
    PROFILE_EDIT,
    {
      view: profileEdit,
      context: profileEditContext,
    }
  ],
  [
    PROFILE_PASSWORD,
    {
      view: profileEditPass,
      context: profileEditPassContext,
    }
  ],
  [
    ERROR_NOT_FOUND,
    {
      view: error,
      context: error404Context,
    }
  ],
  [
    ERROR_INTERNAL_SERVER,
    {
      view: error,
      context: error500Context,
    }
  ],
]);
