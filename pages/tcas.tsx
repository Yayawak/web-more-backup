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
import Container from '@/components/Layout/Container'

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
  const [displayedComponent, setDisplayedComponent] = useState('tcas3')
  const [activeButton, setActiveButton] = useState('');

  function handleButtonClick(component) {
    setDisplayedComponent(component)
    setActiveButton(component);
  }

  return (
    <Container className='mt-14'>
      <div className="bg bg-cover bg-top">
        {/* head */}
        <div className="flex justify-between flex-wrap">
          <h1 className="left-[106px] top-[123px] ml-24 w-[300px] text-[90px] font-bold">
            TCAS 66
          </h1>
          <div className="mr-24 h-[362px] w-[475px] hidden lg:block">
            <Image src={DepartmentLogo} alt="DepartmentLogo" sizes="" />
          </div>
        </div>

        {/*Dynamic Page*/}
          <div className="m-10 grid grid-cols-1 sm:grid-cols-4 w-auto justify-between rounded-lg border-2 border-orange-500 flex-wrap">
            <button
              className={`bg-transparent py-1 text-[28px] ${activeButton === 'tcas1' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
              onClick={() => handleButtonClick('tcas1')}
            >
              รอบ 1 Portfolio
            </button>
            <button
              className={`bg-transparent py-1 text-[28px] ${activeButton === 'tcas2' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
              onClick={() => handleButtonClick('tcas2')}
            >
              รอบ 2 Quota
            </button>
            <button
              className={`bg-transparent py-1 text-[28px] ${activeButton === 'tcas3' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
              onClick={() => handleButtonClick('tcas3')}
            >
              รอบ 3 Admission
            </button>
            <button
              disabled
              className="bg-transparent py-1 text-[28px] hover:bg-orange-300 hover:text-white"
              onClick={() => handleButtonClick('tcas4')}
            >
              รอบ 4
            </button>
          </div>

        <div className="flex justify-center">
          {displayedComponent === 'tcas1' && <TACS1 />}
          {displayedComponent === 'tcas2' && <TACS2 />}
          {displayedComponent === 'tcas3' && <TACS3 />}
          {displayedComponent === 'tcas4' && <TACS4 />}
        </div>

        <style jsx scoped>{`
          .bg {
            background-image: url(${bgTCAS.src});
          }
        `}</style>
      </div>
    </Container>
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
      <Container className='mx-8'>
        <h1 className="text-center text-[36px]">
          เปิดรับสมัคร TCAS 2 รอบ โควตา ของคณะวิทยาศาสตร์ (ขยายเวลารับสมัคร)
        </h1>
        <div className="my-14 flex flex-col items-center  justify-center">
          <p>เปิดรับสมัคร TCAS2/66 รอบ โควตา ของ คณะวิทยาศาสตร์ สจล.</p>
          <p>📍สามารถสมัครได้ระหว่าง วันที่ 14 ก.พ.- 24 มี.ค. 66</p>
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
      </Container>
    )
  }

  function TACS3() {
    return (
      <Container className='mx-8'>
        <h1 className="text-center text-[36px]">
          เปิดรับสมัคร TCAS 3 รอบ Admission ของคณะวิทยาศาสตร์
        </h1>
        <div className="my-14 flex flex-col items-center  justify-center">
          <p>เปิดรับสมัคร TCAS3/66 รอบ Admission ของ คณะวิทยาศาสตร์ สจล.</p>
          <p>📍สามารถสมัครได้ระหว่าง วันที่ 7 - 13 พ.ค. 66</p>
          <p>ผ่านทาง https://new.reg.kmitl.ac.th/admission/</p>
        </div>

        <h1 className="flex justify-center text-[36px] font-bold">ประกาศ</h1>

        <p>
          การรับสมัครคัดเลือกบุคคลเข้าศึกษาต่อระดับปริญญาตรี รอบที่ ๓ แบบAdmission
        </p>
        <iframe
          className="mb-12 h-[680px] w-full"
          src="https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2409_2023_02_10-13-36-55_88ce3.pdf?fbclid=IwAR23Ydn1RiP8zkJEdzViKOIh4oHjfcVFZlJH5XQDUTvBvYJ8Ff5g9gjby18"
          title="Iframe Example"
        />
      </Container>
    )
  }

  function TACS4() {
    return <div>This is TACS 4</div>
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
