import { useEffect, useState } from 'react';
import { getPosts } from '../api/posts';
import { TPost } from '../model/TPost';

type Props = {
    postList: TPost[];
};

export const PostList = ({ postList }: Props) => {
    console.log('PostList render');

    return (
        <ul>
            {postList.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};
