import { SubMenu } from "@szhsin/react-menu"

export type MyMenuItem = {
  title: string
  path?: string
  isExternalPath?: boolean
  submenus?: MyMenuItem[]
}

export type MyPathItem = {
  idx: number
  path: string
}

export const menuItems: MyMenuItem[] = [
  {
    title: 'หน้าแรก',
    path: '/',
  },
  {
    title: 'หลักสูตร',
    submenus: [
      {
        title: 'ปริญญาตรี',
        path: '/course/course-bachelor',
        // path: 'https://www.science.kmitl.ac.th/page#/course-tee',
        // isExternalPath: true,
      },
      {
        title: 'ปริญญาโท',
        path: '/course/course-master',
        // path: 'https://www.science.kmitl.ac.th/page#/course-tor',
        // isExternalPath: true,
      },
      {
        title: 'ปริญญาเอก',
        path: '/course/course-doctorate',
        // path: 'https://www.science.kmitl.ac.th/page#/course-aek',
        // isExternalPath: true,
      },
      {
        title: 'International Program',
        path: 'https://inter.science.kmitl.ac.th/',
        isExternalPath: true,
      },
      {
        title: 'ค่าธรรมเนียมการศึกษา',
        path: '/course/tutition-fee',
        // isExternalPath: true,
      },
    ],
  },
  {
    title: 'ภาควิชาและศูนย์',
    submenus: [
      {
        title: 'ภาควิชาคณิตศาสตร์',
        path: 'https://www.science.kmitl.ac.th/department-math',
        isExternalPath: true,
      },
      {
        title: 'ภาควิชาเคมี',
        path: 'https://www.science.kmitl.ac.th/chemistry',
        isExternalPath: true,
      },
      {
        title: 'ภาควิชาชีววิทยา',
        path: 'https://www.science.kmitl.ac.th/department-bio',
        isExternalPath: true,
      },
      {
        title: 'ภาควิชาฟิสิกส์',
        path: 'https://www.science.kmitl.ac.th/department-physics',
        isExternalPath: true,
      },
      {
        title: 'ภาควิชาวิทยาการคอมพิวเตอร์',
        path: 'https://www.science.kmitl.ac.th/department-com',
        isExternalPath: true,
      },
      {
        title: 'ภาควิชาสถิติ',
        path: 'https://www.science.kmitl.ac.th/department-stat',
        isExternalPath: true,
      },
      {
        title: 'ศูนย์เครื่องมือวิทยาศาสตร์',
        path: 'https://sciins.science.kmitl.ac.th/',
        isExternalPath: true,
      },
      {
        title: 'ศูนย์วิเคราะห์ข้อมูลอัจฉริยะ',
        path: 'https://kdaicenter.science.kmitl.ac.th/',
        isExternalPath: true,
      },
    ],
  },
  // {
  //   title: 'หน่วยงานสนับสนุน',
  //   submenus: [
  //     {
  //       title: 'กิจการต่างประเทศ',
  //       path: 'https://www.science.kmitl.ac.th/international_affairs#/about',
  //       isExternalPath: true,
  //     },
  //     {
  //       title: 'บริการคอมพิวเตอร์',
  //       path: 'http://www.it.science.kmitl.ac.th/app/repair/data-repair.php',
  //       isExternalPath: true,
  //     },
  //     {
  //       title: 'งานประกันคุณภาพ',
  //       path: 'http://www.it.science.kmitl.ac.th/oqa/',
  //       isExternalPath: true,
  //     },
  //   ],
  // },
  {
    title: 'บัณฑิตศึกษา',
    path: 'https://www.science.kmitl.ac.th/graduate/#/home',
    isExternalPath: true,
  },
  {
    title: 'วิจัย',
    path: 'https://research.science.kmitl.ac.th/',
    isExternalPath: true,
  },
  // {
  //   title: 'TCAS65',
  //   path: 'https://www.science.kmitl.ac.th/page#/news_each/620609270a5c80e1f06c3f0f',
  //   isExternalPath: true,
  // },
  {
    title: 'บริการ',
    submenus: [
      {
        title: 'แจ้งซ่อม',
        path: 'http://sciserv01.sci.kmitl.ac.th/repair-sci/pages/auth/',
        isExternalPath: true,
      },
      {
        title: 'บริการถามตอบปัญหา',
        path: 'https://www.facebook.com/SciKmitl?_rdc=1&_rdr',
        isExternalPath: true,
      },
      {
        title: 'แบบฟอร์มสำหรับนักศึกษา',
        path: 'https://www.science.kmitl.ac.th/page#/download',
        isExternalPath: true,
      },
      {
        title: 'แบบฟอร์มบุคลากร',
        path: 'https://www.science.kmitl.ac.th/page#/download',
        isExternalPath: true,
      },
    ]
  },
  {
    title: 'เกี่ยวกับเรา',
    submenus: [
      {
        title: 'รู้จักคณะวิทยาศาสตร์',
        path: '/about/history',
        isExternalPath: true,
      },
      // {
      //   title: 'ปรัชญา ปณิธาน วิสัยทัศน์ พันธกิจ',
      //   path: 'https://www.science.kmitl.ac.th/page#/resolution',
      //   isExternalPath: true,
      // },
      {
        title: 'คณะผู้บริหาร',
        path: 'https://www.science.kmitl.ac.th/new/en/about/executive',
        isExternalPath: true,
      },
      {
        title: 'บุคลากรสายสนับสนุน',
        path: 'https://www.science.kmitl.ac.th/page#/staff',
        isExternalPath: true,
      },
      {
        title: 'โครงสร้างองค์กร',
        path: 'https://www.science.kmitl.ac.th/new/en/about/organization-chart',
      },
      {
        title: 'รายงานประจำปี',
        path: '/about/yearly-report',
        isExternalPath: true,
      },
      {
        title: 'ข้อมูลเปิดเผยสาธารณะ (ITA)',
        // path: 'https://www.science.kmitl.ac.th/page#/news_each/5edf9affec4d923a5ce03cd3',
        // isExternalPath: true,
        path: '/about/ita',
      },
      {
        title: 'ข้อมูลการติดต่อ',
        path: 'https://www.science.kmitl.ac.th/page#/contact',
        isExternalPath: true,
      },
    ],
  },
]

// Mapping index between menuItems <--> pathItems, use for underline.

export const pathItems : MyPathItem[] = [
{
  idx: 0,
  path: ""
},{
  idx: 1,
  path: "course"
},{
  idx: 2,
  path: "department"
},{
  idx: 3,
  path: "graduate"
},{
  idx: 4,
  path: "research"
},{
  idx: 5,
  path: "services"
},{
  idx: 6,
  path: "about"
},]

// export default menuItems
