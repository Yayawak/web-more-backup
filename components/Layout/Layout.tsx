import React from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Science@KMITL</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout