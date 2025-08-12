import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacyverklaring | Contractvergelijkers</title>
        <meta name="description" content="Privacyverklaring van Contractvergelijkers: uitleg over waarom en hoe wij persoonsgegevens verwerken en uw AVG-rechten." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">Contractvergelijkers</Link>
            <nav className="space-x-4 text-sm">
              <Link href="/klantenservice" className="text-blue-600 hover:underline">Klantenservice</Link>
            </nav>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacyverklaring</h1>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Inleiding</h2>
          <p className="text-gray-700 mb-6">
            Contractvergelijkers verwerkt persoonsgegevens van haar klanten en websitebezoekers. Wij doen dit om u zo goed mogelijk te helpen en onze doelstellingen te bereiken. In dit privacy statement leggen we uit waarom en op welke manier we uw persoonsgegevens verwerken.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Wie zijn wij?</h2>
          <p className="text-gray-700 mb-4">
            Wij zijn <strong>Contractvergelijkers</strong>: adviseur op het gebied van energiezaken. Dit privacy statement ziet op al onze verwerkingen – ook indien we samen met andere partijen persoonsgegevens verwerken.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Contractvergelijkers B.V.</li>
            <li>Adres: [Straatnaam] [Huisnummer], [Postcode] [Plaats]</li>
            <li>Telefoon: 085 087 2183</li>
            <li>E-mail: info@contractvergelijkers.nl</li>
            <li>KvK: [KvK-nummer]</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Welke persoonsgegevens verwerken wij?</h2>
          <p className="text-gray-700 mb-2">Wij verwerken de volgende persoonsgegevens (afhankelijk van uw aanvraag en contactmoment):</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Voor- en achternaam, adres, woonplaats</li>
            <li>Telefoonnummer, e-mailadres, geslacht (optioneel)</li>
            <li>Deelnamedetails (soort contract met energieleverancier)</li>
            <li>Betaalgegevens indien van toepassing</li>
            <li>Functietitel (zakelijk), contactgeschiedenis</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Waarom verwerken wij die persoonsgegevens?</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Werving (marketing)</h3>
          <p className="text-gray-700 mb-4">
            Binnen Contractvergelijkers werven wij o.a. nieuwe prospects voor interessante aanbiedingen op de energiemarkt bij verschillende leveranciers en ook nieuwe collega’s. Om met iedereen contact te onderhouden verwerken wij ook van hen contactdetails en interessegebieden indien aangegeven door de prospects. Wij geven geen persoonsgegevens door aan derde partijen, tenzij u daar ondubbelzinnige toestemming voor hebt gegeven.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Partneradministratie en dienstverlening</h3>
          <p className="text-gray-700 mb-4">
            In onze administratie houden we bij met welke partners wij samenwerken en welke klanten we helpen, met daarbij de relevante contactpersonen. Van contactpersonen houden we verschillende persoonsgegevens bij om onze diensten zo optimaal mogelijk uit te voeren. Zo houden we contactdetails bij om u te kunnen bereiken, betaalgegevens om betalingen te ontvangen of te doen. U kunt ons via verschillende kanalen bereiken: telefoon, post en e-mail, bijvoorbeeld. Om dat mogelijk te maken verwerken wij ook persoonsgegevens.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Nieuwsbrieven en mailings</h3>
          <p className="text-gray-700 mb-4">
            Wij doen niet aan het verzenden van periodieke nieuwsbrieven. Wel kunnen we – na uitdrukkelijke goedkeuring – jaarlijks contact opnemen, telefonisch of per e‑mail, met de scherpste aanbiedingen van dat moment.
          </p>
          <p className="text-gray-700 mb-4">
            Wij verwerken geen Cookie ID, Social ID en/of surfgedrag voor marketingdoeleinden.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Uitvoering overeenkomst</h3>
          <p className="text-gray-700 mb-4">
            Een deel van onze verwerkingen is noodzakelijk om een overstap of aanvraag bij een leverancier te kunnen verzorgen. Denk hierbij aan EAN‑codes van de aansluiting(en), adresgegevens van de woning en/of het zakelijke object waarvoor een aanmelding wordt doorgevoerd en (jaar)verbruiksgegevens.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Bijzondere gegevens</h3>
          <p className="text-gray-700 mb-6">Wij verwerken géén bijzondere persoonsgegevens.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Rechten van betrokkenen</h2>
          <p className="text-gray-700 mb-4">
            In de AVG zijn een aantal rechten opgenomen die voor iedereen gelden. Wij doen ons uiterste best om hier zo goed mogelijk aan te voldoen. Heeft u tips of opmerkingen? Laat het ons dan weten! Om van uw rechten gebruik te maken kunt u contact met ons opnemen via 085 087 2183 of <a href="mailto:info@contractvergelijkers.nl" className="text-blue-600 underline">info@contractvergelijkers.nl</a>.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Informatie en inzage:</strong> u kunt inzien welke persoonsgegevens we van u verwerken en waarom.</li>
            <li><strong>Rectificatie:</strong> denkt u dat wij onjuiste gegevens hebben? Dan passen wij die aan.</li>
            <li><strong>Vergetelheid:</strong> op verzoek verwijderen wij persoonsgegevens, tenzij wij ze nog nodig hebben voor andere doeleinden (bijv. administratie).</li>
            <li><strong>Beperking:</strong> u kunt verzoeken de verwerking te beperken als u denkt dat wij onjuist of onrechtmatig verwerken.</li>
            <li><strong>Bezwaar:</strong> u kunt bezwaar maken tegen verwerking; bij marketing stoppen wij zo snel mogelijk.</li>
            <li><strong>Overdraagbaarheid:</strong> u kunt om overdracht van uw gegevens verzoeken (dataportabiliteit).
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Toestemming intrekken:</strong> toestemming voor telefonisch- en mailcontact kunt u altijd intrekken. Neem hiervoor contact op met ons of gebruik de uitschrijf‑mogelijkheden.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Klacht indienen bij de AP:</strong> denkt u dat wij niet handelen in overeenstemming met de privacywetgeving? Laat het ons weten. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Bewaartermijnen</h2>
          <p className="text-gray-700 mb-6">Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, tenzij een wettelijke bewaartermijn van toepassing is.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Grondslagen van de verwerkingen</h2>
          <p className="text-gray-700 mb-6">
            Zoals hierboven toegelicht verwerken wij sommige gegevens voor het uitvoeren van een wettelijke plicht en een groot deel voor de uitvoering van een overeenkomst. Daarnaast kunnen wij gegevens verwerken op basis van uw toestemming (met name voor toekomstige passende aanbiedingen) of ons gerechtvaardigd belang (bijv. klantenservice).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Derde ontvangers</h2>
          <p className="text-gray-700 mb-6">
            Voor de uitvoering van onze dienstverlening schakelen wij dienstverleners in (verwerkers). Wij werken bijvoorbeeld met (bel‑)software, een beveiligde cloud‑omgeving en – uitsluitend bij een overstap – energieleveranciers. Met deze partijen sluiten wij verwerkersovereenkomsten. Soms zijn wij wettelijk verplicht persoonsgegevens aan derden te verstrekken; zoals aan de energieleverancier indien een contract wordt opgemaakt of aan de Belastingdienst. Wij verstrekken geen gegevens aan derden voor andere doeleinden dan hierboven toegelicht.
          </p>

          <div className="mt-10 text-sm text-gray-600">Laatste update: {new Date().toLocaleDateString('nl-NL')}</div>
        </section>

        <footer className="bg-gray-900 text-white py-10">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Contractvergelijkers</div>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/klantenservice" className="hover:underline">Klantenservice</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}