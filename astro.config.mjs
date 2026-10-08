// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://vesharo.com',
  // Static by default. Only routes that opt out with `prerender = false`
  // (currently /api/contact) are rendered on the server.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/sitemap-index') &&
        !page.includes('/api/') &&
        !page.includes('/pricing') &&
        !page.endsWith('.xml'),
    }),
  ],

  redirects: {
    '/service-1': '/services',
    '/service-2': '/services',
    '/service-details': '/services',
    '/portfolio-1': '/portfolio',
    '/portfolio-2': '/portfolio',
    '/portfolio-details': '/portfolio',
    '/team-details': '/about',
    '/team': '/about',
    '/blog-details': '/blog',
    '/pricing': '/contact',
    '/home-2': '/',
  },
});
