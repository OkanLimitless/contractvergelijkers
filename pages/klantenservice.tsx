import Head from 'next/head'
import Link from 'next/link'
import { AlertCircle, CheckCircle2, Clock, Phone, Shield } from 'lucide-react'

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
  'Direct geholpen worden bij storingen of vragen',
  'Overstappen naar een goedkopere aanbieder',
  'Uitleg over uw energiefactuur',
  'Vergelijken van energietarieven',
]

const brandSections = [
  {
    id: 'essent',
    name: 'Essent klantenservice',
    description:
      'Hulp nodig met Essent? Wij kijken rechtstreeks met u mee bij vragen over tarieven, termijnbedragen en storingen.',
    bullets: [
      'Samen uw contract en kosten controleren',
      'Actuele Essent-acties of alternatieven bespreken',
      'Doorverwijzing naar het officiële kanaal indien nodig',
    ],
    officialUrl: 'https://www.essent.nl/service/contact',
  },
  {
    id: 'eneco',
    name: 'Eneco klantenservice',
    description:
      'Onze experts beantwoorden uw Eneco-vragen en geven eerlijk advies over mogelijke besparingen.',
    bullets: [
      'Ondersteuning bij vragen over termijnnota\'s',
      'Overzicht van Eneco-tarieven versus alternatieven',
      'Advies bij het plannen van een overstapmoment',
    ],
    officialUrl: 'https://www.eneco.nl/service-en-contact/',
  },
  {
    id: 'vattenfall',
    name: 'Vattenfall klantenservice',
    description:
      'Wilt u iemand spreken over uw Vattenfall contract? Wij verbinden u direct met een adviseur.',
    bullets: [
      'Samen storingen of factuurvragen oplossen',
      'Controle van uw tarieven ten opzichte van de markt',
      'Wanneer gewenst doorgeschakeld naar Vattenfall',
    ],
    officialUrl: 'https://www.vattenfall.nl/klantenservice/',
  },
]

const howItWorksSteps = [
  {
    title: 'U belt ons servicenummer',
    text: 'Een gecertificeerd adviseur neemt direct op en luistert naar uw vraag.',
  },
  {
    title: 'Wij analyseren uw situatie',
    text: 'Met uw toestemming kijken we mee naar uw contract en tarieven zodat u weet waar u aan toe bent.',
  },
  {
    title: 'Oplossing of doorverwijzing',
    text: 'We lossen uw vraag zelf op of verbinden u door naar de officiële klantenservice van uw leverancier.',
  },
]

