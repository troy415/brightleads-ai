import { HOME_FAQS, SERVICES, type Faq } from "@/lib/catalog";
import { site } from "@/lib/site";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

export function organizationNode() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    alternateName: ["BrightLeads", "BrightLeads AI"],
    url: `${site.url}/`,
    email: site.email,
    telephone: site.phoneHref.replace("tel:", ""),
    description: site.orgDescription,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: [
      "senior living marketing",
      "assisted living marketing",
      "memory care marketing",
      "RCFE marketing",
      "generative engine optimization",
      "AI visibility",
      "answer engine optimization",
      "senior living SEO",
      "local SEO",
      "PPC",
      "reputation management",
      "CRM integration",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: site.buyers,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneHref.replace("tel:", ""),
      email: site.email,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Senior living marketing services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${site.url}${s.href}`,
        },
      })),
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationNode(),
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${site.url}/`,
      name: site.name,
      publisher: { "@id": orgId },
      inLanguage: "en-US",
    },
  ],
};

export function faqPageJsonLd(pageUrl: string, faqs: Faq[] = HOME_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
    about: { "@id": orgId },
    isPartOf: { "@id": websiteId },
  };
}

export function pageGraph(input: {
  path: string;
  title: string;
  description: string;
  type?: string;
  answer?: string;
  crumbs?: [string, string][];
  faqs?: Faq[];
  service?: { name: string; type: string; audience?: string; includes?: string[] };
  article?: { published: string; headline: string };
  extra?: object[];
}) {
  const url = `${site.url}${input.path || "/"}`;
  const webpage: Record<string, unknown> = {
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    publisher: { "@id": orgId },
    inLanguage: "en-US",
  };
  if (input.answer) {
    webpage.abstract = input.answer;
    webpage.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer p:last-child", "h1"],
    };
  }
  const graph: object[] = [organizationNode(), { "@type": "WebSite", "@id": websiteId, url: `${site.url}/`, name: site.name, publisher: { "@id": orgId } }, webpage];
  if (input.crumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: input.crumbs.map(([name, path], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: `${site.url}${path || "/"}`,
      })),
    });
  }
  if (input.service) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: input.service.name,
      serviceType: input.service.type,
      description: input.answer ?? input.description,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: input.service.audience ?? "Senior living operators",
      },
      termsOfService: "Month-to-month engagement. No long-term contract.",
      url,
      ...(input.service.includes
        ? {
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${input.service.name} deliverables`,
              itemListElement: input.service.includes.map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
              })),
            },
          }
        : {}),
    });
  }
  if (input.article) {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: input.article.headline,
      description: input.description,
      author: { "@id": orgId },
      publisher: { "@id": orgId },
      datePublished: input.article.published,
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  }
  if (input.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: input.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }
  if (input.extra) graph.push(...input.extra);
  return { "@context": "https://schema.org", "@graph": graph };
}
