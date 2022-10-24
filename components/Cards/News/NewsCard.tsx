import BaseButton from '@/components/Buttons/Base/BaseButton'
import { CustomProps } from '@/types/component-props'
import { Rounded } from '@/types/rounded'
import { link } from 'fs'
import Link from 'next/link'

interface INewsCardProps {
  imageUrl?: string
  title?: string
  category?: string[]
  date?: string
  read?: string
}

type Props = CustomProps<INewsCardProps>

const NewsCard = ({
  imageUrl = '',
  title = '',
  category = [],
  date,
  className = '',
  read = '',
  style = {},
}: Props) => {
  return (
    <>
      <Link href={read}>
        <a
          className={`news-card drop-shadow-lg bg-white rounded-[20px] p-[16px] grid overflow-hidden ${className}`}
          style={style}
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
            {date && <span>{date}</span>}

            {/* <Link href={read}>
            <a className="ml-auto">
              <BaseButton
                roundedType={Rounded.FULL}
                backgroundColor="#FF7C32"
                padding="4px 16px"
                elevation={false}
              >
                อ่านต่อ
              </BaseButton>
            </a>
          </Link> */}
          </div>
        </a>
      </Link>

      <style jsx scoped>{`
        .news-card {
          grid-template-rows: 114px auto 50px;
          cursor: pointer;
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
