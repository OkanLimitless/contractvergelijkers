import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Greenchoice() {
  const [phoneNumber] = useState('+31 85 087 2183')

  return (
    <>
      <Head>
        <title>Greenchoice Informatie 2025 - 100% Duurzame Energie | Contractvergelijkers</title>
        <meta name="description" content="Greenchoice informatie 2025: Nederlandse groene energie pionier, 100% duurzame elektriciteit, tarieven en klantenservice. Vergelijk via Contractvergelijkers." />
        <meta name="keywords" content="Greenchoice tarieven 2025, groene energie, duurzame stroom, Greenchoice overstappen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-green-600 via-emerald-600 to-green-800">
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
            ← Contractvergelijkers
          </Link>
          <a href={`tel:${phoneNumber}`} className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition-colors font-bold text-lg shadow-lg">
            📞 {phoneNumber}
          </a>
        </nav>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="bg-green-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-6 text-sm uppercase tracking-wide">
              🌱 Greenchoice Informatie 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Greenchoice{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Groene Energie Pionier
              </span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              Greenchoice is de Nederlandse groene energie pionier. 
              Al meer dan 20 jaar 100% duurzame elektriciteit voor bewuste consumenten.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-500/30 backdrop-blur-lg rounded-xl p-6 text-center border border-green-300">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-white font-bold mb-2">100% Groen</h3>
              <p className="text-green-100 text-sm">Duurzame elektriciteit</p>
            </div>
            <div className="bg-emerald-500/30 backdrop-blur-lg rounded-xl p-6 text-center border border-emerald-300">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-white font-bold mb-2">Pionier</h3>
              <p className="text-green-100 text-sm">20+ jaar ervaring</p>
            </div>
            <div className="bg-cyan-500/30 backdrop-blur-lg rounded-xl p-6 text-center border border-cyan-300">
              <div className="text-3xl mb-3">🇳🇱</div>
              <h3 className="text-white font-bold mb-2">Nederlands</h3>
              <p className="text-green-100 text-sm">Lokale duurzame bronnen</p>
            </div>
            <div className="bg-lime-500/30 backdrop-blur-lg rounded-xl p-6 text-center border border-lime-300">
              <div className="text-3xl mb-3">♻️</div>
              <h3 className="text-white font-bold mb-2">Bewust</h3>
              <p className="text-green-100 text-sm">Voor bewuste consumenten</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Wilt u 100% groene energie?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
              Greenchoice is specialist in groene energie, maar vergelijk ook de prijzen. 
              Soms is duurzaam én goedkoop mogelijk bij een andere leverancier.
            </p>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-black text-green-400 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors shadow-xl"
            >
              🌱 Vergelijk Groene Energie Opties
            </a>
            <p className="text-black/70 mt-6 font-semibold">
              Bel gratis: Ma-Vr 09:00-20:30
            </p>
          </div>
        </section>

        <footer className="border-t border-white/20 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
              Contractvergelijkers
            </Link>
            <p className="text-green-200 mt-4">
              <a href={`tel:${phoneNumber}`} className="text-green-300 hover:text-green-200 font-bold">
                📞 {phoneNumber} - Ma-Vr 09:00-20:30
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}