import { BookOpen, HelpCircle, Lightbulb, PhoneCall, Shield, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'

type FaqEntry = {
  question: string
  answer: string
}

type FaqCategory = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  entries: FaqEntry[]
}

const faqCategories: FaqCategory[] = [
  {
    id: 'algemeen',
    icon: HelpCircle,
    title: 'Algemene vragen',
    description: 'Veelgestelde vragen over AdviesNeutraal en onze dienstverlening.',
    entries: [
      {
        question: 'Wat doet AdviesNeutraal precies?',
        answer:
          'Wij zijn een onafhankelijk energie-adviesplatform. Onze adviseurs beantwoorden vragen over contracten, tarieven, leveranciers en verduurzaming. We zijn geen energieleverancier en behandelen geen klantdossiers namens leveranciers.',
      },
      {
        question: 'Moet ik betalen voor jullie advies?',
        answer:
          'Telefonisch advies is gratis voor consumenten en kleinzakelijke klanten. U betaalt alleen uw eigen beltarief. Voor uitgebreide adviestrajecten of rapportages maken we vooraf een vaste prijsafspraak.',
      },
      {
        question: 'Werken jullie samen met energieleveranciers?',
        answer:
          'We vergelijken alle leveranciers objectief. Bij sommige overstappen ontvangen we een vergoeding van de geselecteerde leverancier. Dit vertellen we altijd vooraf en het heeft geen invloed op ons advies.',
      },
    ],
  },
  {
    id: 'contracten',
    icon: Zap,
    title: 'Contracten & tarieven',
    description: 'Alles over vaste, variabele en dynamische contracten en hoe wij vergelijken.',
    entries: [
      {
        question: 'Welke contractvorm past het beste bij mij?',
        answer:
          'Dat hangt af van uw verbruik, risicobereidheid en plannen op korte termijn. We leggen tijdens het gesprek uit wat de impact is van vaste, variabele en dynamische contracten en rekenen scenario\'s voor u door.',
      },
      {
        question: 'Hoeveel kan ik besparen door over te stappen?',
        answer:
          'De besparing verschilt per huishouden. Tijdens de contractscan vergelijken we uw huidige tarieven met actuele aanbiedingen en laten we zien wat de netto impact op jaarbasis is. Zo maakt u een onderbouwde keuze.',
      },
      {
        question: 'Helpen jullie ook met dynamische energiecontracten?',
        answer:
          'Zeker. We leggen uit hoe uurprijzen werken, welke risico\'s u loopt en wat u nodig heeft qua slimme meters of apps. Ook vergelijken we aanbieders van dynamische contracten.',
      },
    ],
  },
  {
    id: 'overstappen',
    icon: Shield,
    title: 'Overstappen & leveranciers',
    description: 'Wat er komt kijken bij overstappen en hoe wij contact leggen met leveranciers.',
    entries: [
      {
        question: 'Regelen jullie de overstap voor mij?',
        answer:
          'Wij begeleiden de overstap en dienen op verzoek namens u de aanvraag in. U geeft zelf akkoord en wij zorgen dat u de bevestigingen ontvangt. Tijdens de bedenktijd blijven we beschikbaar voor vragen.',
      },
      {
        question: 'Wat als ik een klacht heb over mijn leverancier?',
        answer:
          'Wij zijn geen klachtenloket, maar we leggen wel uit welke stappen u kunt nemen en bij welke afdeling u moet zijn. Indien nodig verwijzen we door naar de juiste geschillencommissie of ACM ConsuWijzer.',
      },
      {
        question: 'Kan ik mijn contract opzeggen als ik ga verhuizen?',
        answer:
          'Ja. Bij een verhuizing mag u het contract meestal kosteloos beëindigen. We lopen samen de voorwaarden door en helpen u met het melden bij de leverancier of netbeheerder.',
      },
    ],
  },
  {
    id: 'verduurzaming',
    icon: Lightbulb,
    title: 'Verduurzaming & subsidies',
    description: 'Veelgestelde vragen over zonnepanelen, warmtepompen en subsidies.',
    entries: [
      {
        question: 'Geven jullie ook advies over zonnepanelen of warmtepompen?',
        answer:
          'Ja, we brengen de technische én financiële kant in kaart. We bespreken opbrengsten, subsidies, vergunningen en introduceren u desgewenst bij gecertificeerde installateurs.',
      },
      {
        question: 'Welke subsidies zijn er voor verduurzaming?',
        answer:
          'We volgen de ISDE, SEEH en overige lokale subsidies op de voet. Tijdens het gesprek krijgt u een overzicht van relevante regelingen en hoe u deze aanvraagt.',
      },
      {
        question: 'Helpen jullie bedrijven met de energiebesparingsplicht?',
        answer:
          'Voor mkb en VvE\'s controleren we welke maatregelen verplicht zijn, hoe u aan de informatieplicht voldoet en welke oplossingen het beste passen binnen uw budget.',
      },
    ],
  },
]

