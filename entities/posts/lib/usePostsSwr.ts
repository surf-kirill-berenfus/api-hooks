import { TServerError } from 'shared/types/TServerError';
import { getPosts } from '../api/posts';
import { type TPost } from '../model/TPost';
import useSWR from 'swr';

export const POSTS_SWR_KEY = '/posts';

export const usePostsSwr = () => {
    return useSWR<TPost[], TServerError>(POSTS_SWR_KEY, () => getPosts());
};
