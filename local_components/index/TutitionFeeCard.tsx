import { ITutitionFeeCard, ITutitionFeeCard2 } from '@/types/tutition-fee'
import Image from 'next/image'

export const TutitionFeeCard1 = ({
  icon,
  department,
  branch,
}: ITutitionFeeCard) => {
  return (
    <div className="mx-2 mb-4 flex rounded-xl border border-[#E1E1E1] bg-white py-2 md:py-4 lg:gap-4 lg:py-6">
      <div className="relative h-16 w-16 md:h-24 md:w-24">
        <Image src={icon} alt="icon" fill sizes="(min-width: 0) 100vw" />
      </div>
      <div className="body1 lg:h6 flex-1 pr-1">
        <h4 className="bodyBig mb-2 font-bold lg:text-[30px]">{department}</h4>
        {branch.map((val, i) => {
          return (
            <div className="ml-2 mb-1" key={val.name + i}>
              <p className="mb-1 font-bold">{val.name}</p>
              <div className="body2 lg:bodyBig flex flex-col md:flex-row md:gap-16">
                <p>
                  ค่าธรรมเนียมการศึกษา : {val.tutitionFee} บาท ต่อภาคการศึกษา
                </p>
                {/* <p>จำนวนหน่วยกิต : {val.credit}</p> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export const TutitionFeeCard2 = ({
  icon,
  department,
  branch,
}: ITutitionFeeCard2) => {
  return (
    <div className="mx-2 mb-4 flex rounded-xl border border-[#E1E1E1] bg-white py-2 md:py-4 lg:gap-4 lg:py-6">
      <div className="relative h-16 w-16 md:h-24 md:w-24">
        <Image src={icon} alt="icon" fill sizes="(min-width: 0) 100vw" />
      </div>
      <div className="body1 lg:h6 flex-1 pr-1">
        <h4 className="bodyBig mb-2 font-bold lg:text-[30px]">{department}</h4>
        {branch.map((val, i) => {
          return (
            <div className="ml-2 mb-1" key={val.name + i}>
              <p className="font-bold">{val.name}</p>
              {val.lessonPlan.map((val, i) => {
                return (
                  <div key={val.name}>
                    <p className="font-bold text-[#6A6A6A] lg:mt-2">
                      {val.name}
                    </p>
                    <div className="body2 lg:bodyBig flex flex-col md:flex-row md:gap-16">
                      <div>
                        <p>
                          ค่าธรรมเนียมการศึกษา นักศึกษาสามัญ :{' '}
                          {val.tutitionFee1} บาท ต่อภาคการศึกษา
                        </p>
                        <p>
                          ค่าธรรมเนียมการศึกษา นักศึกษาต่างชาติ :{' '}
                          {val.tutitionFee2} บาท ต่อภาคการศึกษา
                        </p>
                      </div>
                      {/* <p>จำนวนหน่วยกิต : {val.credit}</p> */}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
