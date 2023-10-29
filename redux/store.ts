import { configureStore } from '@reduxjs/toolkit';

import { postsSlice } from 'entities/posts/model/postsSlice';

export const store = configureStore({ reducer: { [postsSlice.name]: postsSlice.reducer } });

export type TAppRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
