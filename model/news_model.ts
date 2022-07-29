export interface NewsModel {
  code: string
  message: MessageModel[]
}

export interface MessageModel {
  newsId: string
  news_file01?: any
  news_file02?: any
  news_file03?: any
  news_file01_name?: any
  news_file02_name?: any
  news_file03_name?: any
  news_file_topic: string
  topicShort: string
  detailShort: string
  subCategory?: any
  topicPictureURL?: any
  datetime_create: Date
  datetimePost: Date
  datetimeExpire?: any
  datetimeEdit: Date
  author: string
  readCount: number
  isPinned: boolean
  tag: any[]
  isEnglishNews: boolean
  isHomePage: boolean
  isPinned_dep: boolean
  isPinned_home: boolean
  attachedFile?: any
  _id: string
  topicFull: string
  detailFull: string
  resourceId: string
  targetTypeId: string
  departmentId: string
  __v: number
  departmentName: string
  resourceName: string
  targetTypeName: string
  isExpired: boolean
  datetimepost_Preview: string
}
