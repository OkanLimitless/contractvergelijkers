import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

export default function Vergelijker3() {
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
        <title>Energiecontract Experts | Professioneel Advies | Bespaar €700 | Contractvergelijkers</title>
        <meta name="description" content="Ervaren energieadviseurs met 15+ jaar expertise. Onafhankelijk advies voor je energiecontract. Gemiddeld €700 besparing. Vertrouwd door 50.000+ klanten." />
        <meta name="keywords" content="energieadviseur, energiecontract advies, professioneel energieadvies, betrouwbare energievergelijking, energie experts" />
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
                <span className="text-gray-600 text-sm">🎓 Energiespecialisten:</span>
                <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-6">
              <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
                🔥 ENERGIESPECIALISTEN - BESPAAR €700
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Op Zoek Naar Je{' '}
                <span className="text-blue-600">Energieleverancier?</span>
                <br />
                <span className="text-2xl md:text-4xl text-gray-700">Professioneel Advies & Besparing!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                <strong>In plaats van zelf contact op te nemen</strong> - laat onze ervaren energiespecialisten je helpen! 
                Jarenlange expertise, onafhankelijk advies en gemiddeld €700 besparing per jaar.
              </p>
            </div>

            {/* CTA Buttons - Higher placement */}
            <div className="space-y-4 mb-8">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="block w-full bg-blue-600 text-white px-8 py-6 rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors shadow-2xl text-center"
              >
                🎓 Professioneel Advies - Bespaar €700!
                <div className="text-2xl font-black mt-1">{phoneNumber}</div>
                <div className="text-sm font-normal mt-2">✓ Ervaren Specialisten ✓ Gratis Advies ✓ Vertrouwd door 50.000+ klanten</div>
              </a>
              
              {/* Expert info instead of second button */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                <p className="text-sm text-blue-700 font-medium">
                  🎓 Meer weten over onze expertise? Bekijk de informatie hieronder
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center space-x-8 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                15+ Jaar Ervaring
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                100% Gratis
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Persoonlijk Advies
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-blue-800">
                🎓 <strong>Expertise die werkt:</strong> Onze energiespecialisten hebben 15+ jaar ervaring 
                en hebben al 50.000+ klanten geholpen met gemiddeld €700 besparing per jaar.
              </p>
            </div>
            
            {/* Mobile urgency banner */}
            <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg md:hidden">
              <div className="text-center">
                <p className="text-sm font-bold">🎓 Professioneel energieadvies!</p>
                <p className="text-xs mt-1">15+ jaar expertise. Bel nu voor persoonlijk advies!</p>
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
                  🎓 Professionele Energieanalyse
                </h2>
                <p className="text-gray-600 mb-4">
                  Onze gecertificeerde energieadviseurs analyseren je situatie voor het beste advies
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 inline-block">
                  <span className="text-sm text-blue-800 font-semibold">
                    🏆 15+ jaar expertise - €700 gemiddelde besparing
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Analyse stap {formStep} van 3</span>
                  <span className="text-sm text-gray-500">{Math.round((formStep / 3) * 100)}% voltooid</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Steps */}
              <div className="space-y-6">
                {/* Step 1: Location */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">📍 Waar bevind je je woning?</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Postcode*
                        </label>
                        <input
                          type="text"
                          placeholder="1234AB"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                          value={formData.huisnummer}
                          onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type woning*
                      </label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                        value={formData.woonsituatie}
                        onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                      >
                        <option value="">Selecteer je woningtype</option>
                        <option value="eengezinswoning">Eengezinswoning</option>
                        <option value="appartement">Appartement</option>
                        <option value="studio">Studio/kamer</option>
                      </select>
                    </div>

                    <button 
                      onClick={nextStep}
                      disabled={!formData.postcode || !formData.huisnummer || !formData.woonsituatie}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Start Professionele Analyse ➤
                    </button>
                  </div>
                )}

                {/* Step 2: Current Supplier */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">🏢 Huidige energieleverancier</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bij welke leverancier heeft u momenteel een contract?*
                      </label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                        value={formData.currentLeverancier}
                        onChange={(e) => handleInputChange('currentLeverancier', e.target.value)}
                      >
                        <option value="">Selecteer uw leverancier</option>
                        <option value="eneco">Eneco</option>
                        <option value="essent">Essent</option>
                        <option value="vattenfall">Vattenfall</option>
                        <option value="budget-energie">Budget Energie</option>
                        <option value="greenchoice">GreenChoice</option>
                        <option value="anders">Andere leverancier</option>
                        <option value="weet-niet">Onbekend</option>
                      </select>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        🎓 <strong>Expert tip:</strong> Onze specialisten kennen alle leverancierstarieven en contractvoorwaarden. 
                        Wij vinden altijd een betere deal voor u.
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
                        className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Volgende ➤
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Usage & Contact */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center">⚡ Energieverbruik inschatting</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jaarlijks stroomverbruik
                        </label>
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                          value={formData.verbruikStroom}
                          onChange={(e) => handleInputChange('verbruikStroom', e.target.value)}
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="0-2000">Laag (0 - 2.000 kWh)</option>
                          <option value="2000-3500">Gemiddeld (2.000 - 3.500 kWh)</option>
                          <option value="3500-5000">Hoog (3.500 - 5.000 kWh)</option>
                          <option value="5000+">Zeer hoog (5.000+ kWh)</option>
                          <option value="weet-niet">Onbekend</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jaarlijks gasverbruik
                        </label>
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                          value={formData.verbruikGas}
                          onChange={(e) => handleInputChange('verbruikGas', e.target.value)}
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="0-500">Laag (0 - 500 m³)</option>
                          <option value="500-1200">Gemiddeld (500 - 1.200 m³)</option>
                          <option value="1200-2000">Hoog (1.200 - 2.000 m³)</option>
                          <option value="2000+">Zeer hoog (2.000+ m³)</option>
                          <option value="geen-gas">Geen gasaansluiting</option>
                          <option value="weet-niet">Onbekend</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg text-center border border-blue-200">
                      <h4 className="text-lg font-bold text-blue-800 mb-2">🎯 Uw Analyse is Gereed</h4>
                      <p className="text-blue-700 mb-4">
                        Onze gecertificeerde energiespecialist heeft nu alle informatie om u persoonlijk te adviseren 
                        over de beste energiecontracten voor uw situatie.
                      </p>
                      <div className="bg-green-100 p-3 rounded-lg mb-4">
                        <div className="text-lg font-bold text-green-700">Verwachte professionele besparing: €700/jaar</div>
                      </div>
                      <p className="text-xs text-blue-600">
                        *Gebaseerd op 15+ jaar expertise en marktanalyse
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
                        className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                      >
                        🎓 EXPERT ADVIES: {phoneNumber}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Expert Credentials */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom Vertrouwen 50.000+ Klanten Op Onze Experts?</h2>
              <p className="text-xl text-gray-600">Ervaring, expertise en resultaten die voor zich spreken</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gecertificeerde Specialisten</h3>
                <p className="text-gray-600">
                  Al onze energieadviseurs zijn officieel gecertificeerd en volgen continue bijscholing 
                  om op de hoogte te blijven van alle marktveranderingen.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">15+ Jaar Marktkennis</h3>
                <p className="text-gray-600">
                  Onze experts kennen de energiemarkt door en door. Wij hebben toegang tot alle 
                  leveranciers en kennen alle ins en outs van contracten.
                </p>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bewezen Resultaten</h3>
                <p className="text-gray-600">
                  Gemiddeld €700 besparing per klant en een tevredenheidsscore van 4.9/5. 
                  50.000+ tevreden klanten kunnen niet liegen.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gray-50 p-6 rounded-xl max-w-3xl mx-auto">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Wat Zeggen Onze Klanten?</h4>
                <div className="space-y-4 text-sm text-gray-600">
                  <p className="italic">
                    "Zeer professioneel en deskundig advies. Marco heeft ons binnen 10 minuten €680 per jaar 
                    bespaard. Echte expertise!" - Familie Van Der Berg, Amsterdam
                  </p>
                  <p className="italic">
                    "Eindelijk iemand die echt verstand heeft van energiecontracten. Complete service van A tot Z." 
                    - Jan Pietersen, Utrecht
                  </p>
                </div>
              </div>
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
                  Nederland's meest vertrouwde energieadviesbureau. 15+ jaar expertise, 50.000+ tevreden klanten.
                </p>
                <div className="flex space-x-4">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-400">4.9/5 (3.200+ reviews)</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Onze Expertise</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Gecertificeerde energieadviseurs</li>
                  <li>✓ 15+ jaar marktervaring</li>
                  <li>✓ Toegang tot alle leveranciers</li>
                  <li>✓ 100% onafhankelijk advies</li>
                  <li>✓ Complete service van A tot Z</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Spreek Een Expert</h4>
                <div className="space-y-4">
                  <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="block">
                    <div className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                      <div className="text-sm">Professioneel Advies</div>
                      <div className="text-xl font-bold">{phoneNumber}</div>
                    </div>
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    Maandag t/m vrijdag: 08:00 - 20:00<br/>
                    Weekend: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Contractvergelijkers. Alle rechten voorbehouden. | BTW: NL123456789B01</p>
            </div>
          </div>
        </footer>

        {/* Sticky Call Button - Only show after scrolling */}
        {showStickyButton && (
          <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto">
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="block md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 text-center"
            >
              <span className="text-2xl">🎓</span>
              <div>
                <div className="text-sm md:hidden">Expert Advies</div>
                <div className="hidden md:block text-sm">Energiespecialist</div>
                <div className="text-lg font-bold">{phoneNumber}</div>
              </div>
            </a>
          </div>
        )}
      </main>
    </>
  )
}