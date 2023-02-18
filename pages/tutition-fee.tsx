import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import InputSelect from '@/components/Input/Select'
import Container from '@/components/Layout/Container'
import { NextPage } from 'next'
import { useState } from 'react'

import { TutitionFeeCard1, TutitionFeeCard2 } from '@/local_components/index/TutitionFeeCard'
import { courseSet, departmentSet, dataBachelor, dataMaster, dataDoctorate } from '@/constants/TutitionFee'

const TutitionFee: NextPage = () => {
  const [course, setCourse] = useState('bachelor');
  const [department, setDepartment] = useState('ทั้งหมด');
  console.log(department)
  return (
    <>
      <Container className="mt-[64px] mb-[200px]">
        <Breadcrumbs />

        <div className="h5 lg:h4 my-4 text-center md:mt-8 lg:mt-16 lg:mb-5 xl:mb-8">
          ค่าธรรมเนียมการศึกษา
        </div>

        <div className='flex flex-col md:flex-row gap-4 xl:gap-6 mx-4 lg:w-[60%] xl:w-[70%] mb-8 md:mb-12 2xl:mb-16'>
          <div className='flex flex-1 gap-4 items-center body1'>
            <p>ประเภทหลักสูตร</p>
            <div className='flex-1'>
              <InputSelect items={courseSet} state={course} setState={setCourse} />
            </div>
          </div>
          <div className='flex flex-1 gap-4 items-center body1'>
            <p>ประเภทภาควิชา</p>
            <div className='flex-1'>
              <InputSelect items={departmentSet} state={department} setState={setDepartment} />
            </div>
          </div>
        </div>
        {course === 'bachelor' && dataBachelor.map((val) => {
          if (department === 'ทั้งหมด') {
            return (<TutitionFeeCard1
              key={val.department}
              icon={val.icon}
              department={val.department}
              branch={val.branch} />)
          } else {
            return (
              <>
                {department === val.department &&
                  <TutitionFeeCard1
                    key={val.department}
                    icon={val.icon}
                    department={val.department}
                    branch={val.branch} />}
              </>
            )
          }
        })}
        {course === 'master' && dataMaster.map((val) => {
          if (department === 'ทั้งหมด') {
            return (<TutitionFeeCard2
              key={val.department}
              icon={val.icon}
              department={val.department} branch={val.branch} />)
          } else {
            return (
              <>
                {department === val.department &&
                  <TutitionFeeCard2
                    key={val.department}
                    icon={val.icon}
                    department={val.department}
                    branch={val.branch} />}
              </>
            )
          }
        })}
        {course === 'doctorate' && dataDoctorate.map((val) => {
          if (department === 'ทั้งหมด') {
            return (<TutitionFeeCard2
              key={val.department}
              icon={val.icon}
              department={val.department} branch={val.branch} />)
          } else {
            return (
              <>
                {department === val.department &&
                  <TutitionFeeCard2
                    key={val.department}
                    icon={val.icon}
                    department={val.department}
                    branch={val.branch} />}
              </>
            )
          }
        })}

      </Container>
    </>

  )
}

export default TutitionFee