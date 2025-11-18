import { AlertCircle, ArrowRight, CheckCircle2, Clock, Headset, Phone, Shield, Sparkles } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'
import { loadHomepageContent } from '../lib/content'
import { getBaseUrlFromReq, getDomainConfig } from '../lib/config'
import { getColorScheme } from '../lib/colors'

declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

const highlightBadges = [
  { text: 'Gratis gesprek', className: 'bg-emerald-100 text-emerald-700' },
  { text: 'Direct bereikbaar', className: 'bg-blue-100 text-blue-700' },
  { text: 'Snel geholpen', className: 'bg-indigo-100 text-indigo-700' },
]

const trustCards = [
  {
    title: 'Onafhankelijk',
    description: 'Onze adviseurs zijn niet verbonden aan leveranciers en werken volgens een kwaliteitsprotocol.',
    icon: CheckCircle2,
    iconWrapperClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Snelle hulp',
    description: 'Binnen enkele minuten een energieadviseur aan de lijn, zonder keuzemenu\'s of wachtrijen.',
    icon: Clock,
    iconWrapperClass: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Duidelijk advies',
    description: 'U krijgt concrete aanbevelingen en eventueel een directe doorverwijzing naar uw leverancier.',
    icon: Shield,
    iconWrapperClass: 'bg-indigo-100 text-indigo-600',
  },
]

const serviceItems = [
  'Uitleg over contracten, tarieven en voorwaarden',
  'Controle van termijnbedragen en jaarafrekening',
  'Vergelijking van energieaanbiedingen',
  'Overstapbegeleiding naar betere leverancier',
  'Advies over zonnepanelen en verduurzaming',
]

const brandSections = [
  {
    id: 'essent',
    name: 'Essent',
    title: 'Advies over Essent contract',
    description:
      'Vragen over uw Essent-contract, factuur of tarieven? Wij helpen u direct met persoonlijk advies.',
    bullets: [
      'Uitleg over uw termijnbedrag en voorwaarden',
      'Vergelijking met andere aanbieders',
      'Contact met officiële Essent indien nodig',
    ],
    officialUrl: 'https://www.essent.nl/service/contact',
  },
  {
    id: 'eneco',
    name: 'Eneco',
    title: 'Advies over Eneco contract',
    description:
      'Vragen over uw Eneco-contract of dynamische tarieven? Onze adviseurs staan direct voor u klaar.',
    bullets: [
      'Uitleg over tarieven en contractopties',
      'Advies over slimme meters en installaties',
      'Contact met officiële Eneco indien nodig',
    ],
    officialUrl: 'https://www.eneco.nl/service-en-contact/',
  },
  {
    id: 'vattenfall',
    name: 'Vattenfall',
    title: 'Advies over Vattenfall contract',
    description:
      'Vragen over uw Vattenfall-contract of energierekening? Bel ons voor persoonlijk advies.',
    bullets: [
      'Controle van prijsafspraken en acties',
      'Uitleg over uw termijnbedragen',
      'Contact met officiële Vattenfall indien nodig',
    ],
    officialUrl: 'https://www.vattenfall.nl/klantenservice/',
  },
]

const howItWorksSteps = [
  {
    title: 'U belt ons advieslijnnummer',
    text: 'Een gecertificeerd adviseur luistert naar uw vraag en bekijkt direct uw situatie.',
  },
  {
    title: 'Wij analyseren uw contract',
    text: 'We bekijken tarieven, voorwaarden en alternatieven zodat u precies weet waar u aan toe bent.',
  },
  {
    title: 'Persoonlijk advies',
    text: 'We helpen u direct of verwijzen door naar het juiste contactpunt van uw leverancier.',
  },
]

