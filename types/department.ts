import { StaticImageData } from "next/image"

export interface IDepartmentCard {
  logoPath: StaticImageData
  name: string
  describe: string
  curriculum: ICurriculum[]
}

export interface ICurriculum {
  name: string
  program: IProgram[]
}
export interface IProgram {
  name: string
  link: string
}

export interface Department {
  key: string
  name: string
  philosophy: string
  importance: string
  CourseNameThai: string
  CourseNameEng: string
  Job: JobDepartment[]
  Video: string
  Plan: EducationPlan[]
  DownloadCourse: string
  Infographic: string
}
export interface JobDepartment {
  name: string
}
export interface EducationPlan{
  type: string
  name: string
  Term: year[]
}
export interface year{
  ID: string
  name: string
  credit: number
  hours: string
}
