import BaseButton from '@/components/Buttons/Base/BaseButton'
import Container from '@/components/Layout/Container'
import { Rounded } from '@/types/rounded'
import Image from 'next/image'
import Link from 'next/link'
import IndexSectionTitle from './SectionTitle'

import mapImage from '@/assets/images/map.png'

const IndexMap = () => {
  return (
    <Container>
      <IndexSectionTitle className="mb-[16px]">การเดินทาง</IndexSectionTitle>

      <div className="flex flex-col md:flex-row drop-shadow-lg rounded-[4px] min-h-[574px] bg-[#F2F2F2] mb-[200px] overflow-hidden">
        <div className="relative grow flex justify-center items-center min-h-[300px] md:min-h-[unset] bg-[#FBFBFB]">
          <Image
            src={mapImage.src}
            alt="kmitl map"
            className="object-contain mt-[16px] md:mt-0"
            fill
            sizes="(min-width: 0) 100vw"
          />
        </div>

        <div className="p-[16px] pl-[32px] flex flex-col w-full md:w-[450px]">
          <div>
            <div className="text-[#FF7C32]">ที่อยู่</div>
            <div>คณะวิทยาศาสตร์</div>
            <div>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</div>
            <div>ถนนฉลองกรุง เขตลาดกระบัง กรุงเทพ 10520</div>
          </div>

          <div className="flex mt-[16px] mb-[16px]">
            <div className="border-l-2 border-[#FF7C32] mr-[16px]"></div>
            <div>
              <div className="text-[#FF7C32]">รถโดยสารประจำทาง</div>
              <ul>
                <li className="ml-[24px] mt-[16px] list-disc">
                  รถโดยสารประจำทางสาย 1013 ต้นทาง จากซอยสุขุมวิท 77 (อ่อนนุช)
                  ปลายทาง ตลาดหัวตะเข้
                </li>

                <li className="ml-[24px] mt-[16px] list-disc">
                  รถโดยสารประจำทางสาย 1013 (คันเล็ก) ต้นทาง
                  จากศูนย์การค้าเสรีเซนเตอร์ ปลายทาง นิคมอุตสาหกรรมลาดกระบัง
                </li>

                <li className="ml-[24px] mt-[16px] list-disc">
                  รถประจำทางสาย 517 ต้นทาง สวนจตุจักร ปลายทาง
                  สถาบันเทคโนโลยีพระจอมเกล้า
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="https://www.science.kmitl.ac.th/page#/contact"
            className="mx-auto mt-auto"
          >
            <BaseButton
              backgroundColor="#FF7C32"
              roundedType={Rounded.CUSTOM}
              rounded={8}
              elevation={false}
            >
              การเดินทางเพิ่มเติม
            </BaseButton>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default IndexMap
