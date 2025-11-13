import { ArrowRight, Building2, CheckCircle2, Lightbulb, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'
import { loadHomepageContent, getDefaultContent, type HomepageContent } from '../lib/content'
import { getBaseUrlFromReq } from '../lib/config'
import { getColorScheme } from '../lib/colors'
import { getDomainConfig } from '../lib/config'

const highlightStats = [
  { title: 'Voor consumenten & mkb', description: 'Advies voor huishoudens en kleinschalige ondernemingen.' },
  { title: 'Persoonlijk advies', description: 'We luisteren naar uw situatie en geven concrete vervolgstappen.' },
  { title: 'Landelijke dekking', description: 'Onze energieadviseurs ondersteunen klanten in heel Nederland.' },
]

const serviceHighlights = [
  {
    title: 'Contractscan & tariefcontrole',
    description:
      'We beoordelen uw huidige contract, verbruik en tariefopbouw. Zo weet u waar u aan toe bent en of overstappen loont.',
    icon: ShieldCheck,
  },
  {
    title: 'Overstapbegeleiding',
    description:
      'Wij vergelijken actuele aanbiedingen van leveranciers en begeleiden het volledige overstapproces inclusief bedenktijd.',
    icon: ArrowRight,
  },
  {
    title: 'Verduurzamingsadvies',
    description:
      'Inzicht in opties zoals zonnepanelen, warmtepompen en isolatie. Met subsidies, terugverdientijd en betrouwbare partners.',
    icon: Lightbulb,
  },
  {
    title: 'Zakelijk energieadvies',
    description:
      'Specifieke ondersteuning voor zzp\'ers en mkb: van laadpalen tot dynamische contracten en energiemanagement.',
    icon: Building2,
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Inventarisatie',
    description:
      'U belt ons servicenummer of plant een belafspraak. We bespreken uw verbruik, wensen en contracthistorie.',
  },
  {
    step: '2',
    title: 'Analyse & vergelijking',
    description:
      'We bekijken onafhankelijke tarieven, leveranciersvoorwaarden en de financiële impact voor uw huishouden of bedrijf.',
  },
  {
    step: '3',
    title: 'Advies & keuze',
    description:
      'U ontvangt een helder adviesgesprek met concrete vervolgstappen. We sturen samenvattingen per e-mail wanneer gewenst.',
  },
  {
    step: '4',
    title: 'Nazorg',
    description:
      'Ook na het gesprek blijven we beschikbaar voor vragen over uw overstap, opzegging of aanvullende verduurzamingsopties.',
  },
]

const uspItems = [
  {
    title: 'Volledig onafhankelijk',
    description:
      'Wij zijn geen energieleverancier en hebben geen verplichtingen richting één partij. Uw belang staat centraal.',
  },
  {
    title: 'Transparante beloningen',
    description:
      'Wanneer een overstap tot stand komt ontvangen wij soms een vergoeding van de leverancier. Dit melden wij altijd vooraf.',
  },
  {
    title: 'Actueel marktinzicht',
    description:
      'We volgen dagelijks de prijsontwikkelingen en voorwaarden van grote én nicheleveranciers, zodat u nooit achterloopt.',
  },
  {
    title: 'AVG-proof werkwijze',
    description:
      'Wij verwerken alleen gegevens die nodig zijn voor het adviesgesprek en werken volgens een strikt privacybeleid.',
  },
]

const knowledgeCards = [
  {
    title: 'Vaste, variabele of dynamische tarieven?',
    description:
      'Ontdek de verschillen tussen contractvormen en wanneer het slim is om te kiezen voor prijszekerheid of flexibiliteit.',
    href: '/diensten#contractvormen',
  },
  {
    title: 'Stappenplan verduurzaming woning',
    description:
      'Van isolatie tot laadpalen. Wij leggen uit welke maatregelen het meeste opleveren in 2025 én welke subsidies gelden.',
    href: '/werkwijze#verduurzaming',
  },
  {
    title: 'Checklist overstappen van energieleverancier',
    description:
      'Met deze checklist regelt u de overstap soepel. Inclusief bedenktijd, eindafrekening en slimme timing tips.',
    href: '/veelgestelde-vragen#overstappen',
  },
]

const testimonials = [
  {
    quote:
      'Heldere uitleg en geen verkooppraatje. Ik weet precies wat mijn huidige contract kost en heb rustig kunnen overstappen.',
    name: 'Marieke (Rotterdam)',
  },
  {
    quote:
      'Als ondernemer had ik behoefte aan inzicht in dynamische tarieven. Het adviesgesprek gaf mij grip op mijn energiekosten.',
    name: 'Jasper (Delft)',
  },
]

interface HomeProps {
  content: HomepageContent
  brandColor?: string
}

export default function Home({ content, brandColor = 'blue' }: HomeProps) {
  const homepageContent = content || getDefaultContent('homepage')
  const colors = getColorScheme(brandColor)
  
  return (
    <>
      <Head>
        <title>{homepageContent.metaTitle || 'AdviesNeutraal | Onafhankelijk energieadvies en contractvergelijker'}</title>
        <meta
          name="description"
          content={homepageContent.metaDescription || 'AdviesNeutraal helpt consumenten en mkb met onafhankelijk energieadvies. Contractscan, tariefvergelijking, overstapbegeleiding en verduurzaming. Bel direct.'}
        />
      </Head>

      <div className="flex-1">
        <section className={`relative overflow-hidden ${colors.gradient}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsla(0,0%,100%,0.18),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center">
            <div className="w-full text-white lg:w-3/5">
              <span className={`inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>
                {homepageContent.valueProposition || 'Onafhankelijk energieadvies sinds 2018'}
              </span>
              <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {homepageContent.heroTitle || 'Inzicht en rust in uw energiekosten'}
              </h1>
              <p className={`mt-4 max-w-2xl text-lg ${colors.badgeText} sm:text-xl`}>
                {homepageContent.heroSubtitle || 'AdviesNeutraal biedt helder energieadvies voor huishoudens en ondernemers. We vergelijken contracten, leggen de markt uit en begeleiden een overstap van A tot Z.'}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.buttonBg} px-6 py-3 text-base font-semibold ${colors.buttonText} shadow-lg transition ${colors.buttonHover}`}
                >
                  {homepageContent.primaryCTA || `📞 Bel direct: ${DISPLAY_PHONE_NUMBER}`}
                </a>
                {homepageContent.secondaryCTA && (
                  <Link
                    href="/diensten"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    {homepageContent.secondaryCTA}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </div>
              <p className={`mt-6 text-sm ${colors.badgeText}`}>
                Openingstijden: ma-vr 08:00 - 20:00, za-zo 10:00 - 16:00. Bellen kost alleen uw reguliere
                beltarief.
              </p>
              {homepageContent.trustBadges && homepageContent.trustBadges.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {homepageContent.trustBadges.map((badge, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center gap-2 rounded-full ${colors.badgeBg} px-3 py-1 text-xs font-semibold ${colors.badgeText}`}
                    >
                      <CheckCircle2 className="h-3 w-3" aria-hidden />
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full lg:w-2/5">
              <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur">
                <h2 className="text-lg font-semibold text-white">Voor wie adviseert AdviesNeutraal?</h2>
                <ul className={`mt-4 space-y-3 text-sm ${colors.badgeText}`}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} aria-hidden />
                    Huishoudens die zeker willen zijn van een eerlijk contract.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} aria-hidden />
                    Starters en zzp&apos;ers die grip willen op hun zakelijke energie.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} aria-hidden />
                    Iedereen met vragen over dynamische tarieven of verduurzaming.
                  </li>
                </ul>
                <div className={`mt-6 rounded-xl bg-white/15 px-4 py-3 text-sm ${colors.badgeText}`}>
                  Geen dossierbehandeling van leveranciers - wel onafhankelijk advies en indien gewenst
                  doorverwijzing naar de juiste klantenservice.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid gap-6 sm:grid-cols-3">
              {highlightStats.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                Onze expertise
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Diensten voor consumenten, verhuurders én mkb
              </h2>
              <p className="mt-4 text-base text-slate-600">
                U kiest zelf hoe uitgebreid we u helpen. Van een telefonische contractscan tot een
                complete overstap en nazorg. Alles in begrijpelijke taal.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {serviceHighlights.map((service) => (
                <div
                  key={service.title}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.primaryBg}/10 ${colors.primaryText}`}>
                      <service.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm text-slate-600">{service.description}</p>
                  <Link
                    href="/diensten"
                    className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.primaryText} transition ${colors.primaryHoverText}`}
                  >
                    Meer over deze dienst
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
              <div>
                <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                  Onze werkwijze
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Persoonlijke begeleiding in vier duidelijke stappen
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  U beslist hoeveel ondersteuning u nodig heeft. We werken transparant, zonder verborgen
                  kosten en in lijn met de energiewetgeving.
                </p>
                <Link
                  href="/werkwijze"
                  className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.primaryText} ${colors.primaryHover}`}
                >
                  Naar onze werkwijze
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {processSteps.map((step) => (
                  <div key={step.step} className="rounded-2xl bg-slate-50 p-6 shadow-sm">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.primaryBg} text-lg font-semibold text-white`}>
                      {step.step}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className={`text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>
                  Waarom AdviesNeutraal
                </span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Een energieadviseur die naast u staat
                </h2>
                <p className={`mt-4 text-base ${colors.badgeText}`}>
                  Onze adviseurs zijn getraind in de Energiewet en werken met een kwaliteitsprotocol.
                  Zo voorkomt u verrassingen en voldoet u aan de regels.
                </p>
                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className={`h-6 w-6 ${colors.badgeText}`} aria-hidden />
                    <span className={`text-sm ${colors.badgeText}`}>
                      Leden van het Register Erkend Adviseur Energiebesparing (REE).
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className={`h-6 w-6 ${colors.badgeText}`} aria-hidden />
                    <span className={`text-sm ${colors.badgeText}`}>
                      Jaarlijks honderden adviesgesprekken voor consumenten, VvE&apos;s en mkb.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className={`h-6 w-6 ${colors.badgeText}`} aria-hidden />
                    <span className={`text-sm ${colors.badgeText}`}>
                      Heldere documentatie na afloop zodat u direct stappen kunt zetten.
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white">Wat klanten zeggen</h3>
                <div className="mt-6 space-y-6">
                  {testimonials.map((testimonial) => (
                    <figure key={testimonial.name} className="rounded-xl bg-white/10 p-6">
                      <blockquote className={`text-sm ${colors.badgeText}`}>“{testimonial.quote}”</blockquote>
                      <figcaption className="mt-4 text-sm font-semibold text-white">
                        {testimonial.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
              <div>
                <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                  Transparant & compliant
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Zo bewaken wij kwaliteit en onafhankelijkheid
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  We vinden het belangrijk om een complete gesprekspartner te zijn. Daarom werken wij met
                  een checklist voor elk adviesgesprek en vaste kwaliteitscontroles.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {uspItems.map((usp) => (
                    <div key={usp.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-base font-semibold text-slate-900">{usp.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{usp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-slate-900 p-8 text-white">
                <h3 className="text-xl font-semibold">Kennismaken of een vraag stellen?</h3>
                <p className={`mt-4 ${colors.badgeText}`}>
                  Bel ons rechtstreeks of plan een terugbelverzoek via de klantenservice. We reageren
                  altijd binnen één werkdag.
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href={`tel:${PHONE_NUMBER_TEL}`}
                    className={`flex w-full items-center justify-center rounded-xl ${colors.buttonBg} px-4 py-3 text-base font-semibold ${colors.buttonText} shadow-sm transition ${colors.buttonHover}`}
                  >
                    📞 {DISPLAY_PHONE_NUMBER}
                  </a>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-xl border border-white/60 px-4 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    Contactformulier
                  </Link>
                </div>
                <p className={`mt-6 text-xs ${colors.badgeText}`}>
                  Wilt u liever een leverancier spreken? Bezoek onze{' '}
                  <Link href="/klantenservice" className="underline">
                    klantenservicepagina
                  </Link>{' '}
                  voor de officiële contactkanalen per energieleverancier.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
                <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                  Handige gidsen
                </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Verdiep u met onze kennisbank
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We werken continu aan duidelijke uitleg en checklists. Zo blijft u op de hoogte van de
                laatste marktontwikkelingen.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {knowledgeCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className={`text-lg font-semibold text-slate-900 ${colors.groupHoverText}`}>
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-slate-600">{card.description}</p>
                    <span className={`mt-5 inline-flex items-center text-sm font-semibold ${colors.primaryText} ${colors.primaryHoverText}`}>
                    Lees verder
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Klaar voor een onafhankelijk adviesgesprek?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Bel ons direct, plan een terugbelverzoek of bekijk eerst de veelgestelde vragen. Wij staan
              voor u klaar met actuele kennis van de energiemarkt.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}
              >
                📞 Bel klantenservice
              </a>
              <Link
                href="/veelgestelde-vragen"
                className={`inline-flex items-center justify-center gap-2 rounded-xl border ${colors.primaryBorder} px-6 py-3 text-base font-semibold ${colors.primaryText} transition ${colors.buttonHover}`}
              >
                Bekijk veelgestelde vragen
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
  const content = await loadHomepageContent(baseUrl)
  const brandColor = (content && (content as any).brandColor) || getDomainConfig().brandColor || 'blue'
  return {
    props: {
      content: content || getDefaultContent('homepage'),
      brandColor
    }
  }
}
