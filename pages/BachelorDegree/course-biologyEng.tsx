import { useState } from 'react'
import Container from '@/components/Layout/Container'
import { detailDepartment } from '@/constants/infoDepartmentBachelor'
import {Department } from '@/types/department'
import { NextPage } from 'next'

import OverviewCourseEng from '@/components/DepartmentCardEng/OverviewCourseEng'
import StructureEng from '@/components/DepartmentCardEng/StructureEng'
import EducationPlanEng from '@/components/DepartmentCardEng/EducationPlanEng'
import DownloadCoursePage from '@/components/DepartmentCard/DownloadCoursePage'
import InfographicPage from '@/components/DepartmentCard/InfographicPage';

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
  yearPlan,
  Plan,
  Structure
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
              activeButton === "StructurePage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("StructurePage")}
          >
            STRUCTURE OF SYLLABUS
          </button>
          <button
            className={`px-4 rounded-t-lg ${
              activeButton === "EducationPlanPage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("EducationPlanPage")}
          >
            STUDY PLAN
          </button>
          {/* <button
            className={`px-4 rounded-t-lg ${
              activeButton === "DownloadCoursePage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("DownloadCoursePage")}
          >
            DOWNLOAD COURSE
          </button> */}
          <button
            className={`px-4 rounded-t-lg ${
              activeButton === "InfographicPage" ? "bg-orange-500 text-white" : "bg-gray-300"
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => handleButtonClick("InfographicPage")}
          >
            INFOGRAPHIC
          </button>
        </div>

        <div className="">
          {displayedComponent === 'OverviewCourse' && <OverviewCourseEng 
            philosophy={philosophy} 
            importance={importance} 
            CourseNameThai={CourseNameThai} 
            CourseNameEng={CourseNameEng} 
            Job={Job} 
            Video={Video}
          />}
          {displayedComponent === 'StructurePage' && <StructureEng Structure={Structure}/>}
          {displayedComponent === 'EducationPlanPage' && <EducationPlanEng Plan={Plan} yearPlan={yearPlan}/>}
          {displayedComponent === 'DownloadCoursePage' && <DownloadCoursePage DownloadCourse={DownloadCourse}/>}
          {displayedComponent === 'InfographicPage' && <InfographicPage Infographic={Infographic} />}
        </div>
      </Container>
    </>
  )
}

const filteredData = detailDepartment.filter((department) => department.key === "biologyEng");
const course: NextPage = () => {
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
              Structure={department.Structure}
              yearPlan={department.yearPlan}
              Plan={department.Plan}
              DownloadCourse={department.DownloadCourse}
              Infographic={department.Infographic}
            />
        ))}
    </>
  )
}

export default course