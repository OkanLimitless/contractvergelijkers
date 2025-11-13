import Head from 'next/head'
import Link from 'next/link'
import { SiteLayout, DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '@cv/ui'
import { getColorScheme } from '@cv/ui'
import { CheckCircle2, Sparkles, Phone, PhoneCall, ArrowRight } from 'lucide-react'

type Props = { brandColor?: string }

export default function EnergieAdvies({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)
  const badges = ['Gratis gesprek', 'Direct bereikbaar', 'Snel geholpen']
  const help = [
    'Uitleg over tarieven en contractopties',
    'Controle van termijnbedragen en eindafrekening',
    'Vergelijking van aanbieders en doorverwijzing'
  ]
  return (
    <SiteLayout brandColor={brandColor}>
      <Head><title>Energie Advies Direct | Onafhankelijke Hulp</title></Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Vragen over uw energiecontract?</h1>
          <p className={`mt-4 max-w-2xl text-lg ${colors.badgeText} sm:text-xl`}>Bel en krijg direct persoonlijk advies over tarieven, contracten en overstappen.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold bg-white/10 ${colors.badgeText}`}><CheckCircle2 className="h-4 w-4" />{b}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.buttonBg} px-6 py-4 text-lg font-bold ${colors.buttonText} shadow-xl transition ${colors.buttonHover}`}>
              📞 Bel Direct: {DISPLAY_PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Waarmee wij helpen</h3>
              <ul className={`mt-4 space-y-2 text-sm text-slate-600`}>
                {help.map((h) => (
                  <li key={h} className="flex items-start gap-2"><Sparkles className={`${colors.primaryText} mt-0.5 h-4 w-4`} />{h}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Onze werkwijze</h3>
              <p className="mt-3 text-sm text-slate-600">We volgen een vast kwaliteitsprotocol en documenteren de uitkomst van elk gesprek.</p>
              <Link href="/werkwijze" className={`mt-4 inline-flex items-center text-sm font-semibold ${colors.primaryText} ${colors.primaryHover}`}>Meer over onze werkwijze <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Direct persoonlijk advies?</h2>
          <p className="max-w-2xl text-base text-slate-600">Bel ons servicenummer. We kijken direct met u mee.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}> <PhoneCall className="h-5 w-5" /> Bel voor advies</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
