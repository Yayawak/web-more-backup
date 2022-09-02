import { Rounded } from '@/types/rounded'
import React, { useState } from 'react'
import BaseButton from '../Buttons/Base/BaseButton'

export default function Banner() {
  const [close, setClose] = useState(true)

  return (
    <>
      {close && (
        <div className="relative flex h-[32px] bg-[#f2f2f2] items-center px-[8px]">
          <div className="mdi mdi-bullhorn"></div>
          <div className="sliding-text grow h-full relative mx-[8px] overflow-hidden">
            <span className="whitespace-nowrap h-full absolute top-0 left-0">
              ข่าวประชาสัมพันธ์วันนี้ไม่มีอะไรเลย หน้าจอกว้างไปไหมเนี่ย
              เล็กกว่านี้ได้ก็คงจะดี เขียนจนไม่รู้จะเขียนอะไรแล้ว
            </span>
          </div>
          <BaseButton
            className="h-[22px] min-w-[100px] text-[16px]"
            rounded={10}
            roundedType={Rounded.CUSTOM}
            backgroundColor="#ff7c32"
          >
            อ่านเพิ่มเติม
          </BaseButton>
          <div
            className="cursor-pointer ml-[8px] mdi mdi-close"
            onClick={() => setClose(!close)}
          ></div>
        </div>
      )}

      <style jsx scoped>{`
        @keyframes slide {
          from {
            transform: translateX(100%);
          }

          to {
            transform: translateX(-100%);
          }
        }

        .sliding-text > *:first-child {
          // animation: slide 15s linear infinite;
        }
      `}</style>
    </>
  )
}
