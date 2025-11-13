import Head from 'next/head'
import Link from 'next/link'
import { SiteLayout } from '@cv/ui'
import { getColorScheme } from '@cv/ui'

type Props = { brandColor?: string }

export default function Disclaimer({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)
  return (
    <SiteLayout brandColor={brandColor}>
      <Head><title>Disclaimer | AdviesNeutraal</title></Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Disclaimer</h1>
          <p className={`mt-4 max-w-3xl text-base ${colors.badgeText} sm:text-lg`}>Voorwaarden voor gebruik van de website en onze informatie.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Informatie op deze website</h2>
          <p className="mt-4 text-sm text-slate-600">We streven naar correcte en actuele informatie. Desondanks kan informatie verouderen of onjuist zijn. Gebruik is voor eigen risico.</p>
          <p className="mt-4 text-sm text-slate-600">Vragen of onjuistheden? Mail ons op <a className={`${colors.primaryText} underline`} href="mailto:info@adviesneutraal.nl">info@adviesneutraal.nl</a>.</p>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Contact</h2>
          <p className="mt-4 text-sm text-slate-600">Zie onze <Link href="/contact" className={`${colors.primaryText} underline`}>contactpagina</Link> voor alle gegevens.</p>
        </div>
      </section>
    </SiteLayout>
  )
}
