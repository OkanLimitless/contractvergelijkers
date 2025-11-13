import Head from 'next/head'
import Link from 'next/link'
import { CheckCircle2, Phone, Sparkles, AlertCircle, ArrowRight } from 'lucide-react'
import { SiteLayout, DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '@cv/ui'
import { getColorScheme } from '@cv/ui'

type Props = { brandColor?: string }

export default function Klantenservice({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)

  const serviceItems = [
    'Uitleg over contractvormen, tarieven en voorwaarden',
    'Controle van termijnbedragen en jaarafrekening',
    'Vergelijking van energieaanbiedingen',
    'Doorverwijzing naar officiële klantenservice'
  ]

  return (
    <SiteLayout brandColor={brandColor}>
      <Head>
        <title>Klantenservice Hulp | AdviesNeutraal</title>
        <meta name="description" content="Direct een adviseur aan de lijn. We beantwoorden uw vraag of verwijzen door naar de juiste officiële klantenservice." />
      </Head>

      <div className="flex-1">
        <section className={`relative overflow-hidden ${colors.gradient}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsla(0,0%,100%,0.18),_transparent_40%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 md:py-20 lg:flex-row lg:items-center text-white">
            <div className="lg:w-3/5">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Hulp met uw energievraag?</h1>
              <p className={`mt-4 max-w-2xl text-lg ${colors.badgeText} sm:text-xl`}>
                Direct een adviseur aan de lijn. We leggen uw opties uit en verwijzen indien nodig door naar de juiste officiële klantenservice.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.buttonBg} px-6 py-4 text-lg font-bold ${colors.buttonText} shadow-xl transition ${colors.buttonHover}`}>
                  📞 Bel Direct: {DISPLAY_PHONE_NUMBER}
                </a>
              </div>
              <p className={`mt-4 text-sm ${colors.badgeText}`}>Ma-vr 08:00 - 20:00 • Za-zo 10:00 - 16:00</p>
            </div>
            <div className="lg:w-2/5">
              <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur">
                <h2 className="text-lg font-semibold text-white">Waarmee we dagelijks helpen</h2>
                <ul className={`mt-4 space-y-3 text-sm ${colors.badgeText}`}>
                  {serviceItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className={`mt-0.5 h-5 w-5 ${colors.badgeText}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 rounded-xl bg-white/15 px-4 py-3 text-xs ${colors.badgeText}`}>
                  <strong>Let op:</strong> wij zijn geen leverancier. We geven onafhankelijk advies en verwijzen door naar officiële kanalen.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Belangrijk om te weten</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><AlertCircle className={`${colors.primaryText} mt-0.5 h-5 w-5`} /> Onafhankelijk advies; geen dossiers namens leveranciers.</li>
                  <li className="flex items-start gap-2"><AlertCircle className={`${colors.primaryText} mt-0.5 h-5 w-5`} /> Gegevens alleen voor het gesprek. Zie <Link href="/privacy" className="underline">privacyverklaring</Link>.</li>
                  <li className="flex items-start gap-2"><AlertCircle className={`${colors.primaryText} mt-0.5 h-5 w-5`} /> Soms ontvangen we een vergoeding bij overstap; dit melden we vooraf.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">Officiële contactkanalen</h3>
                <p className="mt-3 text-sm text-slate-600">Direct contact met uw leverancier? Handige links:</p>
                <ul className={`mt-4 space-y-2 text-sm ${colors.primaryText}`}>
                  <li><Link href="https://www.essent.nl/service/contact" target="_blank">Essent</Link></li>
                  <li><Link href="https://www.eneco.nl/service-en-contact/" target="_blank">Eneco</Link></li>
                  <li><Link href="https://www.vattenfall.nl/klantenservice/" target="_blank">Vattenfall</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Direct iemand spreken?</h2>
            <p className="max-w-2xl text-base text-slate-600">Bel ons en een adviseur kijkt direct mee. Indien nodig verwijzen we door naar de juiste afdeling.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}>
                <Phone className="h-5 w-5" /> Bel klantenservice
              </a>
              <Link href="/veelgestelde-vragen" className={`inline-flex items-center justify-center gap-2 rounded-xl border ${colors.primaryBorder} px-6 py-3 text-base font-semibold ${colors.primaryText} transition`}>
                Veelgestelde vragen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
