import BaseButton from '@/components/Buttons/Base/BaseButton'
import { Rounded } from '@/types/rounded'
import * as datefns from 'date-fns'

interface INewsCardProps {
  width?: number
  height?: number
  imageUrl?: string
  title?: string
  category?: string[]
  date?: Date
}

const NewsCard = ({
  width = 304,
  height = 348,
  imageUrl = '',
  title = '',
  category = [],
  date,
}: INewsCardProps) => {
  return (
    <>
      <div
        className={`news-card drop-shadow-lg bg-white rounded-[20px] p-[16px] grid overflow-hidden`}
      >
        <div
          className="news-card-image bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="news-card-body flex flex-col overflow-hidden mt-[8px]">
          <div className="mb-[4px] text-[18px]">{category.join('/')}</div>
          <div className="news-card-body-description limit-lines font-bold">
            {title}
          </div>
        </div>
        <div className="news-card-footer flex items-center">
          {date && <span>{datefns.format(date, 'dd MMM yyyy')}</span>}
          <BaseButton
            className="ml-auto"
            roundedType={Rounded.FULL}
            backgroundColor="#FF7C32"
            padding="4px 16px"
            elevation={false}
          >
            อ่านต่อ
          </BaseButton>
        </div>
      </div>

      <style jsx>{`
        .news-card {
          grid-template-rows: 114px auto 50px;
          width: ${width}px;
          height: ${height}px;
        }

        .news-card-body-description {
          -webkit-line-clamp: 3;
          line-clamp: 3;
        }
      `}</style>
    </>
  )
}

export default NewsCard
