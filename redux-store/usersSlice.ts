import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
