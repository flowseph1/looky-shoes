import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: builder => ({
        login: builder.mutation({
            query(body) {
                return {
                    url: 'users',
                    method: 'POST',
                    body,
                };
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
