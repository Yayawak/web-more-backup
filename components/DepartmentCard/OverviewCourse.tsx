import { JobDepartment } from '@/types/department';

interface OverviewCourseProps {
  philosophy: string
  importance: string
  CourseNameThai: string
  CourseNameEng: string
  Job: JobDepartment[]
  Video: string
}

function OverviewCourse({ philosophy, importance, CourseNameThai, CourseNameEng, Job, Video  }: OverviewCourseProps) {
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
        <h1 className='font-bold text-2xl'>ภาพรวมหลักสูตร</h1>
          <p className='font-bold text-xl mt-3'>ปรัชญา :</p>
          <div className="">
            {philosophy}
          </div>
          {importance !== '' ? (
            <>
              <p className='font-bold text-xl mt-3'>ความสำคัญ :</p>
              <div className="">
                {importance}
              </div>
            </>
          ) : null}
        </div>
        <div className='w-2/5'>
          <p className='font-bold text-x mt-3'>ชื่อหลักสูตร (ภาษาไทย) :</p>
          <div className="">
            {CourseNameThai}
          </div>
          <p className='font-bold text-x mt-3'>ชื่อหลักสูตร (ภาษาอังกฤษ) :</p>
          <div className="">
            {CourseNameEng}
          </div>
          {Job.length > 0 && (
            <div>
              <p className='font-bold text-x mt-3' style={{ display: Job[0].name === '' ? 'none' : 'block' }}>อาชีพที่สามารถประกอบได้หลังสำเร็จการศึกษา :</p>
              <ul>
                {Job.map(({ name }: JobDepartment) =>
                  name !== '' ? <li key={name}>- {name}</li> : null
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OverviewCourse;