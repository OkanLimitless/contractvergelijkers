import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, ClipboardCheck, Leaf, Building2, Sparkles, PhoneCall } from 'lucide-react'
import { SiteLayout, DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '@cv/ui'
import { getColorScheme } from '@cv/ui'

type Props = { brandColor?: string }

export default function Diensten({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)

  const services = [
    { title: 'Contractscan & tariefcontrole', icon: ClipboardCheck, desc: 'Analyse van contract, tarieven en termijnbedrag. Duidelijke aanbevelingen.' },
    { title: 'Overstapbegeleiding', icon: ArrowRight, desc: 'Persoonlijke vergelijking en begeleiding bij de overstap inclusief bedenktijd.' },
    { title: 'Verduurzamingsadvies', icon: Leaf, desc: 'Opties zoals isolatie, zonnepanelen, laadpalen en subsidies.' },
    { title: 'Zakelijk energieadvies', icon: Building2, desc: 'Ondersteuning voor zzp/mkb: dynamisch, laadinfra en energiemanagement.' }
  ]

  return (
    <SiteLayout brandColor={brandColor}>
      <Head>
        <title>Diensten | AdviesNeutraal energieadvies</title>
      </Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="max-w-3xl">
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>Diensten</span>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Onafhankelijke energieadviezen</h1>
            <p className={`mt-4 text-base ${colors.badgeText} sm:text-lg`}>Van contractscan tot complete overstap en verduurzaming. Helder en onafhankelijk.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.buttonBg} px-6 py-3 text-base font-semibold ${colors.buttonText} shadow-lg transition ${colors.buttonHover}`}>📞 Bel direct: {DISPLAY_PHONE_NUMBER}</a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10">Plan een intake</Link>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 ${colors.primaryText}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">{s.desc}</p>
                <Link href="/contact" className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.primaryText} ${colors.primaryHover}`}>Meer informatie <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Bespreek uw vraag met een adviseur</h2>
          <p className="max-w-2xl text-base text-slate-600">Bel ons servicenummer of plan een terugbelverzoek. We reageren binnen één werkdag.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}><PhoneCall className="h-5 w-5" /> Bel klantenservice</a>
            <Link href="/contact" className={`inline-flex items-center justify-center gap-2 rounded-xl border ${colors.primaryBorder} px-6 py-3 text-base font-semibold ${colors.primaryText} transition`}>Vraag advies aan</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
