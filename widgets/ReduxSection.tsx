'use client';
import { useEffect, useState } from 'react';

import { PostList, getPosts, postsActions } from 'entities/posts';

import { alertService } from 'shared/lib/alertService';
import { isServerError } from 'shared/lib/isServerError';
import { useAppDispatch, useAppSelector } from 'shared/lib/redux';
import { TServerError } from 'shared/types/TServerError';

export const ReduxSection = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(({ postsModule }) => postsModule.posts);

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<TServerError>();

    useEffect(() => {
        if (posts.length) return;

        setLoading(true);
        getPosts(true)
            .then((data) => dispatch(postsActions.setPosts(data)))
            .catch((error) => {
                if (isServerError(error)) {
                    alertService.error(error.message);
                    setError(error);
                }
            })
            .finally(() => setLoading(false));
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
            {isLoading ? <p>Loading...</p> : <PostList postList={posts} />}
        </div>
    );
};