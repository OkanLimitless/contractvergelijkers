import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Vergelijker() {
  const [phoneNumber] = useState('+31 85 087 2183')
  const [formStep, setFormStep] = useState(1)
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
    if (formStep < 3) setFormStep(formStep + 1)
  }

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1)
  }

  return (
    <>
      <Head>
        <title>Bespaar Tot €600 Per Jaar op je Energierekening! | Contractvergelijkers</title>
        <meta name="description" content="Vergelijk alle energieleveranciers in Nederland en ontdek binnen 2 minuten hoeveel je kunt besparen. Gratis vergelijking, onafhankelijk advies." />
        <meta name="keywords" content="energie vergelijken, energierekening besparen, goedkoopste energie, energieleverancier vergelijken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <img src="/logos/contractvergelijkers-logo.svg" alt="Contractvergelijkers" className="h-8 w-auto" />
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">📞 Gratis bellen:</span>
                <a href={`tel:${phoneNumber}`} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors">
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
              <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                💰 ENERGIE VERGELIJKER 2025
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Bespaar Tot{' '}
                <span className="text-green-500">€600 Per Jaar</span>
                <br />
                op je Energierekening!
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Vergelijk alle energieleveranciers in Nederland en ontdek binnen 2 
                minuten hoeveel je kunt besparen met onze gratis vergelijkingsservice.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center space-x-8 mb-12 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                100% Gratis
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Binnen 2 Minuten
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Onafhankelijk Advies
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('vergelijker')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                🚀 Start Je Energievergelijking
              </button>
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
              >
                📞 Bel Direct: {phoneNumber}
              </a>
            </div>

            <p className="text-sm text-gray-500">
              ⭐ Direct beoordeling met alle energieleveranciers | Geen verborgen kosten | Ma-Vr 09:00-20:30
            </p>
          </div>
        </section>

        {/* Comparison Form Section */}
        <section id="vergelijker" className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🔥 Start Je Energievergelijking
                </h2>
                <p className="text-gray-600">
                  Vul onderstaand formulier in en ontvang binnen 2 minuten het beste energietarief
                </p>
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
                          placeholder="1234 AB"
                          value={formData.postcode}
                          onChange={(e) => handleInputChange('postcode', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Huisnummer*
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          value={formData.huisnummer}
                          onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Woonsituatie*
                      </label>
                      <select
                        value={formData.woonsituatie}
                        onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Kies je woonsituatie</option>
                        <option value="eengezinswoning">Eengezinswoning</option>
                        <option value="appartement">Appartement</option>
                        <option value="studio">Studio</option>
                        <option value="kamer">Kamer</option>
                      </select>
                    </div>

                    <button
                      onClick={nextStep}
                      disabled={!formData.postcode || !formData.huisnummer || !formData.woonsituatie}
                      className="w-full bg-green-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Volgende Stap →
                    </button>
                  </div>
                )}

                {/* Step 2: Current Situation */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">⚡ Huidige Energiesituatie</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Huidige energieleverancier*
                      </label>
                      <select
                        value={formData.currentLeverancier}
                        onChange={(e) => handleInputChange('currentLeverancier', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Kies je huidige leverancier</option>
                        <option value="essent">Essent</option>
                        <option value="eneco">Eneco</option>
                        <option value="vattenfall">Vattenfall</option>
                        <option value="budget-energie">Budget Energie</option>
                        <option value="greenchoice">Greenchoice</option>
                        <option value="andere">Andere</option>
                        <option value="weet-niet">Weet ik niet</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Stroomverbruik per jaar
                        </label>
                        <select
                          value={formData.verbruikStroom}
                          onChange={(e) => handleInputChange('verbruikStroom', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="1000">Minder dan 1.500 kWh</option>
                          <option value="2000">1.500 - 2.500 kWh</option>
                          <option value="3000">2.500 - 3.500 kWh</option>
                          <option value="4000">3.500 - 4.500 kWh</option>
                          <option value="5000">Meer dan 4.500 kWh</option>
                          <option value="weet-niet">Weet ik niet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gasverbruik per jaar
                        </label>
                        <select
                          value={formData.verbruikGas}
                          onChange={(e) => handleInputChange('verbruikGas', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="500">Minder dan 800 m³</option>
                          <option value="1000">800 - 1.200 m³</option>
                          <option value="1500">1.200 - 1.800 m³</option>
                          <option value="2000">1.800 - 2.500 m³</option>
                          <option value="3000">Meer dan 2.500 m³</option>
                          <option value="geen-gas">Geen gas</option>
                          <option value="weet-niet">Weet ik niet</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={prevStep}
                        className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                      >
                        ← Vorige
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!formData.currentLeverancier}
                        className="flex-1 bg-green-500 text-white py-4 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Volgende Stap →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Results */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">📞 Ontvang Je Besparingrapport</h3>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-4">🎉</div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">
                        Je kunt tot €600 per jaar besparen!
                      </h4>
                      <p className="text-green-700">
                        Onze experts hebben de beste tarieven voor jouw situatie gevonden.
                      </p>
                    </div>

                    <div className="text-center space-y-4">
                      <p className="text-gray-600">
                        Bel nu voor je persoonlijke besparingrapport en directe overstap:
                      </p>
                      
                      <a 
                        href={`tel:${phoneNumber}`}
                        className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-600 transition-colors shadow-lg"
                      >
                        📞 Bel Nu: {phoneNumber}
                      </a>
                      
                      <p className="text-sm text-gray-500">
                        Gratis bellen | Ma-Vr 09:00-20:30 | Gemiddeld gesprek: 5 minuten
                      </p>
                    </div>

                    <div className="border-t pt-6">
                      <button
                        onClick={prevStep}
                        className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                      >
                        ← Gegevens Aanpassen
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              🏆 Waarom Ons Bellen?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Binnen 5 Minuten Geregeld</h3>
                <p className="text-gray-600">
                  Onze experts vinden direct de beste deal en regelen de overstap voor je.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gegarandeerde Besparing</h3>
                <p className="text-gray-600">
                  Gemiddeld €300 besparing per jaar. Geen besparing? Dan geen overstap!
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Gratis Service</h3>
                <p className="text-gray-600">
                  Volledig gratis advies en overstapservice. Geen verborgen kosten, garantie!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img src="/logos/contractvergelijkers-logo.svg" alt="Contractvergelijkers" className="h-10 w-auto mb-4 brightness-0 invert" />
                <p className="text-gray-300 mb-4">
                  Het grootste onafhankelijke energievergelijkingsplatform van Nederland.
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
                  <li>✅ Gratis energieadvies</li>
                  <li>✅ Alle leveranciers vergelijken</li>
                  <li>✅ Complete overstap service</li>
                  <li>✅ 200+ energieadviseurs</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Contractvergelijkers. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>

        {/* Sticky Call Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href={`tel:${phoneNumber}`}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl flex items-center space-x-3 transition-all duration-300 hover:scale-105 animate-pulse"
          >
            <span className="text-2xl">📞</span>
            <div className="hidden md:block">
              <div className="text-sm">Bel Direct</div>
              <div className="text-lg font-bold">{phoneNumber}</div>
            </div>
          </a>
        </div>
      </main>
    </>
  )
}