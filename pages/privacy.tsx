import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { loadHomepageContent } from '../lib/content'
import { getBaseUrlFromReq, getDomainConfig } from '../lib/config'
import { getColorScheme } from '../lib/colors'

import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_TEL } from '../components/SiteLayout'

const dataCategories = [
  {
    title: 'Contactmomenten',
    items: [
      'Naam, adres, woonplaats',
      'Telefoonnummer en e-mailadres',
      'Voorkeurstijd voor terugbelverzoek',
      'Notities over uw vraag of situatie',
    ],
  },
  {
    title: 'Adviestrajecten',
    items: [
      'Huidige energieleverancier en contractvorm',
      'Verbruiksgegevens en meterstanden (indien gedeeld)',
      'Financiele gegevens die relevant zijn voor het advies, zoals termijnbedragen',
      'Documenten die u zelf met ons deelt, bijvoorbeeld offertes of facturen',
    ],
  },
  {
    title: 'Verduurzamingsprojecten',
    items: [
      'Type woning of bedrijfsruimte en bouwjaar',
      'Aanwezige installaties (zonnepanelen, warmtepomp, laadpalen)',
      'Foto\'s of plattegronden die u vrijwillig aanlevert',
      'Notities over subsidies of financieringsopties',
    ],
  },
]

const purposes = [
  {
    title: 'Dienstverlening & advies',
    description:
      'Om u advies te kunnen geven hebben we informatie nodig over uw huidige situatie. Zonder deze gegevens kunnen we geen passende vergelijking of aanbeveling doen.',
    legalBasis: 'Uitvoering van de overeenkomst of precontractuele fase (art. 6 lid 1b AVG).',
  },
  {
    title: 'Kwaliteitsbewaking',
    description:
      'We evalueren gesprekken en bewaren beperkte notities om onze dienstverlening te verbeteren en klachten te kunnen behandelen.',
    legalBasis: 'Gerechtvaardigd belang (art. 6 lid 1f AVG).',
  },
  {
    title: 'Wettelijke verplichtingen',
    description:
      'Voor onze financiele administratie en fiscale bewaarplicht bewaren we facturen en betalingsgegevens.',
    legalBasis: 'Wettelijke verplichting (art. 6 lid 1c AVG).',
  },
  {
    title: 'Marketing & relatiebeheer',
    description:
      'We benaderen klanten alleen met relevante aanbiedingen wanneer zij daar uitdrukkelijke toestemming voor hebben gegeven.',
    legalBasis: 'Toestemming (art. 6 lid 1a AVG).',
  },
]

const dataRights = [
  'Recht op inzage: u kunt opvragen welke gegevens wij van u hebben.',
  'Recht op rectificatie en aanvulling: u kunt ons vragen incorrecte gegevens te corrigeren.',
  'Recht op beperking en verwijdering: in bepaalde gevallen kunt u vragen om gegevens te verwijderen of tijdelijk niet te gebruiken.',
  'Recht op overdraagbaarheid: u kunt een overzicht van uw gegevens ontvangen om door te geven aan een andere partij.',
  'Recht van bezwaar: u kunt bezwaar maken tegen de verwerking van uw gegevens op basis van gerechtvaardigd belang.',
  'Recht om toestemming in te trekken: heeft u toestemming gegeven? Dan kunt u die altijd intrekken.',
]

interface PrivacyProps { brandColor?: string }

