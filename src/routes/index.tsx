import { createFileRoute } from "@tanstack/react-router";
import VermiraLanding from "@/components/VermiraLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vermira Lipa — EDGE-Certified Homes with Mary Ann Caringal" },
      {
        name: "description",
        content:
          "Reserve your EDGE-certified, solar-ready home at Vermira Lipa in Batangas. Mira, Mireio, and Mirela units with up to ₱500,000 discount. Inquire with Mary Ann Mendoza Caringal, PRC 5081.",
      },
      { property: "og:title", content: "Vermira Lipa — EDGE-Certified Homes in Lipa City" },
      {
        property: "og:description",
        content:
          "EDGE-Certified. Solar-Ready. Built for the Future. Reserve for ₱25,000 — Mary Ann Caringal, Senior Property Specialist.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: VermiraLanding,
});
