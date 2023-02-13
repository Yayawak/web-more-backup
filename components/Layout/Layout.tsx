import React from 'react'
import Head from 'next/head'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { IComponentProps } from '@/types/component-props'

const Layout = ({ children }: IComponentProps) => {
  return (
    <>
      <Head>
        <title>Science @KMITL</title>
      </Head>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="app-main relative flex grow flex-col">{children}</div>
        <Footer />
      </div>

      <style jsx scoped>{`
        .app-main {
          padding-top: var(--navbar-height);
        }
      `}</style>
    </>
  )
}

export default Layout
