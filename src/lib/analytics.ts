/**
 * Vesharo Analytics & Conversion Event Tracking
 * Privacy-friendly, cookieless-first analytics helper.
 * Supports Plausible, Umami, and Google Analytics 4 (GA4).
 * ZERO Personally Identifiable Information (PII) is tracked.
 */

export interface AnalyticsEventProps {
  [key: string]: string | number | boolean | undefined;
}

// Disallowed PII keys to ensure strict compliance with privacy standards
const PII_KEYS = new Set([
  'email',
  'name',
  'full_name',
  'phone',
  'telephone',
  'address',
  'password',
  'token',
  'credit_card',
]);

/**
 * Cleanse properties to strip any accidental personal identifiable data
 */
function sanitizeProperties(props?: AnalyticsEventProps): Record<string, string | number | boolean> {
  if (!props) return {};
  const cleaned: Record<string, string | number | boolean> = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) continue;
    const lowerKey = key.toLowerCase();
    if (PII_KEYS.has(lowerKey)) continue;

    // Filter out email-like patterns
    if (typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      continue;
    }

    cleaned[key] = value;
  }

  return cleaned;
}

/**
 * Universal event tracking function
 * Dispatches to Plausible, Umami, or Google Analytics 4 if available.
 * Logs in development mode for verification.
 */
export function trackEvent(eventName: string, rawProps?: AnalyticsEventProps): void {
  if (typeof window === 'undefined') return;

  const props = sanitizeProperties(rawProps);

  // In development, log event details for debugging
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(`[Analytics:Debug] Event: "${eventName}"`, props);
  }

  // 1. Plausible Analytics (Cookieless)
  const plausible = (window as any).plausible;
  if (typeof plausible === 'function') {
    plausible(eventName, { props });
  }

  // 2. Umami Analytics (Cookieless)
  const umami = (window as any).umami;
  if (typeof umami === 'object' && typeof umami.track === 'function') {
    umami.track(eventName, props);
  }

  // 3. Google Analytics 4 (gtag)
  const gtag = (window as any).gtag;
  if (typeof gtag === 'function') {
    gtag('event', eventName, props);
  }
}

/**
 * Initialize declarative click tracking on elements with [data-analytics-event]
 * or auto-detect conversion links (tel, mailto, whatsapp, cal.com).
 */
export function initAnalyticsListeners(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement)?.closest('a, button, [data-analytics-event]') as HTMLElement | null;
    if (!target) return;

    // 1. Explicit data-analytics-event attribute
    const explicitEvent = target.getAttribute('data-analytics-event');
    if (explicitEvent) {
      const explicitLabel = target.getAttribute('data-analytics-label') || undefined;
      const explicitCategory = target.getAttribute('data-analytics-category') || undefined;
      trackEvent(explicitEvent, {
        label: explicitLabel,
        category: explicitCategory,
      });
      return;
    }

    // 2. Automatic link classification
    if (target.tagName.toLowerCase() === 'a') {
      const href = (target as HTMLAnchorElement).getAttribute('href') || '';

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', { destination: 'contact_email' });
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', { destination: 'contact_phone' });
      } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackEvent('whatsapp_click', { destination: 'whatsapp_support' });
      } else if (href.includes('cal.com') || href.includes('calendly.com')) {
        trackEvent('book_call_click', { destination: 'calendar_booking' });
      } else if (href.startsWith('/portfolio/') && href !== '/portfolio' && href !== '/portfolio/') {
        const slug = href.replace(/^\/portfolio\//, '').replace(/\/$/, '');
        trackEvent('portfolio_card_click', { slug });
      }
    }
  });
}
