import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Leaf,
  Lightbulb,
  LineChart,
  PhoneCall,
  Sparkles,
  Wallet,
} from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'
import { loadHomepageContent } from '../lib/content'
import { getBaseUrlFromReq, getDomainConfig } from '../lib/config'
import { getColorScheme } from '../lib/colors'

const serviceBlocks = [
  {
    title: 'Contractscan & tariefcontrole',
    description:
      'We analyseren uw huidige contract, verbruik en termijnbedragen. U ontvangt een rapport met risico\'s, besparingskansen en een advies voor de beste vervolgstap.',
    icon: ClipboardCheck,
    bulletPoints: [
      'Controle op einddatum, opzegvergoeding en prijsplafond',
      'Vergelijking met actuele variabele, vaste en dynamische tarieven',
      'Samenvatting per e-mail met concrete aanbevelingen',
    ],
  },
  {
    title: 'Overstapbegeleiding',
    description:
      'Wilt u overstappen naar een andere leverancier? Wij begeleiden u bij het aanvraagproces, informeren u over bedenktijd en zorgen dat uw overstap soepel verloopt.',
    icon: ArrowRight,
    bulletPoints: [
      'Persoonlijke vergelijking op basis van verbruik en voorkeuren',
      'Begeleiding bij het indienen van de aanvraag en meterstanden',
      'Nazorg over eindafrekening en eventuele terugleververgoedingen',
    ],
  },
  {
    title: 'Verduurzamingsadvies',
    description:
      'We brengen de beste verduurzamingsopties voor uw woning of bedrijf in kaart, inclusief subsidiemogelijkheden, financiering en betrouwbare uitvoerende partners.',
    icon: Leaf,
    bulletPoints: [
      'Analyse van isolatie, zonnepanelen, warmtepompen en laadpalen',
      'Indicatie van investering, besparing en terugverdientijd',
      'Introductie bij gecertificeerde installateurs indien gewenst',
    ],
  },
  {
    title: 'Zakelijk energieadvies',
    description:
      'Voor zzp\'ers, mkb en VvE\'s verzorgen wij volledig energieadvies. Van dynamische contracten tot energiemanagement en verplichtingen vanuit de Energiewet.',
    icon: Building2,
    bulletPoints: [
      'Analyse van huidige contracten en verbruiksprofielen',
      'Inzicht in energiebesparingsplicht en meldingen',
      'Advies over laadoplossingen, energieopslag en collectieve inkoop',
    ],
  },
]

const promisePoints = [
  {
    title: 'Onafhankelijk & transparant',
    description:
      'Wij zijn geen leverancier. Eventuele vergoedingen van partners worden vooraf gemeld en hebben geen invloed op ons advies.',
    icon: Sparkles,
  },
  {
    title: 'Toegankelijke experts',
    description:
      'Onze energieadviseurs zijn getraind in de Energiewet en volgen doorlopend marktupdates. U spreekt altijd iemand met actuele kennis.',
    icon: Lightbulb,
  },
  {
    title: 'Documentatie na afloop',
    description:
      'Na elk adviesgesprek ontvangt u indien gewenst een samenvatting per e-mail, inclusief links naar gebruikte bronnen en vervolgstappen.',
    icon: LineChart,
  },
]

const packages = [
  {
    title: 'Telefonisch advies',
    price: 'Gratis voor consumenten',
    description:
      'Ideaal voor een snelle contractscan of vragen over uw huidige leverancier. U betaalt alleen uw beltarief.',
    list: [
      'Analyse van contract en termijnbedrag',
      'Vergelijking van actuele tarieven',
      'Doorverwijzing naar officiële kanalen',
    ],
  },
  {
    title: 'Verdiepende consultatie',
    price: 'Op maat voor mkb en VvE\'s',
    description:
      'Voor ondernemers en VvE-besturen bieden wij een verdiepend adviestraject, inclusief rapportage en nazorg.',
    list: [
      'Uitgebreide verbruiksanalyse',
      'Scenario\'s voor overstap en verduurzaming',
      'Aanbeveling van erkende uitvoerende partners',
    ],
  },
]

const useCases = [
  {
    title: 'Huishouden met variabel contract',
    description:
      'We leggen uit of het slim is om vast te zetten, dynamisch te gaan of nog even te wachten. Inclusief kostenprognose per scenario.',
  },
  {
    title: 'Ondernemer met meerdere locaties',
    description:
      'We bundelen contracten, brengen piekverbruik in kaart en adviseren over slimme meters, laadinfra en energiemanagement.',
  },
  {
    title: 'Verduurzaming bij verbouwing',
    description:
      'We toetsen offertes op realistische opbrengsten en bekijken welke subsidies of leningen het beste passen.',
  },
  {
    title: 'Vragen over terugleververgoeding',
    description:
      'We vergelijken de terugleververgoeding (salderen) van leveranciers en leggen uit waar u rekening mee moet houden.',
  },
]

