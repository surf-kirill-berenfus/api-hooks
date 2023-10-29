import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { TPost } from '../model/TPost';

interface IPostsSlice {
    posts: TPost[];
}

const initialState: IPostsSlice = {
    posts: [],
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, { payload }: PayloadAction<TPost[]>) {
            state.posts = payload;
        },
    },
});
