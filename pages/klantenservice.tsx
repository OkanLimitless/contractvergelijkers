import { AlertCircle, ArrowRight, CheckCircle2, Clock, Headset, Phone, Shield, Sparkles } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'

declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

const highlightBadges = [
  { text: 'Gratis bellen', className: 'bg-emerald-100 text-emerald-700' },
  { text: 'Direct verbonden', className: 'bg-blue-100 text-blue-700' },
  { text: 'Geen wachtrij', className: 'bg-indigo-100 text-indigo-700' },
]

const trustCards = [
  {
    title: 'Onafhankelijk advies',
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
    title: 'Heldere vervolgstappen',
    description: 'U krijgt concrete aanbevelingen en eventueel een directe doorverwijzing naar de juiste leverancier.',
    icon: Shield,
    iconWrapperClass: 'bg-indigo-100 text-indigo-600',
  },
]

const serviceItems = [
  'Uitleg over contractvormen, tarieven en prijsplafonds',
  'Controle van termijnbedragen en eindafrekeningen',
  'Vergelijking van aanbiedingen en overstapbegeleiding',
  'Doorverwijzing naar officiële klantenservicekanalen',
  'Advies over verduurzaming zoals zonnepanelen of warmtepompen',
]

const brandSections = [
  {
    id: 'essent',
    name: 'Essent',
    title: 'Hulp met Essent klantenservice',
    description:
      'Vragen over uw Essent-contract, factuur of tarieven? Wij helpen u direct of verbinden u door naar de officiële klantenservice.',
    bullets: [
      'Uitleg over termijnbedragen en contractvoorwaarden',
      'Vergelijking met alternatieve leveranciers',
      'Direct doorschakelen naar officiële Essent indien nodig',
    ],
    officialUrl: 'https://www.essent.nl/service/contact',
  },
  {
    id: 'eneco',
    name: 'Eneco',
    title: 'Hulp met Eneco klantenservice',
    description:
      'Vragen over uw Eneco-contract, dynamische tarieven of Eneco Toon? Wij staan direct voor u klaar.',
    bullets: [
      'Uitleg over tarieven en contractopties',
      'Advies over slimme meters en laadpalen',
      'Doorverwijzing naar officiële Eneco service',
    ],
    officialUrl: 'https://www.eneco.nl/service-en-contact/',
  },
  {
    id: 'vattenfall',
    name: 'Vattenfall',
    title: 'Hulp met Vattenfall klantenservice',
    description:
      'Vragen over uw Vattenfall-contract of MijnVattenfall-account? Bel ons voor directe hulp.',
    bullets: [
      'Controle van prijsbescherming en acties',
      'Uitleg over termijnbedragen en facturen',
      'Doorschakeling naar officiële Vattenfall',
    ],
    officialUrl: 'https://www.vattenfall.nl/klantenservice/',
  },
]

const howItWorksSteps = [
  {
    title: 'U belt ons servicenummer',
    text: 'Een gecertificeerd adviseur luistert naar uw vraag en checkt direct de belangrijkste gegevens.',
  },
  {
    title: 'Wij analyseren uw situatie',
    text: 'We vergelijken contracten, tarieven en voorwaarden zodat u precies weet waar u aan toe bent.',
  },
  {
    title: 'Oplossing of doorverwijzing',
    text: 'We lossen het ter plekke op of geven de gegevens mee van de juiste officiële klantenservice.',
  },
]

