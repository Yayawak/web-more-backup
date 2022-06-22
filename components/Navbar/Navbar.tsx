import Menu from './Menu'
import type { MenuItem } from './Menu'

const Navbar = () => {
  const menuItems: MenuItem[] = [
    {
      title: "หน้าแรก",
      path: "/",
    },
    {
      title: 'หลักสูตร',
      submenus: [
        {
          title: "International Program",
          path: "/courses/inter",
        },
        {
          title: "ปริญญาตรี",
          path: "/courses/bachelor",
        },
      ],
    },
    {
      title: 'ภาควิชา',
      submenus: [
        {
          title: 'วิทยาการคอมพิวเตอร์',
          path: '/courses/inter'
        },
        {
          title: 'เคมี',
          submenus: [
            {
              title: 'วิทยาการคอมพิวเตอร์',
              path: '/courses/inter'
            },
            {
              title: 'เคมี',
              path: '/courses/bachelor'
            },
          ],
        },
      ],
    },
  ]

  return (
    <>
      <header>
        <nav className="h-[103px] bg-gradient-to-b from-[#fe970b] to-[#f74707]">
          <ul className="h-full text-[25px] flex flex-row justify-end text-white">
            {menuItems.map((menu, index) => {
              const depthLevel = 0
              return <Menu item={menu} key={index} depthLevel={depthLevel} />
            })}
          </ul>
        </nav>
      </header>

      <style jsx>{`
        nav {
          height: var(--navbar-height);
        }
      `}</style>
    </>
  )
}

export default Navbar
