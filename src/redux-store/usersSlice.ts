import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export declare interface UsersResponse {
  data: Array<{
    first_name: string
    last_name: string
    email: string
  }>
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: builder => ({
    getUsers: builder.query<UsersResponse, null>({
      query: () => `users`,
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
