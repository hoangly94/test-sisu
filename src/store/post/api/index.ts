import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}/v1/posts`,
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => ({ url: '' }),
    }),
    postPost: builder.mutation({
      query: (body) => ({ method: 'POST', body, url: '' }),
    }),
    deletePost: builder.mutation({
      query: (body) => ({ method: 'DELETE', body, url: '' }),
    }),
    putPost: builder.mutation({
      query: (body) => ({ method: 'PUT', body, url: '' }),
    }),
  })
});

export const {
  useGetPostQuery,
  usePostPostMutation,
  useDeletePostMutation,
  usePutPostMutation
} = postApi;
