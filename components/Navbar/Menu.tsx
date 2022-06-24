import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

import Dropdown from "./Dropdown"

export type MenuItem = {
  title: string
  path?: string
  submenus?: MenuItem[]
}

interface MenuProps {
  item: MenuItem
  depthLevel: number
}

const Menu = ({ item, depthLevel }: MenuProps) => {
  const [dropdownShow, setDropdownShow] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  const dismissHandler = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    if (!e.currentTarget.contains(e.target)) {
      setDropdownShow(false)
    }
  }

  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (
        (target && !target.contains(ref.current)) ||
        target.parentNode === document
      ) {
        setDropdownShow(false)
      }
    }

    document.addEventListener("click", onDocumentClick)

    return () => {
      document.removeEventListener("click", onDocumentClick)
    }
  }, [ref])

  return (
    <li
      className={`flex items-center hover:cursor-pointer hover:bg-gradient-to-b from-[#ff7c32] to-[#00000048] relative ${dropdownShow ? "bg-gradient-to-b from-[#ff7c32] to-[#00000048]" : ""
        }`}
    >
      {item.submenus ? (
        <>
          <button
            className="w-full h-full px-[18px] flex items-center gap-1"
            onClick={() => setDropdownShow(!dropdownShow)}
            onBlur={(e) => dismissHandler(e)}
            ref={ref}
          >
            {item.title}
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.2706 4.79492L13.5761 6.37458L7.38472 13.8663L1.19336 6.37458L2.49883 4.79492L7.38472 10.707L12.2706 4.79492Z" fill="white" />
            </svg>
          </button>
          {dropdownShow ? (
            <Dropdown
              items={item.submenus}
              dropdownShow={dropdownShow}
              depthLevel={depthLevel}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <Link href={item.path + ""}>
          <a className="whitespace-nowrap px-[18px]">{item.title}</a>
        </Link>
      )}
    </li>
  )
}

export default Menu
