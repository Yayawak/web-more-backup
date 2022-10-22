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
  '/ita': {
    name: 'ข้อมูลเปิดเผยสาธารณะ',
  },
  '/course-bachelor': {
    name: 'หลักสูตรปริญญาตรี',
  },
  '/course-master': {
    name: 'หลักสูตรปริญญาโท',
  },
}
