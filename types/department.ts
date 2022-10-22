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