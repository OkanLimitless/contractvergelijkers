import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

export default function Klantenservice() {
  const [phoneNumber] = useState('085 087 0276')
  const [showMobilePopup, setShowMobilePopup] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(max-width: 767px)').matches) setShowMobilePopup(true)
  }, [])

  return (
    <>
      <Head>
        <title>Klantenservice | Adviesneutraal Advieslijn</title>
        <meta name="description" content="Klantenservice Adviesneutraal: onafhankelijk advies en tarieven vergelijken. Wij helpen met vragen en overstappen. Bel direct." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Ads tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17614565914"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', 'AW-17614565914');
              function gtag_report_conversion(url){
                var cb=function(){ if(typeof(url)!='undefined'){ window.location=url; } };
                gtag('event','conversion',{ send_to:'AW-17614565914/jLQ1CM6j9KYbEJrko89B', event_callback:cb });
                return false;
              }
            `,
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50 pb-28">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg md:text-xl font-bold">⚡</span>
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-gray-900">Adviesneutraal</span>
                </div>
              </Link>
              <a
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-2xl mx-auto px-6 py-14 md:py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Klantenservice Energie – Bel Nu</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">Binnen 20 seconden verbonden met een energie-expert. Direct bereikbaar.</p>
            <div className="text-sm text-gray-500 mb-2">Bel direct:</div>
            <div className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-wide mb-4">{phoneNumber}</div>
            <a
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-bold text-white shadow-md transition-colors hover:bg-blue-700"
            >
              <span>📞</span> Bel Nu
            </a>
            <div className="mt-3 text-sm text-gray-500">Direct verbonden • Geen wachtrij</div>
          </div>
        </section>

        {/* Waarom */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-6 py-10">
            <h2 className="text-center text-sm font-semibold text-gray-800 mb-4">Waarom ons bellen?</h2>
            <div className="mx-auto max-w-2xl">
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">🕒</div>
                  <div>
                    <div className="font-semibold text-gray-900">Direct Bereikbaar</div>
                    <div className="text-sm text-gray-600">Snelle hulp tijdens kantooruren voor al uw vragen</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">€</div>
                  <div>
                    <div className="font-semibold text-gray-900">Persoonlijke Service</div>
                    <div className="text-sm text-gray-600">Deskundige medewerkers helpen u verder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hulp bij */}
        <section className="bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 py-14">
            <h2 className="text-center text-gray-900 text-xl font-semibold mb-8">Hulp bij:</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-200"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">🧾</div><div className="font-medium text-gray-900">Factuur vragen</div></div>
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-200"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">✏️</div><div className="font-medium text-gray-900">Contract wijzigen</div></div>
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-200"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">🔀</div><div className="font-medium text-gray-900">Overstappen naar andere leverancier</div></div>
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-200"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">🚧</div><div className="font-medium text-gray-900">Storing melden</div></div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">En nog veel meer energie-gerelateerde vragen</div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-6 py-14">
            <h2 className="text-center text-gray-900 text-xl font-semibold mb-8">Wat zeggen onze klanten?</h2>
            <div className="rounded-2xl border border-gray-200 bg-blue-50 p-8 text-center shadow-sm">
              <div className="text-yellow-400 text-xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-medium text-gray-900 mb-2">"Gebeld binnen 20 seconden – super snel geholpen!"</p>
              <div className="text-sm text-gray-600">— Sandra M., Amsterdam</div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-2"><span className="text-green-500">●</span> Duizenden tevreden klanten</div>
              <div className="flex items-center gap-2"><span className="text-green-500">●</span> Snelle verbinding gegarandeerd</div>
            </div>
          </div>
        </section>

        {/* Footer (Figma-aligned) */}
        <footer className="bg-white border-t border-gray-200">
          <div className="mx-auto max-w-3xl px-6 py-10 text-center space-y-4">
            <p className="text-sm font-medium text-gray-700">
              Adviesneutraal · Onafhankelijke klantenservice voor al uw energievraag.
            </p>
            <div>
              <Link href="/privacy" className="text-sm text-blue-600 hover:underline">
                Privacyverklaring
              </Link>
            </div>
            <div className="h-px bg-gray-200" />
            <p className="text-xs text-gray-500">
              &copy; 2025 Energie Klantenservice · Alle rechten voorbehouden.
            </p>
          </div>
        </footer>

        {/* Sticky bottom CTA (Figma-aligned) */}
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="mx-auto w-full max-w-3xl px-4 pt-3 pb-4" style={{background:'rgba(255,255,255,0.96)', backdropFilter:'saturate(180%) blur(8px)'}}>
            <div className="text-center text-[13px] font-semibold text-gray-800 mb-2">Waarom ons bellen?</div>
            <a
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="block w-full rounded-full text-center font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
              style={{background:'#F46A0F', padding:'12px 16px'}}
            >
              <span className="mr-2">📞</span> Bel Nu – Direct Verbonden
            </a>
            <div className="mt-2 text-center text-[12px] text-gray-600">
              {phoneNumber} • Direct beschikbaar
            </div>
          </div>
        </div>
      </main>

      {/* Mobile-only phone popup */}
      {showMobilePopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50" onClick={() => setShowMobilePopup(false)}>
          <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute right-3 top-3 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200" aria-label="Sluiten" onClick={() => setShowMobilePopup(false)}>×</button>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600"><span className="text-3xl text-white">✓</span></div>
            <h3 className="mb-2 text-center text-2xl font-bold text-blue-700">Bel Klantenservice Direct!</h3>
            <p className="mb-5 text-center text-gray-600">Onze klantenservice helpt u direct met persoonlijk advies om te besparen</p>
            <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="mb-4 block rounded-2xl bg-blue-600 p-5 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div className="text-sm opacity-90">Bel direct:</div>
              <div className="mt-1 text-3xl font-extrabold tracking-wide">{phoneNumber}</div>
            </a>
            <p className="mb-4 text-center text-sm text-gray-500">Ma–Vrij 08:00 tot 20:00 uur</p>
            <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="block rounded-xl bg-blue-600 py-3 text-center font-bold text-white hover:bg-blue-700">Bel Klantenservice Nu</a>
          </div>
        </div>
      )}
    </>
  )
}
