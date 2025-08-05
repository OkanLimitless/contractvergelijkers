import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [phoneNumber] = useState('+31 85 087 2183')

  return (
    <>
      <Head>
        <title>Contractvergelijkers - Klantenservice Alle Energieleveranciers | +31 85 087 2183</title>
        <meta name="description" content="Zoekt u klantenservice van uw energieleverancier? Wij vergelijken ALLE energiecontracten in Nederland. Bel direct: +31 85 087 2183" />
        <meta name="keywords" content="klantenservice energie, energieleverancier telefoonnummer, energie vergelijken, Essent klantenservice, Eneco klantenservice, Vattenfall klantenservice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://contractvergelijkers.nl/" />
        <meta property="og:title" content="Contractvergelijkers - Klantenservice Alle Energieleveranciers" />
        <meta property="og:description" content="Zoekt u klantenservice van uw energieleverancier? Wij vergelijken ALLE energiecontracten in Nederland. Bel direct: +31 85 087 2183" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-green-600 to-blue-800">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <div className="text-white text-2xl font-bold">
            Contractvergelijkers
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-green-200 transition-colors">
              Home
            </a>
            <a href="#vergelijken" className="text-white hover:text-green-200 transition-colors">
              Vergelijken
            </a>
            <a href="#over-ons" className="text-white hover:text-green-200 transition-colors">
              Over Ons
            </a>
            <a href={`tel:${phoneNumber}`} className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition-colors font-semibold">
              📞 {phoneNumber}
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zoekt u{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              klantenservice
            </span>
            van uw energieleverancier?
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Wij helpen u direct! Vergelijk ALLE energiecontracten van Nederlandse leveranciers op één plek. 
            Bespaar tijd en geld met onze gratis vergelijkingsservice.
          </p>
          
          {/* Phone CTA */}
          <div className="max-w-lg mx-auto mb-8">
            <a 
              href={`tel:${phoneNumber}`}
              className="block bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-300 transition-colors shadow-lg"
            >
              📞 Bel Direct: {phoneNumber}
            </a>
            <p className="text-blue-200 mt-3">
              🕒 Maandag - Vrijdag: 08:00 - 20:00 | Weekend: 10:00 - 18:00
            </p>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Waarom kiezen voor Contractvergelijkers?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Betrouwbaar</h3>
              <p className="text-blue-100 text-sm">
                Officiële partner van alle grote energieleveranciers
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">Gratis Service</h3>
              <p className="text-blue-100 text-sm">
                Geen verborgen kosten, volledig gratis vergelijken
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-white mb-2">200+ Adviseurs</h3>
              <p className="text-blue-100 text-sm">
                Professioneel callcenter met ervaren energieadviseurs
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Alle Leveranciers</h3>
              <p className="text-blue-100 text-sm">
                Essent, Eneco, Vattenfall, Budget Energie en meer
              </p>
            </div>
          </div>
        </section>

        {/* Energy Providers Section */}
        <section id="vergelijken" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Alle Nederlandse Energieleveranciers
          </h2>
          <p className="text-xl text-blue-100 text-center mb-12 max-w-3xl mx-auto">
            Wij vergelijken contracten van ALLE energieleveranciers in Nederland. 
            Zoekt u klantenservice van een specifieke leverancier? Bel ons direct!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Essent', description: 'Grootste energieleverancier van Nederland' },
              { name: 'Eneco', description: 'Duurzame energie voor iedereen' },
              { name: 'Vattenfall', description: 'Betrouwbare energieleverancier' },
              { name: 'Budget Energie', description: 'Voordelige energietarieven' },
              { name: 'Greenchoice', description: '100% groene energie' },
              { name: 'NUON', description: 'Energie voor thuis en bedrijf' }
            ].map((provider) => (
              <div key={provider.name} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
                <p className="text-blue-100 mb-4">{provider.description}</p>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="block bg-green-400 text-black px-4 py-2 rounded-lg text-center font-semibold hover:bg-green-300 transition-colors"
                >
                  Vergelijk {provider.name} Tarieven
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-white/5 rounded-xl p-8">
            <p className="text-blue-100 mb-4">
              En nog veel meer leveranciers zoals: Oxxio, Nederlandse Energie Maatschappij, Pure Energie, 
              United Consumers, Welkom Energie, en vele anderen...
            </p>
            <a 
              href={`tel:${phoneNumber}`}
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Vergelijk Alle Leveranciers - Bel Nu!
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Hoe werkt het?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-400 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bel Ons</h3>
              <p className="text-blue-100">
                Bel direct naar {phoneNumber} en vertel ons wat u zoekt
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-400 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Wij Vergelijken</h3>
              <p className="text-blue-100">
                Onze adviseurs vergelijken alle beschikbare tarieven voor u
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-400 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">U Bespaart</h3>
              <p className="text-blue-100">
                Krijg het beste aanbod en bespaar op uw energierekening
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="over-ons" className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Over Contractvergelijkers</h2>
            <div className="text-blue-100 space-y-4">
              <p>
                Wij zijn het grootste onafhankelijke energievergelijkingsplatform van Nederland. 
                Met ons team van 200+ ervaren energieadviseurs helpen wij dagelijks duizenden 
                Nederlanders bij het vinden van het beste energiecontract.
              </p>
              <p>
                Of u nu op zoek bent naar klantenservice van uw huidige leverancier, of een 
                nieuw contract wilt afsluiten - wij staan voor u klaar met gratis, 
                onafhankelijk advies.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-blue-100">
            <p>&copy; 2024 Contractvergelijkers. Alle rechten voorbehouden.</p>
            <p className="mt-2">
              <a href={`tel:${phoneNumber}`} className="text-green-400 hover:text-green-300">
                {phoneNumber}
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}