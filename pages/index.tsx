import type { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app' 
import Layout from '../components/Layout/Layout'

const Home: NextPageWithLayout = () => {
  return <h1>Hello, World!</h1>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Home
