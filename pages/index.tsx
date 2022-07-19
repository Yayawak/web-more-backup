import NewsCard from '@/components/Cards/News/NewsCard'
import Container from '@/components/Layout/Container'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import atomLogo from '../assets/logos/atom-logo.png'
import programsSectionBG from '@/assets/images/programs_bg.svg'
import departmentSectioinBG from '@/assets/images/departments_bg.svg'

import tcasBG from '@/assets/images/tcas_bg.png'
import partnerEtat from '@/assets/images/partners/etat.png'
import partnerIsp from '@/assets/images/partners/isp.png'

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
import mapImage from '@/assets/images/map.png'
import KMITLLogo from '@/assets/logos/kmitl-logo.png'
import homeHeaderBG from '@/assets/images/home_header_bg.svg'
import { CustomProps } from '@/types/component-props'

import slideshowImage1 from '@/assets/images/slideshow/1.png'

import { useRouter } from 'next/router'
import { goToExternalPage, goToInternalPage } from '@/helpers/link'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <div className="header h-[550px] py-[16px] bg-cover bg-center">
        <div className="max-h-[500px] h-full">
          <Slideshow
            className="mx-auto"
            style={{ maxWidth: '800px' }}
            images={slideshowImages}
          />
        </div>
      </div>

      <div className="bg-[#FF6D2D] h-[50px] flex items-center">
        <Container>
          <div className="text-white text-[32px] font-bold">TCAS</div>
        </Container>
      </div>

      <div
        className="bg-cover bg-center pb-[8px] min-h-[400px]"
        style={{
          backgroundImage: `url(${tcasBG.src})`,
        }}
      >
        <Container
          noPadding
          className="flex flex-col lg:flex-row w-full h-full gap-[40px]"
        >
          <div className="flex flex-col grow">
            <div className="text-[#0A6AB7] text-[90px] font-bold text-center lg:text-right">
              TCAS 65
            </div>
            <div className="flex mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative w-[100px]">
                <Image
                  src={KMITLLogo}
                  alt="kmitl logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <div className="text-[#F16322] font-bold text-center lg:text-right">
                  สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </div>
                <div className="font-bold text-center lg:text-right">
                  King Mongkut&apos;s Institute of Technology Ladkrabang
                </div>
              </div>
            </div>
            <BaseButton
              backgroundColor="#0A17A7"
              textColor="white"
              roundedType={Rounded.CUSTOM}
              rounded={10}
              className="mt-auto w-[fit-content] mx-auto"
            >
              เข้าสู่เว็บไซต์ Admission
            </BaseButton>
          </div>

          <div className="flex flex-col w-full lg:w-[500px] text-center lg:text-left pt-0 lg:pt-[16px] gap-[16px] px-[8px]">
            <div className="text-[32px] font-bold">ประกาศ</div>

            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#00D2EF"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#00D2EF"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#00D2EF"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#FACF06"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
          </div>
        </Container>
      </div>

      {/* News */}
      <Container className="my-[16px]">
        <SectionTitle className="mb-[16px]">ข่าวสาร</SectionTitle>

        <div className="flex gap-[8px] flex-wrap">
          {newsTypes.map((e) => (
            <div
              key={e}
              className="rounded-[10px] px-[16px] py-[4px] border-[1px] border-black cursor-pointer"
            >
              {e}
            </div>
          ))}
        </div>
      </Container>

      <Container className="news-cards grid justify-between gap-[16px] mt-[32px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
        <NewsCard
          imageUrl="https://picsum.photos/200/300?1"
          category={['วิชาการ', 'อบรม', 'สัมมนา']}
          title="ประชุมขับเคลื่อนองค์กรสู่ความเป็น
เลิศของคณะวิทยาศาสตร์ (ครั้งที่ 1)"
          date={new Date()}
        />
        <NewsCard
          imageUrl="https://picsum.photos/200/300?2"
          category={['วิชาการ', 'อบรม', 'สัมมนา']}
          title="ประชุมขับเคลื่อนองค์กรสู่ความเป็น
เลิศของคณะวิทยาศาสตร์ (ครั้งที่ 1)"
          date={new Date()}
        />
        <NewsCard
          imageUrl="https://picsum.photos/200/300?3"
          category={['วิชาการ', 'อบรม', 'สัมมนา']}
          title="ประชุมขับเคลื่อนองค์กรสู่ความเป็น
เลิศของคณะวิทยาศาสตร์ (ครั้งที่ 1)"
          date={new Date()}
        />
        <NewsCard
          imageUrl="https://picsum.photos/200/300?4"
          category={['วิชาการ', 'อบรม', 'สัมมนา']}
          title="ประชุมขับเคลื่อนองค์กรสู่ความเป็น
เลิศของคณะวิทยาศาสตร์ (ครั้งที่ 1)"
          date={new Date()}
        />
      </Container>

      <Container>
        <BaseButton
          className="mx-auto mt-[48px] mb-[32px]"
          roundedType={Rounded.CUSTOM}
          rounded={8}
          backgroundColor="#FF7C32"
          elevation={false}
        >
          ข่าวทั้งหมด
        </BaseButton>
      </Container>

      {/* Programs */}
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${programsSectionBG.src})`,
        }}
      >
        <Container className="mt-8">
          <SectionTitle>หลักสูตร</SectionTitle>
          <div className="flex flex-wrap justify-center mt-9 mb-20">
            <ul className="w-full sm:w-[305px] sm:mr-auto">
              {programItems.map((item, index) => {
                return (
                  <li key={index} className="mb-8">
                    <Link href={item.path}>
                      <a className="text-[24px] hover:underline">
                        {item.title + ` >`}
                      </a>
                    </Link>
                    <div className="border-t-[2px] border-t-[#979797] sm:w-[305px]" />
                  </li>
                )
              })}
            </ul>
            <div className="w-[200px] h-[200px] relative md:mr-14">
              <Image
                src={atomLogo}
                alt="Atom logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Departments */}
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${departmentSectioinBG.src})`,
        }}
      >
        <Container className="py-[16px]">
          <Container className="mb-[32px]">
            <SectionTitle>ภาควิชาและหน่วยงาน</SectionTitle>
          </Container>
          <div className="flex flex-col justify-center lg:flex-row mt-20">
            <ul className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:w-[600px] lg:mr-auto">
              {departmentItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="w-[154px] mb-4 basis-1/3 hover:underline"
                  >
                    <Link href={item.path}>
                      <a className="flex flex-col items-center">
                        <div className="w-[100px] h-[100px] relative mb-2">
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
          <ExecutiveCard
            image="https://www.science.kmitl.ac.th/assets/img/dean-office/sutee.png"
            name="รศ.ดร.สุธี ชุติไพจิตร"
            position="คณบดีคณะวิทยาศาสตร์"
          />
        </div>

        <div className="flex gap-[24px] justify-center mb-[32px] flex-wrap md:flex-nowrap">
          <ExecutiveCard
            image="https://www.science.kmitl.ac.th/assets/img/dean-office/karn.png"
            name="ผศ.ดร.กานต์ วงศาริยะ"
            position="รองคณบดีคณะวิทยาศาสตร์"
          />
          <ExecutiveCard
            image="https://picsum.photos/200/300?12"
            name="Test"
            position="Test"
          />
          <ExecutiveCard
            image="https://picsum.photos/200/300?13"
            name="Test"
            position="Test"
          />
          <ExecutiveCard
            image="https://picsum.photos/200/300?14"
            name="Test"
            position="Test"
          />
        </div>

        <BaseButton
          backgroundColor="#FF7C32"
          roundedType={Rounded.CUSTOM}
          rounded={8}
          elevation={false}
          className="mx-auto mt-[48px]"
          onClick={() =>
            goToExternalPage(
              'https://www.science.kmitl.ac.th/page#/personel'
            )
          }
        >
          คณะผู้บริหารทั้งหมด
        </BaseButton>
      </Container>

      <Container>
        <SectionTitle className="my-[16px]">Our partners</SectionTitle>

        <div className="image relative mx-auto">
          <Image
            src={partnerEtat.src}
            alt="etat"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="image relative mx-auto mt-[32px]">
          <Image
            src={partnerIsp.src}
            alt="isp"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Container>

      <Container>
        <SectionTitle className="mb-[16px]">การเดินทาง</SectionTitle>

        <div className="flex flex-col md:flex-row drop-shadow-lg rounded-[4px] min-h-[574px] bg-[#F2F2F2] mb-[32px] overflow-hidden">
          <div className="relative grow flex justify-center items-center min-h-[300px] md:min-h-[unset] bg-[#FBFBFB]">
            <Image
              src={mapImage.src}
              alt="kmitl map"
              layout="fill"
              objectFit="contain"
              className="mt-[16px] md:mt-0"
            />
          </div>

          <div className="p-[16px] pl-[32px] flex flex-col w-full md:w-[450px]">
            <div>
              <div className="text-[#FF7C32]">ที่อยู่</div>
              <div>คณะวิทยาศาสตร์</div>
              <div>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</div>
              <div>ถนนฉลองกรุง เขตลาดกระบัง กรุงเทพ 10520</div>
            </div>
            <div className="flex mt-[16px] mb-[16px]">
              <div className="border-l-2 border-[#FF7C32] mr-[16px]"></div>
              <div>
                <div className="text-[#FF7C32]">รถโดยสารประจำทาง</div>
                <ul>
                  <li className="ml-[24px] mt-[16px] list-disc">
                    รถโดยสารประจำทางสาย 1013 ต้นทาง จากซอยสุขุมวิท 77 (อ่อนนุช)
                    ปลายทาง ตลาดหัวตะเข้
                  </li>

                  <li className="ml-[24px] mt-[16px] list-disc">
                    รถโดยสารประจำทางสาย 1013 (คันเล็ก) ต้นทาง
                    จากศูนย์การค้าเสรีเซนเตอร์ ปลายทาง นิคมอุตสาหกรรมลาดกระบัง
                  </li>

                  <li className="ml-[24px] mt-[16px] list-disc">
                    รถประจำทางสาย 517 ต้นทาง สวนจตุจักร ปลายทาง
                    สถาบันเทคโนโลยีพระจอมเกล้า
                  </li>
                </ul>
              </div>
            </div>
            <BaseButton
              backgroundColor="#FF7C32"
              roundedType={Rounded.CUSTOM}
              rounded={8}
              className="mx-auto mt-auto"
              elevation={false}
              onClick={() =>
                goToExternalPage(
                  'https://www.science.kmitl.ac.th/page#/contact'
                )
              }
            >
              การเดินทางเพิ่มเติม
            </BaseButton>
          </div>
        </div>
      </Container>

      <style jsx>{`
        :global(.header) {
          background-image: url(${homeHeaderBG.src});
        }

        :global(.news-card) {
          flex-grow: 1;
          height: 348px;
        }

        .image {
          max-width: 600px;
          height: 100px;
        }
      `}</style>
    </>
  )
}

