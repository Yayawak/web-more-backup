import Image from 'next/image'
import Link from 'next/link'

import { aboutItems, contactItems, infoItems } from './items'
import sci_KMITL_Logo from '@/assets/logos/sci-kmitl-logo.png'

const Footer = () => {
  return (
    <footer className="relative flex w-full flex-col items-center gap-5 bg-[#021E4A] pt-[100px] pb-[60px] text-white md:h-[410px] md:flex-row md:justify-evenly md:gap-0">
      <div className=" absolute top-[-100px] flex h-auto w-[90%] flex-col items-center justify-between gap-3 rounded-2xl bg-gradient-to-b from-[#F96E0A] to-[#FAAF08] py-[30px] px-[10px] md:top-[-50px] md:h-[110px] md:w-[70%] md:flex-row md:py-[30px] md:px-[53px]">
        <div className="text-center  text-base leading-4 md:text-left md:text-xs md:font-semibold md:leading-5 lg:text-base">
          <p>ร่วมบริจาค เพื่อสนับสนุนคณะวิทยาศาสตร์</p>
          <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
        </div>
        <Link href="/">
          <button
            disabled
            className="rounded-full bg-[#0A17A7] py-[8px] px-[16px] text-xs font-light tracking-wide disabled:bg-[#a6aadf] disabled:text-[#444a89] md:text-xs lg:text-base"
          >
            บริจาคเงินทุนการศึกษา
          </button>
        </Link>
      </div>
      <div className="flex justify-center text-base font-light md:block md:w-[230px] lg:w-[460px]">
        <div className="relative h-[42px] w-[197px] lg:h-[70px] lg:w-[330px]">
          <Image
            src={sci_KMITL_Logo}
            alt={'Sci KMITL logo'}
            fill
            sizes="(min-width: 0) 100vw"
          />
        </div>
        <div className="hidden md:block">
          <div className="mt-2">
            Copyright <span className="mdi mdi-copyright text-[14px]"></span>{' '}
            2022,
          </div>
          <p className="mt-1.5">
            คณะวิทยาศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </p>
          <p className="mt-1">All rights reserved.</p>
          <div className="mt-5 w-[90%] border-t-[1px]"></div>
          <div className="mt-3 flex gap-5">
            {contactItems.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="relative h-[24px] w-[24px]"
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 0) 100vw"
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-xs font-light md:block md:text-base">
        <div className="mb-2 text-center text-base font-bold md:text-left md:text-xl ">
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
      <div className="flex flex-col justify-evenly gap-3.5 text-center text-sm font-light md:h-full md:gap-0 md:text-left md:text-base">
        <div className="text-base font-semibold md:hidden">
          เกี่ยวกับคณะวิทยาศาสตร์
        </div>
        {aboutItems.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              {item.title}
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col items-center md:hidden">
        <div className="mt-2 w-[90vw] border-t-[1px]"></div>
        <div className="mt-5 flex gap-5 font-light">
          {contactItems.map((item, index) => {
            return (
              <Link
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-[24px] w-[24px]"
                key={index}
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 0) 100vw"
                />
              </Link>
            )
          })}
        </div>
        <p className="mt-5 text-xs font-light">
          Copyright <span className="mdi mdi-copyright text-[13px]"></span>{' '}
          2022,
        </p>
        <p className="mt-1.5 text-xs font-light">
          คณะวิทยาศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </p>
        <p className="mt-1 text-xs font-light">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
