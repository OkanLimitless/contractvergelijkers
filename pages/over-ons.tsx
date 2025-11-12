import {
  Award,
  Briefcase,
  Building,
  CheckCircle2,
  Compass,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'
import { loadHomepageContent } from '../lib/content'
import { getBaseUrlFromReq, getDomainConfig } from '../lib/config'
import { getColorScheme } from '../lib/colors'

const coreValues = [
  {
    title: 'Onafhankelijkheid',
    description:
      'We zijn niet verbonden aan een leverancier en laten ons advies niet beinvloeden door commerciele prikkels.',
    icon: Compass,
  },
  {
    title: 'Transparante communicatie',
    description:
      'We leggen helder uit hoe we tot een advies komen, welke bronnen we gebruiken en wat de voor- en nadelen zijn.',
    icon: CheckCircle2,
  },
  {
    title: 'Duurzame vooruitgang',
    description:
      'We stimuleren consumenten en bedrijven om te verduurzamen en nemen de tijd om alle opties begrijpelijk te maken.',
    icon: ShieldCheck,
  },
  {
    title: 'Betrokken samenwerking',
    description:
      'We kijken verder dan het adviesgesprek en blijven bereikbaar voor vragen, ook nadat u een keuze heeft gemaakt.',
    icon: HeartHandshake,
  },
]

const timeline = [
  {
    year: '2018',
    title: 'Start van AdviesNeutraal',
    description:
      'AdviesNeutraal werd opgericht als onafhankelijk platform om consumenten te helpen bij energiekeuzes na de liberalisering van de markt.',
  },
  {
    year: '2020',
    title: 'Uitbreiding naar mkb',
    description:
      'Steeds meer ondernemers vroegen advies over dynamische contracten en verduurzaming. We voegden zakelijke trajecten toe.',
  },
  {
    year: '2022',
    title: 'Kwaliteitsprotocol',
    description:
      'We introduceerden een intern kwaliteitsplan en een onafhankelijke audit op onze adviesgesprekken.',
  },
  {
    year: '2024',
    title: 'Focus op verduurzaming',
    description:
      'Naast contractadvies zijn we actief gaan begeleiden bij zonnepanelen, isolatie en elektrificatie van wagenparken.',
  },
]

const teamMembers = [
  {
    name: 'Sanne de Vos',
    role: 'Hoofd energieadvies (huishoudens)',
    experience:
      'Gespecialiseerd in contractoptimalisatie en wetgeving. Sanne bewaakt de inhoudelijke kwaliteit van de adviesgesprekken.',
  },
  {
    name: 'Youssef El Amrani',
    role: 'Senior energieadviseur mkb',
    experience:
      'Helpt ondernemers bij het combineren van dynamische energiecontracten met verduurzamingsplannen en subsidies.',
  },
  {
    name: 'Lara Smit',
    role: 'Compliance & privacy officer',
    experience:
      'Verantwoordelijk voor gegevensbescherming, het AVG-beleid en de periodieke audits van AdviesNeutraal.',
  },
]

const certifications = [
  {
    title: 'Register Erkend Adviseur Energiebesparing (REE)',
    description:
      'Onze adviseurs volgen jaarlijks bijscholing om op de hoogte te blijven van wet- en regelgeving rondom energiebesparing.',
  },
  {
    title: 'AVG & dataveiligheid',
    description:
      'We werken met een privacy management systeem en gebruiken tweestapsverificatie voor alle interne systemen.',
  },
  {
    title: 'Partnerschap met gecertificeerde installateurs',
    description:
      'Voor verduurzamingsprojecten werken we samen met installateurs die is gecertificeerd voor bijvoorbeeld BRL 6001 en InstallQ.',
  },
]

interface OverOnsProps { brandColor?: string }

export default function OverOns({ brandColor = 'blue' }: OverOnsProps) {
  const colors = getColorScheme(brandColor)
  return (
    <>
      <Head>
        <title>Over AdviesNeutraal | Onafhankelijk energieadvies</title>
        <meta
          name="description"
          content="Maak kennis met AdviesNeutraal: ons team, onze waarden en hoe wij onafhankelijk energieadvies geven aan consumenten en mkb."
        />
      </Head>

      <div className="flex-1">
        <section className={`${colors.gradient} text-white`}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-100">
                Over AdviesNeutraal
              </span>
              <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Onafhankelijk energieadvies sinds 2018
              </h1>
              <p className="mt-4 text-base text-blue-100 sm:text-lg">
                AdviesNeutraal is ontstaan vanuit de behoefte aan eerlijk en begrijpelijk energieadvies. We
                staan naast consumenten, VvE's en mkb en helpen hen grip te krijgen op energiekosten en
                verduurzaming.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Onze missie</h2>
                <p className="mt-4 text-base text-slate-600">
                  Wij geloven dat iedereen de juiste energiekeuzes kan maken, mits de informatie helder,
                  eerlijk en volledig is. Daarom vertalen we complexe energievraagstukken naar praktische
                  stappen en houden we rekening met de persoonlijke situatie van onze klanten.
                </p>
                <p className="mt-4 text-base text-slate-600">
                  Onze adviseurs zijn onafhankelijk, goed opgeleid en krijgen maandelijks bijscholing. Zo
                  garanderen we dat u altijd met iemand spreekt die de markt kent en de regels begrijpt.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Kerncijfers</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <Users className={`h-5 w-5 ${colors.primaryText}`} aria-hidden />
                    Ruim 3.500 adviesgesprekken per jaar met consumenten en mkb.
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className={`h-5 w-5 ${colors.primaryText}`} aria-hidden />
                    Expertise in contractoptimalisatie, verduurzaming en compliance.
                  </li>
                  <li className="flex items-start gap-3">
                    <Building className={`h-5 w-5 ${colors.primaryText}`} aria-hidden />
                    Kantoor in Gouda, actief in heel Nederland via telefoon en video.
                  </li>
                </ul>
                <div className="mt-6 rounded-xl bg-white p-4 text-sm text-slate-600">
                  <MapPin className={`mb-2 h-5 w-5 ${colors.primaryText}`} aria-hidden />
                  <p>
                    Bezoekadres: Kamperingweg 45-D, 2803 PE Gouda <br />
                    KvK: 84091355
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl">
              <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                Waar wij voor staan
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Waarden die ons dagelijks sturen
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Onze waarden vormen de basis van elk gesprek. Ze zorgen ervoor dat onze adviezen eerlijk,
                begrijpelijk en toekomstbestendig zijn.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreValues.map((value) => (
                <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <value.icon className={`h-6 w-6 ${colors.primaryText}`} aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl text-center sm:text-left">
              <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                Mensen achter het advies
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Maak kennis met ons kernteam
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Ons team bestaat uit energieadviseurs, compliance specialisten en klantcoaches. Zij zorgen
                er samen voor dat elk gesprek helder en zorgvuldig verloopt.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Users className={`h-6 w-6 ${colors.primaryText}`} aria-hidden />
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{member.name}</h3>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                Onze ontwikkeling
              </span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Hoogtepunten uit onze geschiedenis</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-emerald-300">{item.year}</span>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
              <div>
                <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>
                  Kwaliteit & certificering
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Zo borgen we vakkennis en betrouwbaarheid
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  We vinden het belangrijk dat u weet hoe onze organisatie is ingericht. Daarom delen we
                  openlijk waar we aan voldoen, hoe we samenwerken en hoe we onze kennis actueel houden.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <ul className="space-y-4 text-sm text-slate-600">
                  {certifications.map((cert) => (
                    <li key={cert.title} className="flex items-start gap-3">
                      <Award className={`h-6 w-6 ${colors.primaryText}`} aria-hidden />
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{cert.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{cert.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Meer weten of samenwerken?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Neem contact op voor media-aanvragen, samenwerkingen of een vrijblijvend adviesgesprek.
              We reageren binnen een werkdag.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}
              >
                <Phone className="h-5 w-5" aria-hidden />
                Bel klantenservice
              </a>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-xl border ${colors.primaryBorder} px-6 py-3 text-base font-semibold ${colors.primaryText} transition hover:bg-slate-50`}
              >
                Contactformulier
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
