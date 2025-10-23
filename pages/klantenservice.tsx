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
    name: 'Essent klantenservice',
    description:
      'Hulp nodig met Essent? Wij lopen samen met u de nota\'s en tarieven door en geven aan of overstappen slim is.',
    bullets: [
      'Controle van termijnbedragen en contractduur',
      'Actuele Essent-acties versus alternatieven',
      'Doorverwijzing naar officiële storingslijn indien nodig',
    ],
    officialUrl: 'https://www.essent.nl/service/contact',
  },
  {
    id: 'eneco',
    name: 'Eneco klantenservice',
    description:
      'Onze adviseurs leggen Eneco-contracten helder uit en bespreken welke opties het beste aansluiten op uw verbruik.',
    bullets: [
      'Actuele tarieven en dynamische contracten vergelijken',
      'Advies over Eneco Toon, zonnepanelen en laadoplossingen',
      'Doorverwijzing naar Eneco-servicekanalen bij wijzigingen',
    ],
    officialUrl: 'https://www.eneco.nl/service-en-contact/',
  },
  {
    id: 'vattenfall',
    name: 'Vattenfall klantenservice',
    description:
      'Wilt u iemand spreken over uw Vattenfall-contract? Wij bereiden samen het gesprek voor of verbinden u door.',
    bullets: [
      'Controleren van prijsbescherming en eventuele acties',
      'Uitleg over het MijnVattenfall-portaal en termijnbedragen',
      'Doorverwijzing naar juiste Vattenfall-afdeling wanneer nodig',
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
        <title>Klantenservice | AdviesNeutraal Advieslijn</title>
        <meta
          name="description"
          content="Bel AdviesNeutraal voor onafhankelijk energieadvies bij vragen over contracten, leveranciers en overstappen. Direct geholpen zonder wachtrijen."
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
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-100">
                <Headset className="h-4 w-4" aria-hidden />
                Energieadviseur aan de lijn
              </span>
              <h1 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Klantenservice energie? Bel direct met AdviesNeutraal
              </h1>
              <p className="mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
                Onze onafhankelijke adviseurs staan klaar voor vragen over uw energieleverancier, contract
                of overstap. Wanneer nodig verwijzen we door naar het juiste officiële kanaal.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  onClick={trackConversion}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-blue-700 shadow-lg transition hover:bg-blue-100"
                >
                  📞 Bel nu: {DISPLAY_PHONE_NUMBER}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-5 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Vraag terugbelverzoek aan
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <p className="mt-4 text-xs text-blue-100">
                Openingstijden: ma-vr 08:00 - 20:00, za-zo 10:00 - 16:00. U betaalt alleen uw reguliere beltarief.
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

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Populaire leveranciers
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Onafhankelijke uitleg per leverancier
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Wij beantwoorden uw vraag zo ver als mogelijk. Moet u toch officieel contact opnemen? Dan ontvangt u direct de juiste gegevens.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {brandSections.map((brand) => (
                <div key={brand.id} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{brand.name}</h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      Onafhankelijk
                    </span>
                  </div>
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
                      <button
                        onClick={trackConversion}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                      >
                        <Phone className="h-4 w-4" aria-hidden />
                        Bel onze adviseurs
                      </button>
                      <Link
                        href={brand.officialUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-600 hover:text-blue-700"
                      >
                        Officieel contactkanaal
                        <ArrowRight className="h-4 w-4" aria-hidden />
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
              Bel ons voor onafhankelijk advies of plan via de contactpagina een terugbelverzoek. We reageren altijd binnen één werkdag.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                onClick={trackConversion}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                📞 Bel klantenservice
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Stel uw vraag online
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              Belkosten: u betaalt het standaardtarief van uw telecomaanbieder voor bellen naar een Nederlands servicenummer.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
