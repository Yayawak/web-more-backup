import api from '..'

const getSlideNewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSlideNews: builder.query({
      query: () => ({
        method: 'POST',
        url: '/getNews',
        body: {
            filterTargetTypeName: "0",
            resourceId: "0",
            departmentId: "0",
            targetTypeId: "0",
            limit: 0,
            isPreview: "0",
            isPinned_home: "true",
            isHomePage: "true",
            isPinned_dep: "0",
            isEnglishNews: "false",
            isPosted: "true",
            needSort: "false"
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetSlideNewsQuery } = getSlideNewsApi
