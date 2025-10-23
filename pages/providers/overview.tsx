import { ArrowRight, ExternalLink, Phone } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../../components/SiteLayout'

const providers = [
  {
    name: 'Essent',
    slug: 'essent',
    summary: 'Grote landelijke leverancier met vaste, variabele en dynamische contracten.',
    officialUrl: 'https://www.essent.nl/service/contact',
  },
  {
    name: 'Eneco',
    slug: 'eneco',
    summary: 'Bekend van Toon en breed verduurzamingsaanbod voor consumenten en bedrijven.',
    officialUrl: 'https://www.eneco.nl/service-en-contact/',
  },
  {
    name: 'Vattenfall',
    slug: 'vattenfall',
    summary: 'Actief in heel Nederland met focus op groene stroom en hybride oplossingen.',
    officialUrl: 'https://www.vattenfall.nl/klantenservice/',
  },
  {
    name: 'Greenchoice',
    slug: 'greenchoice',
    summary: 'Groene leverancier met veel opties voor zonnepanelen en duurzame initiatieven.',
    officialUrl: 'https://www.greenchoice.nl/klantenservice/',
  },
  {
    name: 'Budget Energie',
    slug: 'budget-energie',
    summary: 'Prijsvechter met dynamische contracten en combinatievoordeel met telecom.',
    officialUrl: 'https://www.budgetthuis.nl/budget-energie/klantenservice',
  },
  {
    name: 'Vandebron',
    slug: 'vandebron',
    summary: 'Aanbieder van lokale energie met focus op flexibiliteit en dynamische tarieven.',
    officialUrl: 'https://vandebron.nl/service',
  },
]

export default function ProviderOverview() {
  return (
    <>
      <Head>
        <title>Overzicht energieleveranciers | AdviesNeutraal</title>
        <meta
          name="description"
          content="Bekijk het overzicht van energieleveranciers waarover wij advies geven. Lees onze samenvatting per leverancier en vind de officiele contactgegevens."
        />
      </Head>

      <div className="flex-1">
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Overzicht energieleveranciers
            </h1>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              AdviesNeutraal geeft onafhankelijk advies over meerdere leveranciers. Hieronder vindt u onze
              samenvatting en directe verwijzingen naar de officiele klantenservice per aanbieder.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {providers.map((provider) => (
                <div key={provider.slug} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900">{provider.name}</h2>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      Onafhankelijk
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm text-slate-600">{provider.summary}</p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href={`/providers/${provider.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                      Bekijk onze uitleg
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <a
                      href={provider.officialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-600 hover:text-blue-700"
                    >
                      Officiele klantenservice
                      <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Hulp nodig bij het kiezen van een leverancier?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Bel onze energieadviseurs voor een onafhankelijke vergelijking of plan een adviesgesprek op
              een moment dat het u uitkomt.
            </p>
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Bel klantenservice
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
