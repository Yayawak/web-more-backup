import Image from 'next/image'
import Link from 'next/link'

import { aboutItems, contactItems } from './items'

import kmitlLogo from '../../assets/logos/kmitl-logo.png'

/**
 * TODO: Add responsive design to Footer component
 */

const Footer = () => {
  return (
    <footer className="bottom-0 w-full h-[380px] bg-[#021e4a] text-white flex items-center">
      <div className="w-full px-[139px] flex">
        <div>
          <Image
            src={kmitlLogo}
            alt="KMITL logo"
            layout="fixed"
            width={164}
            height={164}
          />
        </div>
        <div className="pl-16 max-w-[520px]">
          <p className="text-[14px] font-bold">KMITL</p>
          <p className="text-[22px] my-4">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="border border-white max-h-[320px] h-full" />
      <div className="w-full flex pl-16">
        <div>
          <p className="text-base font-bold mb-6">About Science KMITL</p>
          <ul>
            {aboutItems.map((item, index) => {
              return (
                <li key={index} className="mb-1 hover:underline">
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="ml-auto mr-40">
          <p className="text-[25px]">Contact</p>
          <p>Phone : 02-329-8400 To 8411</p>
          <p>Fax : 02-329-8412</p>
          <ul className="flex max-h-[52px] gap-6 mt-4">
            {contactItems.map((item, index) => {
              return (
                <li key={index} className="hover:cursor-pointer">
                  <Link href={item.path}>
                    <a>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={52}
                        height={52}
                      />
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer