import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [phoneNumber] = useState('085 087 2183')

  const energyProviders = [
    { 
      name: 'Essent', 
      description: 'Grootste energieleverancier van Nederland',
      usp: 'Elektriciteit, gas en aanvullende diensten',
      type: 'traditional'
    },
    { 
      name: 'Eneco', 
      description: 'Een van de oudste leveranciers',
      usp: '100% Nederlandse windenergie en groot duurzaam portfolio',
      type: 'green'
    },
    { 
      name: 'Vattenfall', 
      description: 'Zweedse energiegigant',
      usp: 'Betrouwbare elektriciteit en gas',
      type: 'traditional'
    },
    { 
      name: 'Budget Energie', 
      description: 'Onderdeel van Budget Thuis groep',
      usp: 'Voordelige, eenvoudige contracten',
      type: 'budget'
    },
    { 
      name: 'Greenchoice', 
      description: 'Nederlandse groene energie pionier',
      usp: '100% duurzame elektriciteit',
      type: 'green'
    },
    { 
      name: 'Vandebron', 
      description: '100% Nederlandse duurzame energie',
      usp: 'Van lokale producenten',
      type: 'green'
    },
    { 
      name: 'Frank Energie', 
      description: 'Groene stroom met dynamische contracten',
      usp: 'Slimme app met uurprijzen',
      type: 'dynamic'
    },
    { 
      name: 'Oxxio', 
      description: 'Groene energie provider',
      usp: 'Betaalbare, transparante contracten',
      type: 'green'
    },
    { 
      name: 'easyEnergy', 
      description: 'Dynamische leverancier',
      usp: 'Uurlijkse marktprijzen',
      type: 'dynamic'
    }
  ]

  const getProviderColor = (type: string) => {
    switch(type) {
      case 'green': return 'border-green-400 bg-green-50/10'
      case 'budget': return 'border-yellow-400 bg-yellow-50/10'
      case 'dynamic': return 'border-purple-400 bg-purple-50/10'
      default: return 'border-blue-400 bg-blue-50/10'
    }
  }

  return (
    <>
      <Head>
        <title>Energie Informatie 2025 - Adviesneutraal | Vergelijk ALLE energieleveranciers | +31 85 087 2183</title>
        <meta name="description" content="🆕 Energie Informatie 2025: Vergelijk ALLE 50+ energieleveranciers in Nederland. Onafhankelijk advies van Adviesneutraal, gratis service, bespaar tot €500 per jaar. Bel: +31 85 087 2183" />
        <meta name="keywords" content="energie vergelijken 2025, energieleverancier vergelijken, klantenservice energie, goedkoopste energie, groene energie, energie overstappen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adviesneutraal.nl/" />
        <meta property="og:title" content="Energie Informatie 2025 - Adviesneutraal" />
        <meta property="og:description" content="Vergelijk ALLE 50+ energieleveranciers in Nederland. Onafhankelijk advies, gratis service, bespaar tot €500 per jaar." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-green-600 to-blue-800">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
                      <div className="flex items-center">
              <img src="/logos/contractvergelijkers-logo.png" alt="Adviesneutraal Logo" className="h-16 md:h-18 w-auto" />
            </div>
                      <div className="hidden md:flex space-x-6 items-center">
              <Link href="/vergelijker" className="text-white hover:text-green-200 transition-colors">
                Energie Vergelijker
              </Link>
            <a href="#leveranciers" className="text-white hover:text-green-200 transition-colors">
              Energieleveranciers
            </a>
            <a href="#groene-energie" className="text-white hover:text-green-200 transition-colors">
              Groene Energie
            </a>
            <a href="#over-ons" className="text-white hover:text-green-200 transition-colors">
              Over Ons
            </a>
                         <a href={`tel:+31${phoneNumber.replace(/\s/g, '')}`} className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition-colors font-bold text-lg shadow-lg">
              📞 {phoneNumber}
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-6 text-sm uppercase tracking-wide">
            🆕 Energie Informatie 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Energie vergelijken en{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              overstappen in 2025
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Vergelijk ALLE 50+ energieleveranciers in Nederland en bespaar tot <strong className="text-green-400">€500 per jaar</strong>. 
            Onafhankelijk advies, gratis service, geen verborgen kosten.
          </p>
          
          {/* Phone CTA */}
          <div className="max-w-lg mx-auto mb-12">
            <a 
              href={`tel:${phoneNumber}`}
              className="block bg-green-400 text-black px-8 py-5 rounded-xl font-bold text-2xl hover:bg-green-300 transition-colors shadow-xl border-4 border-green-300"
            >
              📞 Bel Direct: {phoneNumber}
            </a>
            <p className="text-blue-200 mt-3 font-semibold">
              🕒 Ma-Vr: 09:00-20:30
            </p>
            <p className="text-green-300 mt-2 font-bold">
              ✅ Gratis advies • ✅ Onafhankelijk • ✅ Binnen 5 minuten geregeld
            </p>
          </div>

          {/* Quick Action Cards */}
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <a href="#leveranciers" className="bg-blue-500/20 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-blue-500/30 transition-colors border border-blue-400">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-white font-bold mb-2">Energieleveranciers</h3>
              <p className="text-blue-100 text-sm">Vergelijk alle leveranciers</p>
            </a>
            <Link href="/vergelijker" className="bg-green-500/20 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-green-500/30 transition-colors border border-green-400">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-white font-bold mb-2">Energie Vergelijken</h3>
              <p className="text-blue-100 text-sm">Bespaar tot €500</p>
            </Link>
            <a href="#goedkoopste" className="bg-yellow-500/20 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-yellow-500/30 transition-colors border border-yellow-400">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-white font-bold mb-2">Goedkoopste Energie</h3>
              <p className="text-blue-100 text-sm">Vind de beste deal</p>
            </a>
            <a href="#groene-energie" className="bg-emerald-500/20 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-emerald-500/30 transition-colors border border-emerald-400">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-white font-bold mb-2">Groene Energie</h3>
              <p className="text-blue-100 text-sm">100% duurzaam</p>
            </a>
          </div>
        </section>

        {/* Trust Indicators - Enhanced */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Waarom 10.000+ Nederlanders kiezen voor Adviesneutraal?
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Onafhankelijk</h3>
              <p className="text-blue-100 text-sm">Officiële partner van alle leveranciers, geen verborgen kosten</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">Gratis Service</h3>
              <p className="text-blue-100 text-sm">Volledig gratis vergelijken en overstappen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-white mb-2">200+ Experts</h3>
              <p className="text-blue-100 text-sm">Ervaren energieadviseurs helpen u dagelijks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">50+ Leveranciers</h3>
              <p className="text-blue-100 text-sm">Alle Nederlandse energiebedrijven vergelijken</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">5 Min Geregeld</h3>
              <p className="text-blue-100 text-sm">Wij regelen de overstap voor u</p>
            </div>
          </div>
        </section>

        {/* How It Works - Enhanced */}
        <section id="vergelijken" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Hoe werkt energie vergelijken en overstappen?
          </h2>
          <p className="text-xl text-blue-100 text-center mb-12 max-w-3xl mx-auto">
            In 3 eenvoudige stappen naar de beste energiedeal van 2025. Gemiddeld €300 besparing per jaar!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-400 text-black w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Bel voor Gratis Advies</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Bel {phoneNumber} en vertel ons uw huidige situatie. Onze experts analyseren uw energieverbruik.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-400 text-black w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Wij Vergelijken Alles</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Wij vergelijken alle 50+ leveranciers en vinden de beste deal: variabel, vast, groen of dynamisch.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-400 text-black w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Wij Regelen Overstap</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Wij regelen de complete overstap voor u. Binnen 2-4 weken bent u overgestapt en bespaart u geld.
              </p>
            </div>
          </div>
        </section>

        {/* Energy Providers Section - Enhanced */}
        <section id="leveranciers" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Alle Nederlandse Energieleveranciers 2025
          </h2>
          <p className="text-xl text-blue-100 text-center mb-12 max-w-4xl mx-auto">
            Vergelijk contracten van ALLE 50+ energieleveranciers. Van traditioneel tot dynamisch, van budget tot premium groen. 
            Wij vinden de beste deal voor uw situatie.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {energyProviders.map((provider) => (
              <div key={provider.name} className={`backdrop-blur-lg rounded-xl p-6 border-2 ${getProviderColor(provider.type)}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{provider.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    provider.type === 'green' ? 'bg-green-400 text-black' :
                    provider.type === 'budget' ? 'bg-yellow-400 text-black' :
                    provider.type === 'dynamic' ? 'bg-purple-400 text-white' :
                    'bg-blue-400 text-white'
                  }`}>
                    {provider.type === 'green' ? '🌱 GROEN' :
                     provider.type === 'budget' ? '💰 BUDGET' :
                     provider.type === 'dynamic' ? '📊 DYNAMISCH' :
                     '🏢 STANDAARD'}
                  </span>
                </div>
                <p className="text-blue-100 mb-2 font-semibold">{provider.description}</p>
                <p className="text-blue-200 text-sm mb-4">{provider.usp}</p>
                <div className="space-y-2">
                  <a 
                    href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                    className="block bg-green-400 text-black px-4 py-2 rounded-lg text-center font-semibold hover:bg-green-300 transition-colors"
                  >
                    📞 Vergelijk {provider.name}
                  </a>
                                     <a 
                     href={`/providers/${provider.name.toLowerCase().replace(/\s+/g, '-')}`}
                     className="block w-full bg-white/10 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-white/20 transition-colors"
                   >
                     Meer informatie
                   </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-white/5 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">En nog 40+ andere leveranciers</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Inclusief: ENGIE, Coolblue Energie, Energiedirect, Energy Zero, WoonEnergie, Clean Energy, 
              Mega Energie, HalloStroom, Innova Energie, SamSam, OM Nieuwe Energie, Tibber, Next Energy, 
              Coteq, Rendo en vele anderen...
            </p>
            <a 
              href={`tel:${phoneNumber}`}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              🔍 Vergelijk Alle 50+ Leveranciers - Bel Nu!
            </a>
          </div>
        </section>

        {/* Green Energy Section */}
        <section id="groene-energie" className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              🌱 Groene Energie Nederland 2025
            </h2>
            <p className="text-xl text-green-100 text-center mb-12 max-w-4xl mx-auto">
              Overstappen naar 100% duurzame energie is eenvoudiger dan ooit. Vaak slechts €2-5 duurder per maand, 
              maar met een groot positief effect op het milieu. Bespaar 2,1 ton CO₂ per jaar!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-white mb-3">Zonne-energie</h3>
                <p className="text-green-100">Opgewekt met zonnepanelen in Nederland</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-white mb-3">Windenergie</h3>
                <p className="text-green-100">Van Nederlandse windmolens op land en zee</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-white mb-3">Waterkracht</h3>
                <p className="text-green-100">Duurzame energie uit waterkracht</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">🌍 Voordelen voor het Milieu</h4>
                <ul className="text-green-100 space-y-2">
                  <li>✅ Geen CO₂ uitstoot</li>
                  <li>✅ Geen luchtvervuiling</li>
                  <li>✅ Duurzame toekomst</li>
                  <li>✅ Steun energietransitie</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">👨‍👩‍👧‍👦 Persoonlijke Voordelen</h4>
                <ul className="text-green-100 space-y-2">
                  <li>✅ Goed gevoel over bijdrage</li>
                  <li>✅ Vaak stabielere prijzen</li>
                  <li>✅ Slechts €2-5 duurder</li>
                  <li>✅ Garantie van Oorsprong</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
                className="inline-block bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-300 transition-colors shadow-lg"
              >
                🌱 Vergelijk Groene Energie Tarieven
              </a>
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section id="over-ons" className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Over Adviesneutraal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-blue-100 text-lg leading-relaxed">
                  Wij zijn het grootste onafhankelijke energievergelijkingsplatform van Nederland. 
                  Met ons team van 200+ ervaren energieadviseurs helpen wij dagelijks duizenden 
                  Nederlanders bij het vinden van het beste energiecontract.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Of u nu op zoek bent naar klantenservice van uw huidige leverancier, wilt overstappen 
                  naar groene energie, of gewoon wilt besparen - wij staan voor u klaar met gratis, 
                  onafhankelijk advies.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="text-white font-bold">Onafhankelijk & Betrouwbaar</h4>
                    <p className="text-blue-200 text-sm">Geen verborgen kosten, transparant advies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="text-white font-bold">Snelle Service</h4>
                    <p className="text-blue-200 text-sm">Binnen 5 minuten de beste deal gevonden</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h4 className="text-white font-bold">Gegarandeerde Besparing</h4>
                    <p className="text-blue-200 text-sm">Gemiddeld €300 besparing per jaar</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="text-white font-bold">100% Gratis</h4>
                    <p className="text-blue-200 text-sm">Volledig gratis service, ook na overstap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Klaar om te besparen op uw energierekening?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Meer dan 10.000 tevreden klanten gingen u voor. Gemiddelde besparing: €300 per jaar. 
              Gratis advies, geen verborgen kosten, binnen 5 minuten geregeld.
            </p>
            <a 
              href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
              className="inline-block bg-white text-green-600 px-10 py-5 rounded-xl font-bold text-2xl hover:bg-gray-100 transition-colors shadow-xl"
            >
              📞 Bel Nu: {phoneNumber}
            </a>
            <p className="text-white/80 mt-4 font-semibold">
              Ma-Vr: 09:00-20:30
            </p>
          </div>
        </section>

        {/* Social Proof Reviews Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              💬 Wat Onze Klanten Zeggen
            </h2>
            <p className="text-blue-100 text-lg">
              Duizenden tevreden klanten gingen je voor. Lees hun ervaringen!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Review 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-auto bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  €480 bespaard
                </span>
              </div>
              <blockquote className="text-white italic mb-4">
                "Binnen 10 minuten had ik een perfect overzicht van alle aanbieders. De telefonische service was uitstekend!"
              </blockquote>
              <div className="text-blue-200">
                <div className="font-semibold">Sandra V.</div>
                <div className="text-sm">Amsterdam</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-auto bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  €600 bespaard
                </span>
              </div>
              <blockquote className="text-white italic mb-4">
                "Eindelijk een eerlijke vergelijking zonder verborgen kosten. Bespaar nu €600 per jaar!"
              </blockquote>
              <div className="text-blue-200">
                <div className="font-semibold">Mark B.</div>
                <div className="text-sm">Rotterdam</div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-auto bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  €520 bespaard
                </span>
              </div>
              <blockquote className="text-white italic mb-4">
                "De adviseur heeft alles voor mij geregeld. Geen gedoe, gewoon besparen!"
              </blockquote>
              <div className="text-blue-200">
                <div className="font-semibold">Linda K.</div>
                <div className="text-sm">Utrecht</div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐
                </div>
                <span className="ml-auto bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  €350 bespaard
                </span>
              </div>
              <blockquote className="text-white italic mb-4">
                "Snelle service en transparante informatie. Precies wat ik zocht!"
              </blockquote>
              <div className="text-blue-200">
                <div className="font-semibold">Peter M.</div>
                <div className="text-sm">Den Haag</div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-auto bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  €445 bespaard
                </span>
              </div>
              <blockquote className="text-white italic mb-4">
                "Geweldige ervaring! De overstap was binnen een week geregeld."
              </blockquote>
              <div className="text-blue-200">
                <div className="font-semibold">Emma J.</div>
                <div className="text-sm">Eindhoven</div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-auto bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  €580 bespaard
                </span>
              </div>
              <blockquote className="text-white italic mb-4">
                "Professioneel advies en echt de beste deal gevonden. Aanrader!"
              </blockquote>
              <div className="text-blue-200">
                <div className="font-semibold">Tom R.</div>
                <div className="text-sm">Groningen</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-green-400/20 border border-green-400 rounded-xl p-6 inline-block">
              <div className="text-2xl font-bold text-green-400 mb-2">4.8/5.0 ⭐</div>
              <div className="text-white">Gebaseerd op 1.247+ beoordelingen</div>
            </div>
          </div>
        </section>

        {/* Transparency & Compliance Section */}
        <section id="transparantie" className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Transparantie & Onafhankelijkheid</h2>
            <div className="grid md:grid-cols-2 gap-8 text-blue-100">
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-1">Wie zijn wij?</h3>
                  <p>Adviesneutraal is een onafhankelijk adviesplatform. Wij zijn geen energieleverancier en beheren geen klantdossiers van leveranciers.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Wat doen wij?</h3>
                  <p>Wij vergelijken alle Nederlandse energieleveranciers (vast, variabel, dynamisch; groen en traditioneel) en geven neutraal advies passend bij uw situatie.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Hoe verdienen wij?</h3>
                  <p>Onze dienst is gratis voor consumenten. Bij een overstap kunnen wij een vergoeding ontvangen van een leverancier of partner. Dit beïnvloedt ons advies niet.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-1">Methodologie</h3>
                  <p>Wij wegen o.a. prijs, contractduur, tariefzekerheid, duurzaamheid (GvO), voorwaarden en klanttevredenheid. Persoonlijke factoren (verbruik, postcode) bepalen de best passende opties.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Privacy & AVG</h3>
                  <p>Wij verwerken alleen noodzakelijke gegevens volgens de AVG. Wij verkopen geen persoonsgegevens. Zie onze privacyverklaring voor details.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Bereikbaarheid</h3>
                  <p>Telefonisch bereikbaar Ma–Vr: 09:00–20:30. Voor vragen of klachten: info@adviesneutraal.nl.</p>
                </div>
              </div>
            </div>
            <p className="text-blue-200 text-sm mt-6">Adviesneutraal vergelijkt de volledige Nederlandse markt voor consumenten. Wij zijn onafhankelijk en werken transparant.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                             <div>
                                   <img src="/logos/contractvergelijkers-logo.png" alt="Adviesneutraal Logo" className="h-14 md:h-16 w-auto mb-4" />
                 <p className="text-blue-200 mb-4">
                   Het grootste onafhankelijke energie-adviesplatform van Nederland.
                 </p>
                 <p className="text-green-400 font-bold">
                   📞 {phoneNumber}
                 </p>
               </div>
              <div>
                <h4 className="text-white font-bold mb-4">Onze Service</h4>
                <ul className="text-blue-200 space-y-2">
                  <li>✅ Gratis energieadvies</li>
                  <li>✅ Alle leveranciers vergelijken</li>
                  <li>✅ Overstap service</li>
                  <li>✅ 200+ energieadviseurs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Openingstijden</h4>
                <div className="text-blue-200 space-y-1">
                  <p>Maandag - Vrijdag: 09:00 - 20:30</p>
                  <p className="text-green-400 font-semibold mt-3">
                    Gratis bellen vanuit heel Nederland
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center text-blue-200">
              <p>&copy; 2025 Adviesneutraal. Alle rechten voorbehouden.</p>
              <p className="mt-2 text-sm">Onafhankelijk energie-advies • Geen verborgen kosten • 100% gratis service</p>
            </div>
          </div>
        </footer>

        {/* Sticky Call Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href={`tel:+31${phoneNumber.replace(/\s/g, '')}`}
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