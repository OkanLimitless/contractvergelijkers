/**
 * Content Interfaces
 * Defines the structure for domain-specific content
 */

export interface HomepageContent {
  heroTitle: string
  heroSubtitle: string
  primaryCTA: string
  secondaryCTA?: string
  trustBadges: string[]
  valueProposition: string
  brandColor: string
  metaTitle: string
  metaDescription: string
}

export interface BrandContent {
  brand: string
  domain: string
  pageTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  primaryCTA: string
  trustBadges: string[]
  serviceItems: string[]
  howItWorks: {
    step: string
    title: string
    description: string
  }[]
  officialUrl: string
  faqItems: {
    question: string
    answer: string
  }[]
}

export interface KlantenserviceContent {
  heroTitle: string
  heroSubtitle: string
  primaryCTA: string
  trustBadges: string[]
  serviceItems: string[]
  brandSections: BrandSection[]
}

export interface BrandSection {
  id: string
  name: string
  title: string
  description: string
  bullets: string[]
  officialUrl: string
}

/**
 * Loads content from a JSON file
 * @param path - Path to the content file
 * @returns Parsed content object
 */
export async function loadContent<T>(path: string, baseUrl?: string): Promise<T | null> {
  try {
    // On the server (SSR), read from filesystem to avoid network variability
    if (typeof window === 'undefined') {
      const fs = await import('fs')
      const p = await import('path')
      const publicPath = p.join(process.cwd(), 'public', path)
      const localPath = p.join(process.cwd(), path)
      if (fs.existsSync(publicPath)) {
        const raw = fs.readFileSync(publicPath, 'utf8')
        return JSON.parse(raw) as T
      }
      if (fs.existsSync(localPath)) {
        const raw = fs.readFileSync(localPath, 'utf8')
        return JSON.parse(raw) as T
      }
      console.warn(`Content not found on filesystem: ${path}`)
      return null
    }

    // On the client, fetch relatively from the same host
    const response = await fetch(`/${path}`)
    if (!response.ok) {
      console.warn(`Content not found: ${path}`)
      return null
    }
    return (await response.json()) as T
  } catch (error) {
    console.error(`Error loading content from ${path}:`, error)
    return null
  }
}

/**
 * Loads homepage content for the current domain
 * @returns HomepageContent or null if not found
 */
export async function loadHomepageContent(baseUrl?: string): Promise<HomepageContent | null> {
  let path: string
  if (baseUrl) {
    const { getContentPathForHost } = await import('./config')
    const hostname = new URL(baseUrl).hostname
    path = getContentPathForHost(hostname, 'homepage')
  } else {
    const { getContentPath } = await import('./config')
    path = getContentPath('homepage')
  }
  return loadContent<HomepageContent>(path, baseUrl)
}

/**
 * Loads klantenservice content for the current domain
 * @returns KlantenserviceContent or null if not found
 */
export async function loadKlantenserviceContent(baseUrl?: string): Promise<KlantenserviceContent | null> {
  let path: string
  if (baseUrl) {
    const { getContentPathForHost } = await import('./config')
    const hostname = new URL(baseUrl).hostname
    path = getContentPathForHost(hostname, 'klantenservice')
  } else {
    const { getContentPath } = await import('./config')
    path = getContentPath('klantenservice')
  }
  return loadContent<KlantenserviceContent>(path, baseUrl)
}

/**
 * Loads brand-specific content
 * @param brand - The brand name (eneco, essent, vattenfall)
 * @returns BrandContent or null if not found
 */
export async function loadBrandContent(brand: string, baseUrl?: string): Promise<BrandContent | null> {
  let path: string
  if (baseUrl) {
    const { getBrandContentPathForHost } = await import('./config')
    const hostname = new URL(baseUrl).hostname
    path = getBrandContentPathForHost(hostname, brand)
  } else {
    const { getBrandContentPath } = await import('./config')
    path = getBrandContentPath(brand)
  }
  return loadContent<BrandContent>(path, baseUrl)
}

/**
 * Gets all available brands
 * @returns Array of brand names
 */
export function getAvailableBrands(): string[] {
  return ['eneco', 'essent', 'vattenfall']
}

/**
 * Validates that required content files exist
 * @returns Array of missing content files
 */
export async function validateContent(): Promise<string[]> {
  const { getDomainConfig } = await import('./config')
  const config = getDomainConfig()
  const missing: string[] = []

  // Check homepage content
  try {
    await loadHomepageContent()
  } catch (error) {
    missing.push(`${config.contentPath}/homepage.json`)
  }

  // Check klantenservice content
  try {
    await loadKlantenserviceContent()
  } catch (error) {
    missing.push(`${config.contentPath}/klantenservice.json`)
  }

  // Check brand content
  const brands = getAvailableBrands()
  for (const brand of brands) {
    try {
      await loadBrandContent(brand)
    } catch (error) {
      missing.push(`${config.contentPath}/brands/${brand}.json`)
    }
  }

  return missing
}

/**
 * Gets default content for a page type
 * @param pageType - The type of page (homepage, klantenservice, brand)
 * @returns Default content object
 */
export function getDefaultContent(pageType: string): any {
  switch (pageType) {
    case 'homepage':
      return {
        heroTitle: 'Onafhankelijk Energie Advies',
        heroSubtitle: 'Deskundig advies over contracten, tarieven en overstappen',
        primaryCTA: '📞 Bel Direct: 085 087 0276',
        trustBadges: ['Onafhankelijk', 'Sinds 2018', 'Gratis advies'],
        valueProposition: 'Professioneel energieadvies',
        brandColor: 'blue',
        metaTitle: 'Onafhankelijk Energie Advies | Advies Neutraal',
        metaDescription: 'Deskundig en onafhankelijk energieadvies voor consumenten en mkb.'
      }
    
    case 'klantenservice':
      return {
        heroTitle: 'Hulp nodig met uw energie klantenservice?',
        heroSubtitle: 'Direct een adviseur aan de lijn voor vragen over uw energiecontract, tarieven of overstap.',
        primaryCTA: '📞 Bel Direct: 085 087 0276',
        trustBadges: ['Direct bereikbaar', 'Geen wachtrij', 'Gratis advies'],
        serviceItems: [
          'Uitleg over contracten, tarieven en voorwaarden',
          'Controle van termijnbedragen en jaarafrekening',
          'Vergelijking van energieaanbiedingen',
          'Overstapbegeleiding naar betere leverancier'
        ],
        brandSections: []
      }
    
    default:
      return null
  }
}
