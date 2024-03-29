/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory, createMemoryHistory } from 'history';

import {
  authApi, usersApi, chatApi, resourcesApi,
} from './api';
import chatReducer from './slices/chatSlice';
import userReducer from './slices/userSlice';
import messagesReducer from './slices/messagesSlice';
import tokenReducer from './slices/tokenSlice';
import { isServer } from '../utils';

export * from './api/authApi/endpoints';
export * from './api/userApi/endpoints';
export * from './api/chatApi/endpoints';
export * from './api/resourcesApi/endpoints';
export * from './slices';

// global redeclared types
declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
  }
}

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: !isServer ? createBrowserHistory() : createMemoryHistory(),
});

export const store = configureStore({
  reducer: {
    router: routerReducer,
    // Add the generated reducer as a specific top-level slice
    chat: chatReducer,
    user: userReducer,
    messages: messagesReducer,
    token: tokenReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      authApi.middleware,
      usersApi.middleware,
      chatApi.middleware,
      resourcesApi.middleware,
      // api.middleware,
      routerMiddleware,
    ),
});

export const history = createReduxHistory(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
