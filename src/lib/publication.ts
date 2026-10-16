/**
 * Vesharo Content Publication & Visibility Rules
 *
 * Implements a strict, fail-closed publication-visibility gate for all public and review outputs.
 *
 * Rule Invariants:
 * 1. Fail Closed in Production: Missing approval or publication metadata must NEVER
 *    automatically make sensitive or confidential content public.
 * 2. An item is strictly BLOCKED from production outputs (pages, static routes, feeds, sitemaps, JSON-LD) if:
 *    - `confidential === true` OR `visibility === 'confidential'` OR `status` contains 'confidential'
 *    - OR `publicApproved !== true`
 *    - OR `visibility !== 'public'`
 *    - OR `placeholder === true`
 * 3. In Review Mode (`isReviewMode() === true`):
 *    - Demo/placeholder items (`visibility === 'review'` or `placeholder === true`) can be inspected with explicit badges.
 *    - Confidential client projects (`confidential === true` without explicit `publicApproved === true`)
 *      remain restricted and never leak to public metadata or production builds.
 */

import { isReviewMode } from './reviewMode';

export interface PublishableItem {
  id: string;
  title?: string;
  visibility?: 'public' | 'review' | 'confidential';
  confidential?: boolean;
  publicApproved?: boolean;
  placeholder?: boolean;
  status?: string;
  [key: string]: any;
}

/**
 * Checks whether an item is eligible for public publication.
 * Fails closed in production.
 */
export function isPubliclyPublishable(
  item: PublishableItem,
  options: { reviewMode?: boolean } = {}
): boolean {
  const review = options.reviewMode ?? isReviewMode();

  const isConfidential =
    Boolean(item.confidential) ||
    item.visibility === 'confidential' ||
    Boolean(item.status && item.status.toLowerCase().includes('confidential'));

  // Confidential client work is strictly blocked from public production without explicit approval
  if (isConfidential && !item.publicApproved) {
    return false;
  }

  // Production Mode: Strict fail-closed requirements
  if (!review) {
    if (item.placeholder) return false;
    if (item.visibility !== 'public') return false;
    if (item.publicApproved !== true) return false;
    return true;
  }

  // Review Mode: Demo placeholders and review-staged items are viewable for QA inspection
  return true;
}

/**
 * Filter an array of content collection items by public publishability.
 */
export function filterPublicItems<T extends { data: PublishableItem }>(
  items: T[],
  options: { reviewMode?: boolean } = {}
): T[] {
  return items.filter((item) => isPubliclyPublishable(item.data, options));
}
