import NewsCard from '@/components/Cards/News/NewsCard'
import Container from '@/components/Layout/Container'
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import atomLogo from '../assets/logos/atom-logo.png'
import chemistryIcon from '../assets/icons/icon-chemist.svg'
import mathIcon from '../assets/icons/icon-math.svg'
import physicsIcon from '../assets/icons/icon-physics.svg'
import biologyIcon from '../assets/icons/icon-biology.svg'
import comsciIcon from '../assets/icons/icon-comsci.svg'
import statisticIcon from '../assets/icons/icon-stat.svg'
import scitoolIcon from '../assets/icons/icon-scitool.svg'
import kdaiIcon from '../assets/icons/icon-kdai.svg'

/**
 * TODO: Add responsive design
 */

type programItem = {
  title: string
  path: string
}

type departmentItem = {
  title: string
  image: StaticImageData
  alt: string
  path: string
}

const Home: NextPage = () => {
  return (
    <>
      {/* News */}
      <Container>
        <SectionTitle>ข่าวสาร</SectionTitle>
      </Container>

      <Container className="flex gap-[16px]">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Container>

      {/* Programs */}
      <Container>
        <SectionTitle>หลักสูตร</SectionTitle>
      </Container>
      <div className="w-10/12 mx-auto">
        <div className="flex flex-wrap">
          <div>
            <ul className="ml-36 mt-28">
              {programItems.map((item, index) => {
                return (
                  <li key={index} className="mb-8">
                    <Link href={item.path}>
                      <a className="text-[24px] hover:underline">
                        {item.title + ` >`}
                      </a>
                    </Link>
                    <div className="border border-[#979797] w-[305px]" />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="ml-auto mr-36">
            <Image src={atomLogo} alt="Atom logo" width={391} height={391} />
          </div>
        </div>
      </div>
      {/* Departments */}
      <div className="bg-gradient-to-br from-[#ff7c32] to-[#ffd200]">
        <div className="mx-auto py-14 lg:w-10/12">
          <h1 className="w-fit round mx-auto mb-8 font-bold lg:text-[39px]">
            ภาควิชาและหน่วยงาน
          </h1>
          <div className="flex flex-col justify-center lg:flex-row">
            <ul className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:w-[600px] lg:mr-auto">
              {departmentItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="w-[154px] mb-4 basis-1/3 hover:underline"
                  >
                    <Link href={item.path}>
                      <a className="flex flex-col items-center">
                        <div className="w-[100px] h-[100px] lg:w-[128px] lg:h-[128px] relative mb-2">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <p className="text-base text-center">{item.title}</p>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center">
              <div className="border border-black w-0 h-[192px] ml-8 mr-6 lg:h-[517px] lg:mr-44"></div>
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
        </div>
      </div>
      <Container>
        <SectionTitle>ภาควิชาและหน่วยงาน</SectionTitle>
      </Container>

      <Container>
        <SectionTitle>ผู้บริหาร</SectionTitle>
      </Container>

      <Container>
        <SectionTitle>Our partners</SectionTitle>
      </Container>

      <Container>
        <SectionTitle>การเดินทาง</SectionTitle>
      </Container>
    </>
  )
}

export default Home

const programItems: programItem[] = [
  {
    title: 'หลักสูตรปริญญาตรี',
    path: '/programs/bechelor',
  },
  {
    title: 'หลักสูตรปริญญาโทร',
    path: '/programs/master',
  },
  {
    title: 'หลักสูตรปริญญาเอก',
    path: '/programs/doctor',
  },
]

const departmentItems: departmentItem[] = [
  {
    title: 'ภาควิชาเคมี',
    image: chemistryIcon,
    alt: 'Chemistry icon',
    path: '/departments/chemistry',
  },
  {
    title: 'ภาควิชาคณิตศาสตร์',
    image: mathIcon,
    alt: 'Mathematics icon',
    path: '/departments/mathematics',
  },
  {
    title: 'ภาควิชาฟิสิกส์',
    image: physicsIcon,
    alt: 'Physics icon',
    path: '/departments/physics',
  },
  {
    title: 'ภาควิชาชีววิทยา',
    image: biologyIcon,
    alt: 'Biology icon',
    path: '/departments/biology',
  },
  {
    title: 'ภาควิชาวิทยาการคอมพิวเตอร์',
    image: comsciIcon,
    alt: 'Computer Science icon',
    path: '/departments/computer-science',
  },
  {
    title: 'ภาควิชาสถิติ',
    image: statisticIcon,
    alt: 'Statistic icon',
    path: '/departments/statistic',
  },
  {
    title: 'ศูนย์เครื่องมือวิทยาศาสตร์',
    image: scitoolIcon,
    alt: 'Scientific Instruments Centre icon',
    path: '/departments/scientific-instruments-centre',
  },
  {
    title: 'ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง',
    image: kdaiIcon,
    alt: 'KDAI icon',
    path: '/departments/kdai',
  },
]
interface ISectionTitleProps {
  children?: React.ReactNode
}
const SectionTitle = ({ children }: ISectionTitleProps) => {
  return (
    <>
      <div className="section-title flex gap-[8px] items-center justify-start">
        <div className="border-t-[2px] border-black"></div>
        <div className="text-[32px]">{children}</div>
        <div className="border-t-[2px] border-black"></div>
      </div>

      <style jsx>{`
        .section-title > div:not(:nth-child(2)) {
          flex-grow: 1;
        }

        .section-title > div:nth-child(1) {
          max-width: 50px;
        }
      `}</style>
    </>
  )
}
