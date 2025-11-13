import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { getDisplayPhoneNumber, getPhoneNumberTel, getDomainConfig } from '../lib/config'
import { getColorScheme } from '../lib/colors'

export const DISPLAY_PHONE_NUMBER = getDisplayPhoneNumber()
export const PHONE_NUMBER_TEL = getPhoneNumberTel()

type SiteLayoutProps = { children: ReactNode; brandColor?: string }

export function SiteLayout({ children, brandColor = 'blue' }: SiteLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => setMobileOpen(false), [])
  const colors = getColorScheme(brandColor)
  const nav = [
    { href: '/', label: 'Home' },
    { href: '/klantenservice', label: 'Klantenservice' },
    { href: '/diensten', label: 'Diensten' },
    { href: '/werkwijze', label: 'Werkwijze' },
    { href: '/veelgestelde-vragen', label: 'Veelgestelde vragen' },
    { href: '/over-ons', label: 'Over ons' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' }
  ]
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${colors.primaryBg} text-lg text-white shadow-sm`}>
              ⚡
            </span>
            <span className="text-lg sm:text-xl">{getDomainConfig().siteTitle}</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors text-slate-600 hover:text-slate-900">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-xs uppercase tracking-wide text-slate-400">Bel direct</span>
            <a href={`tel:${PHONE_NUMBER_TEL}`} className={`rounded-lg ${colors.primaryBg} px-4 py-2 text-sm font-semibold text-white shadow-sm`}>
              {DISPLAY_PHONE_NUMBER}
            </a>
          </div>
          <button type="button" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200" onClick={() => setMobileOpen((o)=>!o)}>
            ☰
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="flex flex-col space-y-1 px-4 py-4 text-sm font-medium">
              {nav.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-md px-3 py-2 transition-colors">
                  {l.label}
                </Link>
              ))}
              <a href={`tel:${PHONE_NUMBER_TEL}`} className={`mt-2 inline-flex items-center justify-center rounded-md ${colors.primaryBg} px-3 py-2 text-sm font-semibold text-white`}>
                Bel {DISPLAY_PHONE_NUMBER}
              </a>
            </nav>
          </div>
        )}
      </header>
      <main className="flex min-h-[calc(100vh-220px)] flex-col">{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 font-semibold text-slate-900">
              <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${colors.primaryBg} text-lg text-white shadow-sm`}>⚡</span>
              <span className="text-lg">{getDomainConfig().siteTitle}</span>
            </Link>
            <p className="text-sm text-slate-600">Onafhankelijk advies over energietarieven, contracten en verduurzaming.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Navigatie</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              {nav.slice(0,6).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-slate-900">{l.label}</Link>
              ))}
            </div>
          </div>
          <div />
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Telefoon: <a href={`tel:${PHONE_NUMBER_TEL}`} className="text-slate-900">{DISPLAY_PHONE_NUMBER}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} {getDomainConfig().siteTitle}.</div>
      </footer>
    </div>
  )
}
