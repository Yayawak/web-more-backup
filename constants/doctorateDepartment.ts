import { ICurriculum, IDepartmentCard } from '@/types/department'
import chemDepartment from '@/assets/logos/chemD-logo.png'
import mathDepartment from '@/assets/logos/mathD-logo.png'
import physicDepartment from '@/assets/logos/physicD-logo.png'
import bioDepartment from '@/assets/logos/bioD-logo.png'
import comDepartment from '@/assets/logos/comD-logo.png'

export const doctorateDepartment: IDepartmentCard[] = [
  {
    logoPath: chemDepartment,
    name: "ภาควิชาเคมี",
    describe: "บูรณาการความรู้และทักษะทางวิทยาศาสตร์โดยเน้นหลักการทางเคมีในการคิด วิจัย วิเคราะห์ และแก้ปัญหา",
    curriculum: [
      {
        name: " ปรัชญาดุษฏีบัณฑิต สาขาวิชาเคมีประยุกต์ หลักสูตรปี พ.ศ. 2560  [แผนการเรียนแบบ 1.1]",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/chemistry#/course_detail_ake_1"
          },
        ]
      },
      {
        name: " ปรัชญาดุษฏีบัณฑิต สาขาวิชาเคมีประยุกต์ หลักสูตรปี พ.ศ. 2560 [แผนการเรียนแบบ 1.2]",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/chemistry#/course_detail_ake_2"
          },
        ]
      },
    ]
  },
  {
    logoPath: mathDepartment,
    name: "ภาควิชาคณิตศาสตร์",
    describe: "สร้างและพัฒนาองค์ความรู้ทางวิทยาศาสตร์ประยุกต์เพื่อให้ได้บุคลากรที่มีความรู้ความสามารถ",
    curriculum: [
      {
        name: " ปรัชญาดุษฏีบัณฑิต สาขาวิชาคณิตศาสตร์ประยุกต์ หลักสูตรปี พ.ศ. 2560 [แผนการเรียนแบบ 1.1] ",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-math#/course_detail_ake_1"
          },
        ]
      },
      {
        name: " ปรัชญาดุษฏีบัณฑิต สาขาวิชาคณิตศาสตร์ ประยุกต์หลักสูตรปี พ.ศ. 2560 [แผนการเรียนแบบ 2.1]",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-math#/course_detail_ake_2"
          },
        ]
      }
    ]
  },
  {
    logoPath: physicDepartment,
    name: "ภาควิชาฟิสิกส์",
    describe: "มุ่งเน้นผลิตบัณฑิตเป็นนักคอมพิวเตอร์ที่สามารถวิเคราะห์ออกแบบและพัฒนาระบบงานทางด้านคอมพิวเตอร์โดยใช้เทคโนโลยีที่ทันสมัยและเหมาะสม",
    curriculum: [
      {
        name: " ปรัชญาดุษฏีบัณฑิต สาขาวิชาฟิสิกส์ประยุกต์ หลักสูตรปี พ.ศ. 2560",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-physics#/course_detail_ake"
          },
        ]
      }
    ]
  },
  {
    logoPath: bioDepartment,
    name: "ภาควิชาชีววิทยา",
    describe: "มุ่งเน้นผลิตบัณฑิต มีความรู้ใน ภาคทฤษฎีและมีทักษะปฏิบัติ อย่างมีคุณภาพ",
    curriculum: [
      {
        name: " ปรัชญาดุษฏีบัณฑิต สาขาวิชาเทคโนโลยีชีวภาพ หลักสูตรปี พ.ศ. 2559 [แผนการเรียนแบบ 1.1] ",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-bio#/course_detail_ake_1"
          },
        ]
      },
      {
        name: " ปรัชญาดุษฏีบัณฑิต สาขาวิชาเทคโนโลยีชีวภาพ หลักสูตรปี พ.ศ. 2559 [แผนการเรียนแบบ 1.2]",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-bio#/course_detail_ake_2"
          },
        ]
      }
    ]
  },
  {
    logoPath: comDepartment,
    name: "ภาควิชาวิทยาการคอมพิวเตอร์",
    describe: "มุ่งเน้นผลิตบัณฑิตเป็นนักคอมพิวเตอร์ที่สามารถวิเคราะห์ออกแบบและพัฒนาระบบงานทางด้านคอมพิวเตอร์โดยใช้เทคโนโลยีที่ทันสมัยและเหมาะสม",
    curriculum: [
      {
        name: "ปรัชญาดุษฏีบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ หลักสูตรปี พ.ศ. 2560 [แผนการเรียนแบบ 1.1]",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-com#/course_detail_ake_1"
          },
        ]
      },
      {
        name: "ปรัชญาดุษฏีบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ หลักสูตรปี พ.ศ. 2560 [แผนการเรียนแบบ 2.1]",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-com#/course_detail_ake_2"
          },
        ]
      },
      {
        name: "ปรัชญาดุษฏีบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ หลักสูตรปี พ.ศ. 2560 [แผนการเรียนแบบ 2.2]",
        program: [
          {
            name: "",
            link: "https://www.science.kmitl.ac.th/department-com#/course_detail_ake_3"
          },
        ]
      }
    ]
  }
]