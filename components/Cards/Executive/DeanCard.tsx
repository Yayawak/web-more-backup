import Image from 'next/image'
import deanImage from '@/assets/images/dean.png'

const DeanCard = () => {
  return (
    <>
      <div className="relative w-full max-w-[1000px] h-[300px] mx-auto mb-[32px] drop-shadow-md rounded-[20px] overflow-hidden">
        <Image
          src={deanImage}
          alt="science kmitl"
          layout="fill"
          objectFit="cover"
        />

        <div className="contact-list flex gap-[32px]">
          <div className="contact-button drop-shadow-lg">
            <span className="mdi mdi-phone "></span>
          </div>
          <div className="contact-button drop-shadow-lg">
            <span className="mdi mdi-email"></span>
          </div>
          <div className="contact-button drop-shadow-lg">
            <span className="mdi mdi-facebook"></span>
          </div>
        </div>
      </div>

      <style jsx scoped lang="scss">{`
        .contact-list {
          position: absolute;
          bottom: 30px;
          right: 50%;
          transform: translateX(100%);
        }
        .contact-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          font-size: 30px;
          background-color: white;
          border-radius: 100%;
          cursor: pointer;
        }

        .mdi {
          transform: translateY(2px);
        }
      `}</style>
    </>
  )
}

export default DeanCard
