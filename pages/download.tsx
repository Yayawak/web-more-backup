import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import BaseButton from '@/components/Buttons/Base/BaseButton'
import InputSelect from '@/components/Input/Select'
import Container from '@/components/Layout/Container'
import { Rounded } from '@/types/rounded'
import { NextPage } from 'next'

const Download: NextPage = () => {
  return (
    <Container className="mt-[16px]">
      <Breadcrumbs />

      <div className="mt-[16px] mb-[56px] text-center text-[32px] font-bold">
        เลือกรายละเอียดเอกสารที่ต้องการ
      </div>

      <div className="mx-auto max-w-[600px]">
        <div className="text-[24px] mb-[8px]">ประเภทบุคลากร</div>
        <InputSelect items={{ teacher: 'บุคคลากร', student: 'นักศึกษา' }} />

        <div className="text-[24px] mt-[16px] mb-[8px]">ประเภทเอกสาร</div>
        <InputSelect items={{ doc: '.doc', pdf: '.pdf' }} />

        <BaseButton
          backgroundColor="#F8560A"
          textColor="white"
          roundedType={Rounded.CUSTOM}
          rounded={8}
          elevation={false}
          className="mt-[16px] mb-[16px] mx-auto w-[130px]"
        >
          ค้นหา
        </BaseButton>
      </div>

      <div className="mx-auto mb-[16px] py-[16px] px-[32px] max-w-[800px] flex flex-col bg-white rounded-[10px]">
        <div className="font-bold text-[20px]">งานวิจัย</div>
      </div>
    </Container>
  )
}

export default Download
