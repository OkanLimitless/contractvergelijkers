import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

export default function Klantenservice() {
  const [phoneNumber] = useState('085 087 0276')
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
        <title>Klantenservice | Adviesneutraal Advieslijn</title>
        <meta name="description" content="Klantenservice Adviesneutraal: onafhankelijk advies en tarieven vergelijken. Wij helpen met vragen en overstappen. Bel direct." />
        <meta name="keywords" content="klantenservice energie, energieleverancier telefoonnummer, energie vergelijken, onafhankelijk advies, overstappen energie" />
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
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">⚡</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">Adviesneutraal</span>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm hidden md:block">Direct hulp nodig? Bel ons nu:</span>
                <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
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
                <span className="text-blue-600">Klantenservice Adviesneutraal</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-700">Direct hulp & onafhankelijk energie-advies</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Zoekt u de klantenservice van uw energieleverancier? Wij geven onafhankelijk advies, vergelijken tarieven en verwijzen u indien nodig door naar de officiële klantenservice van uw leverancier.
              </p>
            </div>

            {/* Service Options - Mobile Optimized */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8">
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-white text-lg md:text-xl">📋</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Klantenservice & Advies</h3>
                <p className="text-xs md:text-sm text-gray-600">Antwoord op vragen en heldere uitleg over opties</p>
              </div>
              
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-white text-lg md:text-xl">💰</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Tarieven & Prijzen</h3>
                <p className="text-xs md:text-sm text-gray-600">Informatie over tarieven en prijzen</p>
              </div>
              
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-white text-lg md:text-xl">🔄</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Overstappen & Wijzigen</h3>
                <p className="text-xs md:text-sm text-gray-600">Hulp bij contractwijzigingen</p>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-blue-600 text-white p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4">Direct contact met Adviesneutraal Klantenservice</h2>
              <p className="text-blue-100 mb-6">
                Bel voor onafhankelijk energie-advies en vergelijking van tarieven. Wij zijn geen onderdeel van energieleveranciers en behandelen geen klantdossiers van providers.
              </p>
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Bel Klantenservice: {phoneNumber}
              </a>
              
              <p className="text-sm text-blue-200 mt-4">
                Maandag t/m vrijdag: 08:00 - 20:00 | Weekend: 10:00 - 16:00
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Snelle Hulp Aanvragen</h3>
              <p className="text-sm text-gray-600 mb-4">
                Vul uw gegevens in zodat wij u gericht kunnen adviseren
              </p>
              
              {/* Request Form */}
              <div className="space-y-3">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    📍 Uw locatie
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="1234AB"
                      value={formData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="12"
                      value={formData.huisnummer}
                      onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-sm"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-sm"
                  >
                    <option value="">Kies je woonsituatie</option>
                    <option value="eengezinswoning">Eengezinswoning</option>
                    <option value="appartement">Appartement</option>
                    <option value="studio">Studio/kamer</option>
                    <option value="vrijstaand">Vrijstaande woning</option>
                    <option value="twee-onder-een-kap">Twee-onder-een-kap</option>
                  </select>
                </div>
                
                {formData.postcode && formData.huisnummer && formData.woonsituatie ? (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium text-center">
                      ✓ Gegevens ontvangen! Bel nu voor directe hulp
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      Vul uw gegevens in voor gerichte ondersteuning
                    </p>
                  </div>
                )}
                
                <a
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                >
                  Bel Klantenservice: {phoneNumber}
                </a>
                
                <p className="text-xs text-gray-500 text-center">
                  Direct contact met onze energiespecialisten
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison / Details Section */}
        <section id="vergelijker" className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  📊 Aanvraag Energieadvies
                </h2>
                <p className="text-gray-600 mb-4">
                  Vul je gegevens in en we helpen je direct met persoonlijk advies
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
                    <h3 className="text-xl font-bold text-gray-900 text-center">📍 Waar woon je?</h3>
                    
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
                        Woonsituatie*
                      </label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                        value={formData.woonsituatie}
                        onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                      >
                        <option value="">Selecteer je woonsituatie</option>
                        <option value="eengezinswoning">Eengezinswoning</option>
                        <option value="appartement">Appartement</option>
                        <option value="studio">Studio/kamer</option>
                        <option value="vrijstaand">Vrijstaande woning</option>
                        <option value="twee-onder-een-kap">Twee-onder-een-kap</option>
                      </select>
                    </div>

                    <button 
                      onClick={nextStep}
                      disabled={!formData.postcode || !formData.huisnummer || !formData.woonsituatie}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Volgende stap ➤
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                        value={formData.currentLeverancier}
                        onChange={(e) => handleInputChange('currentLeverancier', e.target.value)}
                      >
                        <option value="">Selecteer je leverancier</option>
                        <option value="eneco">Eneco</option>
                        <option value="essent">Essent</option>
                        <option value="vattenfall">Vattenfall</option>
                        <option value="budget-energie">Budget Energie</option>
                        <option value="greenchoice">GreenChoice</option>
                        <option value="anders">Anders</option>
                        <option value="weet-niet">Weet ik niet</option>
                      </select>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        💡 <strong>Tip:</strong> Vergelijk regelmatig om te controleren of uw contract nog past bij uw situatie.
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
                    <h3 className="text-xl font-bold text-gray-900 text-center">⚡ Wat is je verbruik ongeveer?</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Stroomverbruik per jaar
                        </label>
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                          value={formData.verbruikStroom}
                          onChange={(e) => handleInputChange('verbruikStroom', e.target.value)}
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="0-2000">0 - 2.000 kWh</option>
                          <option value="2000-3500">2.000 - 3.500 kWh</option>
                          <option value="3500-5000">3.500 - 5.000 kWh</option>
                          <option value="5000+">Meer dan 5.000 kWh</option>
                          <option value="weet-niet">Weet ik niet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gasverbruik per jaar
                        </label>
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                          value={formData.verbruikGas}
                          onChange={(e) => handleInputChange('verbruikGas', e.target.value)}
                        >
                          <option value="">Selecteer verbruik</option>
                          <option value="0-500">0 - 500 m³</option>
                          <option value="500-1200">500 - 1.200 m³</option>
                          <option value="1200-2000">1.200 - 2.000 m³</option>
                          <option value="2000+">Meer dan 2.000 m³</option>
                          <option value="geen-gas">Geen gas</option>
                          <option value="weet-niet">Weet ik niet</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50 p-6 rounded-xl text-center border-2 border-blue-300">
                      <h4 className="text-xl font-bold text-blue-800 mb-3">🎯 Informatie Ontvangen!</h4>
                      <p className="text-blue-700 mb-4">
                        Bedankt voor uw gegevens. Onze specialisten helpen u direct verder met onafhankelijk advies.
                      </p>
                      <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                        <h5 className="font-bold text-gray-800 mb-2">📞 Bel nu voor persoonlijk advies</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                          <div>✅ Transparante tarieven</div>
                          <div>✅ Persoonlijk maatwerk advies</div>
                          <div>✅ Volledige overstap service</div>
                          <div>✅ Geen verborgen kosten</div>
                        </div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-lg mb-4">
                        <p className="text-sm text-blue-800 font-semibold">
                          📌 Vandaag al 189 mensen geholpen!
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
                        className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-blue-700 transition-all text-center"
                      >
                        📞 BEL NU: {phoneNumber}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (no brand names, no savings amounts) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ervaringen Van Onze Klanten</h2>
              <p className="text-xl text-gray-600">Lees ervaringen van klanten die onlangs zijn overgestapt</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Duidelijk Overzicht</h3>
                <p className="text-gray-600 mb-4">"Door over te stappen via Adviesneutraal heb ik nu een duidelijk overzicht en passende deal."
                </p>
                <div className="text-sm text-gray-500">- Sarah, Amsterdam</div>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Snel Geregeld</h3>
                <p className="text-gray-600 mb-4">"Binnen 5 minuten alles geregeld. Heel tevreden met het resultaat!"</p>
                <div className="text-sm text-gray-500">- Mark, Utrecht</div>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Goede Begeleiding</h3>
                <p className="text-gray-600 mb-4">"Als gezin fijn begeleid naar een passend energiecontract. Geweldig!"</p>
                <div className="text-sm text-gray-500">- Linda, Rotterdam</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                📞 Bel voor Ondersteuning: {phoneNumber}
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              📞 Heeft u Hulp Nodig?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Onze klantenservice van Adviesneutraal staat klaar met onafhankelijk advies over uw energievraag.
            </p>
            
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 Bel Klantenservice: {phoneNumber}
            </a>
            
            <p className="text-blue-100 text-sm mt-4">
              Wij zijn de klantenservice van adviesneutraal.nl (onafhankelijke advieslijn) en niet de officiële klantenservice van energieleveranciers. Voor contract- en factuurzaken bij uw huidige provider kunt u rechtstreeks bij uw leverancier terecht.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img src="/logos/contractvergelijkers-logo.png" alt="Adviesneutraal" className="h-12 md:h-14 w-auto mb-4 brightness-0 invert" />
                <p className="text-gray-300 mb-4">
                  Transparant en onafhankelijk energie-advies.
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
                  <li>
                    <Link href="/privacy" className="underline text-gray-300 hover:text-white">Privacy</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Bel Klantenservice</h4>
                <div className="space-y-4">
                  <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="block">
                    <div className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                      <div className="text-sm">Direct Contact</div>
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
              <p>&copy; 2025 Adviesneutraal. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>

        {/* Sticky Call Button - Only show after scrolling */}
        {showStickyButton && (
          <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto md:max-w-xs">
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-center transition-colors text-sm"
            >
              📞 Bel Direct: {phoneNumber}
            </a>
          </div>
        )}
      </main>
    </>
  )
}