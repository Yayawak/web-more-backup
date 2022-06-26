import { useRouter } from "next/router"

import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu'

import type { MyMenuItem } from './MenuItems'

interface MenuProps {
  item: MyMenuItem
  depthLevel: number
}
const MyMenu = ({ item, depthLevel }: MenuProps) => {
  const router = useRouter()

  return (
    <>
      {depthLevel === 0 ? <li className="my-list">
        {item.submenus ? <Menu
          menuButton={
            <MenuButton className="my-button">{item.title}</MenuButton>
          }
          className="my-menu"
          align="center"
        >
          {item.submenus.map((subitem, index) => {
            depthLevel += 1
            return (
              <MyMenu key={index} item={subitem} depthLevel={depthLevel} />
            )
          })}
        </Menu> : <Menu
          menuButton={<MenuButton className="my-button" onClick={() => router.push(item.path + "")}>{item.title}</MenuButton>}
          className="my-menu"
        />}
      </li> : <li className="my-list">
        {item.submenus ? <SubMenu label={item.title} className="my-item">
          {item.submenus.map((subitem, index) => {
            depthLevel += 1
            return (
              <MyMenu key={index} item={subitem} depthLevel={depthLevel} />
            )
          })}
        </SubMenu> : <MenuItem
          className="my-item"
          onClick={() => router.push(item.path + "")}
        >
          {item.title}
        </MenuItem>}
      </li>}

      <style jsx global>{`
        .my-list {
          height: 100%;
          padding-inline: 1.5rem/* 24px */; 
        }

        .my-button {
          height: 100%;
        }

        .my-item {
          white-space: nowrap;
          color: rgb(0 0 0);
          background-color: #f74707;
          padding-inline: 1.5rem/* 24px */;
          padding-block: 0.25rem/* 4px */;
        }

        .my-item:hover {
          text-decoration-line: underline;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default MyMenu
