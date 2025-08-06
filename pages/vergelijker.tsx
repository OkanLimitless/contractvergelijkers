import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

export default function Vergelijker() {
  const [phoneNumber] = useState('085 087 2183')
  const [formStep, setFormStep] = useState(1)
  const [showStickyButton, setShowStickyButton] = useState(false)
  const [formData, setFormData] = useState({
    postcode: '',
    huisnummer: '',
    woonsituatie: '',
    currentLeverancier: '',
    verbruikStroom: '',
    verbruikGas: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1)
      // Track form completion when reaching final step
      if (formStep === 2) {
        gtag('event', 'conversion', {
          'send_to': 'AW-697295426/H2cDCNC_pfEaEMLEv8wC'
        })
      }
    }
  }

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past the hero section (approximately 600px)
      setShowStickyButton(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Bespaar Tot €600 Per Jaar op je Energierekening! | Contractvergelijkers</title>
        <meta name="description" content="Vergelijk alle energieleveranciers in Nederland en ontdek binnen 2 minuten hoeveel je kunt besparen. 100% Gratis advies." />
        <meta name="keywords" content="energie vergelijken, energierekening besparen, goedkoopste energie, energieleverancier vergelijken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Ads tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-697295426"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-697295426');
              
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-697295426/H2cDCNC_pfEaEMLEv8wC',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">⚡</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">Contractvergelijkers</span>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm hidden md:block">Direct hulp nodig? Bel ons nu:</span>
                <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                💰 <span className="text-black">Bespaar Tot</span>{' '}
                <span className="text-green-500">€600 Per Jaar</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-700">op je Energierekening!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Vergelijk <strong>alle energieleveranciers</strong> in Nederland en ontdek binnen 2 
                minuten hoeveel jij kunt besparen
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12 text-sm md:text-base">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600">🛡️</span>
                </div>
                <span className="font-medium text-gray-700">100% Gratis</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600">⚡</span>
                </div>
                <span className="font-medium text-gray-700">Binnen 2 Minuten</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600">📈</span>
                </div>
                <span className="font-medium text-gray-700">Gegarandeerd Besparen</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4 mb-8">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-green-600 transition-colors shadow-lg"
              >
                📞 Bel ons nu: {phoneNumber}
              </a>
              
              <p className="text-sm text-gray-600">
                contractvergelijkers.nl
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">✅ Start je Energievergelijking</h3>
              <p className="text-sm text-gray-600 mb-4">
                Vul onderstaand formulier in en ontdek binnen 2 minuten welke leverancier het 
                beste bij jou past!
              </p>
              
              {/* Enhanced Form Start */}
              <div className="space-y-3">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    📍 Waar woon je?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="1234AB"
                      value={formData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="12"
                      value={formData.huisnummer}
                      onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    🏠 Woonsituatie
                  </label>
                  <select
                    value={formData.woonsituatie}
                    onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  >
                    <option value="">Selecteer woonsituatie</option>
                    <option value="eengezinswoning">Eengezinswoning</option>
                    <option value="appartement">Appartement</option>
                    <option value="studio">Studio/kamer</option>
                  </select>
                </div>
                
                {formData.postcode && formData.huisnummer && formData.woonsituatie ? (
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 font-medium text-center">
                      ✅ Gegevens ontvangen! Bel nu voor je persoonlijke besparing
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      Vul je gegevens in voor een persoonlijke besparing
                    </p>
                  </div>
                )}
                
                <a
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors text-center"
                >
                  📞 Bel Nu: {phoneNumber}
                </a>
                
                <p className="text-xs text-gray-500 text-center">
                  Direct hulp nodig? Onze experts helpen je graag!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ⚡ Waarom Ons Bellen?
              </h2>
              <p className="text-gray-600 text-lg">
                Ontkant duizenden Nederlanders kiezen voor onze persoonlijke service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Onafhankelijk Basis Deal</h3>
                <p className="text-gray-600">
                  Wij gaan onafhankelijk vergelijken waardoor 
                  wij jou echt helpen, niet alleen ons zelf.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Gratis Advies</h3>
                <p className="text-gray-600">
                  Onze experts delen hun top energietips, beste 
                  deals zoals elke andere klant.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wij Regelen Alles</h3>
                <p className="text-gray-600">
                  Opzeggen huidige contract? Wij nemen het 
                  juridische deel voor onze rekening.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Zo Simpel Werkt Het</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Bel Ons</span>
                      <p className="text-sm text-gray-600">Wij vergelijken jouw huidige tarief</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Wij Vergelijken</span>
                      <p className="text-sm text-gray-600">Alle energieleveranciers worden vergeleken</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Bespaar Geld</span>
                      <p className="text-sm text-gray-600">Direct overstappen of aanbiedingen vergelijken</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Wij Regelen</span>
                      <p className="text-sm text-gray-600">Gehele overstaproces gaat automatisch</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-green-600 transition-colors shadow-lg"
                >
                  📞 Klaar om te Besparen?
                  <div className="text-2xl font-black mt-1">{phoneNumber}</div>
                </a>
                
                <p className="text-sm text-gray-600 mt-4">
                  Direct hulp nodig? Bel ons nu!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Quote Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                💬 Wat Onze Klanten Zeggen
              </h2>
              <p className="text-gray-600">
                Duizenden klanten kiezen gratis onze onze expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Binnen 10 minuten had ik een perfect overzicht van alle aanbieders. De telefonische service was uitstekend!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Sandra V.</div>
                  <div className="text-sm">€480 bespaard</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Snel service met transparante informatie. Precies wat ik zocht!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Mark B.</div>
                  <div className="text-sm">€600 bespaard</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Eindelijk een eerlijke vergelijking zonder verborgen kosten. Geweldig!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Linda K.</div>
                  <div className="text-sm">€520 bespaard</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-gray-700 italic mb-4">
                  "De adviseur heeft alles voor mij geregeld. Geen gedoe, gewoon besparen!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Emma J.</div>
                  <div className="text-sm">€445 bespaard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-green-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ❤️ Klaar om Honderden Euro's te Besparen?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Onze adviseurs geven je binnen 2 minuten een energieadvies maatwerk een direct gratis advies over jouw besparingen.
            </p>
            
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="inline-block bg-white text-green-500 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 Bel ons nu: {phoneNumber}
            </a>
            
            <p className="text-green-100 text-sm mt-4">
              contractvergelijkers.nl
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">⚡</span>
                  </div>
                  <span className="text-2xl font-bold text-white">Contractvergelijkers</span>
                </div>
                <p className="text-gray-300 mb-4">
                  De meest betrouwbare contractvergelijkers van Nederland.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <p className="text-gray-300 mb-2">📞 {phoneNumber}</p>
                <p className="text-gray-300 mb-2">🕐 Ma-Vr: 09:00-20:30</p>
                <p className="text-gray-300">✅ Gratis bellen vanuit heel Nederland</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Service</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>✅ 100% Gratis advies</li>
                  <li>✅ Binnen 2 minuten</li>
                  <li>✅ Gegarandeerd besparen</li>
                  <li>✅ Wij regelen alles</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Contractvergelijkers. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>

        {/* Sticky Call Button - Mobile Optimized - Only show after scrolling */}
        {showStickyButton && (
          <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto md:max-w-xs">
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-center transition-colors text-sm"
            >
              📞 Bel Direct: {phoneNumber}
            </a>
          </div>
        )}
      </main>
    </>
  )
}