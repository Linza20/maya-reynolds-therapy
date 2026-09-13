import type { SiteContent } from '@/content/types';

/** Structured data helps local search understand practice, place and services. */
export function buildJsonLd(content: SiteContent) {
  const graph: Record<string, unknown>[] = [
    {
      '@type': ['Psychologist', 'MedicalBusiness', 'LocalBusiness'],
      '@id': `${content.meta.canonical}#practice`,
      name: content.brand.name,
      description: content.meta.description,
      url: content.meta.canonical,
      areaServed: { '@type': 'State', name: 'California' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: content.meta.locality,
        addressRegion: content.meta.region,
        addressCountry: 'US'
      },
      availableService: content.services.items.map((item) => ({
        '@type': 'MedicalTherapy',
        name: item.title,
        description: item.body
      }))
    }
  ];

  if (content.faqs) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: content.faqs.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
