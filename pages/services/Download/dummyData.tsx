export interface IDownloadTable {
  name: string
  type: string
  date: Date
}

export const data: IDownloadTable[] = [
  {
    name: 'แบบฟอร์มลาออก.pdf',
    type: 'งานวิจัย',
    date: new Date(),
  },
  {
    name: 'เอกสารลาออก.doc',
    type: 'งานวิจัย',
    date: new Date(),
  },
  {
    name: 'เอกสารงานวิจัย.doc',
    type: 'งานวิจัย',
    date: new Date(),
  },
  {
    name: 'เอกสารขอเงิน.doc',
    type: 'งานวิจัย',
    date: new Date(),
  },
  {
    name: 'phd ptsd peepip pew',
    type: 'แบบฟอร์มปริญญาเอก',
    date: new Date(),
  },
  {
    name: 'เช่นธีระ',
    type: 'บุคลากร',
    date: new Date(),
  },
]
