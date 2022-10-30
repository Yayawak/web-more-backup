import Image from 'next/image'
import { FC } from 'react'

interface ISlideshowImage {
  src: string
  alt: string
}

const SlideshowImage: FC<ISlideshowImage> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden">
      <Image
        className={`absolute top-0 left-0 h-full w-full object-cover object-center blur-xl`}
        src={src}
        alt={alt}
        fill
      />

      <Image
        className="object-contain object-center"
        blurDataURL="https://via.placeholder.com/1920x1080"
        src={src}
        alt={alt}
        fill
      />
    </div>
  )
}

export default SlideshowImage
