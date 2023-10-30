export { createPost, getPosts } from './api/posts';

export { useGetPostsQuery } from './api/postsRedux';

export { usePostsSwr } from './lib/usePostsSwr';
export { usePostsSwrMutation } from './lib/usePostsSwrMutation';

export { usePostsQuery } from './lib/usePostsQuery';
export { useAddPostMutation } from './lib/useAddPostMutation';

export { type TPost } from './model/TPost';
export { postsActions } from './model/postsSlice';

export { PostList } from './ui/PostList';
