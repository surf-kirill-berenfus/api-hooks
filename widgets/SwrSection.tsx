'use client';
import { PostList, usePostsSwr } from 'entities/posts';
import { AddPostSwr } from 'features/add-post-swr';

// import { AddPostRedux } from 'app/features/add-post-redux';

export const SwrSection = () => {
    const { data, isLoading, error } = usePostsSwr();
    console.log(data, isLoading);

    if (error) {
        return (
            <h1>
                {error.code}: {error.message}
            </h1>
        );
    }

    return (
        <div>
            <h2>Swr Section</h2>
            <AddPostSwr />
            <PostList isLoading={isLoading} postList={data || []} />
        </div>
    );
};
