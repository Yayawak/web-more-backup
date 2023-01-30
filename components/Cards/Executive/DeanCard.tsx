import Image from 'next/image'
import deanImage from '@/assets/images/dean.png'
import { FC } from 'react'

interface IDeanCardProps {
  onOpenModal: () => void
}

const DeanCard: FC<IDeanCardProps> = ({ onOpenModal }) => {
  return (
    <>
      <div className="relative mx-auto mb-[32px] h-[300px] w-full max-w-[900px] overflow-hidden rounded-[20px] drop-shadow-md">
        <Image
          css={{
            objectFit: 'cover',
          }}
          src={deanImage}
          alt="science kmitl"
          fill
          loading="lazy"
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
          background: #f2f2f2;
          color: #212121;
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
