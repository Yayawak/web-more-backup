interface ButtonProps {
  side: string
}

const sideToText: { [key: string]: string } = {
  left: "<",
  right: ">",
}

const SlideshowButton = ({ side }: ButtonProps) => {
  return (
    <>
      <div
        className={`slideshow-button w-[75px] h-[124px] text-white text-[30px] absolute flex justify-center items-center ${
          side === "right" && "right-0 "
        } cursor-pointer select-none`}
      >
        {sideToText[side]}
      </div>

      <style jsx lang="scss">{`
        .slideshow-button {
          background-color: rgba(0, 0, 0, 0.7);1
        }
      `}</style>
    </>
  )
}

export default SlideshowButton
