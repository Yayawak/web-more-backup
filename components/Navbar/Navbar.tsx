import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

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

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center bg-[#FF7A00] drop-shadow-sm text-white">
        {/* Logo */}
        <Link href="/" className="h-full flex items-center ml-[70px]">
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

        {/* Navigation */}
        <div className="ml-auto h-full flex gap-[24px]">
          {menuItems.map((item, index) => (
            <div className="navbar-menu" key={index}>
              {item.submenus && item.submenus.length > 0 ? (
                <Menu
                  key={index}
                  menuButton={<MenuButton>{item.title}</MenuButton>}
                >
                  {item.submenus.map((menu, index) => (
                    <NavbarMenu item={menu} key={index} />
                  ))}
                </Menu>
              ) : (
                <Link href={item.path as string}>{item.title}</Link>
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
          className="flex items-center h-full pl-[18px] gap-[8px] mr-[60px]"
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
