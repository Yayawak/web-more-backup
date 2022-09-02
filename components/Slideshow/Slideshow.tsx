import { CustomProps } from '@/types/component-props'
import React, { useCallback, useState } from 'react'
import ControlButton from './ControlButton'

interface SlideshowProps {
  images?: string[]
}

type Props = CustomProps<SlideshowProps>

const Slideshow = ({ images = [], className = '', style = {} }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const navigate = useCallback(
    (num: number) => {
      if (num === 1) {
        if (currentSlide + 1 === images.length) setCurrentSlide(0)
        else setCurrentSlide((val) => val + 1)
      } else if (num === -1) {
        if (currentSlide - 1 === -1) setCurrentSlide(images.length - 1)
        else setCurrentSlide((val) => val - 1)
      }
    },
    [currentSlide, images.length]
  )

  const onNavigatorClick = useCallback((page: number) => {
    setCurrentSlide(page)
  }, [])

  return (
    <div
      className={`flex flex-col w-full h-full relative ${className}`}
      style={style}
    >
      <div className="slideshow-content relative w-full grow">
        <ControlButton side="left" onClick={() => navigate(-1)} />
        <ControlButton side="right" onClick={() => navigate(1)} />

        <div
          className="relative w-full h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${images[currentSlide]})` }}
        ></div>
      </div>

      <div
        className={`${
          images.length > 0 && 'mt-[8px]'
        } flex justify-center gap-[8px] cursor-pointer`}
      >
        {[...Array(images?.length)].map((_, i) => (
          <div
            className={`navigator w-[20px] h-[20px] rounded-full ${
              currentSlide === i && 'active'
            }`}
            key={i}
            onClick={() => onNavigatorClick(i)}
          ></div>
        ))}
      </div>

      <style jsx scoped>{`
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
