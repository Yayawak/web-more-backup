import * as datefns from 'date-fns'

interface INewsCardProps {
  width: number
  height: number
  imageUrl?: string
  title?: string
  description?: string
  date?: Date
}

const NewsCard = ({
  width = 304,
  height = 348,
  imageUrl,
  title,
  description,
  date,
}: INewsCardProps) => {
  return (
    <>
      <div className={`news-card drop-shadow-lg bg-white rounded-[20px]`}>
        <span>{imageUrl}</span>
        <span>{title}</span>
        <span>{description}</span>
        {date && <span>{datefns.format(date, 'dd MMM yyyy')}</span>}
      </div>

      <style jsx>{`
        .news-card {
          width: ${width}px;
          height: ${height}px;
        }
      `}</style>
    </>
  )
}

export default NewsCard
