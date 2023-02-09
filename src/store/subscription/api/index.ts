import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  tagTypes: ['Subscription'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}v1/subscriptions`,
  }),

  endpoints: (builder) => ({
    getSubscription: builder.query({
      query: () => ({ url: `` }),
    }),
    postSubscription: builder.mutation({
      query: (email) => ({ method: 'POST', url: '', body: { email} }),
    }),
  })
});

export const {
  useGetSubscriptionQuery,
  usePostSubscriptionMutation
} = subscriptionApi;
