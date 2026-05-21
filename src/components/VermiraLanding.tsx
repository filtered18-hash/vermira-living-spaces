import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  BadgeCheck,
  Sun,
  Droplets,
  Zap,
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  Leaf,
  Trees,
  Dumbbell,
  Waves,
  Bike,
  Users,
  Building2,
  Star,
  ArrowRight,
  Home,
  MessageCircle,
} from "lucide-react";

import heroImg from "@/assets/hero-vermira.jpg";
import agentImg from "@/assets/agent-portrait.jpg";
import miraImg from "@/assets/unit-mira.jpg";
import mireioImg from "@/assets/unit-mireio.jpg";
import mirelaImg from "@/assets/unit-mirela.jpg";
import floorplanMira from "@/assets/floorplan-mira.png";
import floorplanMireioTypical from "@/assets/floorplan-mireio-typical.png";
import floorplanMireioReverse from "@/assets/floorplan-mireio-reverse.png";
import amenityPlayground from "@/assets/amenity-playground.jpg";
import amenityFitness from "@/assets/amenity-fitness.jpg";
import amenityPool from "@/assets/amenity-pool.jpg";
import amenityClubhouse from "@/assets/amenity-clubhouse.jpg";
import amenityGate from "@/assets/amenity-gate.jpg";
import amenityJogging from "@/assets/amenity-jogging.jpg";

const AGENT = {
  name: "Mary Ann Mendoza Caringal",
  title: "Senior Property Specialist",
  prc: "PRC License No. 5081",
  phone: "+63 956 674 0524",
  email: "caringalmaryann12379@gmail.com",
};

const HIGHLIGHTS = [
  { icon: BadgeCheck, title: "EDGE Advanced Certified", desc: "Globally recognized green-building standard." },
  { icon: Sun, title: "FREE 1.8kW Solar Panel System", desc: "Grid-tie, ready on turnover." },
  { icon: Zap, title: "Up to 30% Energy Savings", desc: "Lower bills, smaller footprint." },
  { icon: Droplets, title: "Up to 20% Water Savings", desc: "Efficient fixtures throughout." },
  { icon: CalendarDays, title: "Projected Turnover: 2028", desc: "Plan and reserve early." },
  { icon: MapPin, title: "Prime Lipa Location", desc: "Km 89 Lipa–Alaminos Rd., Brgy. Talisay." },
];

const NEARBY = [
  "SM Lipa", "DLSU Lipa", "Robinsons Lipa", "Lima Tech Center", "The Farm at San Benito", "Mt. Malarayat",
];

const AMENITIES = [
  { image: amenityClubhouse, label: "Modern Clubhouse" },
  { image: amenityPool, label: "Swimming Pool" },
  { image: amenityPlayground, label: "Playground" },
  { image: amenityFitness, label: "Outdoor Fitness Area" },
  { image: amenityGate, label: "Grand Gate & Guardhouse" },
  { image: amenityJogging, label: "Jogging Path & Multi-Sport Court" },
];

type Unit = {
  key: "mira" | "mireio" | "mirela";
  name: string;
  type: string;
  image: string;
  discount: string;
  tcp: string;
  dp: string;
  bank: string;
  pagibig: string;
};

