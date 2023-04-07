import Container from '@/components/Layout/Container'
import Link from 'next/link'
import { Rounded } from '@/types/rounded'
import BaseButton from '@/components/Buttons/Base/BaseButton'
import Image from 'next/image'
import TcasNote from '@/assets/images/TCAS/note-taking.png'
import TCAStext from '@/assets/images/TCAS/TCAStext.png'
import { css } from '@emotion/react'

const IndexTcas = () => {
  return (
    <>
      <Container className="mt-8">
        <div className="bd p-4">
          <div className="bg flex min-h-[218px] pl-8 pr-8 text-white flex-wrap lg:justify-between justify-center">
            <div className="relative flex">
              <Image
                className="mr-2"
                css={css`
                  object-fit: contain;
                  position: static !important;
                  width: 231px !important;
                  height: 218px !important;
                `}
                src={TcasNote}
                alt="science-kmitl tcas"
                fill
              />

              <div className="flex flex-col justify-center">
                <Image
                  className=""
                  css={css`
                    object-fit: contain;
                    position: static !important;
                    width: 270px !important;
                    height: 70px !important;
                  `}
                  src={TCAStext}
                  alt="science-kmitl tcas"
                  fill
                />
                <h1 className="text-2xl">กำหนดการรับสมัครนักศึกษา</h1>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="mr-12 flex flex-col text-lg">
                <div>รอบที่ 1 Portfolio</div>
                <div>รอบที่ 2 Quota</div>
                <div>รอบที่ 3 Admission</div>
                <div>รอบที่ 4 Direct Admission</div>
              </div>

              <Link href="/tcas" className="mx-auto mt-auto">
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
        .bg {
          background: linear-gradient(
            88.81deg,
            rgba(255, 124, 50, 0) 21.59%,
            #ff7c32 98.98%
          );
          border-radius: 8px;
        }

        .bd {
          background: linear-gradient(
            92.62deg,
            #ff8a00 -2.72%,
            #ffe600 113.38%
          );
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}

export default IndexTcas
