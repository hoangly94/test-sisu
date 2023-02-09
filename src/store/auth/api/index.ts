import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}v1/auth`,
  }),

  endpoints: (builder) => ({
    // getAuth: builder.query({
    //   query: (auth) => ({ url: `/${auth}` }),
    // }),
    postLogin: builder.mutation({
      query: (body) => ({ method: 'Post', url: '/login', body }),
    }),
  })
});

export const {
  usePostLoginMutation,
} = authApi;