const UNITS: Unit[] = [
  {
    key: "mira",
    name: "MIRA",
    type: "Single Detached",
    image: miraImg,
    discount: "₱500,000",
    tcp: "₱8,139,121.84",
    dp: "₱21,914.23 / mo × 36 mos",
    bank: "₱51,773.06 / mo",
    pagibig: "₱36,943.03 / mo",
  },
  {
    key: "mireio",
    name: "MIREIO",
    type: "Single Attached",
    image: mireioImg,
    discount: "₱350,000",
    tcp: "₱6,564,098.61",
    dp: "₱17,539.16 / mo × 36 mos",
    bank: "₱41,754.32 / mo",
    pagibig: "₱36,374.66 / mo",
  },
  {
    key: "mirela",
    name: "MIRELA",
    type: "Townhouse",
    image: mirelaImg,
    discount: "₱200,000",
    tcp: "₱4,681,745.13",
    dp: "₱12,310.40 / mo × 36 mos",
    bank: "₱29,780.64 / mo",
    pagibig: "₱25,943.68 / mo",
  },
];

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--ivory)_85%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--terracotta)] text-white">
            <Leaf className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-base text-[var(--forest-deep)] font-semibold">Vermira Lipa</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden sm:block">
              with Mary Ann · PRC 5081
            </p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
          <a href="#project" className="hover:text-[var(--terracotta)] transition">Project</a>
          <a href="#units" className="hover:text-[var(--terracotta)] transition">Units</a>
          <a href="#floorplans" className="hover:text-[var(--terracotta)] transition">Floor Plans</a>
          <a href="#agent" className="hover:text-[var(--terracotta)] transition">Agent</a>
        </nav>
        <Button asChild variant="hero" size="sm" className="rounded-full px-5">
          <a href="#inquire">Reserve ₱25,000</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of Vermira Lipa subdivision in Batangas"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-deep)]/80 via-[var(--forest-deep)]/55 to-[var(--forest-deep)]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--terracotta)_25%,transparent),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-24 w-full">
        <Reveal className="max-w-3xl text-[var(--ivory)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur">
            <Leaf className="h-3.5 w-3.5 text-[var(--gold)]" />
            Vermira Lipa · Keyland Properties
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Affordable House and Lot in <span className="italic text-[var(--gold)]">Lipa City, Batangas</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-white/85 text-pretty">
            EDGE-Certified, solar-ready homes near Manila — built for Filipino families who want comfort, savings, and long-term value. Reserve for ₱25,000 only.
          </p>
          <p className="mt-3 text-sm text-[var(--gold)]/90 font-medium">
            ⏳ Promo ends May 31, 2026 — save up to ₱500,000 on select units.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="https://www.messenger.com/t/247326912848047" target="_blank" rel="noopener noreferrer">
                Reserve for ₱25,000 — Inquire Now <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <a
              href="#units"
              className="text-sm text-white/80 hover:text-white underline underline-offset-4 decoration-[var(--gold)]/60"
            >
              View units & pricing
            </a>
          </div>
        </Reveal>

        <div className="absolute bottom-6 right-4 sm:right-8 text-right text-white/85">
          <p className="font-display text-base sm:text-lg">{AGENT.name}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/65">{AGENT.prc}</p>
        </div>
      </div>
    </section>
  );
}

function ProjectOverview() {
  return (
    <section id="project" className="relative py-24 sm:py-32 bg-leaf-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">The Project</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)] text-balance">
            Vermira Lipa — a master-planned green community.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg flex items-start gap-2">
            <MapPin className="h-5 w-5 mt-1 text-[var(--terracotta)] shrink-0" />
            Km 89 Lipa–Alaminos Rd., Brgy. Talisay, Lipa City, Batangas
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-[var(--terracotta)]/40 hover:shadow-lg hover:shadow-[var(--terracotta)]/5 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--forest-deep)] text-[var(--ivory)] group-hover:bg-[var(--terracotta)] transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-[var(--forest-deep)]">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-2xl bg-[var(--forest-deep)] text-[var(--ivory)] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Nearby</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {NEARBY.map((n) => (
              <span
                key={n}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section className="py-24 bg-[var(--ivory)] border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">Amenities</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)]">
            Life designed around you.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Resort-style amenities woven through a master-planned green community.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map(({ image, label }, i) => (
            <Reveal
              key={label}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-2xl hover:shadow-[var(--forest-deep)]/10 hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/85 via-[var(--forest-deep)]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">Features & Amenities</p>
                  <h3 className="mt-1 font-display text-2xl text-white">{label}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">Artist's perspective. Subject to change without prior notice.</p>
      </div>
    </section>
  );
}

