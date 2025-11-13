import Head from 'next/head'
import Link from 'next/link'
import { SiteLayout } from '@cv/ui'
import { getColorScheme } from '@cv/ui'

type Props = { brandColor?: string }

export default function Privacy({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)
  const rights = [
    'Recht op inzage',
    'Recht op rectificatie en aanvulling',
    'Recht op beperking en verwijdering',
    'Recht op overdraagbaarheid',
    'Recht van bezwaar',
    'Recht om toestemming in te trekken'
  ]
  return (
    <SiteLayout brandColor={brandColor}>
      <Head><title>Privacyverklaring | AdviesNeutraal</title></Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Privacyverklaring</h1>
          <p className={`mt-4 max-w-3xl text-base ${colors.badgeText} sm:text-lg`}>Uw vertrouwen staat centraal. Lees hoe we persoonsgegevens verwerken en beveiligen.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Grondslagen en doeleinden</h2>
          <p className="mt-4 text-sm text-slate-600">We verwerken uitsluitend gegevens die nodig zijn voor dienstverlening (overeenkomst), kwaliteitsbewaking (gerechtvaardigd belang) en wettelijke verplichtingen (administratie). Voor marketing vragen we altijd expliciete toestemming.</p>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Uw rechten</h2>
          <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-slate-600">{rights.map((r) => (<li key={r}>{r}</li>))}</ul>
          <p className="mt-4 text-sm text-slate-600">Meer informatie of een verzoek indienen? Mail ons via <a href="mailto:privacy@adviesneutraal.nl" className={`${colors.primaryText} underline`}>privacy@adviesneutraal.nl</a>.</p>
        </div>
      </section>
    </SiteLayout>
  )
}
