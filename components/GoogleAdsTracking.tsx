import { useEffect } from 'react'
import { getDomainConfig, isTrackingEnabled } from '../lib/config'

declare global {
  interface Window {
    dataLayer: any[]
    // Mark as optional because gtag may not be loaded yet at runtime
    gtag?: (...args: any[]) => void
    gtag_report_conversion?: (url?: string) => boolean
  }
}

/**
 * Google Ads Tracking Component
 * Loads gtag and sets up conversion tracking for the current domain
 */
export function GoogleAdsTracking() {
  const config = getDomainConfig()

  useEffect(() => {
    // Only load tracking in production and if enabled
    if (!isTrackingEnabled()) {
      console.log('Tracking disabled for current environment')
      return
    }

    // Prevent duplicate loading
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('gtag already loaded')
      return
    }

    // Load gtag script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.gtagId}`
    
    script.onload = () => {
      console.log(`gtag script loaded for ${config.domain}`)
      
      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      
      window.gtag('js', new Date())
      window.gtag('config', config.gtagId)

      // Set up conversion tracking function
      window.gtag_report_conversion = (url?: string) => {
        console.log(`Conversion tracked for ${config.domain}:`, url)
        
        const callback = () => {
          if (typeof url !== 'undefined') {
            window.location.href = url
          }
        }

        window.gtag('event', 'conversion', {
          send_to: `${config.gtagId}/${config.conversionLabel}`,
          value: 1.0,
          currency: 'EUR',
          event_callback: callback
        })
        
        return false
      }

      // Track page view
      window.gtag('event', 'page_view', {
        domain: config.domain,
        page_title: document.title,
        page_location: window.location.href
      })
    }

    script.onerror = () => {
      console.error(`Failed to load gtag script for ${config.domain}`)
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Note: We don't remove the script as it may be needed by other components
      console.log('GoogleAdsTracking component unmounted')
    }
  }, [config.gtagId, config.conversionLabel, config.domain])

  return null
}

/**
 * Hook to track phone call conversions
 * @returns Function to track phone call conversion
 */
export function usePhoneConversion() {
  const config = getDomainConfig()

  const trackPhoneConversion = (phoneNumber?: string) => {
    if (!isTrackingEnabled()) {
      console.log('Tracking disabled, phone conversion not tracked')
      return
    }

    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      const url = phoneNumber ? `tel:${phoneNumber}` : undefined
      console.log(`Phone conversion tracked: ${config.domain} - ${phoneNumber}`)
      ;(window as any).gtag_report_conversion(url)
    } else {
      console.warn('gtag_report_conversion not available')
    }
  }

  return trackPhoneConversion
}

/**
 * Hook to track custom events
 * @returns Function to track custom events
 */
export function useAnalytics() {
  const config = getDomainConfig()

  const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
    if (!isTrackingEnabled()) {
      console.log('Tracking disabled, event not tracked:', eventName)
      return
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log(`Event tracked: ${eventName}`, eventParams)
      ;(window as any).gtag('event', eventName, {
        ...eventParams,
        domain: config.domain
      })
    } else {
      console.warn('gtag not available for event tracking')
    }
  }

  return trackEvent
}

/**
 * Component to track page views
 * @param pageName - Name of the page being viewed
 */
export function PageViewTracker({ pageName }: { pageName: string }) {
  const config = getDomainConfig()
  const trackEvent = useAnalytics()

  useEffect(() => {
    if (isTrackingEnabled()) {
      console.log(`Page view tracked: ${pageName} - ${config.domain}`)
      trackEvent('page_view', {
        page_name: pageName,
        page_location: window.location.href,
        page_title: document.title
      })
    }
  }, [pageName, config.domain, trackEvent])

  return null
}