const faqItems = [
  {
    question: 'Zijn jullie de officiële klantenservice van energieleveranciers?',
    answer:
      'Nee. AdviesNeutraal is een onafhankelijke advieslijn. We geven uitleg, beantwoorden vragen en verwijzen door naar de officiële kanalen van de leverancier wanneer dat nodig is.',
  },
  {
    question: 'Wat kost het bellen met AdviesNeutraal?',
    answer:
      'U betaalt alleen het normale tarief van uw telefoonprovider voor bellen naar een Nederlands servicenummer. Wij rekenen geen extra kosten voor het adviesgesprek.',
  },
  {
    question: 'Welke gegevens hebben jullie nodig?',
    answer:
      'Alleen de informatie die nodig is om uw vraag te beantwoorden, zoals uw verbruik, postcode of klantnummer. We bewaren gegevens niet langer dan noodzakelijk en werken volgens de AVG.',
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
        <title>Energie Klantenservice Hulp | Direct Adviseur Bereikbaar</title>
        <meta
          name="description"
          content="Hulp nodig met uw energieleverancier? Direct een adviseur aan de lijn. Wij helpen met vragen over contracten, tarieven en overstappen of verbinden u door naar de officiële klantenservice."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17637611913" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17637611913');
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17637611913/8TUBCOCwsbIbEImzotpB',
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

      <div className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsla(0,0%,100%,0.18),_transparent_40%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 md:py-20 lg:flex-row lg:items-center">
            <div className="lg:w-3/5">
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Hulp nodig met uw energie klantenservice?
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white sm:text-xl">
                Direct een adviseur aan de lijn voor vragen over uw energiecontract, tarieven of overstap.
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-lg font-bold text-blue-700 shadow-xl transition hover:bg-blue-50 hover:scale-105"
                >
                  📞 Bel Direct: {DISPLAY_PHONE_NUMBER}
                </a>
              </div>
              <p className="mt-4 text-sm text-blue-100">
                Ma-vr 08:00 - 20:00, za-zo 10:00 - 16:00 | Gratis adviesgesprek
              </p>
              <div className="mt-6 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-xs text-blue-100 backdrop-blur">
                Onafhankelijk advies • Geen officiële leverancier
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="rounded-2xl bg-white/10 p-6 text-white shadow-xl backdrop-blur">
                <h2 className="text-lg font-semibold">Waarmee wij dagelijks helpen</h2>
                <ul className="mt-4 space-y-3 text-sm text-blue-100">
                  {serviceItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-5 w-5 text-emerald-300" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-white/15 px-4 py-3 text-xs text-blue-100">
                  <strong>Let op:</strong> wij behandelen geen klachten namens leveranciers, maar leggen u wel uit
                  hoe u dit het beste kunt aanpakken en waar u moet zijn.
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
                Direct hulp bij uw energieleverancier
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Onafhankelijke adviseurs klaar om u te helpen. Wij verbinden u indien nodig direct door naar de officiële klantenservice.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {brandSections.map((brand) => (
                <div key={brand.id} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">{brand.title}</h3>
                  <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 w-fit">
                    Onafhankelijk advies
                  </span>
                  <p className="mt-4 text-sm text-slate-600">{brand.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    {brand.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 text-blue-600" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-col gap-3">
                      <a
                        href={`tel:${PHONE_NUMBER_TEL}`}
                        onClick={trackConversion}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-base font-bold text-white shadow-sm transition hover:bg-blue-700"
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
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Hoe wij werken
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Een adviesgesprek in drie duidelijke stappen
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  Elk gesprek volgt ons kwaliteitsprotocol. We noteren de belangrijkste bevindingen zodat u
                  exact weet wat de vervolgstappen zijn.
                </p>
                <Link
                  href="/werkwijze"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Naar onze volledige werkwijze
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {howItWorksSteps.map((step, index) => (
                  <div key={step.title} className="rounded-2xl bg-slate-50 p-6 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-base font-semibold text-white">
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
                    <p className="mt-3 text-sm text-blue-100">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-blue-200">
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
                    <AlertCircle className="mt-0.5 h-5 w-5 text-blue-600" aria-hidden />
                    Wij behandelen geen klachten of dossiers namens leveranciers, maar leggen wel uit hoe u een klacht officieel indient.
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-5 w-5 text-blue-600" aria-hidden />
                    Uw gegevens gebruiken we alleen voor het adviesgesprek. Meer informatie leest u in onze{' '}
                    <Link href="/privacy" className="underline">
                      privacyverklaring
                    </Link>
                    .
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-5 w-5 text-blue-600" aria-hidden />
                    Kiest u voor een overstap? Dan ontvangen wij soms een provisie van een leverancier. Dit vermelden we altijd vooraf.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">Officiële contactkanalen</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Direct contact opnemen met uw leverancier? Gebruik onderstaande links:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-blue-600">
                  <li>
                    <Link href="https://www.essent.nl/service/contact" target="_blank" className="hover:text-blue-700">
                      Essent klantenservice
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.eneco.nl/service-en-contact/" target="_blank" className="hover:text-blue-700">
                      Eneco service & contact
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.vattenfall.nl/klantenservice/" target="_blank" className="hover:text-blue-700">
                      Vattenfall klantenservice
                    </Link>
                  </li>
                  <li>
                    <Link href="/providers/overview" className="hover:text-blue-700">
                      Overzicht overige leveranciers
                    </Link>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  AdviesNeutraal heeft geen contractuele relatie met deze leveranciers en werkt volledig onafhankelijk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Direct iemand spreken over uw energie?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Bel ons voor onafhankelijk advies. U krijgt direct een medewerker aan de lijn die met u meekijkt en waar nodig de officiële contactkanalen van uw leverancier doorgeeft.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                onClick={trackConversion}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                📞 Bel klantenservice
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Belkosten: u betaalt het standaardtarief van uw telecomaanbieder voor bellen naar een Nederlands servicenummer.
            </p>
            <p className="text-xs text-slate-500">
              Buiten openingstijden kunt u een bericht achterlaten via ons{' '}
              <Link href="/contact" className="underline">
                contactformulier
              </Link>
              . We bellen u dan terug.
            </p>
          </div>
        </section>

        <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
          <a
            href={`tel:${PHONE_NUMBER_TEL}`}
            onClick={trackConversion}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            📞 Bel nu: {DISPLAY_PHONE_NUMBER}
          </a>
        </div>
      </div>
    </>
  )
}
