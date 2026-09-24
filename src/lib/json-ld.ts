import { faqs, site } from "@/lib/site";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      description: site.description,
      slogan: site.tagline,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressLine,
        addressLocality: site.city,
        addressRegion: site.region,
        postalCode: site.postalCode,
        addressCountry: site.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "sales",
        areaServed: {
          "@type": "City",
          name: "San Francisco",
        },
        availableLanguage: "English",
      },
      knowsAbout: [
        "senior living marketing",
        "care home marketing",
        "RCFE marketing",
        "ARF marketing",
        "AI visibility",
        "resident lead generation",
      ],
      audience: {
        "@type": "Audience",
        audienceType: site.buyers,
      },
      makesOffer: site.services.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": orgId },
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "en-US",
      publisher: { "@id": orgId },
    },
  ],
};

export function faqPageJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    about: { "@id": orgId },
    isPartOf: { "@id": websiteId },
  };
}