export default function Privacy({ brandColor = 'blue' }: PrivacyProps) {
  const colors = getColorScheme(brandColor)
  return (
    <>
      <Head>
        <title>Privacyverklaring | AdviesNeutraal</title>
        <meta
          name="description"
          content="Privacyverklaring van AdviesNeutraal. Lees hoe wij persoonsgegevens verwerken, beveiligen en welke rechten u heeft volgens de AVG."
        />
      </Head>

      <div className="flex-1">
        <section className={`${colors.gradient} text-white`}>
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Privacyverklaring</h1>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              Uw vertrouwen staat centraal bij al onze adviesgesprekken. Op deze pagina leest u welke
              persoonsgegevens wij verwerken, voor welke doelen we dat doen en hoe u gebruik maakt van uw
              rechten volgens de Algemene Verordening Gegevensbescherming (AVG).
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Wie is AdviesNeutraal?</h2>
            <p className="mt-4 text-sm text-slate-600">
              AdviesNeutraal is een onafhankelijk energie-adviesplatform dat consumenten, VvE&apos;s en mkb
              ondersteunt bij energievraagstukken. Deze privacyverklaring geldt voor al onze diensten en
              contactmomenten.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <strong>Officiele naam:</strong> AdviesNeutraal
                </li>
                <li>
                  <strong>Adres:</strong> Kamperingweg 45-D, 2803 PE Gouda
                </li>
                <li>
                  <strong>KvK-nummer:</strong> 84091355
                </li>
                <li>
                  <strong>Telefoon:</strong>{' '}
                  <a href={`tel:${PHONE_NUMBER_TEL}`} className={`${colors.primaryText}`}>
                    {DISPLAY_PHONE_NUMBER}
                  </a>
                </li>
                <li>
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:privacy@adviesneutraal.nl" className={`${colors.primaryText}`}>
                    privacy@adviesneutraal.nl
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Welke persoonsgegevens verwerken wij?
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              We verwerken alleen gegevens die noodzakelijk zijn voor het beantwoorden van uw vraag of het
              uitvoeren van een adviestraject. Welke gegevens dat zijn, verschilt per dienst.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {dataCategories.map((category) => (
                <div key={category.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{category.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Doeleinden en wettelijke grondslagen
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Onderstaande tabel laat zien waarom wij persoonsgegevens verwerken en op welke juridische basis
              dit gebeurt.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Doeleinde</th>
                    <th className="px-4 py-3">Beschrijving</th>
                    <th className="px-4 py-3">Grondslag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {purposes.map((purpose) => (
                    <tr key={purpose.title}>
                      <td className="px-4 py-4 font-semibold text-slate-900">{purpose.title}</td>
                      <td className="px-4 py-4">{purpose.description}</td>
                      <td className="px-4 py-4">{purpose.legalBasis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Bewaartermijnen</h2>
            <p className="mt-4 text-sm text-slate-600">
              We bewaren persoonsgegevens niet langer dan noodzakelijk. Voor de meeste adviestrajecten
              hanteren we de volgende termijnen:
            </p>
            <ul className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
              <li>
                <strong>Notities van adviesgesprekken:</strong> maximaal 24 maanden, zodat we vervolgvragen
                kunnen beantwoorden en kwaliteitscontroles kunnen uitvoeren.
              </li>
              <li>
                <strong>Financiele administratie:</strong> 7 jaar, conform de fiscale bewaarplicht.
              </li>
              <li>
                <strong>Documenten die u met ons deelt:</strong> tot maximaal 6 maanden na afronding van het
                advies, tenzij u eerder verwijdering verzoekt.
              </li>
              <li>
                <strong>Nieuwsbrieven of marketingtoestemming:</strong> totdat u zich uitschrijft of uw
                toestemming intrekt.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Delen wij gegevens met derden?
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              AdviesNeutraal verkoopt uw gegevens nooit aan derden. We delen gegevens alleen wanneer dat
              nodig is voor de uitvoering van onze diensten of omdat we daar wettelijk toe verplicht zijn.
              Hierbij gaat het bijvoorbeeld om:
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-slate-600">
              <li>Leveranciers waarmee we een overstap in gang zetten (na uw toestemming).</li>
              <li>
                Externe partners zoals installateurs of subsidieadviseurs wanneer u ons vraagt een introductie
                te verzorgen.
              </li>
              <li>
                Dienstverleners die namens ons systemen beheren, zoals beveiligde cloudopslag of
                telefonieplatforms. Met deze partijen hebben wij verwerkersovereenkomsten.
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Wij werken uitsluitend met partijen binnen de Europese Economische Ruimte (EER) of met
              leveranciers die passende waarborgen bieden volgens de AVG.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Beveiliging</h2>
            <p className="mt-4 text-sm text-slate-600">
              We nemen technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen
              verlies of onrechtmatige verwerking. Denk aan:
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-slate-600">
              <li>Beveiligde opslag in datacenters binnen de EER.</li>
              <li>Tweestapsverificatie voor alle medewerkersaccounts.</li>
              <li>Toegangsbeheer op basis van het &quot;need to know&quot;-principe.</li>
              <li>Versleutelde verbindingen (TLS) voor e-mail en webformulieren.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Uw rechten</h2>
            <p className="mt-4 text-sm text-slate-600">
              U heeft meerdere rechten ten aanzien van uw persoonsgegevens. U kunt deze rechten uitoefenen
              door contact met ons op te nemen via privacy@adviesneutraal.nl. We reageren altijd binnen
              vier weken op uw verzoek.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-slate-600">
              {dataRights.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Bent u het niet eens met de manier waarop wij met uw gegevens omgaan? Dan heeft u het recht om
              een klacht in te dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
              Uiteraard proberen we er samen eerst uit te komen.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Cookies</h2>
            <p className="mt-4 text-sm text-slate-600">
              Onze website gebruikt alleen functionele cookies en analytische cookies met een minimale
              impact op uw privacy. Denk aan geanonimiseerde statistieken om de website te verbeteren en
              het onthouden van uw cookievoorkeuren. Voor marketingcookies vragen we altijd expliciete
              toestemming. Meer informatie leest u in het{' '}
              <a href="/cookiebeleid" className={`${colors.primaryText} underline`}>
                cookiebeleid
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Vragen of verzoeken?</h2>
            <p className="mt-4 text-sm text-slate-600">
              Heeft u vragen over deze privacyverklaring of wilt u gebruikmaken van uw rechten? Neem dan
              contact op via:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                E-mail: <a href="mailto:privacy@adviesneutraal.nl" className={`${colors.primaryText} underline`}>privacy@adviesneutraal.nl</a>
              </li>
              <li>
                Telefoon: <a href={`tel:${PHONE_NUMBER_TEL}`} className={`${colors.primaryText} underline`}>{DISPLAY_PHONE_NUMBER}</a>
              </li>
              <li>
                Post: Kamperingweg 45-D, 2803 PE Gouda (t.a.v. Privacy Officer)
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Laatste update: januari 2025. We passen deze privacyverklaring aan wanneer er wijzigingen zijn
              in onze dienstverlening of wetgeving. Kijk daarom regelmatig of er updates zijn.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const baseUrl = getBaseUrlFromReq(ctx.req)
  const homepage = await loadHomepageContent(baseUrl)
  return {
    props: {
      brandColor: homepage?.brandColor || getDomainConfig().brandColor || 'blue'
    }
  }
}
