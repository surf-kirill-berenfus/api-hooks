'use client';
import { PostList, usePostsQuery } from 'entities/posts';
import { AddPostQuery } from 'features/add-post-query';

// import { AddPostRedux } from 'app/features/add-post-redux';

export const QuerySection = () => {
    const { data, isLoading, isFetching, error } = usePostsQuery();
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
            <h2>Query Section</h2>
            <AddPostQuery />
            <PostList isLoading={isLoading || isFetching} postList={data || []} />
        </div>
    );
};
