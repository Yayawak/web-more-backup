import { useRef, useState } from 'react'
import Link from 'next/link'

type MenuItem = {
  title: string,
  path?: string,
  submenu?: MenuItem[],
}

interface MenuProps {
  item: MenuItem,
  depthLevel: number,
}

const Menu = ({ item, depthLevel }: MenuProps) => {
  const [dropdownShow, setDropdownShow] = useState(false)

  let ref = useRef

  return (
    <li
      className="px-[25px] flex items-center hover:cursor-pointer"
      // ref={ref}
    >
      {item.submenu ? (
        <div></div>
      ) : (
        <Link href={"/" + item.path}>
          <a className="">{item.title}</a>
        </Link >
      )}
    </li >
  )
}

export default Menu
