import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacyverklaring | Adviesneutraal</title>
        <meta name="description" content="Privacyverklaring van Adviesneutraal: uitleg over waarom en hoe wij persoonsgegevens verwerken en uw AVG-rechten." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">Adviesneutraal</Link>
            <nav className="space-x-4 text-sm">
              <Link href="/klantenservice" className="text-blue-600 hover:underline">Klantenservice</Link>
            </nav>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacyverklaring</h1>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Inleiding</h2>
          <p className="text-gray-700 mb-6">
            Advies Neutraal verwerkt persoonsgegevens van haar leden en haar klanten. Wij doen dit om onze leden zo goed mogelijk te helpen en onze doelstellingen te bereiken. In dit privacy statement leggen we uit waarom en op welke manier we jouw persoonsgegevens verwerken.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Wie zijn wij?</h2>
          <p className="text-gray-700 mb-4">
            Wij zijn <strong>Advies Neutraal</strong>: adviseur op het gebied van energiezaken. Dit privacy statement ziet op al onze verwerkingen – ook indien we samen met andere partijen persoonsgegevens verwerken.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Vestigingsadres: Kamperingweg 45-D, 2803PE Gouda</li>
            <li>Telefoon: 085 – 029 07 34</li>
            <li>E-mail: <a href="mailto:info@adviesneutraal.nl" className="text-blue-600 underline">info@adviesneutraal.nl</a></li>
            <li>KvK: 84091355</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Welke persoonsgegevens verwerken wij?</h2>
          <p className="text-gray-700 mb-2">Wij verwerken de volgende persoonsgegevens:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Voor- en achternaam, adres, woonplaats</li>
            <li>Telefoonnummer, geslacht, e-mailadres</li>
            <li>Deelnamedetails (soort contract met energieleverancier)</li>
            <li>Betaalgegevens</li>
            <li>Functietitel</li>
            <li>Contactgeschiedenis</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Waarom verwerken wij die persoonsgegevens?</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Werving (marketing)</h3>
          <p className="text-gray-700 mb-4">
            Binnen Advies Neutraal werven wij o.a. nieuwe prospects voor interessante aanbiedingen op de energiemarkt bij verschillende leveranciers en ook nieuwe collega’s. Om met iedereen contact te onderhouden verwerken wij ook van hen contactdetails en interessegebieden indien aangegeven door de prospects. Wij geven geen persoonsgegevens door aan derde partijen, tenzij je daar ondubbelzinnige toestemming voor hebt gegeven.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Partneradministratie en dienstverlening</h3>
          <p className="text-gray-700 mb-4">
            In onze partneradministratie houden we bij welke partners lid zijn van Advies Neutraal, met daarbij de relevante contactpersonen. Van contactpersonen houden we verschillende persoonsgegevens bij om onze diensten zo optimaal mogelijk uit te voeren. Zo houden we contactdetails bij om je te kunnen bereiken, betaalgegevens om betalingen te ontvangen of te doen.
          </p>
          <p className="text-gray-700 mb-4">Je kan ons via verschillende kanalen bereiken: telefoon, post en e-mail, bijvoorbeeld. Om dat mogelijk te maken verwerken wij ook persoonsgegevens.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Nieuwsbrieven en mailings</h3>
          <p className="text-gray-700 mb-4">
            Wij doen niet aan het verzenden van nieuwsbrieven. Wel kunnen we na uitdrukkelijke goedkeuring van prospects jaarlijks contact opnemen, dan wel telefonisch dan wel per e-mail, met de scherpste aanbiedingen van dat moment.
          </p>
          <p className="text-gray-700 mb-4">Wij verwerken geen Cookie ID, Social ID en/of surfgedrag.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Uitvoering overeenkomst</h3>
          <p className="text-gray-700 mb-4">
            Een groot deel van onze verwerkingen is wettelijk verplicht. Hierbij gaat het vooral om persoonsgegevens die nodig zijn om prospects aan te melden bij een leverancier en de overgang naar leverancier goed te kunnen managen. Denk hierbij aan de EAN-codes van de aansluiting(en), adresgegevens van de woning en/of van het zakelijke object waarvoor een aanmelding bij de leverancier doorvoeren en meetgegevens van het verbruik op jaarbasis.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Bijzondere gegevens</h3>
          <p className="text-gray-700 mb-6">Wij verwerken geen bijzondere persoonsgegevens. Ook hiervoor geldt: als je vragen hebt dan horen we het graag!</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Rechten van betrokkenen</h2>
          <p className="text-gray-700 mb-4">
            In de AVG zijn een aantal rechten opgenomen die voor iedereen gelden. Wij doen ons uiterste best om hier zo goed mogelijk aan te voldoen. Heb je tips of opmerkingen? Laat het ons dan weten! Om van je rechten gebruik te maken kun je contact met ons opnemen via 085 – 029 07 34 of <a href="mailto:info@adviesneutraal.nl" className="text-blue-600 underline">info@adviesneutraal.nl</a>.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Informatie en inzage:</strong> uiteraard kun je inzien welke persoonsgegevens we van jou verwerken. We vertellen je dan ook graag meer over het hoe en waarom we die gegevens verwerken.</li>
            <li><strong>Rectificatie:</strong> heb je het idee dat we verkeerde gegevens van jou hebben? Laat het ons dan weten, dan passen we het aan.</li>
            <li><strong>Vergetelheid:</strong> op verzoek van jou verwijderen wij alle persoonsgegevens die wij van jou hebben. Het kan zijn dat we voor andere doeleinden (administratie of ontdubbelen bijvoorbeeld) die gegevens dan nog wel moeten verwerken.</li>
            <li><strong>Beperking:</strong> heb je het idee dat wij jouw persoonsgegevens onrechtmatig of onjuist verwerken, dan kun je die verwerking ook laten beperken.</li>
            <li><strong>Bezwaar (verzet):</strong> voor de verwerking van jouw persoonsgegevens mag en kan je bezwaar indienen. Gaat het om marketing? Dan zullen we die verwerking zo snel mogelijk beëindigen.</li>
            <li><strong>Overdraagbaarheid:</strong> overdraagbaarheid van persoonsgegevens is een nieuw recht onder de AVG om je persoonsgegevens over te (laten) dragen. Ook hiervoor geldt: vragen? Vragen!</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Toestemming intrekken:</strong> toestemming voor telefonisch- en mailcontact kun je intrekken door <a className="text-blue-600 underline" href="mailto:info@adviesneutraal.nl?subject=Intrekken%20toestemming">hier te klikken</a> of door te klikken op de daarvoor bestemde uitschrijf-button (indien aanwezig) onderaan de pagina’s op onze website. Als je toestemming voor een andere verwerking wilt intrekken, kun je contact met ons opnemen.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Klacht indienen bij de AP:</strong> denk je dat wij niet handelen in overeenstemming met de privacywetgeving? Dan horen we dat natuurlijk graag. Je kan hierover ook een klacht indienen bij de Autoriteit Persoonsgegevens (AP).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Bewaartermijnen</h2>
          <p className="text-gray-700 mb-6">Wij bewaren persoonsgegevens niet langer dan noodzakelijk.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Grondslagen van de verwerkingen</h2>
          <p className="text-gray-700 mb-6">
            Zoals hierboven toegelicht verwerken wij sommige gegevens voor het uitvoeren van een wettelijke plicht en de meeste voor het uitvoeren van een overeenkomst. Wil je hier meer over weten, aarzel dan niet ons te contacteren! Tot slot verwerken we sommige gegevens met jouw toestemming: dit gaat met name over toekomstige passende aanbiedingen op de energiemarkt.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Derde ontvangers</h2>
          <p className="text-gray-700 mb-6">
            Voor de uitvoering van onze dienstverlening schakelen wij dienstverleners in. Dit zijn geen ‘derde ontvangers’ maar verwerkers. Wij werken bijvoorbeeld met belsoftware – een verlenging van de Asterisk PBX centrale –, een beveiligde cloud-omgeving partners, en energieleveranciers. Deze partijen verwerken persoonsgegevens in overeenstemming met de opdracht van Advies Neutraal.
          </p>
          <p className="text-gray-700 mb-6">
            Soms zijn we wettelijk verplicht om persoonsgegevens aan derden te verstrekken; zoals de energieleverancier indien een contract wordt opgemaakt voor de prospect of bijvoorbeeld de Belastingdienst. Wij verstrekken verder geen gegevens aan derden voor andere doeleinden dan hierboven toegelicht.
          </p>

          <div className="mt-10 text-sm text-gray-600">Laatste update: {new Date().toLocaleDateString('nl-NL')}</div>
        </section>

        <footer className="bg-gray-900 text-white py-10">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Adviesneutraal</div>
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