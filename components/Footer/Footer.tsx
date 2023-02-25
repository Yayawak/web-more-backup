import Image from 'next/image'
import Link from 'next/link'

import { aboutItems, contactItems, infoItems } from './items'

import sciKmitlLogo from '@/assets/logos/sci-kmitl-logo.png'

const Footer = () => {
  return (
    <footer className="relative flex w-full flex-col items-center gap-5 bg-[#021E4A] pt-[100px] pb-[60px] text-white md:flex-row md:justify-evenly md:gap-0">

      <div className=" absolute top-[-100px] flex h-auto w-[90%] flex-col items-center justify-between gap-3 rounded-2xl bg-gradient-to-b from-[#F96E0A] to-[#FAAF08] py-[30px] px-[10px] md:py-[30px] md:px-[53px] md:top-[-50px] md:h-[110px] md:w-[70%] md:flex-row">
        <div className="text-center  md:font-semibold text-base md:text-xs lg:text-base leading-4 md:leading-5 md:text-left">
          <p>ร่วมบริจาค เพื่อสนับสนุนคณะวิทยาศาสตร์</p>
          <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
        </div>
        <a
          className="rounded-full bg-[#0A17A7] py-[8px] px-[16px] text-xs md:text-xs lg:text-base font-light tracking-wide"
          href="/"
        >
          บริจาคเงินทุนการศึกษา
        </a>
      </div>

      <div className="flex md:w-[230px] lg:w-[460px] justify-center text-base font-light md:block">
        <div className="relative w-[197px] h-[42px] lg:h-[70px] lg:w-[330px]">
          <Image
            src={sciKmitlLogo}
            alt={'Sci kmitl logo'}
            fill
            sizes="(min-width: 0) 100vw"
          />
        </div>
        <div className="hidden md:block">
          <p className="mt-2">Copyright © 2022.</p>
          <p className="mt-1.5">
            คณะวิทยาศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </p>
          <p className="mt-1">All rights reserved.</p>
          <div className="mt-5 border-t-[1px] w-[90%]"></div>
          <div className="mt-3 flex gap-5">
            {contactItems.map((item, index) => {
              return (
                <div className="relative h-[24px] w-[24px]" key={index}>
                  <a href={item.path} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 0) 100vw"
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-xs font-light md:block md:text-base">
        <div className="mb-2 text-center text-base md:text-xl font-bold md:text-left ">
          <p>คณะวิทยาศาสตร์</p>
          <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
        </div>
        {infoItems.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <div>
                {item.title} : {item.dataline[0]}
              </div>
              {item.dataline.map((data, index) => {
                if (index > 0) {
                  return <div key={index}>{data}</div>
                }
              })}
            </div>
          )
        })}
      </div>

      <div className="flex flex-col justify-evenly gap-3.5 text-center text-sm font-light md:gap-0 md:text-left md:text-base">
        <div className="text-base font-semibold md:hidden">
          เกี่ยวกับคณะวิทยาศาสตร์
        </div>
        {aboutItems.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.path}>{item.title}</a>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col items-center md:hidden">
        <div className="mt-2 w-[90vw] border-t-[1px]"></div>
        <div className="mt-5 flex gap-5 font-light">
          {contactItems.map((item, index) => {
            return (
              <div className="relative h-[24px] w-[24px]" key={index}>
                <a href={item.path} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 0) 100vw"
                  />
                </a>
              </div>
            )
          })}
        </div>
        <p className="mt-5 font-light text-xs">Copyright © 2022.</p>
        <p className="mt-1.5 font-light text-xs">
          คณะวิทยาศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </p>
        <p className="mt-1 font-light text-xs">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