interface DienstenProps { brandColor?: string }

export default function Diensten({ brandColor = 'blue' }: DienstenProps) {
  const colors = getColorScheme(brandColor)
  return (
    <>
      <Head>
        <title>Diensten | AdviesNeutraal energieadvies</title>
        <meta
          name="description"
          content="Ontdek de diensten van AdviesNeutraal: contractscan, overstapbegeleiding, verduurzamingsadvies en zakelijk energieadvies. Onafhankelijk en duidelijk."
        />
      </Head>

      <div className="flex-1">
        <section className={`${colors.gradient} text-white`}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-100">
                Diensten AdviesNeutraal
              </span>
              <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Onafhankelijke energieadviezen voor iedere situatie
              </h1>
              <p className="mt-4 text-base text-blue-100 sm:text-lg">
                Of u nu wilt weten of uw huidige contract nog passend is, wilt overstappen naar een andere
                leverancier of uw woning wilt verduurzamen: onze adviseurs geven duidelijke antwoorden en
                begeleiden het volledige traject.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.buttonBg} px-6 py-3 text-base font-semibold ${colors.buttonText} shadow-lg transition ${colors.buttonHover}`}
                >
                  📞 Bel direct: {DISPLAY_PHONE_NUMBER}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Plan een adviesgesprek
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <p className="mt-4 text-xs text-blue-100">
                Telefonisch advies is gratis voor consumenten. Voor complexe trajecten maken we vooraf een
                vaste prijsafspraak.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white" id="contractvormen">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Onze belangrijkste diensten
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We werken modulair: u kiest alleen de onderdelen die u nodig heeft. Elk traject eindigt met
                concrete vervolgstappen en een overzichtelijke samenvatting.
              </p>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {serviceBlocks.map((service) => (
                <div key={service.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 ${colors.primaryText}`}>
                      <service.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{service.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {service.bulletPoints.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Sparkles className={`mt-0.5 h-4 w-4 ${colors.primaryText}`} aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.primaryText} ${colors.primaryHover}`}
                  >
                    Vraag meer informatie
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                  Onze belofte
                </span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Persoonlijke begeleiding met oog voor kwaliteit
                </h2>
                <p className="mt-4 text-base text-blue-100">
                  We werken met erkende energieadviseurs die een eigen kwaliteitsplan volgen. Zo bent u zeker
                  van eerlijk advies en correcte informatie.
                </p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Wat u altijd van ons mag verwachten</h3>
                <div className="mt-6 space-y-5">
                  {promisePoints.map((promise) => (
                    <div key={promise.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-emerald-300">
                        <promise.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{promise.title}</h4>
                        <p className="mt-1 text-sm text-blue-100">{promise.description}</p>
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
              <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                Tarieven & pakketten
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Duidelijke prijzen zonder verrassingen
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Telefonisch advies is gratis voor consumenten en kleinzakelijke klanten. Voor uitgebreide
                trajecten maken we altijd vooraf een offerte op maat.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {packages.map((pkg) => (
                <div key={pkg.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{pkg.title}</h3>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      <Wallet className="h-4 w-4" aria-hidden />
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{pkg.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {pkg.list.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Sparkles className={`mt-0.5 h-4 w-4 ${colors.primaryText}`} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.primaryText} ${colors.primaryHover}`}
                  >
                    Neem contact op
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Voor mkb-trajecten hanteren we een vaste projectprijs of abonnement op basis van het aantal
              locaties. Btw wordt waar van toepassing in rekening gebracht.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl text-center sm:text-left">
              <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                Wanneer schakelt u ons in?
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Praktijksituaties waarbij wij het verschil maken
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We combineren kennis van de energiemarkt met praktische ervaring. Daardoor schakelen we snel,
                houden we rekening met uw budget en zorgen we voor continuiteit.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{useCase.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Bespreek uw vraag direct met een energieadviseur
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Bel ons servicenummer of plan een terugbelverzoek voor een moment dat u uitkomt. We reageren altijd
              binnen één werkdag.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}
              >
                <PhoneCall className="h-5 w-5" aria-hidden />
                Bel klantenservice
              </a>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-xl border ${colors.primaryBorder} px-6 py-3 text-base font-semibold ${colors.primaryText} transition hover:bg-slate-50`}
              >
                Vraag advies aan
              </Link>
            </div>
          </div>
        </section>
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