export default function VeelGevraagdeVragen() {
  return (
    <>
      <Head>
        <title>Veelgestelde vragen | AdviesNeutraal</title>
        <meta
          name="description"
          content="Antwoorden op veelgestelde vragen over energieadvies, overstappen, contracten en verduurzamen. Onafhankelijk advies door AdviesNeutraal."
        />
      </Head>

      <div className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-100">
                FAQ AdviesNeutraal
              </span>
              <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Antwoorden op uw energievragen
              </h1>
              <p className="mt-4 text-base text-blue-100 sm:text-lg">
                Heeft u een vraag over energiecontracten, leveranciers of verduurzaming? Hieronder vindt u
                onze meest gestelde vragen. Staat uw vraag er niet tussen? Bel ons gerust.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-blue-100"
                >
                  📞 Bel direct: {DISPLAY_PHONE_NUMBER}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Stel uw vraag online
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Hoe gebruikt u deze FAQ?
                </h2>
                <p className="mt-4 text-sm text-slate-600">
                  Klik op een categorie om de bijbehorende vragen en antwoorden te lezen. Liever persoonlijk
                  contact? Bel ons servicenummer of plan een terugbelverzoek via de contactpagina.
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                  <BookOpen className="mb-3 h-6 w-6 text-blue-600" aria-hidden />
                  <p>
                    Tip: gebruik de zoekfunctie van uw browser (<kbd>Ctrl</kbd> / <kbd>Cmd</kbd> +{' '}
                    <kbd>F</kbd>) om snel bepaalde trefwoorden te vinden, zoals &quot;dynamisch&quot;,
                    &quot;bedenktijd&quot; of &quot;zonnepanelen&quot;.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                {faqCategories.map((category) => (
                  <section key={category.id} id={category.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                        <category.icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                        <p className="text-sm text-slate-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {category.entries.map((entry) => (
                        <details key={entry.question} className="group rounded-xl border border-slate-200 bg-white p-4">
                          <summary className="cursor-pointer text-sm font-semibold text-slate-900 transition group-open:text-blue-600">
                            {entry.question}
                          </summary>
                          <p className="mt-3 text-sm text-slate-600">{entry.answer}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">Nog vragen over uw situatie?</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Geen enkele energiesituatie is hetzelfde. Heeft u specifieke vragen of twijfels? We kijken
                  graag met u mee zodat u zeker weet dat u de juiste beslissing neemt.
                </p>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p>
                    <strong>Direct bellen:</strong>{' '}
                    <a href={`tel:${PHONE_NUMBER_TEL}`} className="text-blue-600 hover:text-blue-700">
                      {DISPLAY_PHONE_NUMBER}
                    </a>
                  </p>
                  <p>
                    <strong>Stuur een e-mail:</strong>{' '}
                    <a href="mailto:info@adviesneutraal.nl" className="text-blue-600 hover:text-blue-700">
                      info@adviesneutraal.nl
                    </a>
                  </p>
                  <p>
                    <strong>Openingstijden:</strong> ma-vr 08:00 - 20:00 | za-zo 10:00 - 16:00
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">Handige pagina&apos;s</h3>
                <ul className="mt-4 space-y-3 text-sm text-blue-600">
                  <li>
                    <Link href="/diensten" className="hover:text-blue-700">
                      Onze diensten
                    </Link>
                  </li>
                  <li>
                    <Link href="/werkwijze" className="hover:text-blue-700">
                      Werkwijze
                    </Link>
                  </li>
                  <li>
                    <Link href="/klantenservice" className="hover:text-blue-700">
                      Klantenservice
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-blue-700">
                      Privacy & gegevensverwerking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Persoonlijk antwoord nodig?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Bel onze energieadviseurs of stuur uw vraag via het contactformulier. We reageren altijd binnen
              één werkdag met een duidelijk antwoord.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <PhoneCall className="h-5 w-5" aria-hidden />
                Bel klantenservice
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Stuur een bericht
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
