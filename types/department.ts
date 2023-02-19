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
  DownloadCourse: string
  Infographic: string
  Brochure: string
}
export interface JobDepartment {
  name: string
}