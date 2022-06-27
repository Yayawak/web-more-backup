import React from 'react'

interface ButtonProps {
  side: string
  onClick?: () => void
}

const sideToText: { [key: string]: string } = {
  left: '<',
  right: '>',
}

const SlideshowButton = ({ side, onClick }: ButtonProps) => {
  return (
    <>
      <div
        className={`slideshow-button w-[60px] h-[100px] text-white text-[30px] absolute flex justify-center items-center ${
          side === 'right' && 'right-0 '
        } cursor-pointer select-none`}
        onClick={onClick}
      >
        {sideToText[side]}
      </div>

      <style jsx lang="scss">{`
        .slideshow-button {
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </>
  )
}

export default SlideshowButton
