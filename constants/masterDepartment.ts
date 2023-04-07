import { ICurriculum, IDepartmentCard } from '@/types/department'
import chemDepartment from '@/assets/logos/chemD-logo.png'
import mathDepartment from '@/assets/logos/mathD-logo.png'
import physicDepartment from '@/assets/logos/physicD-logo.png'
import bioDepartment from '@/assets/logos/bioD-logo.png'
import comDepartment from '@/assets/logos/comD-logo.png'
import statDepartment from '@/assets/logos/statD-logo.png'
import kdaiDepartment from '@/assets/logos/kdai-logo.png'

export const masterDepartments: IDepartmentCard[] = [
  {
    logoPath: chemDepartment,
    name: "ภาควิชาเคมี",
    describe: "บูรณาการความรู้และทักษะทางวิทยาศาสตร์โดยเน้นหลักการทางเคมีในการคิด วิจัย วิเคราะห์ และแก้ปัญหา",
    curriculum: [
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาเคมีประยุกต์ (2560)",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "/BachelorMaster/course-Chemist1Applied"
          },
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Chemist2Applied"
          },
        ]
      },
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาเคมีสิ่งแวดล้อม หลักสูตรปี พ.ศ. 2560",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "/BachelorMaster/course-Chemist1Environmental"
          },
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Chemist2Environmental"
          },
        ]
      },
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีพอลิเมอร์ หลักสูตรปี พ.ศ. 2560",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "/BachelorMaster/course-Chemist1Polymer"
          },
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Chemist2Polymer"
          },
        ]
      },
    ]
  },
  {
    logoPath: mathDepartment,
    name: "ภาควิชาคณิตศาสตร์",
    describe: "มุ่งเน้นผลิตบัณฑิต มีความรู้ใน ภาคทฤษฎีและมีทักษะปฏิบัติ อย่างมีคุณภาพ",
    curriculum: [
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาคณิตศาสตร์ประยุกต์ หลักสูตรปี พ.ศ. 2560",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "/BachelorMaster/course-Math1Applied"
          },
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Math2Applied"
          },
          {
            name: "แผนการเรียน ข",
            link: "/BachelorMaster/course-Math3Applied"
          },
        ]
      }
    ]
  },
  {
    logoPath: physicDepartment,
    name: "ภาควิชาฟิสิกส์",
    describe: "มุ่งเน้นให้นักศึกษาเป็นนักวิทยาศาสตร์และนักวิจัยที่มีความเชี่ยวชาญ อย่างลึกซึ้งทั้งทฤษฎีและปฏิบัติโดยเน้นวิทยาการทางด้านฟิสิกส์ประยุกต์",
    curriculum: [
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาฟิสิกส์ประยุกต์ หลักสูตรปี พ.ศ. 2560",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "/BachelorMaster/course-Physics1Applied"
          },
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Physics2Applied"
          },
        ]
      }
    ]
  },
  {
    logoPath: bioDepartment,
    name: "ภาควิชาชีววิทยา",
    describe: "สร้างและพัฒนาองค์ความรู้ทางวิทยาศาสตร์ประยุกต์ เพื่อให้ได้บุคลากรที่มีความรู้ความสามารถ",
    curriculum: [
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีชีวภาพ หลักสูตรปี พ.ศ. 2560",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "/BachelorMaster/course-Biology1"
          },
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Biology2"
          },
        ]
      }
    ]
  },
  {
    logoPath: comDepartment,
    name: "ภาควิชาวิทยาการคอมพิวเตอร์",
    describe: "มุ่งเน้นผลิตบัณฑิตเป็นนักคอมพิวเตอร์ที่สามารถวิเคราะห์ ออกแบบและพัฒนาระบบงานทางด้านคอมพิวเตอร์โดยใช้เทคโนโลยีที่ทันสมัยและเหมาะสม",
    curriculum: [
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาวิทยากาคอมพิวเตอร์ หลักสูตรปี พ.ศ. 2560",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "/BachelorMaster/course-Com1"
          },
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Com1"
          },
        ]
      }
    ]
  },
  {
    logoPath: statDepartment,
    name: "ภาควิชาสถิติ",
    describe: "ผลิตบุคลากรทางด้านสถิติที่มีความรู้ความสามารถทั้งในด้านทฤษฎี และการประยุกต์ในด้านสถิติการวิจัยดําเนินงาน และวิทยาการข้อมูล ตลอดจนสามารถนําเอาเทคโนโลยีที่ทันสมัย",
    curriculum: [
      {
        name: "วิทยาศาสตรมหาบัณฑิตสาขาวิชาสถิติและการวิเคราะห์ธุรกิจ พ.ศ. 2563",
        program: [
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-Statistic1"
          },
          {
            name: "แผนการเรียน ข",
            link: "/BachelorMaster/course-Statistic2"
          },
        ]
      },
      {
        name: "วิทยาศาสตรมหาบัณฑิต วิทยาศาสตรมหาบัณฑิต สาขาวิชาสถิติประยุกต์ พ.ศ. 2564",
        program: [
          {
            name: "แผนการเรียน ก2",
            link: "/BachelorMaster/course-StatisticApplied"
          }
        ]
      },
    ]
  },
  {
    logoPath: kdaiDepartment,
    name: "ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง",
    describe: "มุ่งเน้นให้นักศึกษาเป็นนักวิทยาศาสตร์ข้อมูลที่มีความเชี่ยวชาญ อย่างลึกซึ้งทั้งทฤษฎีและปฏิบัติ",
    curriculum: [
      {
        name: "วิทยาศาสตรมหาบัณฑิต สาขาวิชาวิทยาการข้อมูล และการวิเคราะห์",
        program: [
          {
            name: "แผนการเรียน ก1",
            link: "https://www.science.kmitl.ac.th/department-kdai#/course_detail_tor_1"
          },
          {
            name: "แผนการเรียน ก2",
            link: "https://www.science.kmitl.ac.th/department-kdai#/course_detail_tor_2"
          },
          {
            name: "แผนการเรียน ข",
            link: "https://www.science.kmitl.ac.th/department-kdai#/course_detail_tor_3"
          },
        ]
      }
    ]
  },
]