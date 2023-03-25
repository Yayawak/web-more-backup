import { JobDepartment } from '@/types/department';

interface OverviewCourseProps {
  philosophy: string
  importance: string
  CourseNameThai: string
  CourseNameEng: string
  Job: JobDepartment[]
  Video: string
}

function OverviewCourseEng({ philosophy, importance, CourseNameThai, CourseNameEng, Job, Video  }: OverviewCourseProps) {
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
          <p className='font-bold text-xl mt-3'>{importance}</p>
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
          {/* <p className='font-bold text-x mt-3'>อาชีพที่สามารถประกอบได้หลังสำเร็จการศึกษา :</p>
          <div className="">
            {Job.map(({ name } : JobDepartment) => (
              <li key={ name }>{ name }</li>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default OverviewCourseEng;