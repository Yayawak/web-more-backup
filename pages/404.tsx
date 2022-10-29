import { NextPage } from 'next'

const PageError404: NextPage = () => {
  return (
    <>
      <div className="not-found-container flex flex-col justify-center items-center">
        <div className="text-[50px]">404</div>
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
