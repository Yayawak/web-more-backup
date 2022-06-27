import { useRouter } from 'next/router'

import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu'

import type { MyMenuItem } from './MenuItems'

interface MenuProps {
  item: MyMenuItem
  depthLevel: number
}
const NavbarMenu = ({ item, depthLevel }: MenuProps) => {
  const router = useRouter()

  return (
    <>
      {depthLevel === 0 ? (
        <div>
          {item.submenus ? (
            <Menu
              menuButton={<MenuButton>{item.title}</MenuButton>}
              align="center"
            >
              {item.submenus.map((subitem, index) => {
                depthLevel += 1
                return (
                  <NavbarMenu
                    key={index}
                    item={subitem}
                    depthLevel={depthLevel}
                  />
                )
              })}
            </Menu>
          ) : (
            <Menu
              menuButton={
                <MenuButton onClick={() => router.push(item.path + '')}>
                  {item.title}
                </MenuButton>
              }
            />
          )}
        </div>
      ) : (
        <div>
          {item.submenus ? (
            <SubMenu label={item.title}>
              {item.submenus.map((subitem, index) => {
                depthLevel += 1
                return (
                  <NavbarMenu
                    key={index}
                    item={subitem}
                    depthLevel={depthLevel}
                  />
                )
              })}
            </SubMenu>
          ) : (
            <MenuItem onClick={() => router.push(item.path + '')}>
              {item.title}
            </MenuItem>
          )}
        </div>
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
