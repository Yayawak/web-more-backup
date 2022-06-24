import Container from '@/components/Layout/Container'
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
      <Container>
        <SectionTitle>ข่าวสาร</SectionTitle>
      </Container>

      {/* Programs */}
      <Container>
        <SectionTitle>หลักสูตร</SectionTitle>
      </Container>
      <div className="w-10/12 mx-auto">
        <div className="flex">
          <ul className="ml-36 mt-28">
            {programItems.map((item, index) => {
              return (
                <li key={index} className="mb-8">
                  <Link href={item.path}>
                    <a className="text-[24px] hover:underline">
                      {item.title + ` >`}
                    </a>
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

interface ISectionTitleProps {
  children?: React.ReactNode
}
const SectionTitle = ({ children }: ISectionTitleProps) => {
  return (
    <>
      <div className="section-title flex gap-[8px] items-center justify-start">
        <div className="border-t-[2px] border-black"></div>
        <div className="text-[32px]">{children}</div>
        <div className="border-t-[2px] border-black"></div>
      </div>

      <style jsx>{`
        .section-title > div:not(:nth-child(2)) {
          flex-grow: 1;
        }

        .section-title > div:nth-child(1) {
          max-width: 50px;
        }
      `}</style>
    </>
  )
}
