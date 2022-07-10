export type MyMenuItem = {
  title: string
  path?: string
  isExternalPath?: boolean
  submenus?: MyMenuItem[]
}

const menuItems: MyMenuItem[] = [
  {
    title: 'หน้าแรก',
    path: '/',
  },
  {
    title: 'หลักสูตร',
    submenus: [
      {
        title: 'International Program',
        path: '/courses/inter',
      },
      {
        title: 'ปริญญาตรี',
        path: '/courses/bachelor',
      },
    ],
  },
  {
    title: 'ภาควิชา',
    submenus: [
      {
        title: 'วิทยาการคอมพิวเตอร์',
        path: '/major/comsci',
      },
      {
        title: 'เคมี',
        path: '/major/chem',
      },
    ],
  },
  {
    title: 'เกี่ยวกับเรา',
    submenus: [
      {
        title: 'ประวัติความเป็นมา',
        path: 'https://www.science.kmitl.ac.th/page#/history',
        isExternalPath: true,
      },
      {
        title: 'เคมี',
        path: '/major/chem',
        submenus: [
          {
            title: 'International Program',
            path: '/courses/inter',
          },
          {
            title: 'ปริญญาตรี',
            path: '/courses/bachelor',
          },
        ],
      },
    ],
  },
  {
    title: 'หน่วยงานสนับสนุน',
    submenus: [
      {
        title: 'TCAS65',
        path: '/tcas65',
      },
      {
        title: 'เอกสาร',
        path: '/documents',
      },
    ],
  },
  {
    title: 'TCAS65',
    path: '/tcas65',
  },
  {
    title: 'เอกสาร',
    path: '/documents',
  },
]

export default menuItems
