import type { APIRoute } from 'astro';
import { isReviewMode } from '@/lib/reviewMode';

export const prerender = false;

export const GET: APIRoute = () => {
  const review = isReviewMode();

  if (review) {
    const reviewRobots = `# Vesharo Review Build — Indexing Disallowed
User-agent: *
Disallow: /
`;
    return new Response(reviewRobots, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  }

  const prodRobots = `# Vesharo Robots.txt (Production)
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /404

# Explicitly Allow AI Answer Engines & Search Bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Bingbot
Allow: /

# Sitemaps and AI Context Files
Sitemap: https://vesharo.com/sitemap-index.xml
# LLM Context: https://vesharo.com/llms.txt
# LLM Full Context: https://vesharo.com/llms-full.txt
`;

  return new Response(prodRobots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
