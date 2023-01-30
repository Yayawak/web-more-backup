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
    // i === currentIndex - 1 || i === currentIndex || i === currentIndex + 1
    if (i === currentIndex - 1)
      prev();
    else if (i === currentIndex + 1)
      next();


  }
  // console.log(currentIndex)
  return (
    <div className='flex justify-center items-center'>
      {src.map((val, i) => {
        return (
          <div key={i} className={`relative ${i === currentIndex ? "w-[450px] h-[227px] z-20" : "w-[260px] h-[151px] z-10 brightness-50 hover:brightness-75 cursor-pointer"} 
                  ${i < currentIndex && " -mr-32"} ${i > currentIndex && " -ml-32"} ${!(i === currentIndex - 1 || i === currentIndex || i === currentIndex + 1) && "hidden"}`}
            onClick={() => handleClick(i)}
          >
            <Image
              src={val}
              alt=""
              fill
              className='object-cover rounded-[10px] '
              sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
            />
          </div>
        )
      })}

    </div>
  )
}

export default Slideshow2