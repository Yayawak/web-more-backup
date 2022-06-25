import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Menu from './Menu'
import menuItems from './MenuItems'

import sciKmitlLogo from '../../assets/logos/sci-kmitl-logo.png'
import flagTH from '../../assets/flags/flag-th.png'
import flagEN from '../../assets/flags/flag-en.png'

/**
 * TODO: Add responsive design to Navbar component
 */

const Navbar = () => {
  const router = useRouter()
  const { asPath } = router

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center bg-gradient-to-b from-[#ff970b] to-[#f74707] text-white">
        {/* Logo */}
        <Link href="/">
          <a className="h-full flex items-center ml-[70px]">
            <Image
              src={sciKmitlLogo}
              alt="Science KMITL Logo"
              layout="fixed"
              width={220}
              height={48}
              quality="100"
            />
          </a>
        </Link>

        {/* Navigation */}
        <ul className="ml-auto h-full text-[25px] flex">
          {menuItems.map((menu, index) => {
            const depthLevel = 0
            return <Menu item={menu} key={index} depthLevel={depthLevel} />
          })}
        </ul>

        {/* Languages */}
        <ul className="flex items-center h-full pl-[18px] gap-[8px] mr-[60px]">
          <li className="flex h-min">
            <Link href={asPath} locale="th">
              <a className="h-[24px]">
                <Image src={flagTH} alt="Thai logo" />
              </a>
            </Link>
          </li>
          <li className="flex h-min">
            <Link href={asPath} locale="en">
              <a className="h-[24px]">
                <Image src={flagEN} alt="English logo" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          height: var(--navbar-height);
          z-index: 999;
        }
      `}</style>
    </>
  )
}

export default Navbar