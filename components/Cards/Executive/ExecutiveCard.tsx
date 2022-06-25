interface IExecutiveCardProps {
  image?: string
  name?: string
  position?: string
  phone?: string
  email?: string
  facebook?: string
  width?: number
  height?: number
}

const ExecutiveCard = ({
  image = '',
  name = '',
  position = '',
  phone = '',
  email = '',
  facebook = '',
  width = 180,
  height = 278,
}: IExecutiveCardProps) => {
  return (
    <>
      <div className="executive-card bg-[#F2F2F2] rounded-[30px] drop-shadow-lg grid overflow-hidden pb-[16px]">
        <div className="pt-[8px] px-[8px]">
          <div
            className="bg-cover bg-no-repeat bg-center w-full h-full rounded-[20px]"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>

        <div className="mt-[8px] px-[8px] text-center">{name}</div>
        <div className="px-[8px] text-center text-[16px]">{position}</div>
        <div className="flex gap-[8px] px-[16px] items-end">
          <div className="w-[25px] h-[25px] rounded-full bg-white drop-shadow-md flex justify-center items-center cursor-pointer">
            <span className="mdi mdi-phone text-[14px]"></span>
          </div>
          <div className="w-[25px] h-[25px] rounded-full bg-white drop-shadow-md flex justify-center items-center cusor-pointer">
            <span className="mdi mdi-email text-[14px]"></span>
          </div>
          <div className="w-[25px] h-[25px] rounded-full bg-white drop-shadow-md flex justify-center items-center cursor-pointer">
            <span className="mdi mdi-facebook text-[14px]"></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .executive-card {
          grid-template-rows: 160px fit-content(100%) fit-content(100%) auto;
          width: ${width}px;
          height: ${height}px;
        }

        .mdi {
          transform: translateY(1px);
        }
      `}</style>
    </>
  )
}

export default ExecutiveCard
