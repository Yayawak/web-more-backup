import React from 'react'
import Head from 'next/head'

import Navbar from '../Navbar/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Science@KMITL</title>
      </Head>

      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout