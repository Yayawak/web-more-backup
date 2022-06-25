import React from 'react'
import Head from 'next/head'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { IComponentProps } from '@/types/component-props'

const Layout = ({ children }: IComponentProps) => {
  return (
    <>
      <Head>
        <title>Science@KMITL</title>
      </Head>

      <Navbar />
      <div className="app-main">{children}</div>
      <Footer />

      <style jsx>{`
        .app-main {
          position: relative;
          padding-top: var(--navbar-height);
        }
      `}</style>
    </>
  )
}

export default Layout
