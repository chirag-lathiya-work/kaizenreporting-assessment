
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define an API slice using RTK Query
export const users = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/users' }), 
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (searchValue) => `/search?q=${searchValue}`,
    }),
  }),
});

export const { useGetUsersQuery } = users;