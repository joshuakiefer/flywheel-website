import type { MetadataRoute } from 'next'

const BASE_URL = 'https://flywheelbookkeeping.com'

/**
 * Public, indexable routes. /golf is intentionally excluded: it is a
 * single-purpose handout landing page, not part of the main site.
 */
const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/connected-finance', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/success-stories', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/pricing-calculator', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/profitability-calculator', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.4, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
