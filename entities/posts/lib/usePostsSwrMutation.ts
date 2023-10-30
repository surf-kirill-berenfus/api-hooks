import useSWRMutation from 'swr/mutation';
import { createPostSwr } from '../api/posts';
import { POSTS_SWR_KEY } from './usePostsSwr';

export const usePostsSwrMutation = () => {
    return useSWRMutation(POSTS_SWR_KEY, createPostSwr);
};
