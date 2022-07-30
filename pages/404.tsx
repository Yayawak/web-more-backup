import { NextPage } from 'next'

const PageError404: NextPage = () => {
  return (
    <div className="flex flex-col my-auto text-center text-[50px]">
      <div>404...SORRY we ded</div>
      <div>We couldn&apos;t find that page</div>
    </div>
  )
}

export default PageError404
