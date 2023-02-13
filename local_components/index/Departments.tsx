import Container from '@/components/Layout/Container'
import Image from 'next/image'
import Link from 'next/link'
import IndexSectionTitle from './SectionTitle'

import departmentSectioinBG from '@/assets/images/departments_bg.svg'
import chemistryIcon from '@/assets/icons/icon-chemist.png'
import mathIcon from '@/assets/icons/icon-math.png'
import physicsIcon from '@/assets/icons/icon-physics.png'
import biologyIcon from '@/assets/icons/icon-biology.png'
import comsciIcon from '@/assets/icons/icon-comsci.png'
import statisticIcon from '@/assets/icons/icon-stat.png'
import scitoolIcon from '@/assets/icons/icon-scitool.svg'
import kdaiIcon from '@/assets/icons/icon-kdai.svg'

const IndexDepartments = () => {
  return (
    <div
    // className="bg-cover bg-center"
    // style={{
    //   backgroundImage: `url(${departmentSectioinBG.src})`,
    // }}
    >
      <Container className="py-[16px]">
        <Container className="mb-[32px]">
          <IndexSectionTitle>ภาควิชาและศูนย์</IndexSectionTitle>
        </Container>
        <div
          className="flex flex-col justify-center rounded-3xl bg-cover bg-center p-5 lg:flex-row"
          style={{
            backgroundImage: `url(${departmentSectioinBG.src})`,
          }}
        >
          <ul className="flex flex-wrap justify-center lg:mr-auto lg:grid lg:w-[600px] lg:grid-cols-3">
            {departmentItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mb-4 w-[154px] basis-1/3 hover:underline"
                >
                  <Link href={item.path} className="flex flex-col items-center">
                    <div className="relative mb-2 h-[100px] w-[100px]">
                      <Image
                        className="object-contain"
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 0) 100vw"
                      />
                    </div>
                    <p className="text-center text-base">{item.title}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center">
            <div className="ml-8 mr-6 h-[192px] w-0 border-r-2 border-black lg:mr-24 lg:h-[517px]"></div>
            <p className="whitespace-pre-wrap text-2xl">
              &quot;เพราะเราเชื่อว่า <br />
              การศึกษา วิจัย ด้านวิทยาศาสตร์และเทคโนโลยี <br />
              เป็นรากฐานที่ดีของการพัฒนาประเทศ&quot;
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default IndexDepartments

const departmentItems = [
  {
    title: 'ภาควิชาเคมี',
    image: chemistryIcon,
    alt: 'Chemistry icon',
    path: 'https://www.science.kmitl.ac.th/chemistry#/about',
  },
  {
    title: 'ภาควิชาคณิตศาสตร์',
    image: mathIcon,
    alt: 'Mathematics icon',
    path: 'https://www.science.kmitl.ac.th/department-math#/about',
  },
  {
    title: 'ภาควิชาฟิสิกส์',
    image: physicsIcon,
    alt: 'Physics icon',
    path: 'https://www.science.kmitl.ac.th/department-physics#/about',
  },
  {
    title: 'ภาควิชาชีววิทยา',
    image: biologyIcon,
    alt: 'Biology icon',
    path: 'https://www.science.kmitl.ac.th/department-bio#/about',
  },
  {
    title: 'ภาควิชาวิทยาการคอมพิวเตอร์',
    image: comsciIcon,
    alt: 'Computer Science icon',
    path: 'https://www.science.kmitl.ac.th/department-com#/about',
  },
  {
    title: 'ภาควิชาสถิติ',
    image: statisticIcon,
    alt: 'Statistic icon',
    path: 'https://www.science.kmitl.ac.th/department-stat#/about',
  },
  {
    title: 'ศูนย์เครื่องมือวิทยาศาสตร์',
    image: scitoolIcon,
    alt: 'Scientific Instruments Centre icon',
    path: 'https://sciins.science.kmitl.ac.th/',
  },
  {
    title: 'ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง',
    image: kdaiIcon,
    alt: 'KDAI icon',
    path: 'https://kdaicenter.science.kmitl.ac.th/',
  },
]
