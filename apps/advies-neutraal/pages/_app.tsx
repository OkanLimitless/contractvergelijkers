import type { AppProps } from 'next/app'
import '@cv/ui/styles/globals.css'
import { GoogleAdsTracking } from '@cv/ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAdsTracking />
      <Component {...pageProps} />
    </>
  )
}
