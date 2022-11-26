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
  '/about' : {
    name: 'เกี่ยวกับเรา',
    children: {
      '/executive': {
        name: 'ผู้บริหาร'
      }, 
      '/ita': {
        name: 'ข้อมูลเปิดเผยสาธารณะ'
      },
      '/organization-chart': {
        name: 'แผนผังองค์กร'
      }

    }
  }
}
