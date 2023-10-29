'use client';
import { useEffect, useState } from 'react';

import { PostList, getPosts, postsActions } from 'entities/posts';

import { alertService } from 'shared/lib/alertService';
import { isServerError } from 'shared/lib/isServerError';
import { useAppDispatch, useAppSelector } from 'shared/lib/redux';
import { TServerError } from 'shared/types/TServerError';
import { AddPostRedux } from 'app/features/add-post-redux';

export const ReduxSection = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(({ postsModule }) => postsModule.posts);
    const isPostsLoading = useAppSelector(({ postsModule }) => postsModule.isPostsLoading);

    const [error, setError] = useState<TServerError>();

    useEffect(() => {
        if (posts.length) return;

        dispatch(postsActions.setPostsLoading(true));
        getPosts()
            .then((data) => dispatch(postsActions.setPosts(data)))
            .catch((error) => {
                if (isServerError(error)) {
                    alertService.error(error.message);
                    setError(error);
                }
            })
            .finally(() => dispatch(postsActions.setPostsLoading(false)));
    }, [dispatch, posts.length]);

    if (error) {
        return (
            <h1>
                {error.code}: {error.message}
            </h1>
        );
    }

    return (
        <div>
            <h2>Common Redux Section</h2>
            <AddPostRedux />
            <PostList isLoading={isPostsLoading} postList={posts} />
        </div>
    );
};
