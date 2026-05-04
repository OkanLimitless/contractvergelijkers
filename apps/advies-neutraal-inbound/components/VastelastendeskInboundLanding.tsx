import Head from 'next/head'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '@cv/ui'

export type ProviderLandingConfig = {
  name: string
  slug: string
  officialUrl: string
  commonQuestions: string[]
}

export const providerLandingConfigs: Record<string, ProviderLandingConfig> = {
  eneco: {
    name: 'Eneco',
    slug: 'eneco',
    officialUrl: 'https://www.eneco.nl/service-en-contact/',
    commonQuestions: [
      'Eneco klantenservice bellen',
      'Eneco termijnbedrag of voorschot',
      'Eneco jaarafrekening controleren',
      'Eneco contract verlengen of overstappen',
    ],
  },
  essent: {
    name: 'Essent',
    slug: 'essent',
    officialUrl: 'https://www.essent.nl/service/contact',
    commonQuestions: [
      'Essent klantenservice bellen',
      'Essent termijnbedrag of voorschot',
      'Essent jaarafrekening controleren',
      'Essent contract verlengen of overstappen',
    ],
  },
  vattenfall: {
    name: 'Vattenfall',
    slug: 'vattenfall',
    officialUrl: 'https://www.vattenfall.nl/klantenservice/',
    commonQuestions: [
      'Vattenfall klantenservice bellen',
      'Vattenfall termijnbedrag of voorschot',
      'Vattenfall jaarafrekening controleren',
      'Vattenfall contract verlengen of overstappen',
    ],
  },
  'budget-energie': {
    name: 'Budget Energie',
    slug: 'budget-energie',
    officialUrl: 'https://www.budgetthuis.nl/budget-energie/klantenservice',
    commonQuestions: [
      'Budget Energie klantenservice bellen',
      'Budget Energie termijnbedrag of voorschot',
      'Budget Energie jaarafrekening controleren',
      'Budget Energie contract verlengen of overstappen',
    ],
  },
  greenchoice: {
    name: 'Greenchoice',
    slug: 'greenchoice',
    officialUrl: 'https://www.greenchoice.nl/klantenservice/',
    commonQuestions: [
      'Greenchoice klantenservice bellen',
      'Greenchoice termijnbedrag of voorschot',
      'Greenchoice jaarafrekening controleren',
      'Greenchoice contract verlengen of overstappen',
    ],
  },
  vandebron: {
    name: 'Vandebron',
    slug: 'vandebron',
    officialUrl: 'https://vandebron.nl/service',
    commonQuestions: [
      'Vandebron klantenservice bellen',
      'Vandebron termijnbedrag of voorschot',
      'Vandebron jaarafrekening controleren',
      'Vandebron contract verlengen of overstappen',
    ],
  },
  engie: {
    name: 'ENGIE',
    slug: 'engie',
    officialUrl: 'https://www.engie.nl/klantenservice',
    commonQuestions: [
      'ENGIE klantenservice bellen',
      'ENGIE termijnbedrag of voorschot',
      'ENGIE jaarafrekening controleren',
      'ENGIE contract verlengen of overstappen',
    ],
  },
  oxxio: {
    name: 'Oxxio',
    slug: 'oxxio',
    officialUrl: 'https://www.oxxio.nl/klantenservice/',
    commonQuestions: [
      'Oxxio klantenservice bellen',
      'Oxxio termijnbedrag of voorschot',
      'Oxxio jaarafrekening controleren',
      'Oxxio contract verlengen of overstappen',
    ],
  },
  energiedirect: {
    name: 'Energiedirect',
    slug: 'energiedirect',
    officialUrl: 'https://www.energiedirect.nl/klantenservice',
    commonQuestions: [
      'Energiedirect klantenservice bellen',
      'Energiedirect termijnbedrag of voorschot',
      'Energiedirect jaarafrekening controleren',
      'Energiedirect contract verlengen of overstappen',
    ],
  },
}

const genericSupportTopics = [
  'Vraag over termijnbedrag, jaarafrekening of voorschot',
  'Hulp bij contract, verlenging of tariefwijziging',
  'Uitleg over overstappen zonder onnodig uitzoekwerk',
  'Doorverwijzing naar het juiste officiele kanaal wanneer nodig',
]