function UnitCard({ unit }: { unit: Unit }) {
  return (
    <Reveal className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover:shadow-2xl hover:shadow-[var(--forest-deep)]/10 hover:-translate-y-1 transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={unit.image}
          alt={`${unit.name} ${unit.type}`}
          width={1024}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 right-4 rounded-full bg-[var(--terracotta)] text-white text-xs font-semibold px-3 py-1.5 shadow-lg">
          SAVE {unit.discount}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-7">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{unit.type}</p>
        <h3 className="mt-1 font-display text-3xl text-[var(--forest-deep)]">{unit.name}</h3>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Total Contract Price</p>
          <p className="font-display text-3xl text-[var(--forest-deep)] mt-1">{unit.tcp}</p>
        </div>

        <dl className="mt-6 space-y-3 text-sm border-t border-border pt-5">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">10% Down Payment</dt>
            <dd className="text-foreground font-medium text-right">{unit.dp}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Bank (25 yrs)</dt>
            <dd className="text-foreground font-medium text-right">est. {unit.bank}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Pag-IBIG (30 yrs)</dt>
            <dd className="text-foreground font-medium text-right">est. {unit.pagibig}</dd>
          </div>
        </dl>

        <Button asChild variant="forest" className="mt-7 w-full rounded-full" size="lg">
          <a href="https://www.messenger.com/t/247326912848047" target="_blank" rel="noopener noreferrer">Get Full Computation <ArrowRight className="h-4 w-4" /></a>
        </Button>
      </div>
    </Reveal>
  );
}

