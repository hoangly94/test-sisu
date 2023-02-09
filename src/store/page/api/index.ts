import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const pageApi = createApi({
  reducerPath: 'pageApi',
  tagTypes: ['Page'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}v1/pages`,
  }),

  endpoints: (builder) => ({
    getPage: builder.query({
      query: (page) => ({ url: `/${page}` }),
    }),
    patchPage: builder.mutation({
      query: ({ page, data }) => ({ method: 'PATCH', url: `/${page}`, body: { data } }),
      // query: ({ page, data }) => ({ method: 'POST', url: ``, body: { page, data } }),
    }),
  })
});

export const {
  useGetPageQuery,
  usePatchPageMutation,
} = pageApi;
