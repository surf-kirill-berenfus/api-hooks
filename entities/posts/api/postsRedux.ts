import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { alertService } from 'shared/lib/alertService';
import { isServerError } from 'shared/lib/isServerError';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<{ results: { name: string; url: string }[] }, void>({
            query: () => `pokemon/`,
        }),
        updatePost: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `post/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useUpdatePostMutation } = postsApi;
