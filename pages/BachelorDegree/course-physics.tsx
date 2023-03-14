import { useState } from 'react'
import Container from '@/components/Layout/Container'
import { detailDepartment } from '@/constants/infoDepartmentBachelor'
import {
  year,
  EducationPlan,
  JobDepartment,
  Department,
} from '@/types/department'
import { NextPage } from 'next'
import Image from 'next/image'
import { css } from '@emotion/react'

const DepartmentCard = ({
  name,
  philosophy,
  importance,
  CourseNameThai,
  CourseNameEng,
  Job,
  Video,
  DownloadCourse,
  Infographic,
  Plan,
}: Department) => {
  //show Dynamic Page
  const [displayedComponent, setDisplayedComponent] = useState('OverviewCourse')
  const [activeButton, setActiveButton] = useState('OverviewCourse')

  function handleButtonClick(component) {
    setDisplayedComponent(component)
    setActiveButton(component)
  }

  return (
    <>
      <Container className="my-4">
        <div className="mb-5 text-start text-2xl font-bold">{name}</div>
        <div>
          <button
            className={`rounded-t-lg px-4 ${
              activeButton === 'OverviewCourse'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-300'
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick('OverviewCourse')}
          >
            ภาพรวมหลักสูตร
          </button>
          {/* <button
            className={`px-4 rounded-t-lg ${
              activeButton === "EducationPlanPage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("EducationPlanPage")}
          >
            แผนการศึกษา
          </button> */}
          {/* <button
            className={`px-4 rounded-t-lg ${
              activeButton === "DownloadCoursePage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("DownloadCoursePage")}
          >
            ดาวน์โหลดหลักสูตร
          </button> */}
          <button
            className={`rounded-t-lg px-4 ${
              activeButton === 'InfographicPage'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-300'
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick('InfographicPage')}
          >
            INFOGRAPHIC
          </button>
        </div>

        <div className="">
          {displayedComponent === 'OverviewCourse' && <OverviewCourse />}
          {displayedComponent === 'EducationPlanPage' && <EducationPlanPage />}
          {displayedComponent === 'DownloadCoursePage' && (
            <DownloadCoursePage />
          )}
          {displayedComponent === 'InfographicPage' && <InfographicPage />}
        </div>
      </Container>
    </>
  )

  function OverviewCourse() {
    return (
      <div className="rounded-b-lg bg-white pb-8">
        <div className="h-2 w-full bg-orange-500"></div>
        <div className="my-10 flex justify-center">
          <iframe
            width="720"
            height="380"
            src={Video}
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="flex justify-around">
          <div className="w-2/5">
            <h1 className="text-2xl font-bold">ภาพรวมหลักสูตร</h1>
            <p className="mt-3 text-xl font-bold">ปรัชญา :</p>
            <div className="">{philosophy}</div>
            <p className="mt-3 text-xl font-bold">ความสำคัญ :</p>
            <div className="">{importance}</div>
          </div>
          <div className="w-2/5">
            <p className="text-x mt-3 font-bold">ชื่อหลักสูตร (ภาษาไทย) :</p>
            <div className="">{CourseNameThai}</div>
            <p className="text-x mt-3 font-bold">ชื่อหลักสูตร (ภาษาอังกฤษ) :</p>
            <div className="">{CourseNameEng}</div>
            <p className="text-x mt-3 font-bold">
              อาชีพที่สามารถประกอบได้หลังสำเร็จการศึกษา :
            </p>
            <div className="">
              {Job.map(({ name }: JobDepartment) => (
                <li key={name}>{name}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  function EducationPlanPage() {
    return (
      <>
        <div className="h-2 w-full bg-orange-500"></div>
        <div className="rounded-b-lg bg-white p-6">
          <div className="flex flex-col justify-center">
            {Plan.map(({ name, Term }: EducationPlan) => (
              <div key={name}>
                {name}
                {Term.map(({ ID, name, credit, hours }: year) => (
                  <li key={ID}>
                    {ID} | {name} | {credit} | {hours}
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  function DownloadCoursePage() {
    return (
      <>
        <div className="h-2 w-full bg-orange-500"></div>
        <div className="rounded-b-lg bg-white p-6">
          <div className="flex justify-center">
            <h1>ลิงค์เสีย</h1>
            {/* <iframe 
                width="1080px" 
                height="608px" 
                src={DownloadCourse} 
                title="DownloadCourse" >
              </iframe> */}
          </div>
        </div>
      </>
    )
  }

  function InfographicPage() {
    return (
      <>
        <div className="h-2 w-full bg-orange-500"></div>
        <div className="rounded-b-lg bg-white p-6">
          <div className="flex justify-center">
            <Image
              css={css`
                objectfit: contain;
                position: static !important;
              `}
              src={Infographic}
              alt="InfographicPage"
              fill
            />
          </div>
        </div>
      </>
    )
  }
}

const filteredData = detailDepartment.filter(
  (department) => department.key === 'physics'
)
const courseChemist: NextPage = () => {
  return (
    <>
      {filteredData.map((department) => (
        <DepartmentCard
          key={department.key}
          name={department.name}
          philosophy={department.philosophy}
          importance={department.importance}
          CourseNameThai={department.CourseNameThai}
          CourseNameEng={department.CourseNameEng}
          Job={department.Job}
          Video={department.Video}
          Plan={department.Plan}
          DownloadCourse={department.DownloadCourse}
          Infographic={department.Infographic}
        />
      ))}
    </>
  )
}

export default courseChemist
