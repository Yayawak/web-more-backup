import '@/styles/globals.scss'
import '@mdi/font/css/materialdesignicons.min.css'

import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'
import { Provider } from 'react-redux'

import store from '@/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
