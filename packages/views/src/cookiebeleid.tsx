import Head from 'next/head'
import { SiteLayout } from '@cv/ui'
import { getColorScheme } from '@cv/ui'

type Props = { brandColor?: string }

export default function Cookiebeleid({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)
  const sections = [
    { t: 'Functionele cookies', d: 'Noodzakelijk voor het functioneren van de website, zoals het opslaan van voorkeuren.' },
    { t: 'Analytische cookies', d: 'Anonieme statistieken om de website te verbeteren.' },
    { t: 'Marketingcookies (optioneel)', d: 'Campagnemeting zoals Google Ads, alleen met toestemming.' }
  ]
  return (
    <SiteLayout brandColor={brandColor}>
      <Head><title>Cookiebeleid | AdviesNeutraal</title></Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Cookiebeleid</h1>
          <p className={`mt-4 max-w-3xl text-base ${colors.badgeText} sm:text-lg`}>Lees welke cookies we gebruiken en waarom.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((s) => (
              <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{s.t}</h3>
                <p className="mt-3 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
