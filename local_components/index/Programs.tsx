import Container from '@/components/Layout/Container'
import Image from 'next/image'
import Link from 'next/link'
import IndexSectionTitle from './SectionTitle'

import activity from '@/assets/images/activity.jpg'
import activity2 from '@/assets/images/activity2.png'
import Slideshow2 from '@/components/Slideshow2/Slideshow2'

const activitiesPic = [activity, activity2, activity, activity2, activity];

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
        <div className="mt-9 mb-20 flex flex-wrap justify-center">
          <ul className="w-full sm:mr-40 md:mr-14 sm:w-[305px]">
            {programItems.map((item, index) => {
              return (
                <li key={index} className="mb-8">
                  <Link
                    href={item.path}
                    className="text-[24px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title + ` >`}
                  </Link>
                  <div className="border-t-[2px] border-t-[#979797] sm:w-[305px]" />
                </li>
              )
            })}
          </ul>
          <div className="flex justify-center relative h-auto w-[300px] xs:w-[400px] md:w-[700px]">
            <Slideshow2 src={activitiesPic} />
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
    path: 'https://www.science.kmitl.ac.th/new/en/course-bachelor',
  },
  {
    title: 'หลักสูตรปริญญาโท',
    path: 'https://www.science.kmitl.ac.th/new/en/course-master',
  },
  {
    title: 'หลักสูตรปริญญาเอก',
    path: 'https://www.science.kmitl.ac.th/new/en/course-doctorate',
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
