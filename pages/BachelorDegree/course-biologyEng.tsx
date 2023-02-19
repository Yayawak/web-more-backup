import { useState } from 'react'
import Container from '@/components/Layout/Container'
import { detailDepartment } from '@/constants/infoDepartmentBachelor'
import { JobDepartment, Department } from '@/types/department'
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
  Brochure
}: Department) => {
  //show Dynamic Page
  const [displayedComponent, setDisplayedComponent] = useState('OverviewCourse')
  const [activeButton, setActiveButton] = useState("OverviewCourse")

  function handleButtonClick(component) {
    setDisplayedComponent(component)
    setActiveButton(component)
  }

  return (
    <>
      <Container className="my-4">
        <div className="font-bold text-2xl mb-5 text-start">{name}</div>
        <div>
          <button
            className={`px-4 rounded-t-lg ${
              activeButton === "OverviewCourse" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("OverviewCourse")}
          >
            COURSE OVERVIEW
          </button>
          <button
            className={`px-4 rounded-t-lg ${
              activeButton === "DownloadCoursePage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("DownloadCoursePage")}
          >
            DOWNLOAD COURSE
          </button>
          <button
            className={`px-4 rounded-t-lg ${
              activeButton === "InfographicPage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("InfographicPage")}
          >
            INFOGRAPHIC
          </button>
          <button
            className={`px-4 rounded-t-lg ${
              activeButton === "BrochurePage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("BrochurePage")}
          >
            BROCHURE
          </button>
        </div>

        <div className="">
          {displayedComponent === 'OverviewCourse' && <OverviewCourse />}
          {displayedComponent === 'DownloadCoursePage' && <DownloadCoursePage />}
          {displayedComponent === 'InfographicPage' && <InfographicPage/>}
          {displayedComponent === 'BrochurePage' && <BrochurePage/>}
        </div>
      </Container>
    </>
  )

  function OverviewCourse() {
    return (
        <div className='bg-white pb-8 rounded-b-lg'>
          <div className='bg-orange-500 h-2 w-full'></div>
          <div className='flex justify-center my-10'>
            <iframe 
              width="720" 
              height="380" 
              src={Video}
              title="YouTube video player" >
            </iframe>
          </div>
          <div className='flex justify-around'>
            <div className='w-2/5'>
            <h1 className='font-bold text-2xl'>Course Overview</h1>
              <p className='font-bold text-xl mt-3'>Collaboration with Other Institutes</p>
              <div className="">
                {philosophy}
              </div>
              <p className='font-bold text-xl mt-3'>One degree 133 credits / Two degree 154 credits</p>
            </div>
            <div className='w-2/5'>
              <p className='font-bold text-x mt-3'>Name of the program (Thai) :</p>
              <div className="">
                {CourseNameThai}
              </div>
              <p className='font-bold text-x mt-3'>Name of the program (English) : </p>
              <div className="">
                {CourseNameEng}
              </div>
            </div>
          </div>
        </div>
      )
  }

  function DownloadCoursePage() {
    return (
        <>
          <div className='bg-white p-6 rounded-b-lg'>
            <div className='flex justify-center'>
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
          <div className='bg-white p-6 rounded-b-lg'>
            <div className='flex justify-center'>
              <Image
                  css={css`
                    objectFit: contain;
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

  function BrochurePage() {
    return (
        <>
          <div className='bg-white p-6 rounded-b-lg'>
            <div className='flex justify-center'>
              <h1>หน้าหาย</h1>
              {/* <iframe 
                width="1080px" 
                height="608px" 
                src={Brochure} 
                title="DownloadCourse" >
              </iframe> */}
            </div>
          </div>
        </>
      )
  }
}


const filteredData = detailDepartment.filter((department) => department.key === "biologyEng");
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
              DownloadCourse={department.DownloadCourse}
              Infographic={department.Infographic}
              Brochure={department.Brochure}
            />
        ))}
    </>
  )
}

export default courseChemist
