import Head from 'next/head'
import { Users, MapPin, Briefcase, Building, Phone } from 'lucide-react'
import { SiteLayout, PHONE_NUMBER_TEL } from '@cv/ui'
import { getColorScheme } from '@cv/ui'
import Link from 'next/link'

type Props = { brandColor?: string }

export default function OverOns({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)
  return (
    <SiteLayout brandColor={brandColor}>
      <Head><title>Over AdviesNeutraal | Onafhankelijk energieadvies</title></Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="max-w-3xl">
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>Over AdviesNeutraal</span>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Onafhankelijk energieadvies sinds 2018</h1>
            <p className={`mt-4 text-base ${colors.badgeText} sm:text-lg`}>We staan naast consumenten, VvE's en mkb en helpen hen grip te krijgen op energiekosten en verduurzaming.</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Onze missie</h2>
              <p className="mt-4 text-base text-slate-600">Iedereen kan de juiste energiekeuzes maken met heldere, eerlijke informatie.</p>
              <p className="mt-4 text-base text-slate-600">Onze adviseurs zijn onafhankelijk en volgen maandelijks bijscholing.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Kerncijfers</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3"><Users className={`${colors.primaryText} h-5 w-5`} /> Ruim 3.500 gesprekken per jaar.</li>
                <li className="flex items-start gap-3"><Briefcase className={`${colors.primaryText} h-5 w-5`} /> Contractoptimalisatie en verduurzaming.</li>
                <li className="flex items-start gap-3"><Building className={`${colors.primaryText} h-5 w-5`} /> Landelijke dekking via telefoon en video.</li>
              </ul>
              <div className="mt-6 rounded-xl bg-white p-4 text-sm text-slate-600">
                <MapPin className={`${colors.primaryText} mb-2 h-5 w-5`} />
                Kamperingweg 45-D, 2803 PE Gouda
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Meer weten of samenwerken?</h2>
          <p className="max-w-2xl text-base text-slate-600">Neem contact op voor media-aanvragen, samenwerkingen of een vrijblijvend adviesgesprek.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}><Phone className="h-5 w-5" /> Bel klantenservice</a>
            <Link href="/contact" className={`inline-flex items-center justify-center gap-2 rounded-xl border ${colors.primaryBorder} px-6 py-3 text-base font-semibold ${colors.primaryText} transition`}>Contactformulier</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
