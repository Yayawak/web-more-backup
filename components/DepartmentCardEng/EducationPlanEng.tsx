import InputSelect from '@/components/Input/Select'
import Container from '@/components/Layout/Container'
import { useState } from 'react';
import { EducationPlan, year} from '@/types/department';

interface EducationPlanPageProps {
  yearPlan: string
  Plan: EducationPlan[];
}
function EducationPlanPage({ Plan, yearPlan}: EducationPlanPageProps) {
  const [course, setCourse] = useState('kmitl_au');
  const dataYear = Plan.map((item) => item.year);
  const dataTerm = Plan.map((item) => item.term);
  const Year = dataYear.reduce((obj, val) => {
    obj[val] = val;
    return obj;
  }, {});
  const Term = dataTerm.reduce((obj, val) => {
    obj[val] = val;
    return obj;
  }, {});

  const [varYear, setYear] = useState('1st');
  const [varTerm , setTerm] = useState('1st');

  return (
    <>
      <div className="bg-orange-500 h-2 w-full"/>
      <Container className="bg-white p-6">
          {course == "kmitl_au" ? (
            <p className='text-2xl bold text-center mb-4'>Option 1 for two degrees from KMITL and AU</p>
          ) : course == "kmitl" ? (
            <p className='text-2xl bold text-center mb-4'>Option 2 for one degrees from KMITL</p>
          ) : null}
          <div className='flex flex-col md:flex-row gap-4 xl:gap-6 mx-4  rounded-lg lg:w-[80%] xl:w-[90%] mx-auto '>
            <div className='flex gap-2 items-center'>
              <p>Course</p>
              <div className=''>
                <select
                  className={`w-full py-[8px] px-[8px] outline-none border-black border-[1px] rounded-[8px]`}
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value='kmitl_au'>KMITL AU</option>
                  <option value='kmitl'>KMITL</option>
                </select>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <div className=''>
                <InputSelect items={Year} state={varYear} setState={setYear}/>
              </div>
              <p>YEAR</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className=''>
                <InputSelect items={Term} state={varTerm} setState={setTerm}/>
              </div> <p>SEMESTER</p>
            </div>
          </div>
            
          <div className='py-2 px-12 mt-4 w-full shadow-xl bg-gray-200  rounded-lg lg:w-[80%] xl:w-[90%] mx-auto '>
            <p className='font-bold'>{varYear} YEAR  {varTerm} SEMESTER</p>
            <div className='w-full h-1 bg-yellow-400 rounded-lg '/>
            <div className='my-1 grid grid-cols-8 '>
              <p className='col-span-1'>CODE</p>
              <p className='col-span-4 text-center'>SUBJECT</p>
              <p className='col-span-1 text-center'>CREDITS</p>
              <p className='col-span-2 text-center'>(LECTURE-LAB-SELF STUDY)</p>
            </div>
            { Plan.filter(item => item.type === course).map(({year,term, Term }: EducationPlan, index) => (
              <div key={index}>
                <ul>
                  {varYear === year  && varTerm === term  && Term.map((date: year) => (
                    <li key={date.ID}>
                      <div className='my-1 grid grid-cols-8 mt-4'>
                        <p className='col-span-1'>{date.ID}</p>
                        <p className='col-span-4'>{date.name}</p>
                        <p className='col-span-1 text-center'>{date.credit}</p>
                        <p className='col-span-2 text-center'>{date.hours}</p>
                      </div>
                      <div className='w-full h-px bg-gray-300 rounded-lg'/>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
    </>
  );
}

export default EducationPlanPage;
