import { TServerError } from 'shared/types/TServerError';
import { TPost } from '../model/TPost';
import { FetcherResponse } from 'swr/_internal';

let posts: TPost[] = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' },
    { id: 4, title: 'Title 4' },
    { id: 5, title: 'Title 5' },
];

export const getPosts = (withError = false): Promise<TPost[]> => {
    console.log('/getPosts');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error: TServerError = { code: 500, message: 'Get post error' };

            if (withError) return reject(error);

            resolve(posts);
        }, 900);
    });
};

export const createPost = (title: string, withError = false): Promise<TPost[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error: TServerError = { code: 500, message: 'Create post error' };

            if (withError) return reject(error);

            posts = [...posts, { id: posts.length + 1, title }];

            resolve(posts);
        }, 900);
    });
};

export const createPostSwr = (
    url: string, //swr key
    { arg: { title, withError } }: { arg: { title: string; withError?: boolean } }
): FetcherResponse<TPost[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error: TServerError = { code: 500, message: 'Create post error' };

            if (withError) return reject(error);

            posts = [...posts, { id: posts.length + 1, title }];

            resolve(posts);
        }, 900);
    });
};
