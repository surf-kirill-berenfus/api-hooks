import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { TPost } from '../model/TPost';

interface IPostsSlice {
    isPostsLoading: boolean;
    posts: TPost[];
}

const initialState: IPostsSlice = {
    isPostsLoading: false,
    posts: [],
};

export const postsSlice = createSlice({
    name: 'postsModule',
    initialState,
    reducers: {
        setPosts(state, { payload }: PayloadAction<TPost[]>) {
            state.posts = payload;
        },
        setPostsLoading(state, { payload }: PayloadAction<boolean>) {
            state.isPostsLoading = payload;
        },
    },
});

export const postsActions = postsSlice.actions;
