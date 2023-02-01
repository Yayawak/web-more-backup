import { NextPage } from 'next'
import Image from 'next/image'
import notFound from '@/assets/images/not_found.png'

const PageError404: NextPage = () => {
  return (
    <>
      <div className="not-found-container flex flex-col items-center justify-center">
        <Image src={notFound} width={300} alt="404" />
        <div className="text-[24px]">
          Sorry, we couldn&apos;t find the page.
        </div>
      </div>

      <style scoped lang="scss">{`
        .not-found-container {
          height: calc(100vh - var(--navbar-height));
        }
      `}</style>
    </>
  )
}

export default PageError404
