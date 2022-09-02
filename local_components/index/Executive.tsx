import DeanCard from '@/components/Cards/Executive/DeanCard'
import ExecutiveCard from '@/components/Cards/Executive/ExecutiveCard'
import Container from '@/components/Layout/Container'
import IndexSectionTitle from './SectionTitle'
import { contactInfo } from '@/constants/contact_info'
import Link from 'next/link'
import BaseButton from '@/components/Buttons/Base/BaseButton'
import { Rounded } from '@/types/rounded'
import { useState } from 'react'
import BaseModal from '@/components/Modal/Base/BaseModal'
import Image from 'next/image'
import mailIcon from '@/assets/icons/icon-mail.svg'

const IndexExecutive = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState(contactInfo[0])

  return (
    <>
      {showModal && (
        <BaseModal
          onClose={() => setShowModal(false)}
          body={
            <div className="md:grid md:grid-cols-2 h-fit">
              <div className="mx-2 md:mx-0 text-center">
                <Image
                  src={modalInfo.img}
                  alt="ผู้บริหาร"
                  width={300}
                  height={450}
                />
                <div className="subtitle2 text-[#979797]">
                  {modalInfo.name}
                </div>
              </div>
              <div className="mt-4 md:mt-20 text-center md:text-left">
                <div className="text-[22px]">
                  {modalInfo.position.split('/')[0]}
                </div>
                <div className="h5 mt-1.5">
                  {modalInfo.name
                    .replace('รองศาสตราจารย์ ', 'รศ.')
                    .replace('ผู้ช่วยศาสตราจารย์ ', 'ผศ.')}
                </div>
                <div className="mt-0.5 text-[22px]">
                  <div>{modalInfo.engName}</div>
                  <div className="md:-mt-2.5">
                    {modalInfo.position.split('/')[1]}
                  </div>
                </div>
                <div className="flex mt-3 justify-center md:justify-start">
                  <Image src={mailIcon} alt="mail-icon" />
                  <div className="ml-1">{modalInfo.email}</div>
                </div>
              </div>
            </div>
          }
        />
      )}

      <Container>
        <IndexSectionTitle className="my-[16px]">ผู้บริหาร</IndexSectionTitle>

        <DeanCard />

        <div className="flex gap-[24px] mx-auto max-w-[900px] justify-between mb-[32px] flex-wrap md:flex-nowrap">
          <ExecutiveCard
            image="https://www.science.kmitl.ac.th/assets/img/dean-office/karn.png"
            name="ผศ.ดร.กานต์ วงศาริยะ"
            position="รองคณบดีคณะวิทยาศาสตร์"
            autoHeight
            onContactClick={() => {
              setModalInfo(contactInfo[0])
              setShowModal(true)
            }}
          />
          <ExecutiveCard
            image="https://www.science.kmitl.ac.th/assets/img/dean-office/aparporn.png"
            name="รศ.ดร.อาภาภรณ์ สกุลการะเวก"
            position="รองคณบดี คณะวิทยาศาสตร์"
            onContactClick={() => {
              setModalInfo(contactInfo[1])
              setShowModal(true)
            }}
            autoHeight
          />
          <ExecutiveCard
            image="https://www.science.kmitl.ac.th/assets/img/dean-office/chokchai.png"
            name="รศ.ดร.โชคชัย กิตติวงศ์วัฒนา"
            position="รองคณบดี คณะวิทยาศาสตร์"
            onContactClick={() => {
              setModalInfo(contactInfo[2])
              setShowModal(true)
            }}
            autoHeight
          />
          <ExecutiveCard
            image="https://www.science.kmitl.ac.th/assets/img/dean-office/apiluk.png"
            name="รศ.ดร.อภิลักษณ์ เอียดเอื้อ"
            position="รองคณบดี คณะวิทยาศาสตร์"
            onContactClick={() => {
              setModalInfo(contactInfo[3])
              setShowModal(true)
            }}
            autoHeight
          />
        </div>

        <Link href="https://www.science.kmitl.ac.th/page#/personel">
          <a className="mt-[48px] block">
            <BaseButton
              backgroundColor="#FF7C32"
              roundedType={Rounded.CUSTOM}
              rounded={8}
              elevation={false}
              className="mx-auto"
            >
              คณะผู้บริหารทั้งหมด
            </BaseButton>
          </a>
        </Link>
      </Container>
    </>
  )
}

export default IndexExecutive
