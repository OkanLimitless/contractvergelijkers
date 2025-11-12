/**
 * Configuration Management
 * Handles domain-specific configuration loading
 */

export interface DomainConfig {
  domain: string
  siteTitle: string
  contentPath: string
  gtagId: string
  gtmId: string
  conversionLabel: string
  phoneNumber: string
  email: string
  brandColor: string
  brandAccent: string
  gaMeasurementId: string
  vercelAnalyticsId?: string
  enableAnalytics: boolean
  enableTracking: boolean
}

/**
 * Gets the current domain configuration from environment variables
 * @returns DomainConfig object
 */
export function getDomainConfig(): DomainConfig {
  return {
    domain: process.env.NEXT_PUBLIC_DOMAIN_NAME || 'localhost',
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || 'Advies Neutraal',
    contentPath: process.env.NEXT_PUBLIC_CONTENT_PATH || 'content/localhost',
    gtagId: process.env.NEXT_PUBLIC_GTAG_ID || 'AW-00000000000',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXX',
    conversionLabel: process.env.NEXT_PUBLIC_CONVERSION_LABEL || 'conversion',
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '0850870276',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@adviesneutraal.nl',
    brandColor: process.env.NEXT_PUBLIC_BRAND_COLOR || 'blue',
    brandAccent: process.env.NEXT_PUBLIC_BRAND_ACCENT || 'indigo',
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXX',
    vercelAnalyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableTracking: process.env.NEXT_PUBLIC_ENABLE_TRACKING === 'true'
  }
}

/**
 * Gets the content path for a specific page type
 * @param pageType - Type of page (homepage, klantenservice, etc.)
 * @returns Path to the content file
 */
export function getContentPath(pageType: string): string {
  const config = getDomainConfig()
  return `${config.contentPath}/${pageType}.json`
}

/**
 * Gets the content path for a brand-specific page
 * @param brand - The brand name (eneco, essent, vattenfall)
 * @returns Path to the brand content file
 */
export function getBrandContentPath(brand: string): string {
  const config = getDomainConfig()
  return `${config.contentPath}/brands/${brand.toLowerCase()}.json`
}

/**
 * Builds a content path for a given hostname
 */
export function getContentPathForHost(hostname: string, pageType: string): string {
  const clean = hostname.replace(/^www\./, '')
  return `content/${clean}/${pageType}.json`
}

/**
 * Builds a brand content path for a given hostname
 */
export function getBrandContentPathForHost(hostname: string, brand: string): string {
  const clean = hostname.replace(/^www\./, '')
  return `content/${clean}/brands/${brand.toLowerCase()}.json`
}

/**
 * Gets the phone number in tel: format
 * @returns Phone number formatted for tel: links
 */
export function getPhoneNumberTel(): string {
  const config = getDomainConfig()
  const canonical = config.phoneNumber.replace(/\s+/g, '')
  return canonical.startsWith('0') ? `+31${canonical.slice(1)}` : `+31${canonical}`
}

/**
 * Gets the display phone number (formatted)
 * @returns Formatted phone number for display
 */
export function getDisplayPhoneNumber(): string {
  const config = getDomainConfig()
  // Format as 085 087 0276
  const cleaned = config.phoneNumber.replace(/\s+/g, '')
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`
  }
  return config.phoneNumber
}

/**
 * Gets the Google Ads conversion ID
 * @returns Conversion ID in format AW-XXXXXXXXXX/label
 */
export function getConversionId(): string {
  const config = getDomainConfig()
  return `${config.gtagId}/${config.conversionLabel}`
}

/**
 * Gets the brand colors as Tailwind classes
 * @returns Object with brand color classes
 */
export function getBrandColors(): {
  primary: string
  accent: string
  primaryBg: string
  primaryText: string
  accentBg: string
  accentText: string
} {
  const config = getDomainConfig()
  
  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600' },
    green: { bg: 'bg-green-600', text: 'text-green-600' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600' },
    orange: { bg: 'bg-orange-600', text: 'text-orange-600' },
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600' },
    pink: { bg: 'bg-pink-600', text: 'text-pink-600' },
    red: { bg: 'bg-red-600', text: 'text-red-600' }
  }

  const primary = colorMap[config.brandColor] || colorMap.blue
  const accent = colorMap[config.brandAccent] || colorMap.indigo

  return {
    primary: config.brandColor,
    accent: config.brandAccent,
    primaryBg: primary.bg,
    primaryText: primary.text,
    accentBg: accent.bg,
    accentText: accent.text
  }
}

/**
 * Validates that all required environment variables are set
 * @returns Array of missing environment variables
 */
export function validateEnv(): string[] {
  const required = [
    'NEXT_PUBLIC_DOMAIN_NAME',
    'NEXT_PUBLIC_SITE_TITLE',
    'NEXT_PUBLIC_CONTENT_PATH',
    'NEXT_PUBLIC_GTAG_ID',
    'NEXT_PUBLIC_GTM_ID',
    'NEXT_PUBLIC_CONVERSION_LABEL',
    'NEXT_PUBLIC_PHONE_NUMBER',
    'NEXT_PUBLIC_EMAIL',
    'NEXT_PUBLIC_BRAND_COLOR',
    'NEXT_PUBLIC_BRAND_ACCENT',
    'NEXT_PUBLIC_GA_MEASUREMENT_ID'
  ]

  const missing: string[] = []
  for (const envVar of required) {
    if (!process.env[envVar]) {
      missing.push(envVar)
    }
  }

  return missing
}

/**
 * Checks if the current environment is development
 * @returns True if in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

/**
 * Checks if the current environment is production
 * @returns True if in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production'
}

/**
 * Gets the current domain for analytics and tracking
 * @returns Current domain name
 */
export function getCurrentDomain(): string {
  return getDomainConfig().domain
}

/**
 * Checks if analytics should be enabled
 * @returns True if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  return getDomainConfig().enableAnalytics && isProduction()
}

/**
 * Checks if tracking should be enabled
 * @returns True if tracking is enabled
 */
export function isTrackingEnabled(): boolean {
  return getDomainConfig().enableTracking && isProduction()
}

/**
 * Builds an absolute base URL from Next.js request headers
 * @param req - Next.js GetServerSideProps context.req
 * @returns Absolute origin like https://example.nl
 */
export function getBaseUrlFromReq(req: any): string {
  try {
    const host = (req?.headers?.['x-forwarded-host'] || req?.headers?.host || process.env.NEXT_PUBLIC_DOMAIN_NAME || 'localhost:3000') as string
    let proto = (req?.headers?.['x-forwarded-proto'] || req?.headers?.['x-forwarded-protocol']) as string | undefined
    if (!proto) {
      proto = host.includes('localhost') ? 'http' : 'https'
    }
    return `${proto}://${host}`
  } catch {
    const host = process.env.NEXT_PUBLIC_DOMAIN_NAME || 'localhost:3000'
    const proto = host.includes('localhost') ? 'http' : 'https'
    return `${proto}://${host}`
  }
}
