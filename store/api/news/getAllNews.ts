import api from '..'

const getAllNewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => ({
        method: 'PORT',
        url: '/getNews',
        body: {
          tag: '0',
          filterTargetTypeName: '0',
          resourceId: '0',
          departmentId: '5a8470b228d2e92a0c753010',
          targetTypeId: '0',
          limit: 0,
          isPinned: '0',
          isPosted: 'false',
          isPreview: 'flase',
          needSort: 'true',
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetAllNewsQuery } = getAllNewsApi
