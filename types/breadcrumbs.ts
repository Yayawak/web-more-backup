export type BreadcrumbsRoute = { [path: string]: IBreadcrumbsRoute }

export interface IBreadcrumbsRoute {
  name: string // name that will show in the breadcrumb ex. หน้าแรก, ข่าวสาร
  children?: BreadcrumbsRoute // sub routes
}
