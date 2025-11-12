import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

import { GoogleAdsTracking } from '../components/GoogleAdsTracking'
import { SiteLayout } from '../components/SiteLayout'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <SiteLayout>{page}</SiteLayout>)

  return (
    <>
      <GoogleAdsTracking />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
