import NewsCard from '@/components/Cards/News/NewsCard'
import Container from '@/components/Layout/Container'
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import atomLogo from '../assets/logos/atom-logo.png'

import tcasBG from '@/assets/images/tcas_bg.png'
import partnerEtat from '@/assets/images/partners/etat.png'
import partnerIsp from '@/assets/images/partners/isp.png'

/**
 * TODO: Add responsive design
 */

const Home: NextPage = () => {
  return (
    <>
      {/* <div className="bg-[#FF6D2D] h-[50px] flex items-center">
        <Container>
          <div className="text-white text-[32px] font-bold">TCAS</div>
        </Container>
      </div>

      <Container
        className="bg-cover bg-no-repeat bg-center pb-[8px] h-[300px]"
        style={{
          backgroundImage: `url(${tcasBG.src})`,
        }}
      >
        <Container noPadding className="flex w-full h-full">
          <div className="flex flex-col">
            <div>TCAS 65</div>
            <BaseButton
              backgroundColor="#0A17A7"
              textColor="white"
              roundedType={Rounded.CUSTOM}
              rounded={10}
              className="mt-auto"
            >
              เข้าสู่เว็บไซต์ Admission
            </BaseButton>
          </div>
        </Container>
      </Container> */}

      <Container className="h-[350px]">
        <Slideshow
          className="mt-[16px] mx-auto"
          style={{ maxWidth: '800px' }}
        />
      </Container>

      {/* News */}
      <Container className="my-[16px]">
        <SectionTitle>ข่าวสาร</SectionTitle>
      </Container>

      <Container className="flex gap-[16px]">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Container>

      <Container>
        <BaseButton
          className="mx-auto mt-[48px]"
          roundedType={Rounded.CUSTOM}
          rounded={8}
          backgroundColor="#FF7C32"
          elevation={false}
        >
          ข่าวทั้งหมด
        </BaseButton>
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
        <Container className="py-[16px]">
          <Container className="mb-[32px]">
            <SectionTitle>ภาควิชาและหน่วยงาน</SectionTitle>
          </Container>
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
        </Container>
      </div>

      <Container>
        <SectionTitle className="my-[16px]">ผู้บริหาร</SectionTitle>

        <div className="flex gap-[24px] justify-center mb-[32px]">
          <ExecutiveCard />
        </div>

        <div className="flex gap-[24px] justify-center mb-[32px]">
          <ExecutiveCard />
          <ExecutiveCard />
          <ExecutiveCard />
          <ExecutiveCard />
        </div>

        <BaseButton
          backgroundColor="#FF7C32"
          roundedType={Rounded.CUSTOM}
          rounded={8}
          elevation={false}
          className="mx-auto mt-[48px]"
        >
          คณะผู้บริหารทั้งหมด
        </BaseButton>
      </Container>

      <Container>
        <SectionTitle className="my-[16px]">Our partners</SectionTitle>

        <div className="image relative mx-auto">
          <Image src={partnerEtat.src} alt="etat" layout="fill" />
        </div>
        <div className="image relative mx-auto mt-[32px]">
          <Image src={partnerIsp.src} alt="etat" layout="fill" />
        </div>
      </Container>

      <Container>
        <SectionTitle>การเดินทาง</SectionTitle>
      </Container>

      <style jsx>{`
        .image {
          max-width: 600px;
          height: auto;
        }

        .image :global(span) {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
        }

        .image :global(img) {
          position: relative !important;
          width: 100% !important;
          height: auto !important;
          min-height: unset !important;
        }
      `}</style>
    </>
  )
}

export default Home

import chemistryIcon from '@/assets/icons/icon-chemist.svg'
import mathIcon from '@/assets/icons/icon-math.svg'
import physicsIcon from '@/assets/icons/icon-physics.svg'
import biologyIcon from '@/assets/icons/icon-biology.svg'
import comsciIcon from '@/assets/icons/icon-comsci.svg'
import statisticIcon from '@/assets/icons/icon-stat.svg'
import scitoolIcon from '@/assets/icons/icon-scitool.svg'
import kdaiIcon from '@/assets/icons/icon-kdai.svg'
import BaseButton from '@/components/Buttons/Base/BaseButton'
import { Rounded } from '@/types/rounded'
import ExecutiveCard from '@/components/Cards/Executive/ExecutiveCard'
import Slideshow from '@/components/Slideshow/Slideshow'

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

export const programItems: programItem[] = [
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

export const departmentItems: departmentItem[] = [
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
  color?: string
  className?: string
}
const SectionTitle = ({
  children,
  color = 'black',
  className = '',
}: ISectionTitleProps) => {
  return (
    <>
      <div
        className={`section-title flex gap-[8px] items-center justify-start ${className}`}
      >
        <div className="line border-t-[2px]"></div>
        <div className="title text-[32px] font-bold">{children}</div>
        <div className="line border-t-[2px]"></div>
      </div>

      <style jsx>{`
        .section-title > div:not(:nth-child(2)) {
          flex-grow: 1;
        }

        .section-title > div:nth-child(1) {
          max-width: 100px;
        }

        .title {
          color: ${color};
        }

        .line {
          border-top-color: ${color};
        }
      `}</style>
    </>
  )
}