const faqItems = [
  {
    question: 'Zijn jullie verbonden aan energieleveranciers?',
    answer:
      'Nee. AdviesNeutraal is een onafhankelijke advieslijn. We geven uitleg, beantwoorden vragen en verwijzen indien nodig door naar de leverancier.',
  },
  {
    question: 'Wat kost het adviesgesprek?',
    answer:
      'U betaalt alleen het normale tarief van uw telefoonprovider voor bellen naar een Nederlands nummer. Wij rekenen geen extra kosten.',
  },
  {
    question: 'Welke informatie hebben jullie nodig?',
    answer:
      'Alleen de gegevens die nodig zijn voor uw vraag, zoals verbruik, postcode of contract. We werken volgens de AVG en bewaren niets langer dan nodig.',
  },
]

interface EnergieAdviesProps { brandColor?: string }

export default function EnergieAdvies({ brandColor = 'blue' }: EnergieAdviesProps) {
  const colors = getColorScheme(brandColor)
  const trackConversion = () => {
    if (typeof window !== 'undefined' && typeof gtag_report_conversion === 'function') {
      gtag_report_conversion(`tel:${PHONE_NUMBER_TEL}`)
    }
  }

  return (
    <>
      <Head>
        <title>Energie Advies Direct | Onafhankelijke Hulp & Informatie</title>
        <meta
          name="description"
          content="Direct advies over uw energiecontract en tarieven. Onafhankelijke adviseurs helpen u met vragen of verwijzen door naar uw leverancier. Gratis adviesgesprek."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17525009819"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17525009819');
            `,
          }}
        />
      </Head>

      <div className="flex-1">
        <section className={`relative overflow-hidden ${colors.gradient}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsla(0,0%,100%,0.18),_transparent_40%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 md:py-20 lg:flex-row lg:items-center">
            <div className="lg:w-3/5">
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Vragen over uw energiecontract?
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white sm:text-xl">
                Direct een adviseur aan de lijn voor persoonlijk advies over tarieven, contracten en overstappen.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {highlightBadges.map((badge) => (
                  <span
                    key={badge.text}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${badge.className}`}
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    {badge.text}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  onClick={trackConversion}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.buttonBg} px-6 py-4 text-lg font-bold ${colors.buttonText} shadow-xl transition ${colors.buttonHover} hover:scale-105`}
                >
                  📞 Bel Direct: {DISPLAY_PHONE_NUMBER}
                </a>
              </div>
              <p className={`mt-4 text-sm ${colors.badgeText}`}>
                Ma-vr 08:00 - 20:00, za-zo 10:00 - 16:00 | Gratis adviesgesprek
              </p>
              <div className={`mt-6 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-xs ${colors.badgeText} backdrop-blur`}>
                Onafhankelijk advies • Geen officiële leverancier
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="rounded-2xl bg-white/10 p-6 text-white shadow-xl backdrop-blur">
                <h2 className="text-lg font-semibold">Waarmee wij dagelijks helpen</h2>
                <ul className={`mt-4 space-y-3 text-sm ${colors.badgeText}`}>
                  {serviceItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 rounded-xl bg-white/15 px-4 py-3 text-xs ${colors.badgeText}`}>
                  <strong>Let op:</strong> wij zijn geen leverancier. We geven onafhankelijk advies en verwijzen door naar officiële contactpunten wanneer nodig.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {trustCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${card.iconWrapperClass}`}
                  >
                    <card.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 pb-24 sm:pb-16">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Advies voor verschillende leveranciers
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Onafhankelijke adviseurs helpen u met vragen over uw energieleverancier of verwijzen door naar het juiste contactpunt.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {brandSections.map((brand) => (
                <div key={brand.id} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">{brand.title}</h3>
                  <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 w-fit">
                    Onafhankelijk advies
                  </span>
                  <p className="mt-4 text-sm text-slate-600">{brand.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    {brand.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className={`${colors.primaryText} mt-1 h-4 w-4`} aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-col gap-3">
                      <a
                        href={`tel:${PHONE_NUMBER_TEL}`}
                        onClick={trackConversion}
                        className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-4 py-3 text-base font-bold text-white shadow-sm transition ${colors.primaryHover}`}
                      >
                        <Phone className="h-5 w-5" aria-hidden />
                        Bel Nu: {DISPLAY_PHONE_NUMBER}
                      </a>
                      <Link
                        href={brand.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
                      >
                        Officiële {brand.name} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
              <div>
                <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                  Onze werkwijze
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Adviesgesprek in drie stappen
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  Elk gesprek volgt ons kwaliteitsprotocol. We geven u helder advies en concrete vervolgstappen.
                </p>
                <Link
                  href="/werkwijze"
                  className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.primaryText} ${colors.primaryHover}`}
                >
                  Meer over onze werkwijze
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {howItWorksSteps.map((step, index) => (
                  <div key={step.title} className="rounded-2xl bg-slate-50 p-6 shadow-sm">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.primaryBg} text-base font-semibold text-white`}>
                      {index + 1}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur">
              <h2 className="text-2xl font-semibold sm:text-3xl">Veelgestelde vragen</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {faqItems.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-white/20 bg-white/10 p-6">
                    <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                    <p className={`mt-3 text-sm ${colors.badgeText}`}>{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className={`mt-6 text-xs ${colors.badgeText}`}>
                Meer vragen? Bekijk de{' '}
                <Link href="/veelgestelde-vragen" className="underline">
                  uitgebreide FAQ
                </Link>{' '}
                of stel uw vraag via het{' '}
                <Link href="/contact" className="underline">
                  contactformulier
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Belangrijk om te weten</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <AlertCircle className={`mt-0.5 h-5 w-5 ${colors.primaryText}`} aria-hidden />
                    Wij zijn geen energieleverancier. We geven onafhankelijk advies en verwijzen door naar officiële contactpunten.
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className={`mt-0.5 h-5 w-5 ${colors.primaryText}`} aria-hidden />
                    Uw gegevens gebruiken we alleen voor het adviesgesprek. Meer in onze{' '}
                    <Link href="/privacy" className="underline">
                      privacyverklaring
                    </Link>
                    .
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className={`mt-0.5 h-5 w-5 ${colors.primaryText}`} aria-hidden />
                    Bij een overstap ontvangen wij soms een vergoeding van de leverancier. Dit melden we altijd vooraf.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">Officiële contactpunten</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Direct contact met uw leverancier? Gebruik onderstaande links:
                </p>
                <ul className={`mt-4 space-y-2 text-sm ${colors.primaryText}`}>
                  <li>
                    <Link href="https://www.essent.nl/service/contact" target="_blank" className={`${colors.primaryText}`}>
                      Essent officieel contact
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.eneco.nl/service-en-contact/" target="_blank" className={`${colors.primaryText}`}>
                      Eneco officieel contact
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.vattenfall.nl/klantenservice/" target="_blank" className={`${colors.primaryText}`}>
                      Vattenfall officieel contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/providers/overview" className={`${colors.primaryText}`}>
                      Overzicht overige leveranciers
                    </Link>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  AdviesNeutraal is onafhankelijk en heeft geen contractuele relatie met energieleveranciers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Direct persoonlijk advies over uw energie?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Bel ons voor onafhankelijk advies. U krijgt direct een adviseur aan de lijn die met u meekijkt en waar nodig doorverwijst.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                onClick={trackConversion}
                className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}
              >
                📞 Bel voor advies
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Belkosten: standaardtarief van uw telecomprovider voor Nederlands nummer.
            </p>
            <p className="text-xs text-slate-500">
              Buiten openingstijden? Bericht achterlaten via{' '}
              <Link href="/contact" className="underline">
                contactformulier
              </Link>
              . We bellen u terug.
            </p>
          </div>
        </section>

        <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
          <a
            href={`tel:${PHONE_NUMBER_TEL}`}
            onClick={trackConversion}
            className={`flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-4 py-3 text-base font-semibold text-white shadow-lg transition ${colors.primaryHover}`}
          >
            📞 Bel nu: {DISPLAY_PHONE_NUMBER}
          </a>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const baseUrl = getBaseUrlFromReq(ctx.req)
  const homepage = await loadHomepageContent(baseUrl)
  return {
    props: {
      brandColor: homepage?.brandColor || getDomainConfig().brandColor || 'blue'
    }
  }
}
