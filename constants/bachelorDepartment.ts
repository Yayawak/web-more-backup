import { ICurriculum, IDepartmentCard } from '@/types/department'
import chemDepartment from '@/assets/logos/chemD-logo.png'
import mathDepartment from '@/assets/logos/mathD-logo.png'
import physicDepartment from '@/assets/logos/physicD-logo.png'
import bioDepartment from '@/assets/logos/bioD-logo.png'
import comDepartment from '@/assets/logos/comD-logo.png'
import statDepartment from '@/assets/logos/statD-logo.png'
import kdaiDepartment from '@/assets/logos/kdai-logo.png'

export const bachelorDepartment: IDepartmentCard[] = [
  {
    logoPath: chemDepartment,
    name: 'ภาควิชาเคมี',
    describe:
      'บูรณาการความรู้และทักษะทางวิทยาศาสตร์โดยเน้นหลักการทางเคมีในการคิด วิจัย วิเคราะห์ และแก้ปัญหา',
    curriculum: [
      {
        name: 'วิทยาศาสตรบัณฑิตสาขาเทคโนโลยีสิ่งแวดล้อม และการจัดการอย่างยั่งยืน หลักสูตรปี พ.ศ.2565',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/chemistry#/course_detail_tee_1',
          },
        ],
      },
      {
        name: 'หลักสูตรวิทยาศาสตรบัณฑิตสาขาวิชาเคมี วิศวกรรม และอุตสาหกรรม (หลักสูตรนานาชาติ)',
        program: [
          {
            name: '',
            link: 'https://inter.science.kmitl.ac.th/Bachelor_Degree/IEC',
          },
        ],
      },
    ],
  },
  {
    logoPath: mathDepartment,
    name: 'ภาควิชาคณิตศาสตร์',
    describe:
      'สร้างและพัฒนาองค์ความรู้ทางวิทยาศาสตร์ประยุกต์เพื่อให้ได้บุคลากรที่มีความรู้ความสามารถ',
    curriculum: [
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาคณิตศาสตร์ประยุกต์ หลักสูตรปี พ.ศ. 2565',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/department-math#/course_detail_tee_1',
          },
        ],
      },
    ],
  },
  {
    logoPath: physicDepartment,
    name: 'ภาควิชาฟิสิกส์',
    describe:
      'มุ่งเน้นผลิตบัณฑิตเป็นนักคอมพิวเตอร์ที่สามารถวิเคราะห์ออกแบบและพัฒนาระบบงานทางด้านคอมพิวเตอร์โดยใช้เทคโนโลยีที่ทันสมัยและเหมาะสม',
    curriculum: [
      {
        name: 'วิทยาศาสตรบัณฑิตสาขาวิชาฟิสิกส์อุตสาหกรรมหลักสูตรปี พ.ศ. 2564',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/department-physics#/course_detail_tee_2',
          },
        ],
      },
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาวิชาฟิสิกส์ประยุกต์ หลักสูตรปี พ.ศ. 2560',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/department-physics#/course_detail_tee_1',
          },
        ],
      },
    ],
  },
  {
    logoPath: bioDepartment,
    name: 'ภาควิชาชีววิทยา',
    describe:
      'มุ่งเน้นผลิตบัณฑิต มีความรู้ใน ภาคทฤษฎีและมีทักษะปฏิบัติ อย่างมีคุณภาพ',
    curriculum: [
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีชีวภาพอุตสาหกรรม หลักสูตรปี พ.ศ.2565',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/department-bio#/course_detail_tee_1',
          },
        ],
      },
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาวิชาจุลชีววิทยาอุตสาหกรรม หลักสูตรปี พ.ศ. 2560',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/assets/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3/2560/%E0%B8%88%E0%B8%B8%E0%B8%A5%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%202560.pdf',
          },
        ],
      },
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาวิชาจุลชีววิทยาอุตสาหกรรม (นานาชาติ) หลักสูตรปี พ.ศ. 2559',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/department-bio#/course_detail_tee_3',
          },
        ],
      },
    ],
  },
  {
    logoPath: comDepartment,
    name: 'ภาควิชาวิทยาการคอมพิวเตอร์',
    describe:
      'มุ่งเน้นผลิตบัณฑิตเป็นนักคอมพิวเตอร์ที่สามารถวิเคราะห์ออกแบบและพัฒนาระบบงานทางด้านคอมพิวเตอร์โดยใช้เทคโนโลยีที่ทันสมัยและเหมาะสม',
    curriculum: [
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ (หลักสูตรปรับปรุง พ.ศ. 2564)',
        program: [
          {
            name: '',
            link: 'https://www.reg.kmitl.ac.th/curriculum/file/bachelor/05/com_c2564edit.pdf',
          },
        ],
      },
    ],
  },
  {
    logoPath: statDepartment,
    name: 'ภาควิชาสถิติ',
    describe:
      'ผลิตบุคลากรทางด้านสถิติที่มีความรู้ความสามารถทั้งในด้านทฤษฎี และการประยุกต์ในด้านสถิติการวิจัยดําเนินงาน และวิทยาการข้อมูล ตลอดจนสามารถนําเอาเทคโนโลยีที่ทันสมัย',
    curriculum: [
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาสถิติประยุกต์และการวิเคราะห์ข้อมูล หลักสูตรปี พ.ศ.2565',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/department-stat#/course_detail_tee_1',
          },
        ],
      },
      {
        name: 'วิทยาศาสตรบัณฑิต สาขาวิชาสถิติประยุกต์หลักสูตรปี พ.ศ. 2560',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/assets/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3/2560/%E0%B8%AA%E0%B8%96%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B8%E0%B8%81%E0%B8%95%E0%B9%8C%202560.pdf',
          },
        ],
      },
    ],
  },
  {
    logoPath: kdaiDepartment,
    name: 'ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง',
    describe:
      'มุ่งเน้นให้นักศึกษาเป็นนักวิทยาศาสตร์ข้อมูลที่มีความเชี่ยวชาญ อย่างลึกซึ้งทั้งทฤษฎีและปฏิบัติ',
    curriculum: [
      {
        name: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาเทคโนโลยีดิจิทัลและนวัตกรรมเชิงบูรณาการ (หลักสูตรนานาชาติ)',
        program: [
          {
            name: '',
            link: 'https://www.science.kmitl.ac.th/course-files/kdai-bachelor.pdf',
          },
        ],
      },
    ],
  },
]
