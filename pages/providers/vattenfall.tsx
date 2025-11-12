import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { loadBrandContent, type BrandContent } from '../../lib/content'
import { getDisplayPhoneNumber, getPhoneNumberTel } from '../../lib/config'

interface VattenfallProps {
  content: BrandContent | null
}

export default function Vattenfall({ content }: VattenfallProps) {
  const brandContent = content
  const phoneNumber = getPhoneNumberTel()
  const displayPhone = getDisplayPhoneNumber()

  return (
    <>
      <Head>
        <title>{brandContent?.pageTitle || 'Vattenfall Informatie 2025 - Betrouwbare Energie & Tarieven | Adviesneutraal'}</title>
        <meta name="description" content={brandContent?.metaDescription || 'Vattenfall informatie 2025: Zweedse energiegigant, betrouwbare elektriciteit en gas, tarieven en klantenservice. Vergelijk via Adviesneutraal.'} />
        <meta name="keywords" content="Vattenfall tarieven 2025, Vattenfall klantenservice, Vattenfall overstappen, Zweedse energieleverancier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-green-600 to-blue-800">
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <Link href="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors">
            ← Adviesneutraal
          </Link>
          <a href={`tel:${phoneNumber}`} className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition-colors font-bold text-lg shadow-lg">
            {brandContent?.primaryCTA || `📞 ${displayPhone}`}
          </a>
        </nav>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="bg-blue-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-6 text-sm uppercase tracking-wide">
              🏢 Vattenfall Informatie 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {brandContent?.heroTitle || 'Vattenfall Betrouwbare Energie 2025'}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {brandContent?.heroSubtitle || 'Vattenfall is een Zweedse energiegigant met meer dan 100 jaar ervaring. Betrouwbare elektriciteit en gas met focus op duurzaamheid en innovatie.'}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-blue-400">
              <div className="text-3xl mb-3">🇸🇪</div>
              <h3 className="text-white font-bold mb-2">Zweedse Gigant</h3>
              <p className="text-blue-100 text-sm">100+ jaar ervaring</p>
            </div>
            <div className="bg-cyan-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-cyan-400">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">Betrouwbaar</h3>
              <p className="text-blue-100 text-sm">Stabiele energielevering</p>
            </div>
            <div className="bg-green-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-green-400">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-white font-bold mb-2">Duurzaam</h3>
              <p className="text-blue-100 text-sm">Groene energie opties</p>
            </div>
            <div className="bg-purple-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-purple-400">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-white font-bold mb-2">Innovatief</h3>
              <p className="text-blue-100 text-sm">Moderne oplossingen</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Over Vattenfall</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">🏢 Bedrijfsinformatie</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Opgericht:</strong> 1909 (Zweden)</li>
                    <li>• <strong>In Nederland:</strong> Sinds 2009</li>
                    <li>• <strong>Eigenaar:</strong> Zweedse staat</li>
                    <li>• <strong>Marktpositie:</strong> Top 5 energieleverancier</li>
                    <li>• <strong>Focus:</strong> Betrouwbaarheid en service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">📞 Klantenservice</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Telefoonnummer:</strong> 088 - 0088 444</li>
                    <li>• <strong>Openingstijden:</strong> Ma-Vr 08:00-18:00</li>
                    <li>• <strong>Online:</strong> Mijn Vattenfall portal</li>
                    <li>• <strong>Storingen:</strong> Via online portaal</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">💰 Tariefstructuur</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• <strong>Variabel:</strong> Maandelijks aanpasbaar</li>
                    <li>• <strong>1 jaar vast:</strong> Prijszekerheid 12 maanden</li>
                    <li>• <strong>3 jaar vast:</strong> Langetermijn contract</li>
                    <li>• <strong>Groen:</strong> Duurzame energie opties</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">⚡ Diensten</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• Elektriciteit (grijs en groen)</li>
                    <li>• Aardgas</li>
                    <li>• Zakelijke energieoplossingen</li>
                    <li>• Online energiemanagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Is Vattenfall de beste keuze voor u?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Zoekt u een betrouwbare leverancier met internationale ervaring? 
              Vergelijk Vattenfall met alle andere opties via onze gratis service.
            </p>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl"
            >
              📞 Vergelijk Vattenfall Tarieven
            </a>
            <p className="text-white/80 mt-6 font-semibold">
              Bel gratis: Ma-Vr 09:00-20:30
            </p>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await loadBrandContent('vattenfall')
  return {
    props: {
      content
    }
  }
}