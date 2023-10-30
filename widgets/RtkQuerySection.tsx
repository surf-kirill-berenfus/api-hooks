'use client';
import { PostList, useGetPostsQuery } from 'entities/posts';
import { AddPostSwr } from 'features/add-post-swr';

// import { AddPostRedux } from 'app/features/add-post-redux';

export const RtkQuerySection = () => {
    const { data, isLoading, error, isFetching } = useGetPostsQuery(undefined, {
        skip: false,
        refetchOnFocus: false,
        refetchOnReconnect: false,
        // refetchOnMountOrArgChange
        // pollingInterval
        // selectFromResult
    });

    console.log(data, isLoading);

    if (error) {
        return <h1>Error</h1>;
    }

    return (
        <div>
            <h2>Rtk Query Section</h2>
            <AddPostSwr />
            <PostList
                isLoading={isLoading || isFetching}
                postList={
                    data ? data.results.map((item, index) => ({ id: index, title: item.name })) : []
                }
            />
        </div>
    );
};
