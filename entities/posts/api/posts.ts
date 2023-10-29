import { TServerError } from 'shared/types/TServerError';
import { TPost } from '../model/TPost';

let posts: TPost[] = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' },
    { id: 4, title: 'Title 4' },
    { id: 5, title: 'Title 5' },
];

export const getPosts = (withError = false): Promise<TPost[]> => {
    console.log('getPosts');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error: TServerError = { code: 500, message: 'Server error' };

            if (withError) reject(error);

            resolve(posts);
        }, 900);
    });
};
