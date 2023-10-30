import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../api/posts';
import { POSTS_QUERY_KEY } from './usePostsQuery';

export const useAddPostMutation = () => {
    const client = useQueryClient();

    return useMutation({
        mutationKey: [POSTS_QUERY_KEY],
        mutationFn: createPost,
        onSuccess: () => {
            client.refetchQueries([POSTS_QUERY_KEY]);
            // queryClient.setQueryData([POSTS_QUERY_KEY], data);
        },
    });
};
