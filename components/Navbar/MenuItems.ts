import type { MenuItem } from './Menu'

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
                path: '/major/comsci'
            },
            {
                title: 'เคมี',
                path: '/major/chem'
            },
        ],
    },
    {
        title: 'เกี่ยวกับเรา',
        submenus: [
            {
                title: 'วิทยาการคอมพิวเตอร์',
                path: '/major/comsci'
            },
            {
                title: 'เคมี',
                path: '/major/chem'
            },
        ],
    },
    {
        title: 'หน่วยงานสนับสนุน',
        submenus: [
            {
                title: 'วิทยาการคอมพิวเตอร์',
                path: '/major/comsci'
            },
            {
                title: 'เคมี',
                path: '/major/chem'
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