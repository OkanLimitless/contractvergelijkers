import type { AppProps } from 'next/app'
import '@cv/ui/styles/globals.css'
import InboundGoogleAds from '../components/InboundGoogleAds'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <InboundGoogleAds />
      <Component {...pageProps} />
    </>
  )
}
