import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

type Props = {
  src: StaticImageData[]
}

function Slideshow2({ src }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % src.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + src.length) % src.length);
  };

  const handleClick = (i: number) => {
    if (i === currentIndex - 1)
      prev();
    else if (i === currentIndex + 1)
      next();
  }
  return (
    <div className='flex justify-center items-center'>
      {src.map((val, i) => {
        return (
          <div key={i} className={`relative ${i === currentIndex ? "w-[225px] h-[113px] xs:w-[360px] xs:h-[181px] md:w-[450px] md:h-[227px] z-20" : "w-[180px] h-[75px] xs:w-[288px] xs:h-[120px] md:w-[260px] md:h-[151px] z-10 brightness-50 hover:brightness-75 cursor-pointer"} 
                  ${i < currentIndex && "-mr-28 xs:-mr-48 md:-mr-32"} ${i > currentIndex && "-ml-28 xs:-ml-48 md:-ml-32"} ${!(i === currentIndex - 1 || i === currentIndex || i === currentIndex + 1) && "hidden"}`}
            onClick={() => handleClick(i)}
          >
            <Image
              src={val}
              alt="activity"
              fill
              className='object-cover rounded-[10px] '
              sizes="(min-width: 0) 100vw"
            />
          </div>
        )
      })}
    </div>
  )
}

export default Slideshow2