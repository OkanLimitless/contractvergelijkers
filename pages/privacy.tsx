import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacyverklaring | Contractvergelijkers</title>
        <meta name="description" content="Privacyverklaring van Contractvergelijkers: hoe wij omgaan met jouw persoonsgegevens, je rechten en onze contactgegevens." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">Contractvergelijkers</Link>
            <Link href="/klantenservice" className="text-blue-600 hover:underline">Klantenservice</Link>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacyverklaring</h1>

          <p className="text-gray-700 mb-6">
            Contractvergelijkers verwerkt persoonsgegevens van bezoekers en klanten om onze dienstverlening
            mogelijk te maken. In deze privacyverklaring lichten wij toe welke gegevens wij verwerken, voor welke
            doeleinden en welke rechten je hebt. Deze pagina is gebaseerd op een gangbare en actuele
            privacystructuur vergelijkbaar met die van adviesorganisaties in de energiemarkt
            en aangepast aan onze eigen dienstverlening.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Wie zijn wij?</h2>
          <p className="text-gray-700 mb-4">
            Wij zijn <strong>Contractvergelijkers</strong>, onafhankelijke adviseur op het gebied van energiecontracten.
            Onze bedrijfsgegevens:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Contractvergelijkers B.V.</li>
            <li>Adres: [Straatnaam] [Huisnummer], [Postcode] [Plaats]</li>
            <li>Telefoon: 085 087 2183</li>
            <li>E-mail: info@contractvergelijkers.nl</li>
            <li>KvK: [KvK-nummer]</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Welke persoonsgegevens verwerken wij?</h2>
          <p className="text-gray-700 mb-2">Afhankelijk van je interactie met ons kunnen wij de volgende gegevens verwerken:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Naam, adres, woonplaats</li>
            <li>Telefoonnummer en e-mailadres</li>
            <li>Gegevens over je huidige energieleverancier en contracttype</li>
            <li>Adres- en aansluitgegevens (bijv. EAN) en verbruiksinschattingen</li>
            <li>Contactgeschiedenis en voorkeuren</li>
            <li>Betaalgegevens indien van toepassing</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Waarom verwerken wij je gegevens?</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Dienstverlening</strong>: om je te adviseren, te vergelijken en (indien gewenst) een overstap te begeleiden.</li>
            <li><strong>Contact</strong>: om contact met je op te nemen naar aanleiding van je verzoek of aanvraag.</li>
            <li><strong>Administratie</strong>: voor facturatie en wettelijke bewaarplichten.</li>
            <li><strong>Toestemming</strong>: met jouw toestemming kunnen wij je benaderen met actuele aanbiedingen of informatie.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Grondslagen</h2>
          <p className="text-gray-700 mb-6">
            Wij verwerken persoonsgegevens op basis van één of meer van de volgende grondslagen: uitvoering van een overeenkomst,
            gerechtvaardigd belang (bijv. klantenservice), wettelijke verplichting en/of jouw toestemming.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Delen met derden</h2>
          <p className="text-gray-700 mb-6">
            Wij schakelen verwerkers in om onze diensten te kunnen leveren, zoals een beveiligde cloudomgeving,
            telefoniesoftware en – uitsluitend indien een overstap wordt aangevraagd – energieleveranciers.
            Met verwerkers sluiten wij verwerkersovereenkomsten. Wij verkopen jouw gegevens niet aan derden.
            Verstrekking aan derden vindt enkel plaats indien dat noodzakelijk is voor onze dienstverlening,
            op grond van een wettelijke verplichting of met jouw uitdrukkelijke toestemming.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Bewaartermijnen</h2>
          <p className="text-gray-700 mb-6">
            Wij bewaren persoonsgegevens niet langer dan nodig is voor de doeleinden waarvoor ze zijn verzameld,
            tenzij een wettelijke bewaartermijn van toepassing is.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Cookies</h2>
          <p className="text-gray-700 mb-6">
            Wij gebruiken geen marketing-cookies. Functionele en analytische cookies kunnen worden ingezet om onze website
            goed te laten functioneren en te verbeteren. In je browserinstellingen kun je cookies beheren.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Jouw rechten (AVG)</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Inzage in, en informatie over, de persoonsgegevens die wij verwerken</li>
            <li>Rectificatie van onjuiste gegevens</li>
            <li>Verwijdering (recht op vergetelheid) voor zover wettelijk toegestaan</li>
            <li>Beperking van de verwerking</li>
            <li>Bezwaar tegen verwerking, met name bij direct marketing</li>
            <li>Overdraagbaarheid van gegevens (dataportabiliteit)</li>
            <li>Intrekken van toestemming, indien de verwerking daarop is gebaseerd</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Je kunt deze rechten uitoefenen door contact op te nemen via <a href="mailto:info@contractvergelijkers.nl" className="text-blue-600 underline">info@contractvergelijkers.nl</a>
            of telefonisch via 085 087 2183. Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Wijzigingen</h2>
          <p className="text-gray-700 mb-6">
            Deze privacyverklaring kan worden gewijzigd. De meest recente versie is altijd beschikbaar op deze pagina.
          </p>

          <div className="mt-10 text-sm text-gray-600">
            Laatste update: {new Date().toLocaleDateString('nl-NL')}
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-10">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Contractvergelijkers</div>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/klantenservice" className="hover:underline">Klantenservice</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}