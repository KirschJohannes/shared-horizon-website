import { faqs } from '../lib/data';

const BASE_URL = 'https://shared-horizon.de';

const eventVenueSchema = {
  '@context': 'https://schema.org',
  '@type': ['EventVenue', 'LocalBusiness'],
  name: 'Shared Horizon',
  description: 'Außergewöhnliche Eventlocation am Wasser in Berlin-Schmöckwitz. Über 170 m² Hausboot für Firmenevents, Sommerfeste, Hochzeiten und private Feiern.',
  url: BASE_URL,
  telephone: '+49 176 32479050',
  email: 'anfrage@shared-horizon.de',
  priceRange: '€€€',
  image: `${BASE_URL}/images/hero-wide.jpg`,
  logo: `${BASE_URL}/images/wordmark-navy.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Weiselpfad 20',
    addressLocality: 'Berlin',
    postalCode: '12527',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.3833,
    longitude: 13.6833,
  },
  areaServed: {
    '@type': 'City',
    name: 'Berlin',
  },
  sameAs: [
    'https://instagram.com/shared.horizon',
    'GOOGLE_BUSINESS_PROFILE_URL',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Panoramaglas-Innenraum', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Dachterrasse', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vollausgestattete Küche', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Grill & Pizzaofen', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Musikanlage', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Beamer & Leinwand', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Skipper inklusive', value: true },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shared Horizon',
  legalName: 'Kivent GmbH',
  url: BASE_URL,
  logo: `${BASE_URL}/images/wordmark-navy.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49 176 32479050',
    email: 'anfrage@shared-horizon.de',
    contactType: 'sales',
    availableLanguage: ['German', 'English'],
  },
  sameAs: [
    'https://instagram.com/shared.horizon',
    'GOOGLE_BUSINESS_PROFILE_URL',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Shared Horizon',
      item: BASE_URL,
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventVenueSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
