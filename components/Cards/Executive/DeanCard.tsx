import Image from 'next/image'
import deanImage from '@/assets/images/dean.png'
import { FC } from 'react'

interface IDeanCardProps {
  onOpenModal: () => void
}

const DeanCard: FC<IDeanCardProps> = ({ onOpenModal }) => {
  return (
    <>
      <div className="relative w-full max-w-[900px] h-[300px] mx-auto mb-[32px] drop-shadow-md rounded-[20px] overflow-hidden">
        <Image
          css={{
            objectFit: 'cover',
          }}
          src={deanImage}
          alt="science kmitl"
          fill
        />

        <div className="contact-list flex gap-[32px]">
          <div className="contact-button" onClick={onOpenModal}>
            <span className="mdi mdi-account-box-outline"></span>
            <a>ช่องทางติดต่อ</a>
          </div>
          {/* <div className="contact-button drop-shadow-lg">
            <span className="mdi mdi-phone "></span>
          </div>
          <div className="contact-button drop-shadow-lg">
            <span className="mdi mdi-email"></span>
          </div>
          <div className="contact-button drop-shadow-lg">
            <span className="mdi mdi-facebook"></span>
          </div> */}
        </div>
      </div>

      <style jsx scoped lang="scss">{`
        .contact-list {
          position: absolute;
          bottom: 30px;
          right: 42%;
          transform: translateX(100%);
        }

        .contact-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 145px;
          height: 31px;
          font-size: 16px;
          border-radius: 10px;
          background: #d9d9d9;
          color: #000000;
          cursor: pointer;
        }

        .mdi {
          transform: translateX(-10px);
          font-size: 20px;
        }
      `}</style>
    </>
  )
}

export default DeanCard
