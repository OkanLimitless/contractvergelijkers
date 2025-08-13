import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Vandebron() {
  const [phoneNumber] = useState('+31 85 087 2183')

  return (
    <>
      <Head>
        <title>Vandebron Informatie 2025 - 100% Nederlandse Duurzame Energie | Adviesneutraal</title>
        <meta name="description" content="Vandebron informatie 2025: 100% Nederlandse duurzame energie van lokale producenten. Tarieven, klantenservice en overstappen via Adviesneutraal." />
        <meta name="keywords" content="Vandebron tarieven 2025, lokale duurzame energie, Nederlandse producenten, Vandebron overstappen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-green-800">
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
            ← Adviesneutraal
          </Link>
          <a href={`tel:${phoneNumber}`} className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition-colors font-bold text-lg shadow-lg">
            📞 {phoneNumber}
          </a>
        </nav>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="bg-green-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-6 text-sm uppercase tracking-wide">
              🇳🇱 Vandebron Informatie 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vandebron{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Lokale Producenten
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Vandebron biedt 100% Nederlandse duurzame energie rechtstreeks van lokale producenten. 
              Transparant, eerlijk en volledig traceerbaar.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Wilt u energie van lokale producenten?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Vandebron heeft een uniek concept, maar vergelijk ook de kosten. 
              Wij helpen u de beste keuze maken voor uw situatie en portemonnee.
            </p>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl"
            >
              🇳🇱 Vergelijk Vandebron Tarieven
            </a>
          </div>
        </section>

        <footer className="border-t border-white/20 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
              Adviesneutraal
            </Link>
            <p className="text-blue-200 mt-4">
              <a href={`tel:${phoneNumber}`} className="text-green-400 hover:text-green-300 font-bold">
                📞 {phoneNumber} - Ma-Vr 09:00-20:30
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}