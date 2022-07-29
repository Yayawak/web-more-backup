import api from '..'

const getNewsByIdApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNewsById: builder.query({
      query: (newsID: string) => ({
        method: 'POST',
        url: '/getNewsfromID',
        body: {
            newsID,
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetNewsByIdQuery } = getNewsByIdApi
