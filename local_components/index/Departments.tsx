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
          className="flex flex-col justify-center lg:flex-row p-5 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url(${departmentSectioinBG.src})`,
          }}
        >
          <ul className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:w-[600px] lg:mr-auto">
            {departmentItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-[154px] mb-4 basis-1/3 hover:underline"
                >
                  <Link href={item.path} className="flex flex-col items-center">
                    <div className="relative mb-2 w-[100px] h-[100px]">
                      <Image
                        className="object-contain"
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 0) 100vw"
                      />
                    </div>
                    <p className="text-base text-center">{item.title}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center">
            <div className="border-r-2 border-black w-0 h-[192px] ml-8 mr-6 lg:h-[517px] lg:mr-24"></div>
            <p className="text-2xl whitespace-pre-wrap">
              เพราะเราเชื่อว่า <br />
              <q>
                {' '}
                การศึกษา วิจัย ด้านวิทยาศาสตร์และเทคโนโลยี <br />
                เป็นรากฐานที่ดีของการพัฒนาประเทศ{' '}
              </q>
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
