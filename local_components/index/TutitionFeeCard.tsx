import { ITutitionFeeCard, ITutitionFeeCard2 } from '@/types/tutition-fee'
import Image from 'next/image'


export const TutitionFeeCard1 = ({ icon, department, branch }: ITutitionFeeCard) => {
  return (
    <div className='flex lg:gap-4 mx-2 mb-4 py-2 md:py-4 lg:py-6 border bg-white border-[#E1E1E1] rounded-xl'>
      <div className='relative w-16 md:w-24 h-16 md:h-24'>
        <Image src={icon} alt='icon' fill sizes="(min-width: 0) 100vw" />
      </div>
      <div className='flex-1 body1 lg:h6 pr-1'>
        <h4 className='bodyBig lg:text-[30px] font-bold mb-2'>{department}</h4>
        {branch.map((val, i) => {
          return (
            <div className='ml-2 mb-1' key={val.name + i}>
              <p className='font-bold mb-1'>{val.name}</p>
              <div className='flex flex-col md:flex-row md:gap-16 body2 lg:bodyBig'>
                <p>ค่าธรรมเนียมการศึกษา : {val.tutitionFee} บาท ต่อภาคการศึกษา</p>
                <p>จำนวนหน่วยกิต : {val.credit}</p>
              </div>
            </div>)
        })}
      </div>
    </div>
  )
}
export const TutitionFeeCard2 = ({ icon, department, branch }: ITutitionFeeCard2) => {
  return (
    <div className='flex lg:gap-4 mx-2 mb-4 py-2 md:py-4 lg:py-6 border bg-white border-[#E1E1E1] rounded-xl'>
      <div className='relative w-16 md:w-24 h-16 md:h-24'>
        <Image src={icon} alt='icon' fill sizes="(min-width: 0) 100vw" />
      </div>
      <div className='flex-1 body1 lg:h6 pr-1'>
        <h4 className='bodyBig lg:text-[30px] font-bold mb-2'>{department}</h4>
        {branch.map((val, i) => {
          return (
            <div className='ml-2 mb-1' key={val.name + i}>
              <p className='font-bold'>{val.name}</p>
              {val.lessonPlan.map((val, i) => {
                return (
                  <div key={val.name}>
                    <p className='text-[#6A6A6A] font-bold lg:mt-2'>{val.name}</p>
                    <div className='flex flex-col md:flex-row md:gap-16 body2 lg:bodyBig'>
                      <div>
                        <p>ค่าธรรมเนียมการศึกษา นักศึกษาสามัญ   : {val.tutitionFee1} บาท ต่อภาคการศึกษา</p>
                        <p>ค่าธรรมเนียมการศึกษา นักศึกษาต่างชาติ : {val.tutitionFee2} บาท ต่อภาคการศึกษา</p>
                      </div>
                      <p>จำนวนหน่วยกิต : {val.credit}</p>
                    </div>
                  </div>
                )
              })}
            </div>)
        })}
      </div>
    </div>
  )
}