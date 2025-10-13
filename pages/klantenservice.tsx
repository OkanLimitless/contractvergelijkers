import Head from 'next/head'
import Link from 'next/link'
import { CheckCircle2, Clock, Phone, Shield } from 'lucide-react'

const DISPLAY_PHONE_NUMBER = '085 087 0276'
const PHONE_NUMBER_CANONICAL = DISPLAY_PHONE_NUMBER.replace(/\s+/g, '')
const PHONE_NUMBER_TEL =
  PHONE_NUMBER_CANONICAL.startsWith('0')
    ? `+31${PHONE_NUMBER_CANONICAL.slice(1)}`
    : `+31${PHONE_NUMBER_CANONICAL}`

declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

const highlightBadges = [
  {
    text: 'Gratis bellen',
    className: 'bg-green-50 text-green-700',
  },
  {
    text: 'Direct verbonden',
    className: 'bg-blue-50 text-blue-700',
  },
  {
    text: 'Geen wachtrij',
    className: 'bg-purple-50 text-purple-700',
  },
]

const trustCards = [
  {
    title: 'Onafhankelijk advies',
    description: 'Wij vergelijken alle energieleveranciers voor u.',
    icon: CheckCircle2,
    iconWrapperClass: 'bg-green-100 text-green-600',
  },
  {
    title: 'Snelle hulp',
    description: 'Direct contact met onze klantenservice experts.',
    icon: Clock,
    iconWrapperClass: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Betrouwbaar',
    description: 'Persoonlijk advies op maat voor uw situatie.',
    icon: Shield,
    iconWrapperClass: 'bg-purple-100 text-purple-600',
  },
]

const serviceItems = [
  'Vragen over uw energiecontract',
  'Overstappen naar een goedkopere aanbieder',
  'Uitleg over uw energiefactuur',
  'Vergelijken van energietarieven',
]

export default function Klantenservice() {
  const trackConversion = () => {
    if (typeof window !== 'undefined' && typeof gtag_report_conversion === 'function') {
      gtag_report_conversion(`tel:${PHONE_NUMBER_TEL}`)
    }
  }

  return (
    <>
      <Head>
        <title>Klantenservice | Adviesneutraal Advieslijn</title>
        <meta
          name="description"
          content="Klantenservice Adviesneutraal: onafhankelijk advies en tarieven vergelijken. Wij helpen met vragen en overstappen. Bel direct."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17614565914" />
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

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <main className="mx-auto max-w-md px-4 py-12">
          <section className="text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <Phone className="h-10 w-10 text-blue-600" aria-hidden />
            </div>

            <p className="mb-2 text-sm text-gray-500">Advies Neutraal</p>
            <h1 className="mb-4 text-2xl font-semibold text-gray-900">
              Hulp nodig met uw energieleverancier?
            </h1>
            <p className="mb-6 text-sm text-gray-600">
              Bel direct met onze klantenservice voor persoonlijk advies over uw energiecontract.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {highlightBadges.map((badge) => (
                <span
                  key={badge.text}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm ${badge.className}`}
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  {badge.text}
                </span>
              ))}
            </div>

            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              onClick={trackConversion}
              className="mb-3 inline-flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-700 motion-safe:animate-ctaPulse"
            >
              <Phone className="h-6 w-6" aria-hidden />
              {DISPLAY_PHONE_NUMBER}
            </a>
            <p className="text-xs text-gray-500">Bereikbaar op werkdagen van 08:00 - 20:00 uur</p>
          </section>

          <section className="mt-10 grid gap-3">
            {trustCards.map(({ title, description, icon: Icon, iconWrapperClass }) => (
              <div key={title} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${iconWrapperClass}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-center text-base font-semibold text-gray-900">Wij helpen u met:</h3>
            <ul className="space-y-3 text-left">
              {serviceItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 text-center">
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              onClick={trackConversion}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-600 text-base font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Bel nu: {DISPLAY_PHONE_NUMBER}
            </a>
          </section>
        </main>

        <footer className="mx-auto max-w-md px-4 pb-12 text-center text-xs text-gray-500">
          <p className="mb-1">&copy; 2025 Advies Neutraal - Onafhankelijk Energieadvies</p>
          <p className="mb-3">Klantenservice bereikbaar op werkdagen</p>
          <Link href="/privacy" className="text-gray-500 underline">
            Privacybeleid
          </Link>
        </footer>
      </div>
    </>
  )
}
