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
        path: 'https://inter.science.kmitl.ac.th/',
        isExternalPath: true,
      },
      {
        title: 'ปริญญาตรี',
        path: 'https://www.science.kmitl.ac.th/page#/course-tee',
        isExternalPath: true,
      },
      {
        title: 'ปริญญาโท',
        path: 'https://www.science.kmitl.ac.th/page#/course-tor',
        isExternalPath: true,
      },
      {
        title: 'ปริญญาเอก',
        path: 'https://www.science.kmitl.ac.th/page#/course-aek',
        isExternalPath: true,
      },
      {
        title: 'ค่าธรรมเนียมการศึกษา',
        path: '/',
        isExternalPath: true,
      },
    ],
  },
  {
    title: 'ภาควิชาและศูนย์',
    submenus: [
      {
        title: 'ภาควิชาวิทยาการคอมพิวเตอร์',
        path: 'https://www.science.kmitl.ac.th/department-com',
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
        title: 'ภาควิชาสถิติ',
        path: 'https://www.science.kmitl.ac.th/department-stat',
        isExternalPath: true,
      },
      {
        title: 'ภาควิชาเคมี',
        path: 'https://www.science.kmitl.ac.th/chemistry',
        isExternalPath: true,
      },
      {
        title: 'ภาควิชาคณิตศาสตร์ประยุกต์',
        path: 'https://www.science.kmitl.ac.th/department-math',
        isExternalPath: true,
      },
      {
        title: 'K-DAI',
        path: 'https://kdaicenter.science.kmitl.ac.th/',
        isExternalPath: true,
      },
      {
        title: 'ศูนย์เครื่องมือ',
        path: 'https://sciins.science.kmitl.ac.th/',
        isExternalPath: true,
      },
    ],
  },

  {
    title: 'หน่วยงานสนับสนุน',
    submenus: [
      {
        title: 'กิจการต่างประเทศ',
        path: 'https://www.science.kmitl.ac.th/international_affairs#/about',
        isExternalPath: true,
      },
      {
        title: 'บริการคอมพิวเตอร์',
        path: 'http://www.it.science.kmitl.ac.th/app/repair/data-repair.php',
        isExternalPath: true,
      },
      {
        title: 'งานประกันคุณภาพ',
        path: 'http://www.it.science.kmitl.ac.th/oqa/',
        isExternalPath: true,
      },
      {
        title: 'บริการถามตอบปัญหา',
        path: 'https://osda.science.kmitl.ac.th/room/%E0%B8%AA%E0%B8%AB%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2',
        isExternalPath: true,
      },
    ],
  },
  // {
  //   title: 'TCAS65',
  //   path: 'https://www.science.kmitl.ac.th/page#/news_each/620609270a5c80e1f06c3f0f',
  //   isExternalPath: true,
  // },
  {
    title: 'เอกสาร',
    path: 'https://www.science.kmitl.ac.th/page#/download',
    isExternalPath: true,
  },
  {
    title: 'บัณฑิตศึกษา',
    path: 'https://www.science.kmitl.ac.th/graduate/#/home',
    isExternalPath: true,
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
        title: 'ปรัชญา ปฏิธาน วิสัยทัศน์ พันธกิจ',
        path: 'https://www.science.kmitl.ac.th/page#/resolution',
        isExternalPath: true,
      },
      {
        title: 'คณะผู้บริหาร',
        path: 'https://www.science.kmitl.ac.th/page#/personel',
        isExternalPath: true,
      },
      {
        title: 'คณาจารย์',
        path: 'https://research.science.kmitl.ac.th/',
        isExternalPath: true,
      },
      {
        title: 'บุคคลากรเจ้าหน้าที่',
        path: 'https://www.science.kmitl.ac.th/page#/staff',
        isExternalPath: true,
      },
      {
        title: 'โครงสร้างองค์กร',
        path: '/organization-chart',
      },
      {
        title: 'รายงานประจำปี',
        path: 'https://www.science.kmitl.ac.th/page#/yearly-report',
        isExternalPath: true,
      },
      {
        title: 'ข้อมูลเปิดเผยสาธารณะ (ITA)',
        path: 'https://www.science.kmitl.ac.th/page#/news_each/5edf9affec4d923a5ce03cd3',
        isExternalPath: true,
      },
      {
        title: 'ข้อมูลการติดต่อ',
        path: 'https://www.science.kmitl.ac.th/page#/contact',
        isExternalPath: true,
      },
    ],
  },
]

export default menuItems