function Units() {
  return (
    <section id="units" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">Units & Discounts</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)] text-balance">
            Choose the home that fits your story.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Limited-time promo discounts available. Reserve on or before May 31, 2026.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {UNITS.map((u) => (
            <UnitCard key={u.key} unit={u} />
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          Inclusive of 12% VAT and 6% Miscellaneous Charges. Bank and Pag-IBIG financing available.
          Sample computations only — subject to bank approval and change without prior notice.
        </p>
      </div>
    </section>
  );
}

function FloorPlanPlaceholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="relative aspect-[16/9] rounded-2xl border border-[var(--forest-deep)]/20 bg-[var(--ivory)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--forest-deep) 1px, transparent 1px), linear-gradient(90deg, var(--forest-deep) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
        <Home className="h-10 w-10 text-[var(--terracotta)]" />
        <p className="mt-4 font-display text-2xl text-[var(--forest-deep)]">{label}</p>
        <p className="mt-1 text-sm text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

function FloorPlanImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-[var(--forest-deep)]/15 bg-white overflow-hidden shadow-sm">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

function FloorPlans() {
  return (
    <section id="floorplans" className="py-24 bg-[var(--ivory)] border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">Floor Plans</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)]">
            Layouts that live beautifully.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Ground and second floor layouts per unit model. Furniture, car, and landscape are not included in the deliverable unit and are shown for illustration purposes only.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Tabs defaultValue="mira" className="w-full">
            <TabsList className="bg-card border border-border rounded-full p-1 h-auto flex-wrap">
              <TabsTrigger value="mira" className="rounded-full px-5 data-[state=active]:bg-[var(--forest-deep)] data-[state=active]:text-[var(--ivory)]">
                Mira · Single Detached
              </TabsTrigger>
              <TabsTrigger value="mireio" className="rounded-full px-5 data-[state=active]:bg-[var(--forest-deep)] data-[state=active]:text-[var(--ivory)]">
                Mireio · Single Attached
              </TabsTrigger>
              <TabsTrigger value="mirela" className="rounded-full px-5 data-[state=active]:bg-[var(--forest-deep)] data-[state=active]:text-[var(--ivory)]">
                Mirela · Townhouse
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mira" className="mt-8">
              <h3 className="font-display text-2xl text-[var(--forest-deep)] mb-4">Mira — Typical Floor Layout</h3>
              <FloorPlanImage src={floorplanMira} alt="Mira Single Detached typical floor layout — ground and second floor" />
            </TabsContent>

            <TabsContent value="mireio" className="mt-8 space-y-10">
              <div>
                <h3 className="font-display text-2xl text-[var(--forest-deep)] mb-4">Mireio — Typical Floor Layout</h3>
                <FloorPlanImage src={floorplanMireioTypical} alt="Mireio Single Attached typical floor layout — ground and second floor" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-[var(--forest-deep)] mb-4">Mireio — Reverse Floor Layout</h3>
                <FloorPlanImage src={floorplanMireioReverse} alt="Mireio Single Attached reverse floor layout — ground and second floor" />
              </div>
            </TabsContent>

            <TabsContent value="mirela" className="mt-8">
              <FloorPlanPlaceholder label="Mirela Townhouse" note="Floor plan available on request — contact Mary Ann to receive it." />
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}

function WhyInvest() {
  const bullets = [
    "Lipa is among Batangas' fastest-growing cities — strong appreciation potential.",
    "EDGE Advanced certification means tangible, measurable green savings.",
    "Free 1.8kW solar system reduces monthly electricity bills from day one.",
    "Flexible 36-month down payment, plus Bank and Pag-IBIG financing options.",
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">Why Invest</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)] text-balance">
            More than a home — a smart, future-ready investment.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed text-pretty">
            Vermira Lipa is designed for Filipino families who want comfort,
            sustainability, and long-term value in one address. Surrounded by greenery,
            built to international green standards, and located in the heart of one of
            Batangas' most promising cities.
          </p>
        </Reveal>
        <Reveal className="space-y-4">
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/30 text-[var(--forest-deep)]">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <p className="text-foreground/85">{b}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Agent() {
  return (
    <section id="agent" className="py-24 bg-[var(--forest-deep)] text-[var(--ivory)] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--terracotta)]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 grid sm:grid-cols-[auto_1fr] gap-10 items-center">
        <Reveal>
          <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full overflow-hidden ring-4 ring-[var(--gold)]/40 mx-auto">
            <img
              src={agentImg}
              alt={AGENT.name}
              width={768}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Your Property Specialist</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">{AGENT.name}</h2>
          <p className="mt-2 text-white/75">{AGENT.title} · {AGENT.prc}</p>
          <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl text-pretty">
            With years of experience helping Filipino families find their perfect home,
            Mary Ann is committed to guiding you every step of the way — from inquiry to turnover.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-[#0084FF] text-white hover:bg-[#0084FF]/90 shadow-lg shadow-[#0084FF]/40 ring-2 ring-[#0084FF]/30 hover:-translate-y-0.5 transition-all">
              <a href="https://www.messenger.com/t/247326912848047" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> Message on Messenger</a>
            </Button>
            <Button asChild variant="hero" size="lg" className="rounded-full">
              <a href={`tel:${AGENT.phone.replace(/\s/g, "")}`}><Phone className="h-4 w-4" /> {AGENT.phone}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href={`mailto:${AGENT.email}`}><Mail className="h-4 w-4" /> Email me</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Inquiry() {
  const [unit, setUnit] = useState("Mira");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !phone) {
      toast.error("Please fill in your name, email, and phone.");
      return;
    }
    const subject = encodeURIComponent(`Vermira Lipa Inquiry — ${unit}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nUnit of Interest: ${unit}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${AGENT.email}?subject=${subject}&body=${body}`;
    toast.success("Thank you! Opening your email to send the inquiry.");
    form.reset();
    setUnit("Mira");
  }

  return (
    <section id="inquire" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">Inquire</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)] text-balance">
            Reserve your unit for ₱25,000.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Send your details and I'll get back with full computation, availability, and a site-visit schedule.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={`tel:${AGENT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground hover:text-[var(--terracotta)]">
              <Phone className="h-5 w-5 text-[var(--terracotta)]" /> {AGENT.phone}
            </a>
            <a href={`mailto:${AGENT.email}`} className="flex items-center gap-3 text-foreground hover:text-[var(--terracotta)] break-all">
              <Mail className="h-5 w-5 text-[var(--terracotta)]" /> {AGENT.email}
            </a>
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl shadow-[var(--forest-deep)]/5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Unit of Interest</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="mt-1.5 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--forest-deep)]/30"
                >
                  <option>Mira</option>
                  <option>Mireio</option>
                  <option>Mirela</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Tell me about your home plans…"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--forest-deep)]/30"
              />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
              Send My Inquiry <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="mt-1.5 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--forest-deep)]/30"
      />
    </div>
  );
}

function LocationAdvantages() {
  const points = [
    { title: "1.5–2 hrs from Metro Manila", desc: "Easy access via STAR Tollway and SLEX — ideal for families looking for a house and lot near Manila without the city congestion." },
    { title: "Heart of Lipa City, Batangas", desc: "Minutes from SM Lipa, Robinsons Lipa, DLSU Lipa, and top hospitals. Lipa is one of South Luzon's fastest-growing cities." },
    { title: "Near Lima Tech & business hubs", desc: "Close to Lima Technology Center and emerging Batangas industrial parks — strong rental demand and property appreciation." },
    { title: "Cooler climate, greener surroundings", desc: "Elevated terrain near Mt. Malarayat offers fresher air, scenic views, and a quieter lifestyle than typical Metro Manila suburbs." },
  ];
  return (
    <section id="location" className="py-24 bg-[var(--ivory)] border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">Location Advantages</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)] text-balance">
            Why Lipa City is the smartest place to invest in Batangas real estate.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Vermira Lipa sits in one of South Luzon's most promising growth corridors — connecting you to Manila, Batangas industries, and weekend escapes in one address.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <Reveal
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--terracotta)]/10 text-[var(--terracotta)]">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl text-[var(--forest-deep)]">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Where is Vermira Lipa located?", a: "Vermira Lipa is at Km 89 Lipa–Alaminos Road, Brgy. Talisay, Lipa City, Batangas — a prime, fast-growing area in South Luzon, near SM Lipa, DLSU Lipa, and Lima Tech Center." },
  { q: "How much is the reservation fee?", a: "You can reserve your Vermira Lipa house and lot for only ₱25,000. Unit prices start at ₱4.68M for the Mirela Townhouse, with promo discounts of up to ₱500,000 for a limited time." },
  { q: "What unit types are available?", a: "Three EDGE-certified models: Mira (Single Detached), Mireio (Single Attached), and Mirela (Townhouse). All units include a free 1.8kW solar panel system." },
  { q: "Is Vermira Lipa accessible from Manila?", a: "Yes — about 1.5 to 2 hours from Metro Manila via STAR Tollway and SLEX. A strategic choice for buyers looking for an affordable house and lot near Manila in Batangas." },
  { q: "What financing options are available?", a: "You can choose Bank financing (up to 25 years) or Pag-IBIG financing (up to 30 years), plus a flexible 36-month down payment scheme." },
  { q: "When is the turnover?", a: "Projected turnover is 2028. Reserving early secures the best units and current promo pricing." },
];

function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">FAQ</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)] text-balance">
            Frequently asked questions about Vermira Lipa.
          </h2>
        </Reveal>
        <div className="mt-12 space-y-4">
          {FAQS.map((item, i) => (
            <Reveal
              key={item.q}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <h3 className="font-display text-lg text-[var(--forest-deep)]">{item.q}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{item.a}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full bg-[#0084FF] text-white hover:bg-[#0084FF]/90 shadow-lg shadow-[#0084FF]/30">
            <a href="https://www.messenger.com/t/247326912848047" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Ask Mary Ann on Messenger
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ivory)] border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid sm:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--terracotta)] text-white">
              <Leaf className="h-4 w-4" />
            </span>
            <p className="font-display text-xl text-[var(--forest-deep)]">Vermira Lipa</p>
          </div>
          <p className="mt-4 text-muted-foreground max-w-md">
            Your trusted partner for EDGE-certified living in Lipa City.
          </p>
        </div>
        <div className="sm:text-right text-sm text-muted-foreground space-y-1">
          <p className="font-medium text-foreground">{AGENT.name}</p>
          <p>{AGENT.title} · {AGENT.prc}</p>
          <p>{AGENT.phone}</p>
          <p className="break-all">{AGENT.email}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-xs text-muted-foreground text-pretty">
          All figures are for reference only and subject to change without prior notice.
          Images shown are for illustration purposes only. © {new Date().getFullYear()} Vermira Lipa by Keyland Lipa Properties Inc.
        </div>
      </div>
    </footer>
  );
}

export default function VermiraLanding() {
  return (
    <div className="bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <ProjectOverview />
        <Units />
        <Amenities />
        <FloorPlans />
        <WhyInvest />
        <Agent />
        <Inquiry />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
