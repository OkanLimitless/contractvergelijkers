import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Sparkles } from 'lucide-react'
import { SiteLayout, DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '@cv/ui'
import { getColorScheme } from '@cv/ui'

type Props = { brandColor?: string }

export default function Home({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)
  return (
    <SiteLayout brandColor={brandColor}>
      <Head>
        <title>AdviesNeutraal | Onafhankelijk energieadvies</title>
        <meta name="description" content="Onafhankelijk energieadvies: contractscan, tariefvergelijking, overstap en verduurzaming." />
      </Head>
      <div className="flex-1">
        <section className={`relative overflow-hidden ${colors.gradient}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsla(0,0%,100%,0.18),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center">
            <div className="w-full text-white lg:w-3/5">
              <span className={`inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>
                Onafhankelijk energieadvies
              </span>
              <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Inzicht en rust in uw energiekosten</h1>
              <p className={`mt-4 max-w-2xl text-lg ${colors.badgeText} sm:text-xl`}>
                Vergelijk contracten, begrijp tarieven en stap zorgeloos over met hulp van onze adviseurs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.buttonBg} px-6 py-3 text-base font-semibold ${colors.buttonText} shadow-lg transition ${colors.buttonHover}`}>
                  📞 Bel direct: {DISPLAY_PHONE_NUMBER}
                </a>
                <Link href="/diensten" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10">
                  Bekijk onze diensten
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="mt-6 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur">
                <h2 className="text-lg font-semibold text-white">Voor wie is AdviesNeutraal?</h2>
                <ul className={`mt-4 space-y-3 text-sm ${colors.badgeText}`}>
                  <li className="flex items-start gap-2"><CheckCircle2 className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} />Huishoudens die zeker willen zijn van een eerlijk contract.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} />Starters en zzp'ers die grip willen op hun zakelijke energie.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} />Iedereen met vragen over dynamische tarieven of verduurzaming.</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur">
                <h3 className="text-lg font-semibold">Waarom AdviesNeutraal</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3"><ShieldCheck className={`h-6 w-6 ${colors.badgeText}`} /><span className={`text-sm ${colors.badgeText}`}>Kwaliteitsprotocol en heldere stappen.</span></div>
                  <div className="flex items-center gap-3"><Users className={`h-6 w-6 ${colors.badgeText}`} /><span className={`text-sm ${colors.badgeText}`}>Persoonlijk advies door ervaren specialisten.</span></div>
                  <div className="flex items-center gap-3"><Sparkles className={`h-6 w-6 ${colors.badgeText}`} /><span className={`text-sm ${colors.badgeText}`}>Concrete vervolgstappen na elk gesprek.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
