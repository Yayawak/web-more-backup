import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useGetSlideNewsQuery } from '@/store/api/news/getSlideNews'

import homeHeaderBG from '@/assets/images/home_header_bg.svg'

import BackToTopButton from '@/components/Buttons/BackToTopButton/BackToTopButton'
import Slideshow from '@/components/Slideshow/Slideshow'
import Banner from '@/components/Banner/Banner'

import IndexNews from '@/local_components/index/News'
import IndexPrograms from '@/local_components/index/Programs'
import IndexDepartments from '@/local_components/index/Departments'
import IndexExecutive from '@/local_components/index/Executive'
import IndexMap from '@/local_components/index/Map'
import IndexPartners from '@/local_components/index/Partners'

const Home: NextPage = () => {
  const [slideshowImages, setSlideshowImages] = useState<string[]>([])

  const {
    data: slide,
    isLoading: slideLoading,
    isSuccess: slideSuccess,
  } = useGetSlideNewsQuery(null)

  useEffect(() => {
    if (!slideLoading && slideSuccess) {
      const tmpSlideshowImages: string[] = []

      slide.message.forEach((element) => {
        tmpSlideshowImages.push(
          'https://www.science.kmitl.ac.th/' +
            element.news_file_topic.replace('public', '').trim()
        )
      })

      setSlideshowImages(tmpSlideshowImages)
    }
  }, [slideLoading, slideSuccess])

  return (
    <>
      <BackToTopButton />
      {/* <Banner /> */}

      {!slideLoading && slideSuccess ? (
        <div className="header h-[700px] py-[16px] bg-cover bg-center">
          <div className="max-h-[500px] h-full">
            <Slideshow
              className="mx-auto"
              style={{ maxWidth: '800px' }}
              images={slideshowImages}
            />
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}

      {/* <IndexTcas /> */}

      <IndexNews />
      <IndexPrograms />
      <IndexDepartments />
      <IndexExecutive />
      <IndexPartners />
      <IndexMap />

      <style jsx scoped>{`
        :global(.header) {
          background-image: url(${homeHeaderBG.src});
        }

        :global(.news-card) {
          flex-grow: 1;
          height: 348px;
        }
      `}</style>
    </>
  )
}

export default Home

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
