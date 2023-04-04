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
  Structure: structure[]
  yearPlan: string
  Plan: EducationPlan[]
  DownloadCourse: string
  Infographic: string
}

export interface JobDepartment {
  name: string
}

export interface EducationPlan{
  type: string
  year: string
  term: string
  Term: year[]
}
export interface year{
  ID: string
  name: string
  credit: number
  hours: string
}

export interface structure{
  credit: number
  Category: SubjectCategory[]
}
export interface SubjectCategory{//โครงสร้างหลักสูตร
  name: string//หมวดวิชา
  credit: number//หน่วยกิต
  subject: Subject[]
}
export interface Subject{//กลุ่มรายวิชา
  name: string//ชื่อกลุ่มรายวิชา
  credit: number//หน่วยกิต
  sub:Subjectby[]
}
export interface Subjectby{//กลุ่มรายวิชาย่อย
  name: string//ชื่อกลุ่มรายวิชา
  detail:Details[]
}
export interface Details{//กลุ่มรายวิชา
  ID: string
  name: string
  nameEng: string
  compulsory: string
  credit: number
  hours: string
}