import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  Compass,
  FileBarChart,
  FileCheck,
  FolderLock,
  Handshake,
  Layers,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'

const phases = [
  {
    title: '1. Inventarisatiegesprek',
    description:
      'Tijdens het telefoongesprek brengen we uw huidige situatie in kaart: leverancier, contractvorm, verbruik en eventuele bijzonderheden zoals zonnepanelen of zakelijke locaties.',
    bullets: [
      'Controle van contractgegevens en einddatum',
      'Inzicht in termijnbedragen, voorschotten en teruglevering',
      'Uw wensen en risicobereidheid (vast, variabel, dynamisch)',
    ],
    icon: Compass,
  },
  {
    title: '2. Analyse & vergelijking',
    description:
      'We gebruiken actuele tariefdatabases, openbare bronnen en onze partnernetwerken om scenario\'s door te rekenen die aansluiten op uw situatie en voorkeuren.',
    bullets: [
      'Vergelijking van leveranciers en contractvormen',
      'Berekening van jaarkosten op basis van uw verbruik',
      'Controle van voorwaarden, bedenktijd en opzegtermijnen',
    ],
    icon: FileBarChart,
  },
  {
    title: '3. Advies & vervolgstappen',
    description:
      'U krijgt een helder advies over de beste opties. We bespreken de voordelen en risico\'s en geven een stappenplan mee voor uw gekozen route.',
    bullets: [
      'Toelichting in begrijpelijke taal, zonder jargon',
      'Handige checklist met wat u eventueel moet voorbereiden',
      'Doorverwijzing naar officiële klantenservice indien nodig',
    ],
    icon: Sparkles,
  },
  {
    title: '4. Nazorg & monitoring',
    description:
      'Ook na uw keuze blijven we beschikbaar voor vragen. We controleren of de bevestiging van de leverancier klopt en helpen bij het interpreteren van de eindafrekening.',
    bullets: [
      'Controle op juiste aansluit- en opzegdata',
      'Follow-up bij afwijkende facturen of tarieven',
      'Updates wanneer er relevante marktwijzigingen zijn',
    ],
    icon: Handshake,
  },
]

const qualityPoints = [
  {
    title: 'Transparantie',
    description:
      'We leggen altijd uit hoe we tot een advies komen en welke gegevens we hebben gebruikt. Eventuele vergoedingen van partners worden vooraf gemeld.',
    icon: ShieldCheck,
  },
  {
    title: 'Bronvermelding',
    description:
      'We werken uitsluitend met gecontroleerde bronnen zoals ACM, Rijksoverheid, prijsvergelijkers en officiële documenten van leveranciers.',
    icon: Layers,
  },
  {
    title: 'Dataveiligheid',
    description:
      'Persoons- en contractgegevens worden alleen gebruikt voor het adviesgesprek. We bewaren niets langer dan noodzakelijk en beveiligen alle systemen met tweestapsverificatie.',
    icon: FolderLock,
  },
  {
    title: 'Kwaliteitscontrole',
    description:
      'Gesprekken worden steekproefsgewijs geëvalueerd door een senior adviseur. Zo houden we kennis op peil en verbeteren we continu onze werkwijze.',
    icon: ClipboardList,
  },
]

const timeline = [
  {
    phase: 'Dag 0',
    title: 'Intake & inventarisatie',
    detail: 'Direct tijdens het telefoongesprek verzamelen we de benodigde informatie en stemmen we verwachtingen af.',
  },
  {
    phase: 'Dag 0-1',
    title: 'Analyse & vergelijking',
    detail: 'We rekenen de verschillende scenario\'s door en toetsen de voorwaarden. Bij complexe cases plannen we een vervolggesprek.',
  },
  {
    phase: 'Dag 1-2',
    title: 'Adviesgesprek & samenvatting',
    detail: 'U ontvangt het advies mondeling en desgewenst schriftelijk. U beslist zelf welk scenario u kiest.',
  },
  {
    phase: 'Dag 2-14',
    title: 'Nazorg & controle',
    detail: 'We blijven beschikbaar voor vragen, controleren bevestigingen en begeleiden u tijdens de bedenktijd.',
  },
]

const documentationItems = [
  {
    title: 'Adviesrapport (optioneel)',
    description:
      'Een overzicht van de besproken scenario\'s, inclusief berekeningen, risico\'s en aanbevolen vervolgstappen. Handig voor interne besluitvorming.',
  },
  {
    title: 'Overzicht contractparameters',
    description:
      'Een compacte samenvatting van tarieven, looptijd, opzegvergoeding en actiedata om grip te houden op belangrijke deadlines.',
  },
  {
    title: 'Checklist overstap & nazorg',
    description:
      'Praktische checklist met wat u moet regelen voor, tijdens en na de overstap. Inclusief contactgegevens van relevante partijen.',
  },
]

