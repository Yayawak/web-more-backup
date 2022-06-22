interface ButtonProps {
  side: string
}

const sideToText: { [key: string]: string } = {
  left: "<",
  right: ">",
}

const SlideshowButton = ({ side }: ButtonProps) => {
  return <div className="w-[75px] h-[124px] bg-black">{sideToText[side]}</div>
}

export default SlideshowButton
