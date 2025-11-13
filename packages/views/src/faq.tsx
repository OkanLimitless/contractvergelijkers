import Head from 'next/head'
import Link from 'next/link'
import { SiteLayout, DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '@cv/ui'
import { getColorScheme } from '@cv/ui'
import { PhoneCall, BookOpen } from 'lucide-react'

type Props = { brandColor?: string }

export default function FAQ({ brandColor = 'blue' }: Props) {
  const colors = getColorScheme(brandColor)
  const categories = [
    { title: 'Algemeen', items: [
      { q: 'Wat doet AdviesNeutraal?', a: 'Onafhankelijk energieadvies voor consumenten en mkb. We vergelijken, leggen uit en begeleiden een overstap.' },
      { q: 'Is advies gratis?', a: 'Telefonisch advies is gratis; u betaalt alleen uw beltarief. Voor uitgebreide trajecten maken we vooraf een prijsafspraak.' }
    ]},
    { title: 'Contracten & tarieven', items: [
      { q: 'Wat past bij mij: vast, variabel of dynamisch?', a: 'Dat hangt af van uw verbruik en risicoprofiel. We rekenen scenario’s door tijdens het gesprek.' }
    ]}
  ]
  return (
    <SiteLayout brandColor={brandColor}>
      <Head><title>Veelgestelde vragen | AdviesNeutraal</title></Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="max-w-3xl">
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>FAQ</span>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Antwoorden op uw energievragen</h1>
            <p className={`mt-4 text-base ${colors.badgeText} sm:text-lg`}>Niet gevonden wat u zoekt? Bel ons gerust.</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Hoe gebruikt u deze FAQ?</h2>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                <BookOpen className={`${colors.primaryText} mb-3 h-6 w-6`} /> Gebruik de zoekfunctie (<kbd>Ctrl/Cmd</kbd>+<kbd>F</kbd>) om trefwoorden te vinden.
              </div>
            </div>
            <div className="space-y-8">
              {categories.map((cat) => (
                <section key={cat.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{cat.title}</h3>
                  <div className="mt-4 space-y-3">
                    {cat.items.map((i) => (
                      <details key={i.q} className="rounded-xl border border-slate-200 bg-white p-4">
                        <summary className="cursor-pointer text-sm font-semibold text-slate-900">{i.q}</summary>
                        <p className="mt-3 text-sm text-slate-600">{i.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Persoonlijk antwoord nodig?</h2>
          <p className="max-w-2xl text-base text-slate-600">Bel onze energieadviseurs of stuur uw vraag via het contactformulier.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${PHONE_NUMBER_TEL}`} className={`inline-flex items-center justify-center gap-2 rounded-xl ${colors.primaryBg} px-6 py-3 text-base font-semibold text-white shadow-sm transition ${colors.primaryHover}`}><PhoneCall className="h-5 w-5" /> Bel klantenservice</a>
            <Link href="/contact" className={`inline-flex items-center justify-center gap-2 rounded-xl border ${colors.primaryBorder} px-6 py-3 text-base font-semibold ${colors.primaryText} transition`}>Stuur een bericht</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
