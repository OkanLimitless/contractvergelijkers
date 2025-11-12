import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { getDisplayPhoneNumber, getPhoneNumberTel, getDomainConfig, getBrandColors } from '../lib/config'

export const DISPLAY_PHONE_NUMBER = getDisplayPhoneNumber()
export const PHONE_NUMBER_TEL = getPhoneNumberTel()

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/klantenservice', label: 'Klantenservice' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/veelgestelde-vragen', label: 'Veelgestelde vragen' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
]

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const { pathname } = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const renderNavLinks = (className: string) =>
    NAV_LINKS.map((link) => {
      const isActive =
        link.href === '/'
          ? pathname === '/'
          : pathname === link.href || pathname.startsWith(`${link.href}/`)

      return (
        <Link
          key={link.href}
          href={link.href}
          className={`${className} ${
            isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-600'
          }`}
        >
          {link.label}
        </Link>
      )
    })

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${getBrandColors().primaryBg} text-lg text-white shadow-sm`}>
              ⚡
            </span>
            <span className="text-lg sm:text-xl">{getDomainConfig().siteTitle}</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {renderNavLinks('transition-colors')}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-xs uppercase tracking-wide text-slate-400">Bel direct</span>
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              className={`rounded-lg ${getBrandColors().primaryBg} px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              {DISPLAY_PHONE_NUMBER}
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label="Open navigatie"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="flex flex-col space-y-1 px-4 py-4 text-sm font-medium">
              {renderNavLinks('rounded-md px-3 py-2 transition-colors')}
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className={`mt-2 inline-flex items-center justify-center rounded-md ${getBrandColors().primaryBg} px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
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
              <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${getBrandColors().primaryBg} text-lg text-white shadow-sm`}>
                ⚡
              </span>
              <span className="text-lg">{getDomainConfig().siteTitle}</span>
            </Link>
            <p className="text-sm text-slate-600">
              Onafhankelijk advies over energietarieven, contracten en verduurzaming. Wij staan aan de
              zijde van de consument.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Navigatie</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-blue-600">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Documenten</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/privacy" className="hover:text-blue-600">
                Privacyverklaring
              </Link>
              <Link href="/cookiebeleid" className="hover:text-blue-600">
                Cookiebeleid
              </Link>
              <Link href="/disclaimer" className="hover:text-blue-600">
                Disclaimer
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contactgegevens
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>KvK: 84091355</li>
              <li>Kamperingweg 45-D</li>
              <li>2803 PE, Gouda</li>
              <li>
                Telefoon:{' '}
                <a href={`tel:${PHONE_NUMBER_TEL}`} className="text-blue-600 hover:text-blue-700">
                  {DISPLAY_PHONE_NUMBER}
                </a>
              </li>
              <li>
                E-mail:{' '}
                <a
                  className="text-blue-600 hover:text-blue-700"
                  href="mailto:info@adviesneutraal.nl"
                >
                  info@adviesneutraal.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {getDomainConfig().siteTitle}. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  )
}
