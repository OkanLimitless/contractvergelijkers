import { Clock, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react'
import Head from 'next/head'
import { FormEvent } from 'react'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'

const contactOptions = [
  {
    title: 'Bel met een adviseur',
    description:
      'Direct antwoord op uw vraag. We analyseren samen uw situatie en geven concrete vervolgstappen mee.',
    icon: Phone,
    detail: DISPLAY_PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER_TEL}`,
    cta: 'Bel nu',
  },
  {
    title: 'Stuur een e-mail',
    description: 'Liever schriftelijk? Stuur uw vraag en relevante gegevens naar ons supportteam.',
    icon: Mail,
    detail: 'info@adviesneutraal.nl',
    href: 'mailto:info@adviesneutraal.nl',
    cta: 'Stuur e-mail',
  },
  {
    title: 'WhatsApp-service',
    description:
      'Stuur documenten of meterstanden via WhatsApp. We reageren binnen kantooruren.',
    icon: MessageCircle,
    detail: '+31 6 4400 2147',
    href: 'https://wa.me/31644002147',
    cta: 'Open WhatsApp',
  },
]

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Contact | AdviesNeutraal</title>
        <meta
          name="description"
          content="Neem contact op met AdviesNeutraal voor onafhankelijk energieadvies. Bel, mail of stuur een bericht via WhatsApp. Wij reageren binnen een werkdag."
        />
      </Head>

      <div className="flex-1">
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Contact met AdviesNeutraal
            </h1>
            <p className="mt-4 text-base text-blue-100 sm:text-lg">
              Heeft u vragen over uw energiecontract, leverancier of verduurzaming? Onze adviseurs staan
              voor u klaar. U kiest zelf het kanaal dat het beste bij u past.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {contactOptions.map((option) => (
                <a
                  key={option.title}
                  href={option.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <option.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{option.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{option.description}</p>
                  <div className="mt-4 text-sm font-semibold text-blue-600">{option.detail}</div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    {option.cta}
                    <Send className="h-4 w-4" aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[3fr,2fr]">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Stuur uw vraag of terugbelverzoek
                </h2>
                <p className="mt-4 text-sm text-slate-600">
                  Vul onderstaande gegevens in en wij nemen binnen een werkdag contact met u op. Uw gegevens
                  worden uitsluitend gebruikt om uw vraag te beantwoorden.
                </p>
                <form
                  className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  aria-label="Contactformulier"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                      Naam
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      placeholder="Voor- en achternaam"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                        placeholder="naam@email.nl"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                        Telefoonnummer
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                        placeholder="Bijvoorbeeld 06 12345678"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900">
                      Onderwerp
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      placeholder="Waar gaat uw vraag over?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                      Beschrijf uw vraag
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      placeholder="Geef een korte toelichting zodat wij u gericht kunnen helpen."
                    />
                  </div>
                  <div className="text-xs text-slate-500">
                    Door dit formulier te verzenden gaat u akkoord met onze{' '}
                    <a href="/privacy" className="text-blue-600 underline">
                      privacyverklaring
                    </a>
                    . We gebruiken uw gegevens alleen om uw vraag te beantwoorden.
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    Verstuur bericht
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    We reageren uiterlijk binnen een werkdag. Heeft u spoed? Bel ons servicenummer.
                  </p>
                </form>
              </div>
              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Bezoek- en postadres</h3>
                <div className="mt-4 flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="mt-1 h-5 w-5 text-blue-600" aria-hidden />
                  <div>
                    <p>AdviesNeutraal</p>
                    <p>Kamperingweg 45-D</p>
                    <p>2803 PE Gouda</p>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-3 text-sm text-slate-600">
                  <Clock className="mt-1 h-5 w-5 text-blue-600" aria-hidden />
                  <div>
                    <p>Openingstijden klantenservice</p>
                    <p>Maandag t/m vrijdag: 08:00 - 20:00</p>
                    <p>Zaterdag en zondag: 10:00 - 16:00</p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                  <ShieldCheck className="mb-2 h-5 w-5 text-blue-600" aria-hidden />
                  <p>
                    Uw gegevens worden beveiligd verstuurd. We slaan ze alleen op zolang nodig is om uw vraag
                    te beantwoorden en verwijderen ze daarna automatisch.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm">
              <p>
                Wilt u wijzigingen doorgeven aan uw energieleverancier? Neem dan rechtstreeks contact op met
                de officiele klantenservice van uw leverancier. We helpen u graag aan de juiste contactgegevens
                via onze{' '}
                <a href="/klantenservice" className="text-blue-600 underline">
                  klantenservicepagina
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
