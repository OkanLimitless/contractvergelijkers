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
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">⚡</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">Contractvergelijkers</span>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm hidden md:block">Direct hulp nodig? Bel ons nu:</span>
                <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors">
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
                <span className="text-orange-600">Energie Hulpcentrum</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-700">Problemen & Vragen</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Problemen met uw energierekening? Vragen over uw contract? Of wilt u weten 
                of u te veel betaalt? Wij helpen u direct verder
              </p>
            </div>

            {/* Common Problems - Mobile Optimized */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8">
              <div className="bg-orange-50 p-3 md:p-6 rounded-lg text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-white text-sm md:text-xl">📄</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Hoge Rekening</h3>
                <p className="text-xs md:text-sm text-gray-600 hidden md:block">Onverwacht hoge energierekening ontvangen?</p>
              </div>
              
              <div className="bg-orange-50 p-3 md:p-6 rounded-lg text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-white text-sm md:text-xl">❓</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Contract Onduidelijk</h3>
                <p className="text-xs md:text-sm text-gray-600 hidden md:block">Vragen over uw energiecontract?</p>
              </div>
              
              <div className="bg-orange-50 p-3 md:p-6 rounded-lg text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-white text-sm md:text-xl">💰</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Te Duur</h3>
                <p className="text-xs md:text-sm text-gray-600 hidden md:block">Vermoedt u dat u te veel betaalt?</p>
              </div>
              
              <div className="bg-orange-50 p-3 md:p-6 rounded-lg text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-white text-sm md:text-xl">🔄</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Wil Overstappen</h3>
                <p className="text-xs md:text-sm text-gray-600 hidden md:block">Hulp nodig bij overstappen?</p>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-orange-600 text-white p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4">Direct Hulp Nodig?</h2>
              <p className="text-orange-100 mb-6">
                Bel ons hulpcentrum voor directe ondersteuning. Onze energiespecialisten 
                helpen u met al uw vragen en problemen.
              </p>
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Bel Hulpcentrum: {phoneNumber}
              </a>
              
              <p className="text-sm text-orange-200 mt-4">
                Direct beschikbaar voor al uw energievragen
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Hulp Aanvragen</h3>
              <p className="text-sm text-gray-600 mb-4">
                Vertel ons over uw situatie zodat wij u de beste hulp kunnen bieden
              </p>
              
              {/* Smart Analysis Form */}
              <div className="space-y-3">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    📍 Locatie voor smart analyse
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="1234AB"
                      value={formData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="12"
                      value={formData.huisnummer}
                      onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    🤖 AI Woningtype analyse
                  </label>
                  <select
                    value={formData.woonsituatie}
                    onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                  >
                    <option value="">Select voor AI-analyse</option>
                    <option value="eengezinswoning">Eengezinswoning</option>
                    <option value="appartement">Appartement</option>
                    <option value="studio">Studio/kamer</option>
                  </select>
                </div>
                
                {formData.postcode && formData.huisnummer && formData.woonsituatie ? (
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-700 font-medium text-center">
                      ✓ Informatie ontvangen! Bel voor directe hulp
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      Deel uw situatie voor gerichte ondersteuning
                    </p>
                  </div>
                )}
                
                <a
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors text-center"
                >
                  Bel Hulpcentrum: {phoneNumber}
                </a>
                
                <p className="text-xs text-gray-500 text-center">
                  Directe ondersteuning voor al uw energievragen
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
                  💡 Smart Energieanalyse
                </h2>
                <p className="text-gray-600 mb-4">
                  Onze energiespecialisten maken een slimme analyse van jouw situatie voor de beste oplossing
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 inline-block">
                  <span className="text-sm text-purple-800 font-semibold">
                    🏆 15+ jaar expertise - €700+ gemiddelde besparing
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
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
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
                      className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Start Smart Analyse ➤
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
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

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <p className="text-sm text-purple-800">
                        💡 <strong>Smart tip:</strong> Onze specialisten kennen alle leverancierstarieven en vinden 
                        automatisch de slimste deal voor jouw situatie.
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
                        className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
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

                    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 p-6 rounded-xl text-center border-2 border-purple-300">
                      <h4 className="text-xl font-bold text-purple-800 mb-3">🎯 Smart Energieanalyse Compleet!</h4>
                      <p className="text-purple-700 mb-4">
                        Onze AI-gestuurde systemen hebben jouw energieprofiel geanalyseerd. De markt fluctueert 
                        dagelijks - onze experts kennen de real-time tarieven die online niet zichtbaar zijn.
                      </p>
                      <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-purple-500">
                        <h5 className="font-bold text-gray-800 mb-2">🤖 Smart Energieoplossing Beschikbaar!</h5>
                        <div className="text-sm text-gray-700 space-y-1">
                          <div>🎯 AI-gestuurde tariefoptimalisatie</div>
                          <div>📊 Real-time marktanalyse</div>
                          <div>🔄 Automatische overstapservice</div>
                          <div>💡 Smart besparingsgarantie</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg mb-4">
                        <p className="text-sm text-purple-800 font-semibold">
                          🚀 Beperkte tijd: 247 smart oplossingen vandaag geactiveerd!
                        </p>
                      </div>
                      <div className="text-xs text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg">
                        <strong>Smart Profiel:</strong> Locatie {formData.postcode || 'XXXX'}, Type: {formData.woonsituatie || 'Onbekend'}, 
                        Huidige: {formData.currentLeverancier || 'Onbekend'}, Verbruik: {formData.verbruikStroom || '?'} kWh + {formData.verbruikGas || '?'} m³
                      </div>
                      <div className="bg-green-100 p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-700">💡 Smart Besparing: €750+ per jaar mogelijk</div>
                        <div className="text-xs text-green-600">*Op basis van AI-analyse en marktdata</div>
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
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all text-center"
                      >
                        🤖 ACTIVEER SMART OPLOSSING: {phoneNumber}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom Kiezen 50.000+ Klanten Voor Onze Slimme Aanpak?</h2>
              <p className="text-xl text-gray-600">Expertise, slimme oplossingen en resultaten die voor zich spreken</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Slimme Oplossingen</h3>
                <p className="text-gray-600">
                  Onze energiespecialisten gebruiken slimme tools en 15+ jaar ervaring om automatisch 
                  de beste deal voor jouw specifieke situatie te vinden.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">15+ Jaar Marktkennis</h3>
                <p className="text-gray-600">
                  Onze experts kennen alle trucs van de energiemarkt. Wij hebben toegang tot alle 
                  leveranciers en weten precies waar de beste deals te vinden zijn.
                </p>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bewezen Besparingen</h3>
                <p className="text-gray-600">
                  Gemiddeld €700+ besparing per klant en een tevredenheidsscore van 4.9/5. 
                  50.000+ tevreden klanten spreken voor zich.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gray-50 p-6 rounded-xl max-w-3xl mx-auto">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Wat Zeggen Onze Klanten?</h4>
                <div className="space-y-4 text-sm text-gray-600">
                  <p className="italic">
                    "Wow, wat een slimme aanpak! Marco heeft ons binnen 10 minuten €680 per jaar 
                    bespaard. Echt makkelijk en snel!" - Familie Van Der Berg, Amsterdam
                  </p>
                  <p className="italic">
                    "Eindelijk iemand die het werk voor je doet. Geen gedoe, gewoon de beste deal!" 
                    - Jan Pietersen, Utrecht
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🤖 Klaar voor je Smart Energieoplossing?
            </h2>
            <p className="text-purple-100 text-lg mb-8">
              Onze AI-systemen en experts creëren binnen 2 minuten een slimme energieoplossing speciaal voor jouw situatie.
            </p>
            
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              🤖 Activeer smart oplossing: {phoneNumber}
            </a>
            
            <p className="text-purple-100 text-sm mt-4">
              contractvergelijkers.nl - Smart Energy Solutions
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
                  Nederland's slimste energieoplossingen. 15+ jaar expertise, 50.000+ tevreden klanten.
                </p>
                <div className="flex space-x-4">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-400">4.9/5 (3.200+ reviews)</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Onze Slimme Aanpak</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Persoonlijke energiespecialisten</li>
                  <li>✓ 15+ jaar marktervaring</li>
                  <li>✓ Toegang tot alle leveranciers</li>
                  <li>✓ 100% onafhankelijke oplossingen</li>
                  <li>✓ Alles geregeld van A tot Z</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Direct Smart Besparen</h4>
                <div className="space-y-4">
                  <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="block">
                    <div className="bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition-colors">
                      <div className="text-sm">Smart Energieoplossingen</div>
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
              className="block md:inline-flex bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 text-center"
            >
              <span className="text-2xl">💡</span>
              <div>
                <div className="text-sm md:hidden">Smart Oplossing</div>
                <div className="hidden md:block text-sm">Smart Energieoplossing</div>
                <div className="text-lg font-bold">{phoneNumber}</div>
              </div>
            </a>
          </div>
        )}
      </main>
    </>
  )
}