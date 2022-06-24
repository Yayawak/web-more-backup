import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import atomLogo from '../assets/logos/atom-logo.png'

/**
 * TODO: Add responsive design
 */

type programItem = {
  title: string
  path: string
}

const Home: NextPage = () => {
  const programItems: programItem[] = [
    {
      title: 'หลักสูตรปริญญาตรี',
      path: '/programs/bechelor',
    },
    {
      title: 'หลักสูตรปริญญาโทร',
      path: '/programs/master',
    },
    {
      title: 'หลักสูตรปริญญาเอก',
      path: '/programs/doctor',
    },
  ]

  return (
    <>
      {/* News */}
      <div className="w-10/12 mx-auto">
        <div className="flex items-center">
          <div className="border border-[#6a6a6a] w-[83px] h-0" />
          <h1 className="text-[39px] font-bold mx-3">ข่าวสาร</h1>
          <div className="border border-[#6a6a6a] w-full h-0" />
        </div>
      </div>
      {/* Programs */}
      <div className="w-10/12 mx-auto">
        <div className="flex items-center">
          <div className="border border-[#6a6a6a] w-[83px] h-0" />
          <h1 className="text-[39px] font-bold mx-3">หลักสูตร</h1>
          <div className="border border-[#6a6a6a] w-full h-0" />
        </div>
        <div className="flex">
          <ul className="ml-36 mt-28">
            {programItems.map((item, index) => {
              return (
                <li key={index} className="mb-8">
                  <Link href={item.path}>
                    <a className="text-[24px] hover:underline">{item.title + ` >`}</a>
                  </Link>
                  <div className="border border-[#979797] w-[305px]" />
                </li>
              )
            })}
          </ul>
          <div className="ml-auto mr-36">
            <Image
              src={atomLogo}
              alt="Atom logo"
              layout="fixed"
              width={391}
              height={391}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
