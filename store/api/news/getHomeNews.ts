import api from '..'

const getHomeNewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHomeNews: builder.query({
      query: (limit: number) => ({
        method: 'POST',
        url: '/getNews',
        body: {
          resourceId: '0',
          departmentId: '0',
          filterTargetTypeName: '0',
          isPinned_dep: '0',
          isPinned_home: '0',
          targetTypeId: '0',
          limit,
          isPreview: 'false',
          isHomePage: 'true',
          needSort: 'false',
          isPosted: 'true',
          isEnglishNews: 'false',
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetHomeNewsQuery } = getHomeNewsApi
