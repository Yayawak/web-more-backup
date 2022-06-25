import '@/styles/globals.scss'
import '@mdi/font/css/materialdesignicons.min.css'

import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
