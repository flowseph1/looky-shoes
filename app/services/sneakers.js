import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sneakerApi = createApi({
    reducerPath: 'SneakerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: builder => ({
        brands: builder.query({
            query() {
                return {
                    url: 'brands',
                    method: 'GET',
                };
            },
        }),
    }),
});

export const { useBrandsQuery } = sneakerApi;
