import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Essent() {
  const [phoneNumber] = useState('+31 85 087 2183')

  return (
    <>
      <Head>
        <title>Essent Informatie 2025 - Tarieven & Overstappen | Adviesneutraal</title>
        <meta name="description" content="Essent informatie 2025: Tarieven, klantenservice, overstappen en reviews. Grootste energieleverancier van Nederland. Vergelijk nu via Adviesneutraal." />
        <meta name="keywords" content="Essent tarieven 2025, Essent klantenservice, Essent overstappen, Essent contract, energieleverancier Essent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-green-600 to-blue-800">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
            Adviesneutraal
          </Link>
          <a href={`tel:${phoneNumber}`} className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition-colors font-bold text-lg shadow-lg">
            📞 {phoneNumber}
          </a>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-6 text-sm uppercase tracking-wide">
              🆕 Essent Informatie 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Essent Tarieven &{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                Klantenservice 2025
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Essent is de grootste energieleverancier van Nederland met meer dan 3 miljoen klanten. 
              Vergelijk hun tarieven en service met andere aanbieders via onze gratis service.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-blue-400">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-white font-bold mb-2">Grootste Leverancier</h3>
              <p className="text-blue-100 text-sm">3+ miljoen klanten</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-green-400">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">Volledige Service</h3>
              <p className="text-blue-100 text-sm">Elektriciteit, gas & extra diensten</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-yellow-400">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-white font-bold mb-2">Groene Opties</h3>
              <p className="text-blue-100 text-sm">100% groene stroom beschikbaar</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-purple-400">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-white font-bold mb-2">Digitale Service</h3>
              <p className="text-blue-100 text-sm">Online portaal & app</p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Over Essent</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">🏢 Bedrijfsinformatie</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Opgericht:</strong> 1999 (fusie Pnem en Mega)</li>
                    <li>• <strong>Hoofdkantoor:</strong> Den Bosch</li>
                    <li>• <strong>Eigenaar:</strong> E.ON (Duits energieconcern)</li>
                    <li>• <strong>Marktpositie:</strong> #1 energieleverancier Nederland</li>
                    <li>• <strong>Klanten:</strong> 3+ miljoen huishoudens en bedrijven</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">⚡ Diensten</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• Elektriciteit (grijs en groen)</li>
                    <li>• Aardgas</li>
                    <li>• Zonnepanelen en installatie</li>
                    <li>• Warmtepompen</li>
                    <li>• Energieadvies voor bedrijven</li>
                    <li>• Slimme thermostaten</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">💰 Tariefstructuur</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Variabel:</strong> Maandelijks aanpasbare tarieven</li>
                    <li>• <strong>1 jaar vast:</strong> Prijsgarantie voor 12 maanden</li>
                    <li>• <strong>3 jaar vast:</strong> Langetermijn zekerheid</li>
                    <li>• <strong>Groen:</strong> 100% duurzame stroom opties</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">📞 Klantenservice</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Telefoonnummer:</strong> 073 - 850 95 95</li>
                    <li>• <strong>Openingstijden:</strong> Ma-Vr 08:00-20:00</li>
                    <li>• <strong>Online:</strong> MijnEssent portal</li>
                    <li>• <strong>Storingen:</strong> 0800 - 90 00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Essent Voordelen & Nadelen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-500/20 backdrop-blur-lg rounded-xl p-8 border border-green-400">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Voordelen
              </h3>
              <ul className="text-green-100 space-y-3">
                <li>• Grootste en meest ervaren leverancier</li>
                <li>• Uitgebreid servicenetwerk door heel Nederland</li>
                <li>• Goede klantenservice en online portaal</li>
                <li>• Brede range aan contractopties</li>
                <li>• Aanvullende diensten (zonnepanelen, warmtepompen)</li>
                <li>• Stabiele leverancier met lange geschiedenis</li>
                <li>• Groene energieopties beschikbaar</li>
              </ul>
            </div>
            <div className="bg-red-500/20 backdrop-blur-lg rounded-xl p-8 border border-red-400">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                Nadelen
              </h3>
              <ul className="text-red-100 space-y-3">
                <li>• Niet altijd de goedkoopste optie</li>
                <li>• Variabele tarieven kunnen snel stijgen</li>
                <li>• Grote organisatie = minder persoonlijk</li>
                <li>• Opzegtermijn van 1 maand</li>
                <li>• Servicekosten voor extra diensten</li>
                <li>• Minder scherp geprijsd dan kleinere aanbieders</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison CTA */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Is Essent de beste keuze voor u?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Laat onze experts alle opties vergelijken. Misschien bespaart u wel €300+ per jaar 
              door over te stappen naar een andere leverancier. Gratis advies, geen verplichtingen.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl"
              >
                📞 Vergelijk Essent met Andere Aanbieders
              </a>
              <Link 
                href="/"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-white/10 transition-colors"
              >
                🔍 Bekijk Alle Leveranciers
              </Link>
            </div>
            <p className="text-white/80 mt-6 font-semibold">
              Bel gratis: Ma-Vr 09:00-20:30
            </p>
          </div>
        </section>

        {/* How to Switch */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Overstappen van/naar Essent
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">🔄 Van Essent Naar Andere Leverancier</h3>
              <ol className="text-blue-100 space-y-3">
                <li><strong>1.</strong> Bel ons voor gratis advies en vergelijking</li>
                <li><strong>2.</strong> Wij vinden de beste deal voor uw situatie</li>
                <li><strong>3.</strong> Wij regelen de complete overstap voor u</li>
                <li><strong>4.</strong> Opzegtermijn Essent: 1 maand</li>
                <li><strong>5.</strong> Nieuwe leverancier neemt over binnen 2-3 weken</li>
              </ol>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">➡️ Naar Essent Overstappen</h3>
              <ol className="text-blue-100 space-y-3">
                <li><strong>1.</strong> Vergelijk eerst alle opties via ons</li>
                <li><strong>2.</strong> Wij checken of Essent de beste keuze is</li>
                <li><strong>3.</strong> Indien gewenst regelen wij overstap naar Essent</li>
                <li><strong>4.</strong> Essent regelt opzegging huidige leverancier</li>
                <li><strong>5.</strong> Overstap binnen 2-3 weken geregeld</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <div className="mb-6">
              <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
                Adviesneutraal
              </Link>
              <p className="text-blue-200 mt-2">
                Onafhankelijk energievergelijker • 200+ adviseurs • Gratis service
              </p>
            </div>
            <div className="border-t border-white/20 pt-6 text-blue-200">
              <p>&copy; 2025 Adviesneutraal. Alle rechten voorbehouden.</p>
              <p className="mt-2">
                <a href={`tel:${phoneNumber}`} className="text-green-400 hover:text-green-300 font-bold">
                  📞 {phoneNumber} - Ma-Vr 09:00-20:30
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}