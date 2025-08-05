import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void
  function gtag_report_conversion(url?: string): boolean
}

export default function Vergelijker() {
  const [phoneNumber] = useState('085 087 2183')
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

  return (
    <>
      <Head>
        <title>Bespaar Tot €600 Per Jaar op je Energierekening! | Contractvergelijkers</title>
        <meta name="description" content="Vergelijk alle energieleveranciers in Nederland en ontdek binnen 2 minuten hoeveel je kunt besparen. Gratis vergelijking, onafhankelijk advies." />
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
                                   <img src="/logos/contractvergelijkers-logo.png" alt="Contractvergelijkers" className="h-14 md:h-16 w-auto" />
               </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">📞 Gratis bellen:</span>
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
              <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                💰 ENERGIE VERGELIJKER 2025
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Hulp Nodig Met Je{' '}
                <span className="text-green-500">Energiecontract?</span>
                <br />
                <span className="text-2xl md:text-4xl text-gray-700">Bel Direct Voor Advies!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Onze energieadviseurs helpen je direct met vragen over je contract, tarieven, 
                overstappen of opzeggen. Gratis advies binnen 2 minuten.
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

                         {/* CTA Buttons - Mobile Optimized */}
             <div className="space-y-4 mb-12">
                               <a 
                  href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                  onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                  className="block w-full bg-green-500 text-white px-8 py-6 rounded-xl font-bold text-xl hover:bg-green-600 transition-colors shadow-2xl text-center"
                >
                 📞 Bel Nu Voor Energieadvies
                 <div className="text-2xl font-black mt-1">{phoneNumber}</div>
               </a>
               <button 
                 onClick={() => document.getElementById('vergelijker')?.scrollIntoView({ behavior: 'smooth' })}
                 className="block w-full bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg"
               >
                 📋 Of Vul Formulier In (2 Min)
               </button>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ⚡ Energiecontract Checken
                </h2>
                <p className="text-gray-600 mb-4">
                  Vul je gegevens in en onze adviseurs bellen je direct terug voor gratis advies
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 inline-block">
                  <span className="text-sm text-yellow-800 font-semibold">
                    🔥 24 mensen vulden dit formulier in het afgelopen uur
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
                           placeholder="1234 AB"
                           value={formData.postcode}
                           onChange={(e) => handleInputChange('postcode', e.target.value)}
                           className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900"
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
                           className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900"
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
                         className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900"
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
                         className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900"
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
                           className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900"
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
                           className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900"
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
                    <h3 className="text-xl font-bold text-gray-900 text-center">✅ Gegevens Ontvangen!</h3>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-4">📞</div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">
                        Bel nu voor direct advies!
                      </h4>
                      <p className="text-green-700">
                        Onze energieadviseurs staan klaar om je te helpen met je energievragen en de beste deals te vinden.
                      </p>
                    </div>

                    <div className="text-center space-y-4">
                      <p className="text-gray-600 font-semibold">
                        🕐 Adviseurs beschikbaar nu! Bel direct:
                      </p>
                      
                                             <a 
                         href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                         onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
                         className="block bg-green-500 text-white px-8 py-6 rounded-xl font-bold text-xl hover:bg-green-600 transition-colors shadow-lg"
                       >
                        📞 Energieadvies: {phoneNumber}
                        <div className="text-sm font-normal mt-1">Gratis gesprek • Direct verbonden</div>
                      </a>
                      
                      <p className="text-sm text-gray-500">
                        ✅ Gratis advies | ⏰ Ma-Vr 09:00-20:30 | 📞 Gemiddeld gesprek: 5 minuten
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

        {/* Social Proof Reviews Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                💬 Wat Onze Klanten Zeggen
              </h2>
              <p className="text-gray-600 text-lg">
                Duizenden klanten besparen al honderden euro's per jaar!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Review 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    €480 bespaard
                  </span>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Binnen 10 minuten had ik een perfect overzicht van alle aanbieders. De telefonische service was uitstekend!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Sandra V.</div>
                  <div className="text-sm">Amsterdam</div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    €600 bespaard
                  </span>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Eindelijk een eerlijke vergelijking zonder verborgen kosten. Bespaar nu €600 per jaar!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Mark B.</div>
                  <div className="text-sm">Rotterdam</div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    €520 bespaard
                  </span>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "De adviseur heeft alles voor mij geregeld. Geen gedoe, gewoon besparen!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Linda K.</div>
                  <div className="text-sm">Utrecht</div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐
                  </div>
                  <span className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    €350 bespaard
                  </span>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Snelle service en transparante informatie. Precies wat ik zocht!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Peter M.</div>
                  <div className="text-sm">Den Haag</div>
                </div>
              </div>

              {/* Review 5 */}
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    €445 bespaard
                  </span>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Geweldige ervaring! De overstap was binnen een week geregeld."
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Emma J.</div>
                  <div className="text-sm">Eindhoven</div>
                </div>
              </div>

              {/* Review 6 */}
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    €580 bespaard
                  </span>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Professioneel advies en echt de beste deal gevonden. Aanrader!"
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Tom R.</div>
                  <div className="text-sm">Groningen</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 inline-block">
                <div className="text-2xl font-bold text-green-600 mb-2">4.8/5.0 ⭐</div>
                <div className="text-gray-700">Gebaseerd op 1.247+ tevreden klanten</div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Mentions Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-gray-600 mb-6">Zoals Vermeld In</h3>
              <div className="flex justify-center items-center space-x-8 opacity-70">
                <div className="text-gray-500 font-bold text-lg">RTL NIEUWS</div>
                <div className="text-gray-500 font-bold text-lg">TELEGRAAF</div>
                <div className="text-gray-500 font-bold text-lg">NU.NL</div>
                <div className="text-gray-500 font-bold text-lg">AD</div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                "Nederland's meest betrouwbare energievergelijker" - RTL Nieuws
              </p>
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
                                 <img src="/logos/contractvergelijkers-logo.png" alt="Contractvergelijkers" className="h-12 md:h-14 w-auto mb-4 brightness-0 invert" />
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

        {/* Sticky Call Button - Mobile Optimized */}
        <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto">
          <a 
            href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
            onClick={() => gtag_report_conversion(`tel:+31${phoneNumber.replace(/\s/g, '')}`)}
            className="block md:inline-flex bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 animate-pulse text-center"
          >
            <span className="text-2xl">📞</span>
            <div>
              <div className="text-sm md:hidden">Bel Nu Voor Energieadvies</div>
              <div className="hidden md:block text-sm">Bel Direct</div>
              <div className="text-lg font-bold">{phoneNumber}</div>
            </div>
          </a>
        </div>
      </main>
    </>
  )
}