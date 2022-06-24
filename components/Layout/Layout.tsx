import React from 'react'
import Head from 'next/head'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

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
      <div className="app-main">{children}</div>
      <Footer />

      <style jsx>{`
        .app-main {
          margin-top: var(--navbar-height);
        }
      `}</style>
    </>
  )
}

export default Layout
