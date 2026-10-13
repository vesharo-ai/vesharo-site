/**
 * Review Mode Helper (VS-30)
 *
 * Controls whether demo/placeholder content and preview banners are active.
 *
 * Rules:
 * - When ON (PUBLIC_REVIEW_MODE=true or non-production domain): demo content is visible with clear badges,
 *   a top review banner is shown, and noindex/nofollow is enforced to protect SEO.
 * - When OFF (PUBLIC_REVIEW_MODE=false or production domain https://vesharo.com): all demo content is stripped,
 *   site-wide banner is hidden, and public indexing is permitted.
 */

export function isReviewMode(): boolean {
  // Explicit environment override has highest precedence
  if (process.env.PUBLIC_REVIEW_MODE === 'false' || process.env.REVIEW_MODE === 'false') {
    return false;
  }
  if (process.env.PUBLIC_REVIEW_MODE === 'true' || process.env.REVIEW_MODE === 'true') {
    return true;
  }

  // If site URL is production domain, review mode is strictly OFF
  const siteUrl = process.env.PUBLIC_SITE_URL || process.env.SITE_URL || '';
  if (siteUrl.includes('vesharo.com')) {
    return false;
  }

  // Default to review mode on preview / staging / local development
  return true;
}
