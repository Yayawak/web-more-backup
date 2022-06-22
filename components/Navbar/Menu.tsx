import React, { useState } from 'react'
import Link from 'next/link'

import Dropdown from './Dropdown'

export type MenuItem = {
  title: string,
  path?: string,
  submenus?: MenuItem[],
}

interface MenuProps {
  item: MenuItem,
  depthLevel: number,
}

const Menu = ({ item, depthLevel }: MenuProps) => {
  const [dropdownShow, setDropdownShow] = useState(false)

  const dismissHandler = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    if (!e.currentTarget.contains(e.target)) {
      setDropdownShow(false)
    }
  }

  return (
    <li
      className={`flex items-center hover:cursor-pointer hover:bg-gradient-to-b from-[#ff7c32] to-[#000000] relative ${dropdownShow ? "bg-gradient-to-b from-[#ff7c32] to-[#000000]" : ""}`}
    >
      {item.submenus ? (
        <>
          <button
            className="w-full h-full px-[25px]"
            onClick={() => setDropdownShow(!dropdownShow)}
            onBlur={(e) => dismissHandler(e)}
          >
            {item.title}
          </button>
          {dropdownShow ? (<Dropdown
            items={item.submenus}
            dropdownShow={dropdownShow}
            depthLevel={depthLevel}
          />) : <></>}
        </>
      ) : (
        <Link href={item.path + ""}>
          <a className="whitespace-nowrap px-[25px]">{item.title}</a>
        </Link >
      )}
    </li>
  )
}

export default Menu
