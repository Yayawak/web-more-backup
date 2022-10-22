import Container from '@/components/Layout/Container'
import Image from 'next/image'
import Link from 'next/link'
import IndexSectionTitle from './SectionTitle'

import activity from '@/assets/images/activity.jpg'
import atomLogo from '@/assets/logos/atom-logo.png'
import programsSectionBG from '@/assets/images/programs_bg.svg'

const IndexPrograms = () => {
  return (
    <div
      // className="bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(${programsSectionBG.src})`,
      // }}
    >
      <Container className="mt-8">
        <IndexSectionTitle>หลักสูตร</IndexSectionTitle>
        <div className="flex flex-wrap justify-center mt-9 mb-20">
          <ul className="w-full sm:w-[305px] sm:mr-40">
            {programItems.map((item, index) => {
              return (
                <li key={index} className="mb-8">
                  <Link href={item.path}>
                    <a
                      className="text-[24px] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title + ` >`}
                    </a>
                  </Link>
                  <div className="border-t-[2px] border-t-[#979797] sm:w-[305px]" />
                </li>
              )
            })}
          </ul>
          <div className="w-[540px] h-[361px] relative">
            <Image className="rounded-2xl"
              src={activity}
              alt="activity"
              layout="fill"
              objectFit="contain"
            />
            </div>
          
        </div>
      </Container>
    </div>
  )
}

export default IndexPrograms

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
  {
    title: 'หลักสูตรนานาชาติ',
    path: 'https://inter.science.kmitl.ac.th/',
  },
  {
    title: 'บัณฑิตศึกษา',
    path: 'https://www.science.kmitl.ac.th/graduate/#/home',
  },
]
