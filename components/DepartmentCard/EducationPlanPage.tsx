import { useState } from 'react';
import { EducationPlan, year} from '@/types/department';

interface EducationPlanPageProps {
  yearPlan: string
  Plan: EducationPlan[];
}
function EducationPlanPage({ Plan, yearPlan}: EducationPlanPageProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [activeSub, setActiveSub] = useState("");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setActiveSub(event.target.value);
  }

  return (
    <>
      <div className="bg-orange-500 h-2 w-full"></div>
      <div className="bg-white p-6 rounded-b-lg px-28">
          <p className='text-2xl bold text-center mb-4'>{yearPlan}</p>
          <select className='w-4/12 border border-gray-800 rounded-lg py-1 px-2' value={selectedValue} onChange={handleSelectChange}>
            <option value="">กรุณาเลือกปีการศึกษา</option>
            {Plan.filter(item => item.type === 'kmitl').map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
            
          <div className='py-2 px-12 mt-4 w-full shadow-xl bg-gray-200 rounded-lg'>
            <p className='font-bold'>{activeSub}</p>
            <div className='w-full h-1 bg-yellow-400 rounded-lg '/>
            <div className='my-1 grid grid-cols-8 '>
              <p className='col-span-1'>รหัสวิชา</p>
              <p className='col-span-4 text-center'>ชื่อวิชา</p>
              <p className='col-span-1 text-center'>หน่วยกิต</p>
              <p className='col-span-2 text-center'>(บรรยาย-ปฎิบัติ-ค้นคว้า)</p>
            </div>
            { Plan.map(({ name, Term }: EducationPlan) => (
              <div key={name}>
                <ul>
                  {activeSub === name  &&Term.map((year: year) => (
                    <li key={year.ID}>
                      <div className='my-1 grid grid-cols-8 mt-4'>
                        <p className='col-span-1'>{year.ID}</p>
                        <p className='col-span-4'>{year.name}</p>
                        <p className='col-span-1 text-center'>{year.credit}</p>
                        <p className='col-span-2 text-center'>{year.hours}</p>
                      </div>
                      <div className='w-full h-px bg-gray-300 rounded-lg'/>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default EducationPlanPage;
