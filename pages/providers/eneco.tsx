import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { loadBrandContent, type BrandContent } from '../../lib/content'
import { getDisplayPhoneNumber, getPhoneNumberTel } from '../../lib/config'

interface EnecoProps {
  content: BrandContent | null
}

export default function Eneco({ content }: EnecoProps) {
  const brandContent = content
  const phoneNumber = getPhoneNumberTel()
  const displayPhone = getDisplayPhoneNumber()

  return (
    <>
      <Head>
        <title>{brandContent?.pageTitle || 'Eneco Informatie 2025 - Duurzame Energie & Tarieven | Adviesneutraal'}</title>
        <meta name="description" content={brandContent?.metaDescription || 'Eneco informatie 2025: 100% Nederlandse windenergie, tarieven, klantenservice en overstappen. Vergelijk Eneco via Adviesneutraal.'} />
        <meta name="keywords" content="Eneco tarieven 2025, Eneco groene energie, Eneco klantenservice, Eneco overstappen, duurzame energie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-green-600 to-blue-800">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
            ← Adviesneutraal
          </Link>
          <a href={`tel:${phoneNumber}`} className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition-colors font-bold text-lg shadow-lg">
            {brandContent?.primaryCTA || `📞 ${displayPhone}`}
          </a>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="bg-green-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-6 text-sm uppercase tracking-wide">
              🌱 Eneco Informatie 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {brandContent?.heroTitle || 'Eneco Duurzame Energie 2025'}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {brandContent?.heroSubtitle || 'Eneco is een van de oudste en meest duurzame energieleveranciers van Nederland. 100% Nederlandse windenergie en een groot duurzaam portfolio.'}
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-green-400">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-white font-bold mb-2">100% Groene Stroom</h3>
              <p className="text-green-100 text-sm">Nederlandse windenergie</p>
            </div>
            <div className="bg-emerald-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-emerald-400">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-white font-bold mb-2">Sinds 1995</h3>
              <p className="text-blue-100 text-sm">Één van de oudste leveranciers</p>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-blue-400">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-white font-bold mb-2">2+ Miljoen Klanten</h3>
              <p className="text-blue-100 text-sm">Huishoudens en bedrijven</p>
            </div>
            <div className="bg-yellow-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-yellow-400">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-white font-bold mb-2">Innovatief</h3>
              <p className="text-blue-100 text-sm">Slimme energie oplossingen</p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Over Eneco</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">🏢 Bedrijfsinformatie</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Opgericht:</strong> 1995</li>
                    <li>• <strong>Hoofdkantoor:</strong> Rotterdam</li>
                    <li>• <strong>Eigenaar:</strong> Nederlandse gemeenten</li>
                    <li>• <strong>Marktpositie:</strong> #2 energieleverancier Nederland</li>
                    <li>• <strong>Klanten:</strong> 2+ miljoen huishoudens en bedrijven</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">🌱 Duurzaamheid</h3>
                  <ul className="text-green-100 space-y-2">
                    <li>• 100% Nederlandse windenergie</li>
                    <li>• Eigen windparken op de Noordzee</li>
                    <li>• Geen kernenergie of fossiele brandstoffen</li>
                    <li>• CO₂-neutraal bedrijf sinds 2007</li>
                    <li>• Investeert miljarden in duurzame energie</li>
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
                    <li>• <strong>Eneco Groen:</strong> 100% Nederlandse wind</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">📞 Klantenservice</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Telefoonnummer:</strong> 088 - 895 95 95</li>
                    <li>• <strong>Openingstijden:</strong> Ma-Vr 08:00-20:00</li>
                    <li>• <strong>Online:</strong> Mijn Eneco app & website</li>
                    <li>• <strong>Storingen:</strong> 0800 - 1884</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Eneco Voordelen & Nadelen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-500/20 backdrop-blur-lg rounded-xl p-8 border border-green-400">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Voordelen
              </h3>
              <ul className="text-green-100 space-y-3">
                <li>• 100% Nederlandse duurzame energie</li>
                <li>• Eigen windparken, niet ingekocht groen gas</li>
                <li>• Lange geschiedenis en betrouwbaarheid</li>
                <li>• Goede klantenservice en app</li>
                <li>• Innovatieve slimme energie oplossingen</li>
                <li>• Transparant over herkomst energie</li>
                <li>• Actief in energietransitie</li>
              </ul>
            </div>
            <div className="bg-red-500/20 backdrop-blur-lg rounded-xl p-8 border border-red-400">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                Nadelen
              </h3>
              <ul className="text-red-100 space-y-3">
                <li>• Vaak duurder dan budget leveranciers</li>
                <li>• Duurzaamheid kost extra geld</li>
                <li>• Beperktere contractvariaties dan Essent</li>
                <li>• Variabele tarieven kunnen stijgen</li>
                <li>• Focus op groen = minder goedkope opties</li>
                <li>• Opzegtermijn van 1 maand</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison CTA */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Is Eneco de beste keuze voor u?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Wilt u 100% Nederlandse duurzame energie? Of zoekt u juist de goedkoopste optie? 
              Laat onze experts alle mogelijkheden vergelijken voor uw situatie.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl"
              >
                📞 Vergelijk Eneco met Andere Aanbieders
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

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await loadBrandContent('eneco')
  return {
    props: {
      content
    }
  }
}