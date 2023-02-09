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
  const [displayedComponent, setDisplayedComponent] = useState('tcas2');

  function handleButtonClick(component) {
    setDisplayedComponent(component);
  }

  return (
    <div className="bg mx-24 my-16 rounded-xl bg-cover bg-top">
      {/* head */}
      <div className="flex justify-between mt-14 mb-24">
          <h1 className="font-bold text-[90px] w-[300px] left-[106px] top-[123px] ml-24">TCAS 66</h1>
          <div className="w-[475px] h-[362px] mr-24">
            <Image
              src={DepartmentLogo}
              alt="DepartmentLogo"
              sizes=""
            />
          </div>
      </div>

      {/*Dynamic Page*/}
      <div className="flex justify-between w-full border-2 border-orange-500 rounded-lg">
        <button className="text-[28px] w-1/3 py-4 bg-transparent hover:bg-orange-500 hover:text-white" onClick={() => handleButtonClick('tcas1')}>รอบ 1 Portfolio</button>
        <button className="text-[28px] w-1/3 py-4 bg-transparent hover:bg-orange-500 hover:text-white" onClick={() => handleButtonClick('tcas2')}>รอบ 2 Quota</button>
        <button disabled className="text-[28px] w-1/3 py-4 bg-transparent hover:bg-orange-300 hover:text-white" onClick={() => handleButtonClick('tcas3')}>รอบ 3 Admission</button>
      </div>
      <div className="flex justify-center mt-14">
        {displayedComponent === 'tcas1' && <TACS1 />}
        {displayedComponent === 'tcas2' && <TACS2 />}
        {displayedComponent === 'tcas3' && <TACS3 />}
      </div>
        
      <style jsx scoped>{`
        .bg{
          background-image: url(${bgTCAS.src});
        }
      `}</style>
    </div>
  )

  function TACS1() {
    return (
      <div>
        <h1 className="text-[36px] text-center mb-8">ภาพบรรยากาศวันสอบสัมภาษณ์รอบ TCAS 1</h1>
        <div className='flex flex-wrap justify-center'>
          {TCAS1Items.map((item) => {
            return (
              <div className="relative mb-6 w-[600px] h-[400px] ">
                <Image
                  className="object-contain"
                  src={item.image}
                  alt={item.alt}
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
      
    );
  }
  

  function TACS2() {
    return (
      <div className='w-full mx-32'>
        <h1 className="text-[36px] text-center">เปิดรับสมัคร TCAS 2 รอบ โควตา ของคณะวิทยาศาสตร์ (ขยายเวลารับสมัคร)</h1>
        <div className="flex flex-col items-center justify-center  my-14">
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

        <h1 className="flex text-[36px] font-bold justify-center">ประกาศ</h1>
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

        <p>การรับสมัครคัดเลือกบุคคลเข้าศึกษาต่อระดับปริญญาตรี รอบที่ ๒ แบบโควตา</p>
        <iframe className="mb-12 h-[680px] w-full" src="https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2650_2023_02_08-09-47-02_1d44d.pdf?fbclid=IwAR1TasY_UrhOqCRxyO9qI5bcGJfAKiILuiRiYubmlFhC0fxY5imqvTaunSY" title="Iframe Example"/>
        <p>การรับนักศึกษา สมัครทุนการศึกษาโครงการบัณฑิตคืนถิ่น ในพระราชดำริของสมเด็จพระเทพรัตนราชสุดาฯสยามบรมราชกุมาร</p>
        <iframe  className="mb-12 h-[680px] w-full" src="https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2648_2023_02_07-09-25-58_eff75.pdf?fbclid=IwAR3B6XJ5DsV8MreboMXgaCQgedefytznf4-zWLaZXipTtZpj_ZM026KBrq8" title="Iframe Example"/>
        
      </div>
    );
  }

  function TACS3() {
    return (
      <div>
        This is TACS 3
      </div>
    );
  }
}

export default Tcas

const TCAS1Items = [
  {
    title: 'TCAS1 image 1',
    image: TCAS1_1,
    alt: 'TCAS1 image 1'
  },
  {
    title: 'TCAS1 image 2',
    image: TCAS1_2,
    alt: 'TCAS1 image 2'
  },
  {
    title: 'TCAS1 image 3',
    image: TCAS1_3,
    alt: 'TCAS1 image 3'
  },
  {
    title: 'TCAS1 image 4',
    image: TCAS1_4,
    alt: 'TCAS1 image 4'
  },
  {
    title: 'TCAS1 image 5',
    image: TCAS1_5,
    alt: 'TCAS1 image 5'
  },
  {
    title: 'TCAS1 image 6',
    image: TCAS1_6,
    alt: 'TCAS1 image 6'
  },
  {
    title: 'TCAS1 image 7',
    image: TCAS1_7,
    alt: 'TCAS1 image 7'
  }
]
