import { configureStore } from '@reduxjs/toolkit';

import { postsSlice } from 'entities/posts/model/postsSlice';
import { postsApi } from 'entities/posts/api/postsRedux';

export const store = configureStore({
    reducer: { [postsSlice.name]: postsSlice.reducer, [postsApi.reducerPath]: postsApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});

export type TAppRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
