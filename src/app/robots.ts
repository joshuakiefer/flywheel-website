import type { MetadataRoute } from 'next'

const BASE_URL = 'https://flywheelbookkeeping.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Handout landing page, not part of the main site.
        disallow: ['/golf'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
