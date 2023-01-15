import { useRouter } from 'next/router'

import { MenuItem, SubMenu } from '@szhsin/react-menu'

import type { MyMenuItem } from './MenuItems'
import { useMemo } from 'react'
import Link from 'next/link'

interface MenuProps {
  item: MyMenuItem
}

const NavbarMenu = ({ item }: MenuProps) => {
  const router = useRouter()
  const hasSubItems = useMemo(() => !!item.submenus, [item])

  return (
    <>
      {!hasSubItems ? (
        <MenuItem>
          <Link href={item.path as string}>{item.title}</Link>
        </MenuItem>
      ) : (
        <SubMenu>
          {item.submenus?.map((subitem, index) => (
            <NavbarMenu key={index} item={subitem} />
          ))}
        </SubMenu>
      )}

      <style jsx global>{`
        :global(.szh-menu-button) {
          height: 100%;
        }

        :global(.szh-menu) {
          width: fit-content;
          padding: 16px;
          background-color: white;
        }

        :global(.szh-menu__item),
        :global(.szh-menu__submenu) {
          color: black;
          background-color: transparent;
          white-space: nowrap;
          cursor: pointer;
        }

        :global(.szh-menu__item):hover,
        :global(.szh-menu__submenu):hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default NavbarMenu
