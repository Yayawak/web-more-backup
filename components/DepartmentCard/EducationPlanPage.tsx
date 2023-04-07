import InputSelect from '@/components/Input/Select'
import Container from '@/components/Layout/Container'
import { useState } from 'react';
import { EducationPlan, year} from '@/types/department';

interface EducationPlanPageProps {
  yearPlan: string
  Plan: EducationPlan[];
}
function EducationPlanPage({ Plan, yearPlan}: EducationPlanPageProps) {
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

  const [varYear, setYear] = useState('1');
  const [varTerm , setTerm] = useState('1');

  return (
    <>
      <div className="bg-orange-500 h-2 w-full"/>
      <Container  className="bg-white py-6">
          <p className='text-2xl bold text-center mb-4'>{yearPlan}</p>
          <div className='flex md:flex-row gap-4 xl:gap-6 mx-4  rounded-lg lg:w-[80%] xl:w-[90%] mx-auto '>
            <div className='flex gap-2 items-center'>
              <p>ปีการศึกษาที่</p>
              <div className=''>
                <InputSelect items={Year} state={varYear} setState={setYear}/>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <p>ภาคเรียนที่</p>
              <div className=''>
                <InputSelect items={Term} state={varTerm} setState={setTerm}/>
              </div>
            </div>
          </div>
          <div className='py-2 px-12 mt-4 w-full shadow-xl bg-gray-200 rounded-lg lg:w-[80%] xl:w-[90%] mx-auto '>
            <p className='font-bold'>ปีการศึกษาที่ {varYear}  ภาคเรียนที่ {varTerm}</p>
            <div className='w-full h-1 bg-yellow-400 rounded-lg '/>
            <div className='my-1 grid grid-cols-8 '>
              <p className='col-span-1'>รหัสวิชา</p>
              <p className='col-span-4 text-center'>ชื่อวิชา</p>
              <p className='col-span-1 text-center'>หน่วยกิต</p>
              <p className='col-span-2 text-center'>(บรรยาย-ปฎิบัติ-ค้นคว้า)</p>
            </div>
            { Plan.filter(item => item.type === 'kmitl').map(({year,term, Term }: EducationPlan, index) => (
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
