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
    <div
      className={`drop-shadow-lg w-[${width}px] h-[${height}px] bg-white rounded-[20px]`}
    >
      <span>{imageUrl}</span>
      <span>{title}</span>
      <span>{description}</span>
      <span>{date?.toString()}</span>
    </div>
  )
}

export default NewsCard