const proofItems = [
  {
    title: 'Direct telefonisch contact',
    text: 'Geen lange uitleg vooraf. Bel en leg uw energievraag meteen voor aan een medewerker.',
    icon: Headphones,
  },
  {
    title: 'Helder energieadvies',
    text: 'We kijken mee naar contract, verbruik en tarieven en leggen in normale taal uit wat verstandig is.',
    icon: ShieldCheck,
  },
  {
    title: 'Passende vervolgstap',
    text: 'U krijgt een concreet advies, of we wijzen u naar de juiste klantenservice van uw leverancier.',
    icon: ArrowRight,
  },
]

type VastelastendeskInboundLandingProps = {
  provider?: ProviderLandingConfig
}

export default function VastelastendeskInboundLanding({ provider }: VastelastendeskInboundLandingProps) {
  const isProviderPage = Boolean(provider)
  const pageTitle = provider
    ? `${provider.name} Klantenservice Hulp | Vastelastendesk`
    : 'Vastelastendesk Klantenservice Hulp | Bel Direct'
  const metaDescription = provider
    ? `Hulp bij vragen over ${provider.name}, energiecontracten, voorschotten, jaarafrekeningen en overstappen. Bel Vastelastendesk voor onafhankelijk energieadvies.`
    : 'Bel Vastelastendesk voor hulp met energie, contracten, tarieven, voorschotten en klantenservicevragen. Direct telefonisch energieadvies.'
  const heroTitle = provider
    ? `Hulp bij vragen over uw ${provider.name} energiecontract`
    : 'Vastelastendesk klantenservice hulp'
  const heroIntro = provider
    ? `Vragen over uw ${provider.name} termijnbedrag, jaarafrekening, contractverlenging of overstap? Bel direct en spreek iemand die met u meekijkt.`
    : 'Vragen over uw energieleverancier, voorschot, contract of overstap? Bel direct en spreek iemand die met u meekijkt.'
  const supportTopics = provider
    ? [
        `Vraag over uw ${provider.name} termijnbedrag, jaarafrekening of voorschot`,
        `Hulp bij uw ${provider.name} contract, verlenging of tariefwijziging`,
        `Vergelijken of blijven bij ${provider.name} verstandig is`,
        `Doorverwijzing naar de officiele ${provider.name} klantenservice wanneer nodig`,
      ]
    : genericSupportTopics
  const serviceTitle = provider ? `${provider.name} energiehulp` : 'Telefonische hulp bij energiezaken'
  const clarityTitle = provider
    ? `Snel duidelijkheid over ${provider.name} en uw energiecontract`
    : 'Snel duidelijkheid bij energie en klantenservicevragen'
  const disclaimer = provider
    ? `Vastelastendesk is een onafhankelijke advieslijn. We zijn niet de officiele klantenservice van ${provider.name}.`
    : 'Vastelastendesk is een onafhankelijke advieslijn. We zijn niet de officiele klantenservice van een energieleverancier.'
  const finalText = provider
    ? `Bel Vastelastendesk voor telefonisch energieadvies over ${provider.name}. Wij helpen u begrijpen wat er speelt en welke vervolgstap logisch is.`
    : 'Bel Vastelastendesk voor telefonisch energieadvies. Wij helpen u begrijpen wat er speelt en welke vervolgstap logisch is.'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-[#f5f8f4] text-slate-950">
        <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[#113e35] text-white">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1800&q=80"
            alt="Servicebalie waar een medewerker een klant helpt"
            className="absolute inset-0 h-full w-full object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,62,53,0.96)_0%,rgba(17,62,53,0.78)_48%,rgba(17,62,53,0.26)_100%)]" />

          <header className="relative z-10 border-b border-white/15">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
              <Link href="/" className="flex items-center gap-3" aria-label="Vastelastendesk home">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d9f36f] text-[#113e35]">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-xl font-semibold">Vastelastendesk</span>
              </Link>
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#113e35] transition hover:bg-[#d9f36f] sm:inline-flex"
              >
                Bel {DISPLAY_PHONE_NUMBER}
              </a>
            </div>
          </header>

          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-28 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="hero-rise max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-lg bg-white/12 px-3 py-2 text-sm font-semibold text-[#eaffb0] ring-1 ring-white/20">
                <Clock3 className="h-4 w-4" aria-hidden />
                {serviceTitle}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-7 text-white/88 sm:text-xl">
                {heroIntro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#d9f36f] px-6 py-4 text-lg font-bold text-[#113e35] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Bel nu {DISPLAY_PHONE_NUMBER}
                </a>
                <span className="text-sm font-medium text-white/72">Bellen tegen normaal tarief</span>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-sm text-white/82">
                <span className="rounded-lg border border-white/18 bg-white/10 px-3 py-2">Ma-vr bereikbaar</span>
                <span className="rounded-lg border border-white/18 bg-white/10 px-3 py-2">Geen verplichting</span>
                <span className="rounded-lg border border-white/18 bg-white/10 px-3 py-2">Heldere uitleg</span>
              </div>
            </div>

            <div className="hero-rise-delayed rounded-lg border border-white/16 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-white/12 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase text-[#eaffb0]">Nu aan de lijn</p>
                  <h2 className="mt-1 text-2xl font-semibold">Service medewerker energie</h2>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9f36f] text-[#113e35]">
                  <Headphones className="h-6 w-6" aria-hidden />
                </span>
              </div>
              <ul className="mt-5 space-y-4">
                {supportTopics.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/86">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#d9f36f]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-[#082720]/70 p-4 text-sm leading-6 text-white/78">
                <strong className="text-white">Belangrijk:</strong> {disclaimer}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-[#477565]">Waarmee kunnen we helpen?</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {clarityTitle}
              </h2>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {proofItems.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-[#f8fbf6] p-5">
                  <item.icon className="h-6 w-6 text-[#477565]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {isProviderPage && provider && (
          <section className="bg-white">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase text-[#477565]">Relevante zoekvragen</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                  Veelgestelde {provider.name} vragen
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Deze pagina is bedoeld voor mensen die hulp zoeken bij een concrete vraag over
                  {` ${provider.name}`}. Voor dossierbehandeling of accountwijzigingen blijft de officiele
                  klantenservice van de leverancier de juiste plek.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {provider.commonQuestions.map((question) => (
                  <div key={question} className="rounded-lg border border-slate-200 bg-[#f8fbf6] p-4">
                    <CheckCircle2 className="h-5 w-5 text-[#477565]" aria-hidden />
                    <h3 className="mt-3 text-base font-semibold text-slate-950">{question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Bel voor uitleg, controle of een onafhankelijke vergelijking van uw opties.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {!isProviderPage && (
          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
              <div className="border-t border-slate-200 pt-12">
                <p className="text-sm font-semibold uppercase text-[#477565]">Leverancier-specifieke hulp</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                  Kies uw energieleverancier
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.values(providerLandingConfigs).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/klantenservice/${item.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-slate-200 bg-[#f8fbf6] px-4 py-4 text-base font-semibold text-slate-950 transition hover:border-[#477565] hover:bg-white"
                    >
                      {item.name} klantenservice hulp
                      <ArrowRight className="h-4 w-4 text-[#477565] transition group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#eef5ec]">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-[#477565]">Hoe het gesprek loopt</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">Zo voelt het gesprek</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {['U legt uw vraag uit', 'We kijken met u mee', 'U krijgt een duidelijke route'].map((step, index) => (
                <div key={step} className="rounded-lg bg-white p-5 shadow-sm">
                  <span className="text-sm font-semibold text-[#477565]">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {index === 0
                      ? 'Vertel kort waar u tegenaan loopt: voorschot, jaarafrekening, contract of overstap.'
                      : index === 1
                        ? `Een medewerker bespreekt uw ${provider ? provider.name : 'energie'} vraag en controleert wat logisch is in uw situatie.`
                        : 'U krijgt uitleg, onafhankelijk advies of de juiste officiele route voor uw situatie.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-28 sm:pb-0">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-lg bg-amber-50 p-3 text-amber-700">
                <AlertCircle className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="text-3xl font-semibold text-slate-950">Wilt u nu iemand spreken?</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {finalText}
              </p>
              {provider && (
                <a
                  href={provider.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-[#477565] underline underline-offset-4"
                >
                  Naar de officiele {provider.name} klantenservice
                </a>
              )}
            </div>
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#113e35] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#477565]"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {DISPLAY_PHONE_NUMBER}
            </a>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-12px_40px_rgba(15,23,42,0.15)] backdrop-blur sm:hidden">
          <a
            href={`tel:${PHONE_NUMBER_TEL}`}
            className="flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#113e35] px-5 py-4 text-base font-bold text-white"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Bel direct {DISPLAY_PHONE_NUMBER}
          </a>
        </div>
      </main>

      <style jsx global>{`
        .hero-rise {
          animation: heroRise 560ms ease-out both;
        }

        .hero-rise-delayed {
          animation: heroRise 700ms ease-out 110ms both;
        }

        @keyframes heroRise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-rise,
          .hero-rise-delayed {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}
