import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'sciApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.science.kmitl.ac.th/api',
  }),
  endpoints: (_) => ({}),
})

export default api
