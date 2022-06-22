import SlideshowButton from "./Button"

interface SlideshowProps {
  image: string[]
}

const Slideshow = ({ image }: SlideshowProps) => {
  return (
    <>
      <div className="relative w-full h-full">
        <SlideshowButton side="left" />
        <SlideshowButton side="right" />
      </div>
    </>
  )
}

export default Slideshow
