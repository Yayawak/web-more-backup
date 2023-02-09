import Container from '@/components/Layout/Container'
import Link from 'next/link'
import { Rounded } from '@/types/rounded'
import BaseButton from '@/components/Buttons/Base/BaseButton'
import Image from 'next/image'
import TcasNote from '@/assets/images/TCAS/note-taking.png'
import TCAStext from '@/assets/images/TCAS/TCAStext.png'

const IndexTcas = () => {
  return (
    <>
      <Container className="mt-8">
        <div className='bd p-4'>
        <div className="flex flex-wrap justify-between bg min-h-[218px] pl-8 pr-8 text-white">
          <div className='flex relative'>
            <Image
              className="mr-2"
              css={{
                objectFit: 'contain',
                position: 'static !important',
                width: '231px !important',
                height: '218px !important'

              }}
              src={TcasNote}
              alt="TcasNote"
              fill
              sizes=""
            />
            <div className='flex flex-col justify-center'>
              <Image
                className=""
                css={{
                  objectFit: 'contain',
                  position: 'static !important',
                  width: '270px !important',
                  height: '70px !important'
                }}
                src={TCAStext}
                alt="TTCAStext"
                fill
                sizes=""
              />
              <h1 className='text-2xl'>กำหนดการรับสมัครนักศึกษา</h1>
            </div>
          </div>
            <div className='flex justify-center items-center'>
              <div className="flex flex-col mr-12 text-lg">
                  <Link href={`/#`}>รอบที่ 1   Portfolio</Link>
                  <Link href={`/#`}>รอบที่ 2   Quota</Link>
                  <Link href={`/#`}>รอบที่ 3   Admission</Link>
                  <Link href={`/#`}>รอบที่ 4   Direct Admission</Link>
                </div>
                <Link 
                    href="/tcas"
                    className="mx-auto mt-auto"
                >
                  <BaseButton
                    className="mx-auto mt-[48px] mb-[32px]"
                    roundedType={Rounded.CUSTOM}
                    rounded={8}
                    backgroundColor="#00D2EF"
                    elevation={false}
                  >
                    ดูรายละเอียดเพิ่มเติม
                  </BaseButton>
                </Link>
            </div>
        </div>
        </div>
        
      </Container>

      <style jsx scoped>{`
        .bg{
          background: linear-gradient(88.81deg, rgba(255, 124, 50, 0) 21.59%, #FF7C32 98.98%);
          border-radius: 8px;
        }

        .bd{
          background: linear-gradient(92.62deg, #FF8A00 -2.72%, #FFE600 113.38%);
          border-radius: 10px;
        }
      `}</style>
    </>  
  )
}

export default IndexTcas
