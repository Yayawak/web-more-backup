import SlideshowButton from "./Button"

interface SlideshowProps {
  image?: string[]
}

const Slideshow = ({ image }: SlideshowProps) => {
  return (
    <>
      <div className="relative w-full h-full bg-black">
        <SlideshowButton side="left" />
        <SlideshowButton side="right" />
      </div>

      <style jsx lang="scss">{`
        :global(.slideshow-button) {
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </>
  )
}

export default Slideshow
