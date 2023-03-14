import { useEffect, useState } from 'react'
import { useGetSlideNewsQuery } from '@/store/api/news/getSlideNews'

import Image from 'next/image'

import Slideshow from '@/components/Slideshow/Slideshow'

import bgTCAS from '@/assets/images/TCAS/bgTCAS.png'
import DepartmentLogo from '@/assets/images/TCAS/departmentLogo.png'
import TCAS1_1 from '@/assets/images/TCAS/tcas1_1.jpg'
import TCAS1_2 from '@/assets/images/TCAS/tcas1_2.jpg'
import TCAS1_3 from '@/assets/images/TCAS/tcas1_3.jpg'
import TCAS1_4 from '@/assets/images/TCAS/tcas1_4.jpg'
import TCAS1_5 from '@/assets/images/TCAS/tcas1_5.jpg'
import TCAS1_6 from '@/assets/images/TCAS/tcas1_6.jpg'
import TCAS1_7 from '@/assets/images/TCAS/tcas1_7.jpg'

const Tcas = () => {
  //show slide
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

  //show Dynamic Page
  const [displayedComponent, setDisplayedComponent] = useState('tcas2')

  function handleButtonClick(component) {
    setDisplayedComponent(component)
  }

  return (
    <div className="bg mx-24 my-16 rounded-xl bg-cover bg-top">
      {/* head */}
      <div className="mt-14 mb-24 flex justify-between">
        <h1 className="left-[106px] top-[123px] ml-24 w-[300px] text-[90px] font-bold">
          TCAS 66
        </h1>
        <div className="mr-24 h-[362px] w-[475px]">
          <Image src={DepartmentLogo} alt="DepartmentLogo" sizes="" />
        </div>
      </div>

      {/*Dynamic Page*/}
      <div className="px-[16px]">
        <div className="grid h-[70px] w-full grid-cols-3 justify-between rounded-lg border-2 border-orange-500">
          <button
            className="bg-transparent text-[28px] hover:bg-orange-500 hover:text-white"
            onClick={() => handleButtonClick('tcas1')}
          >
            รอบ 1 Portfolio
          </button>
          <button
            className="bg-transparent text-[28px] hover:bg-orange-500 hover:text-white"
            onClick={() => handleButtonClick('tcas2')}
          >
            รอบ 2 Quota
          </button>
          <button
            disabled
            className="bg-transparent text-[28px] hover:bg-orange-300 hover:text-white"
            onClick={() => handleButtonClick('tcas3')}
          >
            รอบ 3 Admission
          </button>
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        {displayedComponent === 'tcas1' && <TACS1 />}
        {displayedComponent === 'tcas2' && <TACS2 />}
        {displayedComponent === 'tcas3' && <TACS3 />}
      </div>

      <style jsx scoped>{`
        .bg {
          background-image: url(${bgTCAS.src});
        }
      `}</style>
    </div>
  )

  function TACS1() {
    return (
      <div>
        <h1 className="mb-8 text-center text-[36px]">
          ภาพบรรยากาศวันสอบสัมภาษณ์รอบ TCAS 1
        </h1>
        <div className="flex flex-wrap justify-center">
          {TCAS1Items.map((item) => {
            return (
              <div
                key={item.title}
                className="relative mb-6 h-[400px] w-[600px] "
              >
                <Image
                  className="object-contain"
                  src={item.image}
                  alt={item.alt}
                  fill
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  function TACS2() {
    return (
      <div className="mx-32 w-full">
        <h1 className="text-center text-[36px]">
          เปิดรับสมัคร TCAS 2 รอบ โควตา ของคณะวิทยาศาสตร์ (ขยายเวลารับสมัคร)
        </h1>
        <div className="my-14 flex flex-col items-center  justify-center">
          <p>เปิดรับสมัคร TCAS2/66 รอบ โควตา ของ คณะวิทยาศาสตร์ สจล.</p>
          <p>📍สามารถสมัครได้ระหว่าง วันที่ 14 ก.พ.- 15 มี.ค. 66</p>
          <p>ผ่านทาง https://new.reg.kmitl.ac.th/admission/</p>
        </div>

        {/* slide */}
        {/* {!slideLoading && slideSuccess ? (
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
        )} */}

        <h1 className="flex justify-center text-[36px] font-bold">ประกาศ</h1>
        {/* <div className="flex flex-col justify-center  my-7">
          <div  className="flex">
            <span className="mdi mdi-bell-ring mr-2"></span>
            <p>ประกาศรายชื่อผู้มีสิทธิ์สัมภาษณ์ โครงการxxxx</p>
          </div>
          <div  className="flex"> 
            <span className="mdi mdi-bell-ring mr-2"></span>
            <p>ประกาศเกณฑ์การรับสมัคร รอบ2 โควต้าภาคกลาง</p>
          </div>
          <div  className="flex">
            <span className="mdi mdi-bell-ring mr-2"></span>
            <p>ประกาศเกณฑ์การรับสมัคร รอบ2 โควต้าเรียนดี</p>
          </div>
        </div> */}

        <p>
          การรับสมัครคัดเลือกบุคคลเข้าศึกษาต่อระดับปริญญาตรี รอบที่ ๒ แบบโควตา
        </p>
        <iframe
          className="mb-12 h-[680px] w-full"
          src="https://www.science.kmitl.ac.th/course-files/tcas2-1.pdf"
          title="Iframe Example"
        />
        <p>
          การรับนักศึกษา สมัครทุนการศึกษาโครงการบัณฑิตคืนถิ่น
          ในพระราชดำริของสมเด็จพระเทพรัตนราชสุดาฯสยามบรมราชกุมาร
        </p>
        <iframe
          className="mb-12 h-[680px] w-full"
          src="https://www.science.kmitl.ac.th/course-files/tcas2-2.pdf"
          title="Iframe Example"
        />
      </div>
    )
  }

  function TACS3() {
    return <div>This is TACS 3</div>
  }
}

export default Tcas

const TCAS1Items = [
  {
    title: 'TCAS1 image 1',
    image: TCAS1_1,
    alt: 'TCAS1 image 1',
  },
  {
    title: 'TCAS1 image 2',
    image: TCAS1_2,
    alt: 'TCAS1 image 2',
  },
  {
    title: 'TCAS1 image 3',
    image: TCAS1_3,
    alt: 'TCAS1 image 3',
  },
  {
    title: 'TCAS1 image 4',
    image: TCAS1_4,
    alt: 'TCAS1 image 4',
  },
  {
    title: 'TCAS1 image 5',
    image: TCAS1_5,
    alt: 'TCAS1 image 5',
  },
  {
    title: 'TCAS1 image 6',
    image: TCAS1_6,
    alt: 'TCAS1 image 6',
  },
  {
    title: 'TCAS1 image 7',
    image: TCAS1_7,
    alt: 'TCAS1 image 7',
  },
]