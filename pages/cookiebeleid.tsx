import Head from 'next/head'

const cookieTypes = [
  {
    title: 'Functionele cookies',
    description:
      'Deze cookies zijn noodzakelijk voor het functioneren van de website. Ze onthouden bijvoorbeeld uw cookievoorkeuren en zorgen ervoor dat formulieren correct werken.',
    examples: ['Cookie-gebruik: onthouden van voorkeuren', 'Opslaan van sessie-informatie bij het invullen van formulieren'],
  },
  {
    title: 'Analytische cookies',
    description:
      'Met analytische cookies verzamelen we geanonimiseerde gegevens over het gebruik van onze website. Zo krijgen we inzicht in veelbezochte pagina\'s en kunnen we de site verbeteren.',
    examples: ['Google Analytics (geanonimiseerd IP-adres)', 'Rapportages over bezochte pagina\'s en klikgedrag'],
  },
  {
    title: 'Marketingcookies (optioneel)',
    description:
      'Met marketingcookies meten we campagnes zoals Google Ads. Deze cookies worden alleen geplaatst als u hiervoor toestemming geeft in onze cookiebanner.',
    examples: ['Google Ads conversietracking', 'Eventuele retargetingcampagnes'],
  },
]

export default function CookieBeleid() {
  return (
    <>
      <Head>
        <title>Cookiebeleid | AdviesNeutraal</title>
        <meta
          name="description"
          content="Lees hoe AdviesNeutraal cookies gebruikt. We leggen uit welke cookies we plaatsen, waarom we dit doen en hoe u uw voorkeuren beheert."
        />
      </Head>

      <div className="flex-1">
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Cookiebeleid</h1>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              We vinden het belangrijk dat u weet hoe en waarom we cookies gebruiken. Op deze pagina leest u
              welke cookies we plaatsen, hoe lang we ze bewaren en hoe u uw voorkeuren kunt aanpassen.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Wat zijn cookies?</h2>
            <p className="mt-4 text-sm text-slate-600">
              Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden geplaatst als
              u onze website bezoekt. Ze helpen ons om de website gebruiksvriendelijk te maken en beter aan te
              laten sluiten op uw wensen.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Welke cookies gebruiken wij?</h2>
            <p className="mt-4 text-sm text-slate-600">
              AdviesNeutraal gebruikt drie soorten cookies. Hieronder ziet u welke dat zijn en waarom we ze
              plaatsen.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {cookieTypes.map((cookie) => (
                <div key={cookie.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{cookie.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{cookie.description}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-slate-500">
                    {cookie.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Toestemming en beheer</h2>
            <p className="mt-4 text-sm text-slate-600">
              Bij uw eerste bezoek tonen we een cookiebanner. Daarin kiest u welke cookies u wilt accepteren.
              U kunt uw voorkeuren op ieder moment aanpassen via de knop &quot;Cookie-instellingen&quot; onderaan de
              website of door uw browsergeschiedenis te wissen.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-slate-600">
              <li>Functionele cookies worden altijd geplaatst; zonder deze cookies werkt de site niet goed.</li>
              <li>Analytische cookies gebruiken we alleen met geanonimiseerde statistieken.</li>
              <li>Marketingcookies plaatsen we uitsluitend als u daarvoor toestemming geeft.</li>
            </ul>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Cookies verwijderen of uitschakelen</h2>
            <p className="mt-4 text-sm text-slate-600">
              Via de instellingen van uw browser kunt u cookies verwijderen of het plaatsen ervan uitschakelen.
              Houd er rekening mee dat sommige functies van de website dan mogelijk niet goed werken. Op
              onderstaande websites vindt u uitleg per browser:
            </p>
            <ul className="mt-6 list-disc space-y-1 pl-6 text-sm text-blue-600">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/kb/cookies-verwijderen-adressen" target="_blank" rel="noreferrer" className="underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="underline">
                  Apple Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/topic/cookies-bijhouden-en-verwijderen-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noreferrer" className="underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Vragen?</h2>
            <p className="mt-4 text-sm text-slate-600">
              Heeft u vragen over dit cookiebeleid of wilt u uw toestemming aanpassen? Neem dan contact met
              ons op via privacy@adviesneutraal.nl. We helpen u graag verder.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Laatste update: januari 2025. Wanneer ons cookiegebruik wijzigt, passen we dit beleid aan.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
