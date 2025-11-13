import { useEffect } from 'react'
import { getDomainConfig } from '../lib/config'

export function GoogleAdsTracking() {
  const config = getDomainConfig()
  useEffect(() => {
    // no-op stub to keep interface; real tracking can be wired per app
    console.log(`GoogleAdsTracking active for ${config.domain}`)
  }, [config.domain])
  return null
}
