import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [phoneNumber] = useState('085 087 0276')

  return (
    <>
      <Head>
        <title>AdviesNeutraal | Onafhankelijk energie-advies</title>
        <meta name="description" content="AdviesNeutraal: onafhankelijk energie-advies en tarieven vergelijken. Geen leverancier. Bel: +31 85 087 0276." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg md:text-xl font-bold">⚡</span>
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-gray-900">AdviesNeutraal</span>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm hidden md:block">Direct hulp nodig? Bel ons nu:</span>
                <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero / Primary CTA */}
        <section className="bg-white pt-8 pb-12 md:py-16">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col">
            <div className="bg-blue-600 text-white p-8 rounded-xl mb-8 order-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Direct energie-advies van AdviesNeutraal</h1>
              <p className="text-blue-100 mb-6">
                Onafhankelijk advies en tarieven vergelijken. Wij zijn geen energieleverancier en geen officiële klantenservice van leveranciers.
              </p>
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                📞 Bel Direct: {phoneNumber}
              </a>
              <p className="text-sm text-blue-200 mt-4">Maandag t/m vrijdag: 08:00 - 20:00 | Weekend: 10:00 - 16:00</p>
            </div>

            {/* Compliance Highlights */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Transparant & Onafhankelijk</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Wij zijn een onafhankelijk adviesplatform en geen energieleverancier</li>
                <li>Wij behandelen geen klantdossiers van energieleveranciers</li>
                <li>Onze dienst is gratis voor consumenten</li>
                <li>Bij een overstap kunnen wij een vergoeding ontvangen van een leverancier of partner; dit beïnvloedt ons advies niet</li>
                <li>Wij adviseren op basis van uw situatie (verbruik, postcode, voorkeuren)</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Meer informatie over verwerking van persoonsgegevens: <Link href="/privacy" className="underline">Privacy</Link>
              </p>
            </div>
          </div>
        </section>

        {/* About / Simple Info */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Onafhankelijk Advies</h3>
                <p className="text-gray-600 text-sm">Wij vergelijken objectief en leggen opties helder uit.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Duidelijke Uitleg</h3>
                <p className="text-gray-600 text-sm">Begrijpelijke informatie over tarieven, contracten en overstappen.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Gratis Service</h3>
                <p className="text-gray-600 text-sm">Onze hulp is gratis voor consumenten.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">⚡</span>
                  </div>
                  <span className="text-xl font-bold">AdviesNeutraal</span>
                </div>
                <p className="text-gray-300 mb-4">Transparant en onafhankelijk energie-advies.</p>
                <div className="flex space-x-4">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-400">4.9/5 (2.100+ reviews)</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Informatie</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Onafhankelijk advies</li>
                  <li>✓ Geen leverancier</li>
                  <li>✓ Gratis service</li>
                  <li>
                    <Link href="/privacy" className="underline text-gray-300 hover:text-white">Privacy</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact</h4>
                <div className="space-y-4">
                  <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="block">
                    <div className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                      <div className="text-sm">Bel Klantenservice</div>
                      <div className="text-xl font-bold">{phoneNumber}</div>
                    </div>
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    Maandag t/m vrijdag: 08:00 - 20:00 | Weekend: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 AdviesNeutraal. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>

        {/* Sticky Call Button */}
        <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto md:max-w-xs">
          <a 
            href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
            className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-center transition-colors text-sm"
          >
            📞 Bel Direct: {phoneNumber}
          </a>
        </div>
      </main>
    </>
  )
}