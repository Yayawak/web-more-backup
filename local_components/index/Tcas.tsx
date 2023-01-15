import BaseButton from '@/components/Buttons/Base/BaseButton'
import Container from '@/components/Layout/Container'
import { Rounded } from '@/types/rounded'
import Image from 'next/image'
import Link from 'next/link'

import tcasBG from '@/assets/images/tcas_bg.png'
import KMITLLogo from '@/assets/logos/kmitl-logo.png'
import { CustomProps } from '@/types/component-props'

const IndexTcas = () => {
  return (
    <>
      <div className="bg-[#FF6D2D] h-[50px] flex items-center">
        <Container>
          <div className="text-white text-[32px] font-bold">TCAS</div>
        </Container>
      </div>

      <div
        className="bg-cover bg-center pb-[8px] min-h-[400px]"
        style={{
          backgroundImage: `url(${tcasBG.src})`,
        }}
      >
        <Container
          noPadding
          className="flex flex-col lg:flex-row w-full h-full gap-[40px]"
        >
          <div className="flex flex-col grow">
            <div className="text-[#0A6AB7] text-[90px] font-bold text-center lg:text-right">
              TCAS 65
            </div>
            <div className="flex mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative w-[100px]">
                <Image
                  css={{
                    objectFit: 'contain',
                  }}
                  src={KMITLLogo}
                  alt="kmitl logo"
                  fill
                />
              </div>
              <div>
                <div className="text-[#F16322] font-bold text-center lg:text-right">
                  สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </div>
                <div className="font-bold text-center lg:text-right">
                  King Mongkut&apos;s Institute of Technology Ladkrabang
                </div>
              </div>
            </div>
            <Link
              href="https://new.reg.kmitl.ac.th/admission/#/"
              className="mt-auto w-[fit-content] mx-auto"
            >
              <BaseButton
                backgroundColor="#0A17A7"
                textColor="white"
                roundedType={Rounded.CUSTOM}
                rounded={10}
              >
                เข้าสู่เว็บไซต์ Admission
              </BaseButton>
            </Link>
          </div>

          <div className="flex flex-col w-full lg:w-[500px] text-center lg:text-left pt-0 lg:pt-[16px] gap-[16px] px-[8px]">
            <div className="text-[32px] font-bold">ประกาศ</div>

            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#00D2EF"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#00D2EF"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#00D2EF"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
            <TCASAnnouncementCard
              type="ข่าวสาร"
              color="#FACF06"
              text="ช่องทางการชำระค่าสมัคร"
              icon="calendar"
            />
          </div>
        </Container>
      </div>
    </>
  )
}

export default IndexTcas

interface ITCASAnnouncementProps {
  type: string
  color: string
  text: string
  icon: string
}
type TCASAnnouncementProps = CustomProps<ITCASAnnouncementProps>
const TCASAnnouncementCard = ({
  type,
  color,
  text,
  icon,
}: TCASAnnouncementProps) => {
  return (
    <>
      <div className="flex items-center bg-white w-full h-[60px] drop-shadow-lg rounded-[8px] overflow-hidden pr-[16px]">
        <div
          className="h-full w-[80px] flex justify-center items-center mr-[8px] text-white font-bold"
          style={{ backgroundColor: color }}
        >
          {type}
        </div>
        <div>{text}</div>
        <div className={`mdi mdi-${icon} ml-auto`}></div>
      </div>
    </>
  )
}
