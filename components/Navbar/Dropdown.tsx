import Link from 'next/link'

import type { MenuItem } from './Menu'
import Menu from './Menu'

interface DropdownProps {
  items: MenuItem[],
  dropdownShow: boolean,
  depthLevel: number,
}

const Dropdown = ({ items, dropdownShow, depthLevel }: DropdownProps) => {
  depthLevel += 1

  return (
    <ul className={`bg-black absolute ${depthLevel == 1 ? "right-0 top-full" : "right-full top-0.5"}`}>
      {items.map((menu, index) => (
        <Menu item={menu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown