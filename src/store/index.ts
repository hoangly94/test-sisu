import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/api';
import { pageApi } from './page/api';
import { postApi } from './post/api';
import { resourceApi } from './resource/api';
import { subscriptionApi } from './subscription/api';
import authSlice from './auth';
import pageSlice from './page';
import postSlice from './post';
import resourceSlice from './resource';
import subscriptionSlice from './subscription';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [resourceApi.reducerPath]: resourceApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    auth: pageSlice,
    page: pageSlice,
    post: postSlice,
    resource: resourceSlice,
    subscription: subscriptionSlice,
  },

  // Thêm cấu hình middleware để dùng được các chức năng của RTK Query như caching, invalidation, polling, ...
  middleware: (gDM) => gDM()
  .concat([
    authApi.middleware, 
    pageApi.middleware, 
    postApi.middleware,
    resourceApi.middleware,
    subscriptionApi.middleware
  ])
});


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>