const faqItems = [
  {
    question: 'Zijn jullie de officiële klantenservice van Essent, Eneco of Vattenfall?',
    answer:
      'Nee, wij zijn Advies Neutraal: een onafhankelijke hulplijn. We ondersteunen consumenten met energievragen en verwijzen door naar de leverancier als dat nodig is.',
  },
  {
    question: 'Wat kost het bellen met jullie nummer?',
    answer:
      'U betaalt het gebruikelijke tarief voor bellen naar een Nederlands servicenummer. We rekenen geen extra kosten buiten uw eigen beltarief.',
  },
  {
    question: 'Welke informatie hebben jullie van mij nodig?',
    answer:
      'Alleen de gegevens die nodig zijn om uw vraag te beantwoorden, zoals uw leverancier, postcode of klantnummer. We gaan zorgvuldig met uw data om volgens ons privacybeleid.',
  },
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

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17637600129" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17637600129');
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17637600129/OkdvCNzg_a8bEIHXodpB',
                  'value': 1.0,
                  'currency': 'USD',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <main className="mx-auto max-w-md px-4 pb-32 pt-12 sm:pb-16">
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

            <div className="mt-4 flex items-start justify-center gap-2 text-left text-xs text-gray-500">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" aria-hidden />
              <p>
                <span className="font-semibold">Let op:</span> Advies Neutraal is een onafhankelijke vergelijkings- en
                hulplijn en geen onderdeel van de genoemde energieleveranciers.{' '}
                <a href="#onafhankelijkheid" className="underline">
                  Lees disclaimer
                </a>
                .
              </p>
            </div>
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

          <section id="energieleveranciers" className="mt-12">
            <h2 className="text-center text-lg font-semibold text-gray-900">Ondersteuning per energieleverancier</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Gericht hulp nodig? Kies uw leverancier en onze adviseurs vertellen precies wat u kunt verwachten.
            </p>
            <div className="mt-6 space-y-5">
              {brandSections.map(({ id, name, description, bullets, officialUrl }) => (
                <article
                  key={id}
                  id={id}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  aria-labelledby={`${id}-title`}
                >
                  <h3 id={`${id}-title`} className="text-base font-semibold text-gray-900">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <a
                      href={`tel:${PHONE_NUMBER_TEL}`}
                      onClick={trackConversion}
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      <Phone className="h-5 w-5" aria-hidden />
                      Bel direct {DISPLAY_PHONE_NUMBER}
                    </a>
                    <a
                      href={officialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                    >
                      Naar officiële kanalen
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="onafhankelijkheid" className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-center text-lg font-semibold text-gray-900">Hoe wij werken</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Advies Neutraal is een particuliere hulplijn. We helpen u snel op weg en schakelen waar nodig door naar de
              energieleverancier.
            </p>
            <div className="mt-6 space-y-4">
              {howItWorksSteps.map(({ title, text }) => (
                <div key={title} className="rounded-lg bg-blue-50 p-4 text-sm text-gray-700">
                  <h3 className="text-sm font-semibold text-blue-800">{title}</h3>
                  <p className="mt-2">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-gray-50 p-4 text-xs text-gray-600">
              <p className="font-semibold text-gray-800">Disclaimer</p>
              <p className="mt-2">
                Wij zijn geen onderdeel van Essent, Eneco, Vattenfall of andere leveranciers. Tijdens het gesprek
                informeren wij u altijd helder over eventuele vervolgstappen en kosten. Wilt u liever direct naar de
                leverancier? Gebruik dan de officiële kanalen via de links hierboven.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-center text-lg font-semibold text-gray-900">Veelgestelde vragen</h2>
            <div className="mt-4 space-y-4 text-sm text-gray-700">
              {faqItems.map(({ question, answer }) => (
                <details key={question} className="rounded-lg border border-gray-200 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-900">{question}</summary>
                  <p className="mt-3 text-gray-700">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <footer className="mx-auto max-w-md px-4 pb-32 text-xs text-gray-500 sm:pb-12">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-left">
            <p className="text-sm font-semibold text-gray-800">Advies Neutraal</p>
            <p className="mt-2 text-gray-600">
              Onafhankelijke klantenservice voor energiezaken. Wij helpen consumenten met vragen, vergelijken tarieven en
              verwijzen door waar nodig.
            </p>
            <div className="mt-4 space-y-1">
              <p>KvK: 84091355</p>
              <p>Vestigingsadres: Kamperingweg 45-D, 2803 PE Gouda</p>
              <p>
                E-mail:{' '}
                <a href="mailto:info@adviesneutraal.nl" className="text-blue-600 underline">
                  info@adviesneutraal.nl
                </a>
              </p>
              <p>Telefoon klantenservice: {DISPLAY_PHONE_NUMBER}</p>
              <p>Openingstijden: maandag t/m vrijdag 08:00 - 20:00 uur</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/privacy" className="text-blue-600 underline">
                Privacybeleid
              </Link>
              <Link href="/#over-ons" className="text-blue-600 underline">
                Over ons
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-500">&copy; 2025 Advies Neutraal - Onafhankelijk Energieadvies</p>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-3 sm:hidden">
          <div className="rounded-2xl bg-white/95 p-3 shadow-2xl ring-1 ring-gray-200 backdrop-blur">
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              onClick={trackConversion}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Bel direct {DISPLAY_PHONE_NUMBER}
            </a>
            <p className="mt-2 text-center text-[11px] text-gray-500">
              Onafhankelijke hulplijn • doordeweeks 08:00 - 20:00
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
