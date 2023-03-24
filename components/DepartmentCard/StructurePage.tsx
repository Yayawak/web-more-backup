import { useState } from 'react';
import { structure, SubjectCategory, Subject, Subjectby, Details} from '@/types/department';

interface StructurePageProps {
  Structure: structure[];
}

function StructurePage({ Structure }: StructurePageProps) {
  const [activeSub, setActiveSub] = useState("");

  const handleSubClick = (Name: string) => {
    setActiveSub(Name === activeSub ? "" : Name);
  };
  return (
    <>
      <div className="bg-orange-500 h-2 w-full"></div>
      <div className="bg-white p-6 rounded-b-lg px-28">
        {Structure.map(({ credit, Category }: structure) => (
          <div key={credit}>
            <div className="py-2 px-5 flex w-full justify-between text-gray-200 font-bold bg-blue-900 rounded-lg">
              <p>จำนวนหน่วยกิจรวมตลอดหลักสูตร</p>
              <p>รวม {credit} หน่วยกิต</p>
            </div>

            <div className='py-2 px-12 mt-4 w-full shadow-xl bg-gray-200 rounded-lg'>
              <p className='font-bold mb-4'>โครงสร้างหลักสูตร</p>
              {Category.map(({ name, credit: catCredit, subject }: SubjectCategory) => (
              <div key={name}>
                {/* button */}
                <button className='flex w-full justify-between'>
                  <p>{name}</p>
                  <p>{catCredit} หน่วยกิต</p>
                </button>
                {subject.map(({ name: subName, credit: subCredit, sub }: Subject) => (
                  <div key={subName}>
                    <button className={`pl-4 flex w-full justify-between ${subName === "" ? "hidden" : ""}`} onClick={() => handleSubClick(subName)}>
                      <p>{subName}</p>
                      <p>{subCredit} หน่วยกิต</p>
                    </button>
                    {sub.map(({ name: subSubName }: Subjectby) => (
                      <div key={subSubName}>
                        <button className={`pl-8 w-full text-start ${subSubName === "" ? "hidden" : ""}`} onClick={() => handleSubClick(subSubName)}>
                          <p>{subSubName}</p>
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
                </div>
              ))}
            </div>

            <div className='py-2 px-12 mt-4 w-full shadow-xl bg-gray-200 rounded-lg'>
              <p className='font-bold'>รายละเอียดวิชา</p>
              <div className='w-full h-1 bg-yellow-400 rounded-lg '/>
              <div className='my-1 grid grid-cols-8 '>
                <p className='col-span-1'>รหัสวิชา</p>
                <p className='col-span-4 text-center'>ชื่อวิชา</p>
                <p className='col-span-1 text-center'>หน่วยกิต</p>
                <p className='col-span-2 text-center'>(บรรยาย-ปฎิบัติ-ค้นคว้า)</p>
              </div>
              {/* showDetai */}
              <div className='w-full h-px bg-gray-300 rounded-lg'/>
              {Category.map(({ name, subject }: SubjectCategory) => (
                <div key={name}>
                  {subject.map(({ name: subName, sub }: Subject) => (
                    <div key={subName}>
                      {sub.map(({ name: subSubName, detail }: Subjectby) => (
                        <div key={subSubName}>
                          <ul>
                            {activeSub === subSubName  && detail.map(({ ID, name: detailName, nameEng, compulsory, credit: detailCredit, hours }: Details) => (
                              <li key={ID}>
                                <div className='my-1 grid grid-cols-8'>
                                  <p className='col-span-1'>{ID}</p>
                                  <p className='col-span-4'>
                                    {detailName} {nameEng}<br/>
                                    <p>วิชาบังคับก่อน : {compulsory}</p>
                                  </p>
                                  <p className='col-span-1 text-center'>{detailCredit}</p>
                                  <p className='col-span-2 text-center'>{hours}</p>
                                </div>
                                <div className='w-full h-px bg-gray-300 rounded-lg'/>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StructurePage;