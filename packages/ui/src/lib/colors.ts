export type BrandColor = 'blue' | 'green' | 'purple' | 'orange' | 'indigo' | 'emerald' | 'pink' | 'red'

export interface ColorScheme {
  gradient: string
  gradientFrom: string
  gradientVia: string
  gradientTo: string
  primaryBg: string
  primaryText: string
  primaryHover: string
  primaryHoverText: string
  primaryBorder: string
  accentBg: string
  accentText: string
  buttonBg: string
  buttonText: string
  buttonHover: string
  badgeBg: string
  badgeText: string
  groupHoverText: string
}

const colorSchemes: Record<BrandColor, ColorScheme> = {
  blue: {
    gradient: 'bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600',
    gradientFrom: 'from-blue-600',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-indigo-600',
    primaryBg: 'bg-blue-600',
    primaryText: 'text-blue-600',
    primaryHover: 'hover:bg-blue-700',
    primaryHoverText: 'group-hover:text-blue-600',
    primaryBorder: 'border-blue-600',
    accentBg: 'bg-indigo-600',
    accentText: 'text-indigo-600',
    buttonBg: 'bg-white',
    buttonText: 'text-blue-700',
    buttonHover: 'hover:bg-blue-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-blue-100',
    groupHoverText: 'group-hover:text-blue-600',
  },
  green: {
    gradient: 'bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600',
    gradientFrom: 'from-green-600',
    gradientVia: 'via-emerald-500',
    gradientTo: 'to-teal-600',
    primaryBg: 'bg-green-600',
    primaryText: 'text-green-600',
    primaryHover: 'hover:bg-green-700',
    primaryHoverText: 'group-hover:text-green-600',
    primaryBorder: 'border-green-600',
    accentBg: 'bg-emerald-600',
    accentText: 'text-emerald-600',
    buttonBg: 'bg-white',
    buttonText: 'text-green-700',
    buttonHover: 'hover:bg-green-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-green-100',
    groupHoverText: 'group-hover:text-green-600',
  },
  purple: {
    gradient: 'bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600',
    gradientFrom: 'from-purple-600',
    gradientVia: 'via-purple-500',
    gradientTo: 'to-pink-600',
    primaryBg: 'bg-purple-600',
    primaryText: 'text-purple-600',
    primaryHover: 'hover:bg-purple-700',
    primaryHoverText: 'group-hover:text-purple-600',
    primaryBorder: 'border-purple-600',
    accentBg: 'bg-pink-600',
    accentText: 'text-pink-600',
    buttonBg: 'bg-white',
    buttonText: 'text-purple-700',
    buttonHover: 'hover:bg-purple-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-purple-100',
    groupHoverText: 'group-hover:text-purple-600',
  },
  orange: {
    gradient: 'bg-gradient-to-br from-orange-600 via-orange-500 to-red-600',
    gradientFrom: 'from-orange-600',
    gradientVia: 'via-orange-500',
    gradientTo: 'to-red-600',
    primaryBg: 'bg-orange-600',
    primaryText: 'text-orange-600',
    primaryHover: 'hover:bg-orange-700',
    primaryHoverText: 'group-hover:text-orange-600',
    primaryBorder: 'border-orange-600',
    accentBg: 'bg-red-600',
    accentText: 'text-red-600',
    buttonBg: 'bg-white',
    buttonText: 'text-orange-700',
    buttonHover: 'hover:bg-orange-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-orange-100',
    groupHoverText: 'group-hover:text-orange-600',
  },
  indigo: {
    gradient: 'bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-600',
    gradientFrom: 'from-indigo-600',
    gradientVia: 'via-indigo-500',
    gradientTo: 'to-blue-600',
    primaryBg: 'bg-indigo-600',
    primaryText: 'text-indigo-600',
    primaryHover: 'hover:bg-indigo-700',
    primaryHoverText: 'group-hover:text-indigo-600',
    primaryBorder: 'border-indigo-600',
    accentBg: 'bg-blue-600',
    accentText: 'text-blue-600',
    buttonBg: 'bg-white',
    buttonText: 'text-indigo-700',
    buttonHover: 'hover:bg-indigo-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-indigo-100',
    groupHoverText: 'group-hover:text-indigo-600',
  },
  emerald: {
    gradient: 'bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600',
    gradientFrom: 'from-emerald-600',
    gradientVia: 'via-emerald-500',
    gradientTo: 'to-green-600',
    primaryBg: 'bg-emerald-600',
    primaryText: 'text-emerald-600',
    primaryHover: 'hover:bg-emerald-700',
    primaryHoverText: 'group-hover:text-emerald-600',
    primaryBorder: 'border-emerald-600',
    accentBg: 'bg-green-600',
    accentText: 'text-green-600',
    buttonBg: 'bg-white',
    buttonText: 'text-emerald-700',
    buttonHover: 'hover:bg-emerald-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-emerald-100',
    groupHoverText: 'group-hover:text-emerald-600',
  },
  pink: {
    gradient: 'bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600',
    gradientFrom: 'from-pink-600',
    gradientVia: 'via-pink-500',
    gradientTo: 'to-rose-600',
    primaryBg: 'bg-pink-600',
    primaryText: 'text-pink-600',
    primaryHover: 'hover:bg-pink-700',
    primaryHoverText: 'group-hover:text-pink-600',
    primaryBorder: 'border-pink-600',
    accentBg: 'bg-rose-600',
    accentText: 'text-rose-600',
    buttonBg: 'bg-white',
    buttonText: 'text-pink-700',
    buttonHover: 'hover:bg-pink-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-pink-100',
    groupHoverText: 'group-hover:text-pink-600',
  },
  red: {
    gradient: 'bg-gradient-to-br from-red-600 via-red-500 to-orange-600',
    gradientFrom: 'from-red-600',
    gradientVia: 'via-red-500',
    gradientTo: 'to-orange-600',
    primaryBg: 'bg-red-600',
    primaryText: 'text-red-600',
    primaryHover: 'hover:bg-red-700',
    primaryHoverText: 'group-hover:text-red-600',
    primaryBorder: 'border-red-600',
    accentBg: 'bg-orange-600',
    accentText: 'text-orange-600',
    buttonBg: 'bg-white',
    buttonText: 'text-red-700',
    buttonHover: 'hover:bg-red-100',
    badgeBg: 'bg-white/10',
    badgeText: 'text-red-100',
    groupHoverText: 'group-hover:text-red-600',
  },
}

export function getColorScheme(brandColor: string = 'blue'): ColorScheme {
  const normalized = (brandColor.toLowerCase() as BrandColor) || 'blue'
  return colorSchemes[normalized] || colorSchemes.blue
}
