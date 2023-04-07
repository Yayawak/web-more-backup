import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Container from '@/components/Layout/Container'
import { bachelorDepartment } from '@/constants/bachelorDepartment'
import { ICurriculum, IDepartmentCard, IProgram } from '@/types/department'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const DepartmentCard = ({
  logoPath,
  name,
  describe,
  curriculum,
}: IDepartmentCard) => {
  return (
    <div className={`rounded-xl bg-white p-4 lg:px-3`}>
      <div
        className={`mb-4 flex flex-col items-center md:h-44 lg:h-48 xl:h-44`}
      >
        <div>
          <Image src={logoPath} alt="department logo" width={72} height={72} />
        </div>
        <p className="bodyBig mb-1 text-center lg:mb-4 lg:mt-3">{name}</p>
        <p className="mb-3 text-center text-base font-normal leading-4 text-[#A69999]">
          {describe}
        </p>
      </div>
      <div>
        {curriculum.map(({ name, program }) => (
          <Curriculum key={name} name={name} program={program} />
        ))}
      </div>
    </div>
  )
}

const Curriculum = ({ name, program }: ICurriculum) => {
  return (
    <div key={name} className="mb-1 text-sm font-bold leading-4 text-[#FF7C32]">
      {program.map(({ link }: IProgram) => (
        <div key={name} className="mb-7">
          <Link key={name} href={link}>
            {`> ${name}`}
          </Link>
        </div>
      ))}
    </div>
  )
}

const Bachelor: NextPage = () => {
  return (
    <>
      <Container className="my-4 md:my-8 lg:mt-16 lg:mb-48">
        <Breadcrumbs />
        <h4 className="h5 lg:h4 my-4 text-center md:mt-8 lg:mt-16 lg:mb-5">
          หลักสูตรปริญญาตรี
        </h4>

        <div className="flex flex-col items-center">
          <div className="mx-4 grid h-fit grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-3 lg:max-w-[90%] lg:gap-5">
            {bachelorDepartment.map((department) => {
              return (
                <DepartmentCard
                  key={department.name}
                  logoPath={department.logoPath}
                  name={department.name}
                  describe={department.describe}
                  curriculum={department.curriculum}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Bachelor
