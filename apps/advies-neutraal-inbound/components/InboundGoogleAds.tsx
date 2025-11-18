import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

declare global {
  interface Window { gtag_report_conversion?: (url?: string) => boolean }
}

const CONVERSION_ID = 'AW-17525009819'
const CONVERSION_LABEL = 'emorCOeCkcIbEJvbyaRB' // CTA conversion label for phone calls

function bindTelHandlers() {
  const anchors = Array.from(document.querySelectorAll('a[href^="tel:"]')) as HTMLAnchorElement[]
  const onClick = (e: Event) => {
    const el = e.currentTarget as HTMLAnchorElement
    if (!el) return
    e.preventDefault()
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(el.href)
    } else {
      // Fallback navigation if gtag isn't ready
      window.location.href = el.href
    }
  }
  anchors.forEach((a) => a.addEventListener('click', onClick))
  return () => anchors.forEach((a) => a.removeEventListener('click', onClick))
}

export default function InboundGoogleAds() {
  const router = useRouter()

  useEffect(() => {
    // Rebind handlers on route change to catch new anchors
    const unbind = bindTelHandlers()
    return () => unbind()
  }, [router.asPath])

  const init = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} 
  gtag('js', new Date());
  gtag('config', '${CONVERSION_ID}');
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': '${CONVERSION_ID}/${CONVERSION_LABEL}',
      'value': 1.0,
      'currency': 'USD',
      'event_callback': callback
    });
    return false;
  }
  `

  return (
    <>
      <Script id="gtag-src" src={`https://www.googletagmanager.com/gtag/js?id=${CONVERSION_ID}`} strategy="beforeInteractive" />
      <Script id="gtag-init" strategy="beforeInteractive">{init}</Script>
    </>
  )
}
