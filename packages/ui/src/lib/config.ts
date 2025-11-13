export interface DomainConfig {
  domain: string
  siteTitle: string
  phoneNumber: string
}

export function getDomainConfig(): DomainConfig {
  return {
    domain: process.env.NEXT_PUBLIC_DOMAIN_NAME || 'localhost',
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || 'Advies Neutraal',
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '0850870276'
  }
}

export function getDisplayPhoneNumber(): string {
  const { phoneNumber } = getDomainConfig()
  const cleaned = phoneNumber.replace(/\s+/g, '')
  if (cleaned.length === 10) return `${cleaned.slice(0,3)} ${cleaned.slice(3,6)} ${cleaned.slice(6)}`
  return phoneNumber
}

export function getPhoneNumberTel(): string {
  const { phoneNumber } = getDomainConfig()
  const canonical = phoneNumber.replace(/\s+/g, '')
  return canonical.startsWith('0') ? `+31${canonical.slice(1)}` : canonical
}
