import { GetStaticPaths, GetStaticProps } from 'next'

import VastelastendeskInboundLanding, {
  providerLandingConfigs,
  type ProviderLandingConfig,
} from '../../components/VastelastendeskInboundLanding'

type ProviderPageProps = {
  provider: ProviderLandingConfig
}

export default function ProviderKlantenservicePage({ provider }: ProviderPageProps) {
  return <VastelastendeskInboundLanding provider={provider} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(providerLandingConfigs).map((provider) => ({
      params: { provider: provider.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ProviderPageProps> = async ({ params }) => {
  const slug = String(params?.provider || '').toLowerCase()
  const provider = providerLandingConfigs[slug]

  if (!provider) {
    return { notFound: true }
  }

  return {
    props: { provider },
  }
}
