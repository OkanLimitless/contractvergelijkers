import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { loadHomepageContent } from '../lib/content'
import { getBaseUrlFromReq } from '../lib/config'
import { getColorScheme } from '../lib/colors'

interface DisclaimerProps { brandColor?: string }

export default function Disclaimer({ brandColor = 'blue' }: DisclaimerProps) {
  const colors = getColorScheme(brandColor)
  return (
    <>
      <Head>
        <title>Disclaimer | AdviesNeutraal</title>
        <meta
          name="description"
          content="Disclaimer van AdviesNeutraal. Lees de voorwaarden rondom het gebruik van onze website, adviesgesprekken en verwijzingen naar derden."
        />
      </Head>

      <div className="flex-1">
        <section className={`${colors.gradient} text-white`}>
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Disclaimer</h1>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              Deze disclaimer is van toepassing op alle websites, documenten en communicatie van
              AdviesNeutraal. Door onze website te gebruiken of een adviesgesprek met ons te voeren, gaat u
              akkoord met onderstaande voorwaarden.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Informatie op deze website</h2>
            <p className="mt-4 text-sm text-slate-600">
              AdviesNeutraal besteedt veel zorg aan de juistheid en volledigheid van informatie op deze
              website. Ondanks deze zorg kan het voorkomen dat bepaalde informatie verouderd of onjuist is.
              Wij zijn niet aansprakelijk voor directe of indirecte schade die ontstaat door het gebruik van
              informatie op deze website.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Heeft u een fout gevonden of mist u informatie? Laat het ons weten via{' '}
              <a href="mailto:info@adviesneutraal.nl" className={`${colors.primaryText} underline`}>
                info@adviesneutraal.nl
              </a>
              . We passen dit dan zo snel mogelijk aan.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Geen vervanging van juridisch advies</h2>
            <p className="mt-4 text-sm text-slate-600">
              De informatie en adviezen die wij geven zijn bedoeld om u te ondersteunen bij het maken van
              keuzes rondom energiecontracten en verduurzaming. Onze adviezen zijn niet bedoeld als financieel
              of juridisch advies. Voor bindende juridische of fiscale vragen raden wij u aan een specialist
              te raadplegen.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Externe links</h2>
            <p className="mt-4 text-sm text-slate-600">
              Op deze website verwijzen we regelmatig naar externe websites van energieleveranciers,
              toezichthouders of partners. AdviesNeutraal heeft geen invloed op de inhoud van deze websites
              en is niet verantwoordelijk voor de juistheid, volledigheid of veiligheid ervan. Het gebruik van
              externe links is volledig voor eigen risico.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Intellectuele eigendom</h2>
            <p className="mt-4 text-sm text-slate-600">
              Alle teksten, beelden en ontwerpen op deze website zijn eigendom van AdviesNeutraal, tenzij anders
              vermeld. Het is niet toegestaan om materiaal zonder voorafgaande schriftelijke toestemming te
              kopieren of te verspreiden.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Wijzigingen</h2>
            <p className="mt-4 text-sm text-slate-600">
              AdviesNeutraal behoudt zich het recht voor om de inhoud van deze disclaimer, de website en de
              diensten op elk moment zonder voorafgaande aankondiging te wijzigen. We raden u aan om deze
              disclaimer regelmatig te controleren.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Contact</h2>
            <p className="mt-4 text-sm text-slate-600">
              Heeft u vragen over deze disclaimer? Neem dan contact op via{' '}
              <a href="mailto:info@adviesneutraal.nl" className="text-blue-600 underline">
                info@adviesneutraal.nl
              </a>{' '}
              of bekijk onze{' '}
              <Link href="/contact" className={`${colors.primaryText} underline`}>
                contactpagina
              </Link>
              .
            </p>
            <p className="mt-4 text-xs text-slate-500">Laatste update: januari 2025.</p>
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
      brandColor: homepage?.brandColor || 'blue'
    }
  }
}
