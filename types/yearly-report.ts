export interface Ireport {
  name: string
  url: string
}

export interface IyearlyReportTable {
  report: Ireport
  type: string
  date: Date
}