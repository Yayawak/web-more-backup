import { StaticImageData } from "next/image"

export interface ITutitionFeeCard {
  icon: StaticImageData
  department: string
  branch: IBranch[]
}

export interface IBranch {
  name: string
  tutitionFee: string
  credit: string
}

export interface ITutitionFeeCard2 {
  icon: StaticImageData
  department: string
  branch: IBranch2[]
}

export interface IBranch2 {
  name: string
  lessonPlan: ILessonPlan[]
}
export interface ILessonPlan {
  name: string
  tutitionFee: string
  credit: string
}