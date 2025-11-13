import Head from 'next/head'
import Link from 'next/link'
import { SiteLayout, DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '@cv/ui'
import { getColorScheme } from '@cv/ui'
import { Sparkles, CalendarClock, FileCheck } from 'lucide-react'

type Props = { brandColor?: string }

export default function Werkwijze({ brandColor = 'indigo' }: Props) {
  const colors = getColorScheme(brandColor)
  const phases = [
    { t: 'Inventarisatie', d: 'We brengen uw situatie in kaart en checken de belangrijkste gegevens.' },
    { t: 'Analyse & vergelijking', d: 'We rekenen scenario’s door en toetsen voorwaarden.' },
    { t: 'Advies & vervolgstappen', d: 'U krijgt een helder advies en concrete vervolgstappen.' }
  ]
  return (
    <SiteLayout brandColor={brandColor}>
      <Head><title>Werkwijze | AdviesNeutraal</title></Head>
      <section className={`${colors.gradient} text-white`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="max-w-3xl">
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>Onze werkwijze</span>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Gestructureerd en duidelijk</h1>
            <p className={`mt-4 text-base ${colors.badgeText} sm:text-lg`}>Elke case doorloopt dezelfde stappen. Zo weet u precies wat u kunt verwachten.</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {phases.map((p, idx) => (
              <div key={p.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.primaryBg} text-base font-semibold text-white`}>{idx + 1}</div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{p.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
            <div>
              <span className={`text-sm font-semibold uppercase tracking-wide ${colors.badgeText}`}>Kwaliteitsbewaking</span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Transparant en controleerbaar</h2>
              <p className={`mt-4 text-base ${colors.badgeText}`}>We werken volgens een intern kwaliteitsplan en documenteren bevindingen.</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur">
              <div className="space-y-6">
                <div className="flex items-start gap-3"><div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ${colors.badgeText}`}><Sparkles className="h-5 w-5" /></div><div><h3 className="text-sm font-semibold text-white">Helder advies</h3><p className={`mt-1 text-sm ${colors.badgeText}`}>Begrijpelijke uitleg zonder jargon.</p></div></div>
                <div className="flex items-start gap-3"><div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ${colors.badgeText}`}><CalendarClock className="h-5 w-5" /></div><div><h3 className="text-sm font-semibold text-white">Snelle doorlooptijd</h3><p className={`mt-1 text-sm ${colors.badgeText}`}>Meestal binnen twee werkdagen afgerond.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className={`text-sm font-semibold uppercase tracking-wide ${colors.primaryText}`}>Documentatie</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">U ontvangt wat u nodig heeft</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[ 'Adviesrapport', 'Overzicht parameters', 'Checklist overstap' ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 ${colors.primaryText}`}><FileCheck className="h-5 w-5" /></div>
                <h3 className="text-base font-semibold text-slate-900">{item}</h3>
                <p className="mt-2 text-sm text-slate-600">Helder en compact, zodat u niets vergeet.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
