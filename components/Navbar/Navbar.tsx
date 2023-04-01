import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'

import menuItems, { MyMenuItem } from './MenuItems'

import sciKmitlLogo from '@/assets/logos/sci-kmitl-logo.png'
import flagTH from '@/assets/flags/th.svg'
import flagEN from '@/assets/flags/en.svg'
import NavbarMenu from './NavbarMenu'
import { Menu, MenuButton } from '@szhsin/react-menu'

/**
 * TODO: Add responsive design to Navbar component
 */

const Navbar = () => {
  const router = useRouter()
  const { asPath } = router

  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(0);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-2 md:px-0 flex justify-between items-center bg-[#FF7A00] drop-shadow-sm text-white">
        {/* Logo */}
        <Link href="/" className="h-full flex items-center md:ml-[20px] lg:ml-[70px]">
          <Image
            src={sciKmitlLogo}
            alt="Science KMITL Logo"
            width={220}
            height={48}
            quality="100"
            priority
            sizes="(min-width: 0) 100vw"
          />
        </Link>
        <div className='lg:hidden md:mr-4' onClick={() => setActive(!active)}>
          <svg fill='#ffff' viewBox="0 0 100 80" width="32" height="32">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </div>


        {/* Navigation */}
        <div className="ml-auto h-full hidden lg:flex flex-col md:flex-row gap-[24px]">
          {menuItems.map((item, index) => (
            <div className="navbar-menu" key={index} onClick={() => setClicked(index)}>
              {item.submenus && item.submenus.length > 0 ? (
                <Menu
                  key={index}
                  menuButton={<MenuButton className={`${clicked == index && "underline"}`}>{item.title}</MenuButton>}
                >
                  {item.submenus.map((menu, index) => (
                    <NavbarMenu item={menu} key={index} />
                  ))}
                </Menu>
              ) : (
                <Link className={`${clicked == index && "underline"}`} href={item.path as string}>{item.title}</Link>
              )}
            </div>
          ))}
        </div>

        {/* Languages */}
        <div
          css={{
            '& > div': {
              overflow: 'hidden',
              borderRadius: '5px',
            },
          }}
          className="hidden lg:flex items-center h-full pl-[24px] gap-[8px] lg:mr-[60px]"
        >
          <div className="relative w-[25px] h-[20px]">
            <Link href={asPath} locale="th">
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={flagTH}
                  alt="Thai flag"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
            </Link>
          </div>

          <div className="relative w-[25px] h-[20px]">
            <Link href={asPath} locale="en">
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={flagEN}
                  alt="English flag"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
            </Link>
          </div>
        </div>

      </nav>
      {/* for mobile */}
      <div className={`${active ? 'fixed z-50 w-36 h-full' : 'hidden'} lg:hidden bg-[#FF7A00] text-white opacity-95 p-4 right-0 top-12`}>
        {/* Navigation */}
        <div className="ml-auto w-full flex flex-col lg:flex-row gap-[24px]" >
          {menuItems.map((item, index) => (
            <div className="navbar-menu" key={index} onClick={() => setClicked(index)}>
              {item.submenus && item.submenus.length > 0 ? (
                <Menu
                  key={index}
                  menuButton={<MenuButton className={`${clicked == index && "underline"}`}>{item.title}</MenuButton>}
                >
                  {item.submenus.map((menu, index) => (
                    <NavbarMenu item={menu} key={index} />
                  ))}
                </Menu>
              ) : (
                <Link className={`${clicked == index && "underline"}`} href={item.path as string}>{item.title}</Link>
              )}
            </div>
          ))}
        </div>

        {/* Languages */}
        <div
          css={{
            '& > div': {
              overflow: 'hidden',
              borderRadius: '5px',
            },
          }}
          className="flex w-full justify-between items-center p-6 mt-72">
          <div className="relative w-[25px] h-[20px]">
            <Link href={asPath} locale="th">
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={flagTH}
                  alt="Thai flag"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
            </Link>
          </div>

          <div className="relative w-[25px] h-[20px]">
            <Link href={asPath} locale="en">
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={flagEN}
                  alt="English flag"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx scoped lang="scss">{`
        nav {
          height: var(--navbar-height);
          z-index: 999;

          .navbar-menu {
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
