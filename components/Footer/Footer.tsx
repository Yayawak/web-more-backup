import Image from 'next/image'
import Link from 'next/link'

import { aboutItems, contactItems } from './items'

import kmitlLogo from '../../assets/logos/kmitl-logo.png'

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-[#021e4a] text-white flex flex-col items-center px-4 xl:flex-row xl:h-80 xl:px-0">
      <div className="w-full flex flex-col items-center pt-10 xl:flex-row xl:p-0 xl:gap-12 xl:ml-16">
        <div className="w-[120px] h-[120px] relative xl:w-[165px] xl:h-[165px] xl:ml-auto">
          <Image
            src={kmitlLogo}
            alt="KMITL logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-center xl:text-left xl:w-[520px] xl:mr-auto">
          <p className="text-[22px] mb-[8px]">
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </p>
          <p className="text-sm font-bold">
            SCHOOL OF SCIENCE KING MONGKUT’S INSTITUTE OF TECHNOLOGY LADKRABANG
          </p>
        </div>
      </div>
      <div className="hidden border border-white xl:block xl:h-72" />
      <div className="w-full flex flex-col items-center mt-7 mb-4 text-center sm:flex-row sm:items-start sm:text-left xl:my-0 xl:mr-16">
        <div className="h-full mb-7 md:mx-auto">
          <p className="text-[22px] font-bold mb-2">About Science KMITL</p>
          <ul>
            {aboutItems.map((item, index) => {
              return (
                <li key={index} className="text-sm mb-1 hover:underline">
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="hidden border border-white h-36 m-auto sm:block xl:hidden" />
        <div className="h-full md:mx-auto">
          <p className="text-[22px] font-bold mb-2">Contact</p>
          <p className="text-sm leading-none">Phone : 02-329-8400 To 8411</p>
          <p className="text-sm leading-none">Email : SCIENCE@kmitl.ac.th</p>
          <p className="text-sm leading-none">Fax : 02-329-8412</p>
          <ul className="flex gap-4 mt-2">
            {contactItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a className={item.mdiIconClass + ' text-3xl'} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="xl:hidden">
        <p className="text-sm">© 2010 — 2020</p>
        <p className="text-sm">Privacy — Terms</p>
      </div>
    </footer>
  )
}

export default Footer