export default function Werkwijze() {
  return (
    <>
      <Head>
        <title>Werkwijze | AdviesNeutraal energieadvies</title>
        <meta
          name="description"
          content="Lees hoe AdviesNeutraal te werk gaat: van inventarisatie en analyse tot persoonlijk advies, nazorg en kwaliteitscontrole. Duidelijk en onafhankelijk."
        />
      </Head>

      <div className="flex-1">
        <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-600 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-100">
                Onze werkwijze
              </span>
              <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Gestructureerd energieadvies met onafhankelijk perspectief
              </h1>
              <p className="mt-4 text-base text-blue-100 sm:text-lg">
                Elk adviesgesprek volgt een vaste methodiek. Zo weet u precies wat u kunt verwachten en
                welke informatie we gebruiken om tot een objectief advies te komen.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-lg transition hover:bg-blue-100"
                >
                  📞 Bel direct: {DISPLAY_PHONE_NUMBER}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Plan een intake
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Vier fasen voor ieder advies
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Onze aanpak combineert marktkennis met strakke kwaliteitsbewaking. U houdt altijd de regie en
                bepaalt zelf hoeveel begeleiding u wenst.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {phases.map((phase) => (
                <div key={phase.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                      <phase.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{phase.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Sparkles className="mt-0.5 h-4 w-4 text-indigo-600" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                  Kwaliteitsbewaking
                </span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Transparant, zorgvuldig en altijd controleerbaar
                </h2>
                <p className="mt-4 text-base text-blue-100">
                  AdviesNeutraal werkt volgens een intern kwaliteitsplan. Zo blijven we onafhankelijk,
                  actueel en compliant met de wet- en regelgeving.
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur">
                <div className="space-y-6">
                  {qualityPoints.map((quality) => (
                    <div key={quality.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-emerald-300">
                        <quality.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{quality.title}</h3>
                        <p className="mt-1 text-sm text-blue-100">{quality.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Doorlooptijd
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Dit is hoe een adviestraject er tijdtechnisch uitziet
              </h2>
              <p className="mt-4 text-base text-slate-600">
                De meeste particuliere adviesgesprekken ronden we binnen twee werkdagen af. Complexe
                zakelijke vragen kunnen meer tijd vragen. We stemmen dit altijd vooraf met u af.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.phase} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      {item.phase}
                    </span>
                    <CalendarClock className="h-5 w-5 text-indigo-600" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50" id="verduurzaming">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  Verduurzamingsprojecten
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Extra stappen voor verduurzaming van woning of bedrijf
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  Bij verduurzamingsvragen hanteren we een uitgebreid stappenplan. We beoordelen technische
                  haalbaarheid, beschikbare subsidies en de planning met betrouwbare uitvoerende partners.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="list-decimal space-y-3 pl-5 text-sm text-slate-600">
                  <li>
                    <strong>Technische intake:</strong> we analyseren woningtype, huidig verbruik en
                    installatiegeschiedenis.
                  </li>
                  <li>
                    <strong>Scenario&apos;s:</strong> we rekenen varianten door voor isolatie, zonnepanelen,
                    warmtepompen en laadinfra inclusief subsidies.
                  </li>
                  <li>
                    <strong>Partners:</strong> we introduceren u bij installateurs met erkende certificeringen
                    en bewaken offertes op realistische aannames.
                  </li>
                  <li>
                    <strong>Nazorg:</strong> we checken opleverrapporten en ondersteunen bij aanvragen van ISDE
                    of andere regelingen.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Documentatie
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Heldere documenten zodat u niets vergeet
              </h2>
              <p className="mt-4 text-base text-slate-600">
                U kiest zelf welke documentatie u ontvangt. Zo houdt u grip op het proces en kunt u
                beslissingen eenvoudig onderbouwen, bijvoorbeeld richting mede-eigenaren of bestuur.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {documentationItems.map((doc) => (
                <div key={doc.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-indigo-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{doc.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{doc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Klaar voor een onafhankelijk energieadvies?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Plan vandaag nog een intake of bel direct voor een eerste inventarisatie. We helpen u graag
              verder met een advies op maat.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                📞 Bel klantenservice
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                Plan een gesprek
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
