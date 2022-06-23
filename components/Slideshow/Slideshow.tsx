import React, { useCallback, useState, useEffect } from 'react'
import ControlButton from './ControlButton'

interface SlideshowProps {
  images?: string[]
}

const Slideshow = ({ images = [] }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (currentSlide > images.length - 1) setCurrentSlide(0)
    else if (currentSlide < 0) setCurrentSlide(images.length - 1)
  }, [currentSlide, images.length])

  return (
    <div className="w-full h-full relative">
      <div
        className={`${
          images.length > 0 && 'mb-[8px]'
        } flex justify-center gap-[8px] cursor-pointer`}
      >
        {[...Array(images?.length)].map((_, i) => (
          <div
            className={`navigator w-[20px] h-[20px] rounded-full ${
              currentSlide === i && 'active'
            }`}
            key={i}
          ></div>
        ))}
      </div>

      <div className="slideshow-content relative w-full h-full">
        <ControlButton
          side="left"
          onClick={() => setCurrentSlide((v) => v - 1)}
        />
        <ControlButton
          side="right"
          onClick={() => setCurrentSlide((v) => v + 1)}
        />

        <div
          className="relative w-full h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${images[currentSlide]})` }}
        ></div>
      </div>

      <style jsx>{`
        .navigator {
          background-color: var(--grey);
        }

        .navigator.active {
          background-color: var(--white-900);
        }

        .slideshow-content {
          background-color: var(--grey);
        }

        :global(.slideshow-button) {
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
      `}</style>
    </div>
  )
}

export default Slideshow
