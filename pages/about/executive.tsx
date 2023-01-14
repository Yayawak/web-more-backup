import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import BackToTopButton from '@/components/Buttons/BackToTopButton/BackToTopButton'
import DeanCard from '@/components/Cards/Executive/DeanCard'
import ExecutiveCard from '@/components/Cards/Executive/ExecutiveCard'
import Container from '@/components/Layout/Container'
import BaseModal from '@/components/Modal/Base/BaseModal'
import { contactInfo } from '@/constants/contact_info'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import mailIcon from '@/assets/icons/icon-mail.svg'
import Collapse from '@/components/Collapse/Collapse'
import CopyButton from '@/components/Buttons/CopyButton/CopyButton'

const Executive = () => {
  const [modalInfo, setModalInfo] = useState(contactInfo[0])
  const [showModal, setShowModal] = useState(false)

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
                  loading="lazy"
                />
                <div className="subtitle2 text-[#979797]">{modalInfo.name}</div>
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
                  <CopyButton text={modalInfo.email} />
                </div>
              </div>
            </div>
          }
        />
      )}

      <Container className="mt-[64px]">
        <Breadcrumbs />
        <BackToTopButton />
        {/* Title */}
        <div className="text-[32px] text-center font-bold mt-[64px] mb-[32px]">
          ผู้บริหาร
        </div>

        {/* Content */}
        <div className="mx-auto mb-[16px] py-[16px] px-[32px] flex flex-col bg-[#f2f2f2] rounded-[10px]">
          <>
            {/* Dean */}
            <DeanCard
              onContactClick={() => {
                setModalInfo(contactInfo[0])
                setShowModal(true)
              }}
            />

            {/* Vice Dean */}
            <Collapse title="รองคณบดี">
              {contactInfo.map((val, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <div className="mx-4 my-2">
                      <ExecutiveCard
                        image={val.img}
                        name={val.shortName}
                        position={val.position}
                        autoHeight
                        onContactClick={() => {
                          setModalInfo(val)
                          setShowModal(true)
                        }}
                      />
                    </div>
                  )
                }
              })}
            </Collapse>

            {/* Assistant Dean */}
            <Collapse title="ผู้ช่วยคณบดี">
              {contactInfo.map((val, index) => {
                if (index > 4 && index < 10) {
                  return (
                    <div className="mx-4 my-2">
                      <ExecutiveCard
                        image={val.img}
                        name={val.shortName}
                        position={val.position}
                        autoHeight
                        onContactClick={() => {
                          setModalInfo(val)
                          setShowModal(true)
                        }}
                      />
                    </div>
                  )
                }
              })}
            </Collapse>

            {/* Head of Department */}
            <Collapse title="หัวหน้าภาค และหัวหน้าศูนย์">
              {contactInfo.map((val, index) => {
                if (index > 9 && index < 18) {
                  return (
                    <div className="mx-4 my-2">
                      <ExecutiveCard
                        image={val.img}
                        name={val.shortName}
                        position={val.position}
                        autoHeight
                        onContactClick={() => {
                          setModalInfo(val)
                          setShowModal(true)
                        }}
                      />
                    </div>
                  )
                }
              })}
            </Collapse>

            {/* Head of Center */}
            <Collapse title="ผู้อำนวยการ">
              {/* {RenderExecutiveCard(16, 18)} */}
              {contactInfo.map((val, index) => {
                if (index === 18) {
                  return (
                    <div className="mx-4 my-2">
                      <ExecutiveCard
                        image={val.img}
                        name={val.shortName}
                        position={val.position}
                        autoHeight
                        onContactClick={() => {
                          setModalInfo(val)
                          setShowModal(true)
                        }}
                      />
                    </div>
                  )
                }
              })}
            </Collapse>
          </>
        </div>
      </Container>
    </>
  )
}

export default Executive
