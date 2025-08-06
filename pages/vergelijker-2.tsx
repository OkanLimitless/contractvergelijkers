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
                <span className="text-blue-600">Persoonlijk Energieadvies</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-700">van ervaren specialisten</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Onze energieadviseurs hebben 15+ jaar ervaring en helpen je bij het vinden 
                van de beste energieleverancier voor jouw specifieke situatie
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-blue-700">Jaar ervaring</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-blue-700">Onafhankelijk</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">Gratis</div>
                    <div className="text-sm text-blue-700">Advies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12 text-sm md:text-base">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">👨‍💼</span>
                </div>
                <span className="font-medium text-gray-700">Ervaren Adviseurs</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">🎯</span>
                </div>
                <span className="font-medium text-gray-700">Persoonlijk Advies</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">✓</span>
                </div>
                <span className="font-medium text-gray-700">Altijd Gratis</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4 mb-8">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Spreek een adviseur: {phoneNumber}
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
              
              {/* Savings Calculator Form */}
              <div className="space-y-3">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    📍 Locatie voor besparingsberekening
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="1234AB"
                      value={formData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="12"
                      value={formData.huisnummer}
                      onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    🏘️ Woonsituatie
                  </label>
                  <select
                    value={formData.woonsituatie}
                    onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Kies je woonsituatie</option>
                    <option value="eengezinswoning">Eengezinswoning</option>
                    <option value="appartement">Appartement</option>
                    <option value="studio">Studio/kamer</option>
                  </select>
                </div>
                
                {formData.postcode && formData.huisnummer && formData.woonsituatie ? (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium text-center">
                      💰 Berekening mogelijk! Bel voor jouw exacte besparing
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      Vul gegevens in voor persoonlijke besparingsberekening
                    </p>
                  </div>
                )}
                
                <a
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-bold hover:from-green-600 hover:to-blue-600 transition-all text-center"
                >
                  💰 Bereken Besparing: {phoneNumber}
                </a>
                
                <p className="text-xs text-gray-500 text-center">
                  Gratis besparingsadvies & tariefvergelijking
                </p>
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

                    <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-6 rounded-xl text-center border-2 border-green-300">
                      <h4 className="text-xl font-bold text-green-800 mb-3">🎯 Perfecte Match Gevonden!</h4>
                      <p className="text-green-700 mb-4">
                        De energiemarkt is complex en verandert constant. De beste tarieven en exclusieve aanbiedingen 
                        zijn alleen telefonisch beschikbaar - niet online!
                      </p>
                      <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-green-500">
                        <h5 className="font-bold text-gray-800 mb-2">📞 Bel nu voor Exclusieve Energietarieven!</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                          <div>✅ Gegarandeerd laagste prijs</div>
                          <div>✅ Exclusieve telefonische deals</div>
                          <div>✅ Persoonlijk maatwerk advies</div>
                          <div>✅ Volledige overstap service</div>
                        </div>
                      </div>
                      <div className="bg-orange-100 p-3 rounded-lg mb-4">
                        <p className="text-sm text-orange-800 font-semibold">
                          🔥 Vandaag al 189 mensen geholpen met besparen!
                        </p>
                      </div>
                      <div className="text-xs text-gray-600 mb-4 bg-gray-100 p-2 rounded">
                        <strong>Jouw profiel:</strong> Postcode {formData.postcode || 'XXXX'}, Leverancier: {formData.currentLeverancier || 'Onbekend'}, 
                        Stroom: {formData.verbruikStroom || 'Onbekend'}, Gas: {formData.verbruikGas || 'Onbekend'}
                      </div>
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
                        className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-lg font-bold hover:from-green-600 hover:to-blue-600 transition-all text-center"
                      >
                        📞 CLAIM EXCLUSIEVE DEAL: {phoneNumber}
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

        {/* Final CTA Section */}
        <section className="py-16 bg-green-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎯 Klaar voor Maximale Besparing?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Onze experts berekenen binnen 2 minuten jouw exacte besparing met exclusieve telefonische tarieven.
            </p>
            
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="inline-block bg-white text-green-500 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              💰 Bereken je besparing: {phoneNumber}
            </a>
            
            <p className="text-green-100 text-sm mt-4">
              contractvergelijkers.nl
            </p>
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