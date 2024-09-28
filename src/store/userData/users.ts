
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define an API slice using RTK Query
export const users = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }), 
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users?limit=0',
    }),
    searchUsers: builder.query({
      query: (searchValue) => `/users/search?q=${searchValue}&limit=0`
    })
  }),
});

export const { useGetUsersQuery, useSearchUsersQuery } = users;