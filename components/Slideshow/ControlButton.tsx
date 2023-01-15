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
        css={{
          right: side === 'right' ? 0 : 'unset',
          borderTopRightRadius: side === 'left' ? 8 : 'unset',
          borderBottomRightRadius: side === 'left' ? 8 : 'unset',
          borderTopLeftRadius: side === 'right' ? 8 : 'unset',
          borderBottomLeftRadius: side === 'right' ? 8 : 'unset',
        }}
        className={`slideshow-button absolute flex h-[100px] w-[60px] items-center justify-center text-[30px] text-white ${
          side === 'right' && 'right-0 '
        } cursor-pointer select-none`}
        onClick={onClick}
      >
        {sideToText[side]}
      </div>

      <style jsx scoped lang="scss">{`
        .slideshow-button {
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </>
  )
}

export default SlideshowButton
