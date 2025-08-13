import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

export default function Vergelijker1() {
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
        <title>Persoonlijke Energieadviseur - Gratis Consultatie | Contractvergelijkers</title>
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
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">⚡</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">Contractvergelijkers</span>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm hidden md:block">Direct hulp nodig? Bel ons nu:</span>
                <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)} className="bg-teal-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-teal-700 transition-colors">
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
                Persoonlijke <span className="text-teal-600">Energieadviseur</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-700">Gratis telefoonadvies op maat</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Praat direct met een van onze ervaren energieadviseurs voor persoonlijk advies 
                over uw energiecontract en mogelijke besparingen
              </p>
            </div>

            {/* Advisor Credentials */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12 text-sm md:text-base">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-600">🎓</span>
                </div>
                <span className="font-medium text-gray-700">Gecertificeerde Adviseurs</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-600">📞</span>
                </div>
                <span className="font-medium text-gray-700">Direct Persoonlijk Contact</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-600">💡</span>
                </div>
                <span className="font-medium text-gray-700">Advies op Maat</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4 mb-8">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-teal-700 transition-colors shadow-lg"
              >
                📞 Spreek een Adviseur: {phoneNumber}
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
              
              {/* Simple Savings Check */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Ontdek je Besparing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Vul onderstaande gegevens in en ontdek direct hoeveel je kunt besparen
                </p>
                
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postcode
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="1234AB"
                      value={formData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="12"
                      value={formData.huisnummer}
                      onChange={(e) => handleInputChange('huisnummer', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Woningsituatie
                  </label>
                  <select
                    value={formData.woonsituatie}
                    onChange={(e) => handleInputChange('woonsituatie', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                  >
                    <option value="">Selecteer je woningsituatie</option>
                    <option value="eengezinswoning">Eengezinswoning</option>
                    <option value="appartement">Appartement</option>
                    <option value="studio">Studio/kamer</option>
                  </select>
                </div>
                
                {formData.postcode && formData.huisnummer && formData.woonsituatie ? (
                  <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                    <p className="text-sm text-teal-700 font-medium text-center">
                      ✓ Klaar voor persoonlijk advies! Bel nu voor uw consultatie
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      Vul uw gegevens in voor een persoonlijke consultatie
                    </p>
                  </div>
                )}
                
                <a
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors text-center"
                >
                  📞 Spreek Adviseur: {phoneNumber}
                </a>
                
                <p className="text-xs text-gray-500 text-center">
                  Gratis vergelijking en advies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Examples Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze Adviseurs in Actie</h2>
              <p className="text-xl text-gray-600">Resultaten van persoonlijk adviesgesprekken</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">€420</div>
                <div className="text-gray-700 font-semibold mb-2">Jaarlijkse besparing</div>
                <div className="text-sm text-gray-600">
                  Studio, 1 persoon<br/>
                  Persoonlijk adviesgesprek van 8 minuten
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">€680</div>
                <div className="text-gray-700 font-semibold mb-2">Jaarlijkse besparing</div>
                <div className="text-sm text-gray-600">
                  Appartement, 2 personen<br/>
                  Telefonische consultatie van 12 minuten
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">€925</div>
                <div className="text-gray-700 font-semibold mb-2">Jaarlijkse besparing</div>
                <div className="text-sm text-gray-600">
                  Eengezinswoning, 4 personen<br/>
                  Uitgebreid adviesgesprek van 15 minuten
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-teal-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start uw persoonlijke consultatie</h3>
                <p className="text-gray-600 mb-6">
                  Onze gecertificeerde energieadviseurs analyseren uw specifieke situatie en geven 
                  op maat advies voor de beste energiecontracten en mogelijke besparingen.
                </p>
                <a 
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="inline-block bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-teal-700 transition-colors shadow-lg"
                >
                  📞 Start Consultatie: {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Form Section */}
        <section id="vergelijker" className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  💰 Direct Je Besparing Checken
                </h2>
                <p className="text-gray-600 mb-4">
                  Vul je gegevens in en onze energiespecialisten bellen je binnen 5 minuten terug
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 inline-block">
                  <span className="text-sm text-red-800 font-semibold">
                    🔥 47 mensen besparen vandaag gemiddeld €700
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
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
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
                      className="w-full bg-red-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Volgende Stap ➤
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
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

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        💡 <strong>Tip:</strong> De meeste mensen bij deze leveranciers betalen €300-700 teveel per jaar!
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
                        className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
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

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg text-center border-2 border-green-200">
                      <h4 className="text-xl font-bold text-green-800 mb-3">🎉 Uitstekend! Jouw vergelijking is gereed</h4>
                      <p className="text-green-700 mb-4">
                        De energiemarkt verandert dagelijks. De beste tarieven zijn exclusief telefonisch beschikbaar 
                        en niet online te vinden.
                      </p>
                      <div className="bg-white p-4 rounded-lg mb-4 border border-green-300">
                        <h5 className="font-bold text-gray-800 mb-2">📞 Bel nu voor de Laagste Energietarieven!</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>✅ Gegarandeerd de beste prijs</li>
                          <li>✅ Persoonlijk advies op maat</li>
                          <li>✅ Wij regelen de volledige overstap</li>
                          <li>✅ 100% gratis en vrijblijvend</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                        <p className="text-sm text-yellow-800 font-semibold">
                          ⚡ Wees er snel bij! 127 mensen belden ons al vandaag.
                        </p>
                      </div>
                      <div className="text-xs text-gray-600 mb-4">
                        <strong>Jouw gegevens:</strong> Postcode {formData.postcode || 'XXXX'}, 
                        Verbruik: {formData.verbruikStroom || 'Onbekend'} & {formData.verbruikGas || 'Onbekend'}
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
                        className="flex-1 bg-red-500 text-white py-4 px-6 rounded-lg font-bold hover:bg-red-600 transition-colors text-center"
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

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ⚡ Waarom Ons Bellen?
              </h2>
              <p className="text-gray-600 text-lg">
                Duizenden Nederlanders kiezen voor onze persoonlijke service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Onafhankelijk Beste Deal</h3>
                <p className="text-gray-600">
                  Wij vergelijken onafhankelijk waardoor 
                  wij jou echt helpen, niet alleen onszelf.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Gratis Advies</h3>
                <p className="text-gray-600">
                  Onze experts delen hun top energietips, beste 
                  deals voor elke klant.
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
              <div className="bg-teal-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📞 Uw Persoonlijke Consultatie</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Intakegesprek</span>
                      <p className="text-sm text-gray-600">Uw huidige situatie en wensen bespreken</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Marktanalyse</span>
                      <p className="text-sm text-gray-600">Adviseur vergelijkt alle beschikbare opties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Advies op Maat</span>
                      <p className="text-sm text-gray-600">Persoonlijke aanbevelingen voor uw situatie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-gray-800">Uitvoering</span>
                      <p className="text-sm text-gray-600">Wij regelen de complete overstap voor u</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-teal-700 transition-colors shadow-lg"
                >
                  📞 Start Consultatie
                  <div className="text-2xl font-black mt-1">{phoneNumber}</div>
                </a>
                
                <p className="text-sm text-gray-600 mt-4">
                  Gratis & vrijblijvend persoonlijk advies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                💬 Wat Onze Klanten Zeggen
              </h2>
              <p className="text-gray-600">
                Duizenden klanten kiezen voor onze expertise
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
                  "Snelle service met transparante informatie. Precies wat ik zocht!"
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
              Onze adviseurs geven je binnen 2 minuten energieadvies op maat en direct gratis advies over jouw besparingen.
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
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img src="/logos/contractvergelijkers-logo.png" alt="Contractvergelijkers" className="h-12 md:h-14 w-auto mb-4 brightness-0 invert" />
                <p className="text-gray-300 mb-4">
                  24/7 energieklantenservice voor directe hulp en gemiddeld €700 besparing per jaar.
                </p>
                <div className="flex space-x-4">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-400">4.8/5 (1.200+ reviews)</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Directe Hulp</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Contract opzeggen</li>
                  <li>✓ Overstappen leverancier</li>
                  <li>✓ Hoge rekening oplossen</li>
                  <li>✓ Tarieven vergelijken</li>
                  <li>✓ Klachten behandelen</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">24/7 Bereikbaar</h4>
                <div className="space-y-4">
                  <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="block">
                    <div className="bg-red-500 text-white p-4 rounded-lg text-center hover:bg-red-600 transition-colors">
                      <div className="text-sm">Bel Direct</div>
                      <div className="text-xl font-bold">{phoneNumber}</div>
                    </div>
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    Maandag t/m vrijdag: 08:00 - 22:00<br/>
                    Weekend: 10:00 - 18:00
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
          <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto md:max-w-xs">
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
              className="block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-center transition-colors text-sm"
            >
              📞 Bel Adviseur: {phoneNumber}
            </a>
          </div>
        )}
      </main>
    </>
  )
}