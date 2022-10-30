import { CustomProps } from '@/types/component-props'
import { useCallback, useMemo, useState } from 'react'
import ControlButton from './ControlButton'
import { motion, AnimatePresence, Variants, Variant } from 'framer-motion'
import Image from 'next/image'
import SlideshowImage from './SlideshowImage'

interface SlideshowProps {
  images?: string[]
}

type Props = CustomProps<SlideshowProps>

const variants = {
  initial: {
    left: '-100%',
    transition: {
      duration: 0,
    },
  },
  animate: (direction: number) => {
    let left = '-100%'

    if (direction === 1) left = '-200%'
    else if (direction === -1) left = '0'

    if (left === '-100%') {
      return {
        left,
        transition: { duration: 0 },
      }
    }

    return {
      left,
    }
  },
}

const Slideshow = ({ images = [], className = '', style = {} }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const navigate = useCallback(
    (num: number) => {
      if (num === 1) {
        setDirection(1)
        if (currentSlide + 1 === images.length) setCurrentSlide(0)
        else setCurrentSlide((val) => val + 1)
      } else if (num === -1) {
        setDirection(-1)
        if (currentSlide - 1 === -1) setCurrentSlide(images.length - 1)
        else setCurrentSlide((val) => val - 1)
      }
    },
    [currentSlide, images.length]
  )

  const prevImage = useMemo(() => {
    if (currentSlide === 0) return images.length - 1
    return currentSlide - 1
  }, [currentSlide, images])

  const nextImage = useMemo(() => {
    if (currentSlide === images.length - 1) return 0
    return currentSlide + 1
  }, [currentSlide, images])

  const handleNavigatorClick = useCallback((page: number) => {
    setCurrentSlide(page)
  }, [])

  const handleAnimationComplete = () => {
    navigate(direction)
    setDirection(0)
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col px-[16px] ${className}`}
      style={style}
    >
      <div
        css={{
          backgroundColor: 'var(--grey)',
        }}
        className="relative w-full grow overflow-hidden"
      >
        <ControlButton side="left" onClick={() => setDirection(-1)} />
        <ControlButton side="right" onClick={() => setDirection(1)} />

        {images.length > 0 && (
          <motion.div
            key={currentSlide}
            className="relative h-full w-full whitespace-nowrap"
            css={{
              '& > div': {
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                height: '100%',
              },
            }}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            onAnimationComplete={handleAnimationComplete}
            transition={{
              type: 'spring',
              duration: 0.3,
              bounce: 0,
            }}
          >
            <SlideshowImage src={images[prevImage]} alt="science kmitl" />
            <SlideshowImage src={images[currentSlide]} alt="science kmitl" />
            <SlideshowImage src={images[nextImage]} alt="science kmitl" />
          </motion.div>
        )}
      </div>

      <div
        className={`${
          images.length > 0 && 'mt-[8px]'
        } flex cursor-pointer justify-center gap-[8px]`}
      >
        {[...Array(images?.length)].map((_, i) => (
          <div
            className={`navigator h-[20px] w-[20px] rounded-full ${
              currentSlide === i && 'active'
            }`}
            key={i}
            onClick={() => handleNavigatorClick(i)}
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
