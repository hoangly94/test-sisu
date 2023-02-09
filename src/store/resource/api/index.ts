import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import resourceImage from './resourceImage';

export const resourceApi = createApi({
  reducerPath: 'resourceApi',
  tagTypes: ['Resource'],
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/resource`,
  }),
  endpoints: (builder) => ({
    resourceImage: builder.mutation(resourceImage),
  })
});

export const {
  useResourceImageMutation,
} = resourceApi;
