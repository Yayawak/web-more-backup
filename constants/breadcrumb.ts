interface IBreadcrumbRoute {
  path: string
  name: string // name that will show in the breadcrumb ex. หน้าแรก, ข่าวสาร
  children: IBreadcrumbRoute[] // sub routes
}

export const breadcrumbRoutes: IBreadcrumbRoute[] = [
  {
    path: '/',
    name: 'Home',
    children: [],
  },
]
