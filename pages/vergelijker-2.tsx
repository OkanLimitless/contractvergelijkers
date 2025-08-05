import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

export default function Vergelijker2() {
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
      setShowStickyButton(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Bespaar €700 Per Jaar op Energie | Direct Vergelijken | Contractvergelijkers</title>
        <meta name="description" content="Vergelijk alle energieleveranciers en bespaar tot €700 per jaar. Onafhankelijk advies van energiespecialisten. Bel gratis voor je persoonlijke besparing!" />
        <meta name="keywords" content="energie besparen, energietarieven vergelijken, goedkoopste energie, energie overstappen, energierekening verlagen" />
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
                <img src="/logos/contractvergelijkers-logo.png" alt="Contractvergelijkers" className="h-14 md:h-16 w-auto" />
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">💰 Gratis Bespaaradvies:</span>
                <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8">
              <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-6">
                💰 VERGELIJK & BESPAAR TOT €700
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Betaal Je Te Veel Voor{' '}
                <span className="text-green-500">Energie?</span>
                <br />
                <span className="text-2xl md:text-4xl text-gray-700">Bespaar Direct €700!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                <strong>95% van de Nederlanders betaalt teveel voor energie!</strong> Onze energiespecialisten 
                vergelijken alle leveranciers en vinden de goedkoopste voor jou. <strong>Gemiddelde besparing: €700 per jaar.</strong>
              </p>
            </div>

            {/* Savings Calculator Mock */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🧮 Snelle Besparingscalculator</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-500">€1.847</div>
                    <div className="text-xs text-gray-600">Gemiddelde kosten</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-gray-500">→</div>
                    <div className="text-xs text-gray-600">Naar goedkoopste</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">€1.147</div>
                    <div className="text-xs text-gray-600">Nieuwe kosten</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                  <div className="text-xl font-bold text-green-600">Jouw besparing: €700 per jaar!</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center space-x-8 mb-12 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Alle Leveranciers
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                100% Onafhankelijk
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                €700 Besparing
              </div>
            </div>

            {/* CTA Buttons - Money Focus */}
            <div className="space-y-4 mb-12">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="block w-full bg-green-500 text-white px-8 py-6 rounded-xl font-bold text-xl hover:bg-green-600 transition-colors shadow-2xl text-center"
              >
                💰 BEL NU VOOR JE BESPARING
                <div className="text-2xl font-black mt-1">{phoneNumber}</div>
                <div className="text-sm font-normal">Gratis vergelijking - €700 gemiddelde besparing</div>
              </a>
              <button 
                onClick={() => document.getElementById('vergelijker')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg"
              >
                📊 Of Bereken Direct Je Besparing (2 Min)
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Vandaag al geholpen:</strong>
              </p>
              <div className="flex justify-center space-x-6 text-xs text-gray-500">
                <span>• Anna uit Utrecht: €640 bespaard</span>
                <span>• Marco uit Amsterdam: €780 bespaard</span>
                <span>• Linda uit Rotterdam: €590 bespaard</span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Form Section */}
        <section id="vergelijker" className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  💰 Bereken Je Exacte Besparing
                </h2>
                <p className="text-gray-600 mb-4">
                  Vul je gegevens in en we berekenen direct hoeveel je kunt besparen
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 inline-block">
                  <span className="text-sm text-green-800 font-semibold">
                    💸 Gemiddelde besparing: €700 per jaar
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Stap {formStep} van 3</span>
                  <span className="text-sm text-gray-500">{Math.round((formStep / 3) * 100)}% voltooid</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Steps */}
              <div className="space-y-6">
                {/* Step 1: Location */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">📍 Waar woon je?</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Postcode*
                        </label>
                        <input
                          type="text"
                          placeholder="1234AB"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                          value={formData.postcode}
                          onChange={(e) => handleInputChange('postcode', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Huisnummer*
                        </label>
                        <input
                          type="text"
                          placeholder="12"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                          value={formData.huisnummer}
                          onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Woonsituatie*
                      </label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                        value={formData.woonsituatie}
                        onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                      >
                        <option value="">Selecteer je woonsituatie</option>
                        <option value="eengezinswoning">Eengezinswoning</option>
                        <option value="appartement">Appartement</option>
                        <option value="studio">Studio/kamer</option>
                      </select>
                    </div>

                    <button 
                      onClick={nextStep}
                      disabled={!formData.postcode || !formData.huisnummer || !formData.woonsituatie}
                      className="w-full bg-green-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Bereken Mijn Besparing ➤
                    </button>
                  </div>
                )}

                {/* Step 2: Current Supplier */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">🏢 Bij welke leverancier zit je nu?</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Huidige energieleverancier*
                      </label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                        value={formData.currentLeverancier}
                        onChange={(e) => handleInputChange('currentLeverancier', e.target.value)}
                      >
                        <option value="">Selecteer je leverancier</option>
                        <option value="eneco">Eneco (besparing: €650/jaar)</option>
                        <option value="essent">Essent (besparing: €720/jaar)</option>
                        <option value="vattenfall">Vattenfall (besparing: €580/jaar)</option>
                        <option value="budget-energie">Budget Energie (besparing: €420/jaar)</option>
                        <option value="greenchoice">GreenChoice (besparing: €680/jaar)</option>
                        <option value="anders">Anders</option>
                        <option value="weet-niet">Weet ik niet</option>
                      </select>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        💡 <strong>Wist je dat:</strong> Veel mensen betalen €50-60 per maand teveel door bij hun oude leverancier te blijven!
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <button 
                        onClick={prevStep}
                        className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-bold hover:bg-gray-400 transition-colors"
                      >
                        ← Vorige
                      </button>
                      <button 
                        onClick={nextStep}
                        disabled={!formData.currentLeverancier}
                        className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Volgende ➤
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Usage & Contact */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">⚡ Wat is je verbruik ongeveer?</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Stroomverbruik per jaar
                        </label>
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                          value={formData.verbruikStroom}
                          onChange={(e) => handleInputChange('verbruikStroom', e.target.value)}
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="0-2000">0 - 2.000 kWh (besparing: €200-400)</option>
                          <option value="2000-3500">2.000 - 3.500 kWh (besparing: €400-600)</option>
                          <option value="3500-5000">3.500 - 5.000 kWh (besparing: €600-800)</option>
                          <option value="5000+">Meer dan 5.000 kWh (besparing: €800+)</option>
                          <option value="weet-niet">Weet ik niet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gasverbruik per jaar
                        </label>
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                          value={formData.verbruikGas}
                          onChange={(e) => handleInputChange('verbruikGas', e.target.value)}
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="0-500">0 - 500 m³ (besparing: €100-200)</option>
                          <option value="500-1200">500 - 1.200 m³ (besparing: €200-400)</option>
                          <option value="1200-2000">1.200 - 2.000 m³ (besparing: €400-600)</option>
                          <option value="2000+">Meer dan 2.000 m³ (besparing: €600+)</option>
                          <option value="geen-gas">Geen gas</option>
                          <option value="weet-niet">Weet ik niet</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg text-center border-2 border-yellow-200">
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">🎯 Je Persoonlijke Besparing</h4>
                      <div className="text-3xl font-black text-green-600 mb-2">€700 per jaar</div>
                      <p className="text-yellow-700 mb-4">
                        Dit is €58 per maand minder dan je nu betaalt! Onze specialisten bellen je nu 
                        om de overstap te regelen.
                      </p>
                      <p className="text-xs text-yellow-600">
                        *Besparing gebaseerd op je gegevens en gemiddelde tarieven
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <button 
                        onClick={prevStep}
                        className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-bold hover:bg-gray-400 transition-colors"
                      >
                        ← Vorige
                      </button>
                      <a 
                        href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                        onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                        className="flex-1 bg-green-500 text-white py-4 px-6 rounded-lg font-bold hover:bg-green-600 transition-colors text-center"
                      >
                        💰 CLAIM €700 BESPARING
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Savings Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Echte Besparingen Van Onze Klanten</h2>
              <p className="text-xl text-gray-600">Zie wat anderen bespaard hebben door over te stappen</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">€847 Bespaard</h3>
                <p className="text-gray-600 mb-4">
                  "Door over te stappen van Eneco naar de goedkoopste leverancier bespaar ik nu €847 per jaar!"
                </p>
                <div className="text-sm text-gray-500">- Sarah, Amsterdam</div>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">€623 Bespaard</h3>
                <p className="text-gray-600 mb-4">
                  "Binnen 5 minuten alles geregeld. Mijn energierekening is nu €50 per maand lager!"
                </p>
                <div className="text-sm text-gray-500">- Mark, Utrecht</div>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">€1.156 Bespaard</h3>
                <p className="text-gray-600 mb-4">
                  "Als groot gezin met hoog verbruik besparen we nu meer dan €95 per maand. Geweldig!"
                </p>
                <div className="text-sm text-gray-500">- Linda, Rotterdam</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                💰 Bereken Ook Jouw Besparing: {phoneNumber}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img src="/logos/contractvergelijkers-logo.png" alt="Contractvergelijkers" className="h-12 md:h-14 w-auto mb-4 brightness-0 invert" />
                <p className="text-gray-300 mb-4">
                  Nederland's grootste onafhankelijke energievergelijker. Gemiddeld €700 besparing per jaar.
                </p>
                <div className="flex space-x-4">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-400">4.9/5 (2.100+ reviews)</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Waarom Wij?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Alle leveranciers vergelijken</li>
                  <li>✓ 100% onafhankelijk advies</li>
                  <li>✓ Gratis service</li>
                  <li>✓ Overstap volledig geregeld</li>
                  <li>✓ Gemiddeld €700 besparing</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Bel Voor Je Besparing</h4>
                <div className="space-y-4">
                  <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="block">
                    <div className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition-colors">
                      <div className="text-sm">Gratis Bellen</div>
                      <div className="text-xl font-bold">{phoneNumber}</div>
                    </div>
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    Maandag t/m vrijdag: 08:00 - 22:00<br/>
                    Weekend: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Contractvergelijkers. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>

        {/* Sticky Call Button - Only show after scrolling */}
        {showStickyButton && (
          <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto">
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="block md:inline-flex bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 text-center"
            >
              <span className="text-2xl">💰</span>
              <div>
                <div className="text-sm md:hidden">€700 Besparing</div>
                <div className="hidden md:block text-sm">Bespaar €700</div>
                <div className="text-lg font-bold">{phoneNumber}</div>
              </div>
            </a>
          </div>
        )}
      </main>
    </>
  )
}