import { BreadcrumbsRoute } from '@/types/breadcrumbs'

export const breadcrumbRoutes: BreadcrumbsRoute = {
  '/news': {
    name: 'ข่าวสาร',
    children: {
      '/[id]': {
        name: '?',
      },
    },
  },
  '/download': {
    name: 'เอกสาร',
  },
}
