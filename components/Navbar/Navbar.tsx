import { useState } from 'react'
import Link from 'next/link'
import Menu from './Menu'

type MenuItem = {
  title: string,
  path?: string,
  submenu?: MenuItem[],
}

const Navbar = () => {
  const menuItems: MenuItem[] = [
    {
      title: 'หน้าแรก',
      path: '/',
    },
    {
      title: 'หลักสูตร',
      submenu: [
        {
          title: 'International Program',
          path: '/courses/inter'
        },
        {
          title: 'ปริญญาตรี',
          path: '/courses/bachelor'
        },
      ],
    },
  ]

  return (
      <header>
        <nav className="h-[103px] bg-gradient-to-b from-[#fe970b] to-[#f74707]">
          <ul className="h-full text-[25px] flex flex-row gap-4 justify-end text-white">
            {menuItems.map((menu, index) => {
              const depthLevel = 0
              return <Menu item={menu} key={index} depthLevel={depthLevel} />
            })}
          </ul>
        </nav>
      </header>
  )
}

export default Navbar
