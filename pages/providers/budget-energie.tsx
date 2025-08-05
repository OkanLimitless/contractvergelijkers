import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function BudgetEnergie() {
  const [phoneNumber] = useState('+31 85 087 2183')

  return (
    <>
      <Head>
        <title>Budget Energie Informatie 2025 - Voordelige Tarieven | Contractvergelijkers</title>
        <meta name="description" content="Budget Energie informatie 2025: Voordelige energietarieven, eenvoudige contracten en klantenservice. Vergelijk via Contractvergelijkers." />
        <meta name="keywords" content="Budget Energie tarieven 2025, goedkope energie, Budget Energie overstappen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-green-600 to-blue-800">
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
            <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-6 text-sm uppercase tracking-wide">
              💰 Budget Energie Informatie 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Budget Energie{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Voordelige Tarieven
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Budget Energie is onderdeel van Budget Thuis en richt zich op voordelige, 
              eenvoudige energiecontracten zonder poespas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-yellow-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-yellow-400">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-white font-bold mb-2">Voordelig</h3>
              <p className="text-yellow-100 text-sm">Scherpe prijzen</p>
            </div>
            <div className="bg-orange-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-orange-400">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-white font-bold mb-2">Eenvoudig</h3>
              <p className="text-blue-100 text-sm">Simpele contracten</p>
            </div>
            <div className="bg-green-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-green-400">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-white font-bold mb-2">Budget Thuis</h3>
              <p className="text-blue-100 text-sm">Onderdeel van groep</p>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-blue-400">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">Transparant</h3>
              <p className="text-blue-100 text-sm">Geen verborgen kosten</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Is Budget Energie de goedkoopste voor u?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
              Budget Energie richt zich op lage prijzen, maar is het ook echt de goedkoopste? 
              Vergelijk alle opties en ontdek waar u het meeste bespaart.
            </p>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-black text-yellow-400 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors shadow-xl"
            >
              📞 Vergelijk Budget Energie Tarieven
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