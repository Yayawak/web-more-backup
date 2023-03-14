import '@/styles/globals.scss'
import '@mdi/font/css/materialdesignicons.min.css'

import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'
import { Provider } from 'react-redux'

import store from '@/store'
import Script from 'next/script'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-278SSK0PK1"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-278SSK0PK1');
          `,
        }}
      />

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
