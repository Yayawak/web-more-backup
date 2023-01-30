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
  '/course-bachelor': {
         name: 'หลักสูตรปริญญาตรี',
  },
  '/course-master': {
    name: 'หลักสูตรปริญญาโท',
  },
  '/course-doctorate': {
    name: 'หลักสูตรปริญญาเอก',
  },
  // '/course': {
  //   name: 'หลักสูตร',
  //   children: {
  //     '/course-bachelor': {
  //       name: 'หลักสูตรปริญญาตรี',
  //     },
  //     '/course-master': {
  //       name: 'หลักสูตรปริญญาโท',
  //     },
  //     '/course-doctorate': {
  //       name: 'หลักสูตรปริญญาเอก',
  //     },
  //   },
  // },
  '/yearly-report': {
    name: 'รายงานประจำปี',
  },
  '/about': {
    name: 'เกี่ยวกับเรา',
    children: {
      '/executive': {
        name: 'ผู้บริหาร',
      },
      '/ita': {
        name: 'ข้อมูลเปิดเผยสาธารณะ',
      },
      '/organization-chart': {
        name: 'แผนผังองค์กร',
      },
    },
  },
}
