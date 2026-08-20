/**
 * JSON-LD structured data.
 *
 * This is what search engines and AI assistants read to understand, in
 * unambiguous terms, what this business does, who it serves, and what it
 * charges. Keep the values here in sync with the visible pages: schema that
 * contradicts the page is worse than no schema at all.
 */

const BASE_URL = 'https://flywheelbookkeeping.com'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#organization`,
  name: 'Flywheel',
  alternateName: 'Flywheel Bookkeeping',
  url: BASE_URL,
  logo: `${BASE_URL}/IconOnly_NoBuffer.png`,
  image: `${BASE_URL}/IconOnly_NoBuffer.png`,
  description:
    'Outsourced accounting for growing businesses. Bookkeeping, fractional CFO services, and tax planning for businesses scaling from $1M to $20M in revenue.',
  slogan: 'Outsourced accounting for growing businesses',
  email: 'josh@flywheelbookkeeping.com',
  telephone: '+1-614-296-0874',
  priceRange: '$$$',
  currenciesAccepted: 'USD',
  // Service-area business: served remotely across the US rather than from a
  // storefront. If a public business address is added later, add `address`
  // here as a PostalAddress so this can qualify as a LocalBusiness.
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'Bookkeeping',
    'Fractional CFO services',
    'Tax planning',
    'Cash flow forecasting',
    'QuickBooks',
    'Financial reporting',
    'KPI reporting',
    'Project profitability',
  ],
  founder: {
    '@type': 'Person',
    name: 'Joshua Kiefer',
    jobTitle: 'Founder, CPA',
  },
  // Add profile URLs here as they go live (Google Business Profile, LinkedIn).
  // Third-party profiles are a large part of how AI assistants corroborate
  // that a business is real, so this list is worth filling in.
  sameAs: [] as string[],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accounting and advisory services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Core Operations',
        description:
          'Monthly bookkeeping, AP and AR management, payroll, and financial reporting.',
        price: '1000',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1000',
          priceCurrency: 'USD',
          unitText: 'MONTH',
          minPrice: '1000',
        },
      },
      {
        '@type': 'Offer',
        name: 'Controller',
        description:
          'Everything in Core Operations plus KPI reporting, cash flow planning, and monthly review.',
        price: '3000',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '3000',
          priceCurrency: 'USD',
          unitText: 'MONTH',
          minPrice: '3000',
        },
      },
      {
        '@type': 'Offer',
        name: 'Fractional CFO',
        description:
          'Strategic financial leadership, forecasting, scenario planning, and growth strategy.',
        price: '5500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '5500',
          priceCurrency: 'USD',
          unitText: 'MONTH',
          minPrice: '5500',
        },
      },
    ],
  },
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Flywheel',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

export function OrganizationSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}

/**
 * FAQ schema. The questions and answers below must stay identical to the ones
 * rendered on /contact, since schema is only valid for content the visitor can
 * actually see on that page.
 */
export function FaqSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
