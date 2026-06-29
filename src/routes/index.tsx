import { createFileRoute } from "@tanstack/react-router";
import VermiraLanding from "@/components/VermiraLanding";

const TITLE =
  "House and Lot in Lipa, Batangas | Vermira Lipa — EDGE-Certified Homes";
const DESCRIPTION =
  "Affordable EDGE-certified house and lot in Lipa City, Batangas. Vermira Lipa offers solar-ready Mira, Mireio, and Mirela units with up to ₱500,000 discount. Reserve for ₱25,000 with Mary Ann Caringal, PRC 5081.";
const URL_PATH = "/";
const OG_IMAGE = "/og-vermira.jpg";

const REAL_ESTATE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Vermira Lipa — EDGE-Certified House and Lot",
  description: DESCRIPTION,
  url: URL_PATH,
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Km 89 Lipa–Alaminos Road, Brgy. Talisay",
    addressLocality: "Lipa City",
    addressRegion: "Batangas",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.9411,
    longitude: 121.1622,
  },
  offers: [
    {
      "@type": "Offer",
      name: "Mira — Single Detached House and Lot",
      price: "8139121.84",
      priceCurrency: "PHP",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Mireio — Single Attached House and Lot",
      price: "6564098.61",
      priceCurrency: "PHP",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Mirela — Townhouse",
      price: "4681745.13",
      priceCurrency: "PHP",
      availability: "https://schema.org/InStock",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Vermira Lipa located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vermira Lipa is located at Km 89 Lipa–Alaminos Road, Brgy. Talisay, Lipa City, Batangas — a prime, fast-growing area in South Luzon near SM Lipa, DLSU Lipa, and Lima Tech Center.",
      },
    },
    {
      "@type": "Question",
      name: "How much is the reservation fee for a house and lot in Vermira Lipa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reserve your Vermira Lipa unit for only ₱25,000. Unit prices start at ₱4.68M for the Mirela Townhouse.",
      },
    },
    {
      "@type": "Question",
      name: "What unit types are available at Vermira Lipa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vermira Lipa offers three EDGE-certified models: Mira (Single Detached), Mireio (Single Attached), and Mirela (Townhouse). All units come solar-ready with a free 1.8kW solar panel system.",
      },
    },
    {
      "@type": "Question",
      name: "Is Vermira Lipa accessible from Manila?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vermira Lipa is roughly 1.5 to 2 hours from Metro Manila via STAR Tollway and SLEX, making it a strategic choice for buyers looking for an affordable house and lot near Manila in Batangas.",
      },
    },
    {
      "@type": "Question",
      name: "What financing options are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyers can choose between Bank financing (up to 25 years) or Pag-IBIG financing (up to 30 years). A flexible 36-month down payment scheme is also available.",
      },
    },
    {
      "@type": "Question",
      name: "When is the turnover for Vermira Lipa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Projected turnover for Vermira Lipa units is 2028. Reserving early secures the best units and current promo pricing.",
      },
    },
  ],
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Mary Ann Mendoza Caringal — Vermira Lipa Property Specialist",
  image: "/agent-portrait.jpg",
  telephone: "+639566740524",
  email: "caringalmaryann12379@gmail.com",
  url: URL_PATH,
  areaServed: ["Lipa City", "Batangas", "South Luzon", "Philippines"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lipa City",
    addressRegion: "Batangas",
    addressCountry: "PH",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "house and lot in Lipa, affordable house and lot Batangas, Vermira Lipa, house and lot near Manila, Batangas real estate, house and lot Philippines, affordable homes in Lipa, EDGE certified homes Philippines, solar ready house Batangas",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "PH-BTG" },
      { name: "geo.placename", content: "Lipa City, Batangas" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL_PATH },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_PH" },
      { property: "og:site_name", content: "Vermira Lipa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL_PATH }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(REAL_ESTATE_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
      },
    ],
  }),
  component: VermiraLanding,
});