export default Home

const programItems = [
  {
    title: 'หลักสูตรปริญญาตรี',
    path: 'https://www.science.kmitl.ac.th/page#/course-tee',
  },
  {
    title: 'หลักสูตรปริญญาโท',
    path: 'https://www.science.kmitl.ac.th/page#/course-tor',
  },
  {
    title: 'หลักสูตรปริญญาเอก',
    path: 'https://www.science.kmitl.ac.th/page#/course-aek',
  },
]

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

const slideshowImages = [slideshowImage1.src, 'https://picsum.photos/200']

const newsTypes = [
  'ทั้งหมด',
  'ทุนการศึกษา/วิจัย',
  'จัดซื้อ-จัดจ้าง',
  'บริการวิชาการ/อบรม/สัมมนา',
  'งานประกันคุณภาพ',
  'จดหมายข่าวคณะวิทยาศาสตร์',
  'ปริญญาตรี',
  'กิจกรรม',
  'รางวัล',
  'งานการเงิน',
  'บัณฑิตศึกษา',
  'HR',
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
        <div className="line border-t-[2px] max-w-[unset] md:max-w-[100px]"></div>
        <div className="title text-[32px] font-bold">{children}</div>
        <div className="line border-t-[2px]"></div>
      </div>

      <style jsx>{`
        .section-title > div:not(:nth-child(2)) {
          flex-grow: 1;
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

interface ITCASAnnouncementProps {
  type: string
  color: string
  text: string
  icon: string
}
type TCASAnnouncementProps = CustomProps<ITCASAnnouncementProps>
const TCASAnnouncementCard = ({
  type,
  color,
  text,
  icon,
}: TCASAnnouncementProps) => {
  return (
    <>
      <div className="flex items-center bg-white w-full h-[60px] drop-shadow-lg rounded-[8px] overflow-hidden pr-[16px]">
        <div
          className="h-full w-[80px] flex justify-center items-center mr-[8px] text-white font-bold"
          style={{ backgroundColor: color }}
        >
          {type}
        </div>
        <div>{text}</div>
        <div className={`mdi mdi-${icon} ml-auto`}></div>
      </div>
    </>
  )
}
