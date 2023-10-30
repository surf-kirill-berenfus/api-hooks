import { useQuery } from 'react-query';
import { TServerError } from 'shared/types/TServerError';
import { getPosts } from '../api/posts';
import { type TPost } from '../model/TPost';

export const POSTS_QUERY_KEY = 'posts';

export const usePostsQuery = () => {
    return useQuery<TPost[], TServerError>({
        queryKey: [POSTS_QUERY_KEY],
        queryFn: () => getPosts(),
    });
};
