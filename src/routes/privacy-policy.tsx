import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Mail, Phone } from "lucide-react";

const AGENT = {
  name: "Mary Ann Mendoza Caringal",
  title: "Senior Property Specialist",
  prc: "PRC License No. 5081",
  phone: "+63 956 674 0524",
  email: "caringalmaryann12379@gmail.com",
};

const EFFECTIVE_DATE = "June 19, 2026";
const TITLE = "Privacy Policy | Vermira Lipa";
const DESCRIPTION =
  "How Vermira Lipa collects, uses, and protects the personal information of visitors who submit a property inquiry.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPolicy,
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl text-[var(--forest-deep)]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-foreground/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-background text-foreground antialiased">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--ivory)_85%,transparent)] border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--terracotta)] text-white">
              <Leaf className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base text-[var(--forest-deep)] font-semibold">
                Vermira Lipa
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden sm:block">
                Privacy Policy
              </p>
            </div>
          </Link>
          <Link
            to="/"
            className="text-sm text-foreground/70 hover:text-[var(--terracotta)] transition"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] font-medium">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[var(--forest-deep)] text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective date: {EFFECTIVE_DATE}
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            This Privacy Policy explains how {AGENT.name} ({AGENT.prc}),
            the property specialist for Vermira Lipa, collects, uses, and
            protects the personal information of visitors who submit an
            inquiry through this website (the "Site"). It is written to
            comply with the Data Privacy Act of 2012 (Republic Act No.
            10173) of the Philippines and its Implementing Rules and
            Regulations.
          </p>

          <Section title="1. Information We Collect">
            <p>When you submit the "Inquire" form on this Site, we collect:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>The unit you are interested in (Mira, Mireio, or Mirela)</li>
              <li>Any message or details you choose to include</li>
            </ul>
            <p>
              We do not request government IDs, financial account numbers,
              or sensitive personal information through this form. If those
              details are later needed (for example, during reservation or
              financing), they will be collected through separate, secured
              channels — not through this website.
            </p>
          </Section>

          <Section title="2. How This Information Is Collected and Stored">
            <p>
              When you press "Send My Inquiry," your browser opens your own
              device's default email application with a message pre-filled
              and addressed directly to {AGENT.name} at{" "}
              <a
                href={`mailto:${AGENT.email}`}
                className="text-[var(--terracotta)] underline underline-offset-4"
              >
                {AGENT.email}
              </a>
              .
            </p>
            <p>
              This Site does not operate a server-side database, CRM, or
              third-party form service that captures or stores your
              submission. The only copies of your information are (a) the
              draft email on your own device, and (b) the email that
              arrives in {AGENT.name.split(" ")[0]}'s inbox once you choose
              to send it — both of which are protected by the security
              measures of your respective email providers (e.g., Gmail).
            </p>
            <p>
              If you instead reach out via the "Message on Messenger"
              button or by calling/texting the phone number on this Site,
              that conversation is handled directly by Facebook Messenger
              or your mobile carrier, and is not collected by this Site
              either.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to your inquiry about Vermira Lipa;</li>
              <li>
                Provide unit availability, pricing computation, and
                financing options;
              </li>
              <li>Schedule and coordinate a site visit;</li>
              <li>
                Follow up on your reservation or application status and
                send you relevant updates about the project; and
              </li>
              <li>Comply with legal, tax, or regulatory obligations.</li>
            </ul>
            <p>
              We will not use your phone number or email for unrelated
              marketing, or share it with other agents or projects, without
              your separate consent.
            </p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>
              We process your personal information on the basis of your
              consent, given when you voluntarily complete and send the
              inquiry form, in accordance with Section 12 of the Data
              Privacy Act of 2012.
            </p>
          </Section>

          <Section title="5. Sharing of Information">
            <p>
              We do not sell your personal information. We may share the
              details you submit with the project developer (Keyland Lipa
              Properties Inc.) and, if you proceed with a purchase, with
              relevant financing institutions (such as a bank or Pag-IBIG
              Fund) solely to process your reservation or loan application.
              We may also disclose information when required by law or by
              a valid order of a competent government authority.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We keep your information for as long as necessary to respond
              to your inquiry, and — if you proceed with a reservation or
              purchase — for the duration of the transaction and any
              period required by applicable tax, accounting, or legal
              record-keeping rules. You may request that your information
              be deleted sooner; see Section 8 below.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              Because this Site does not store your data on its own
              servers, your information is protected by the account
              security of your email provider and {AGENT.name.split(" ")[0]}
              's email provider. We recommend using a strong, unique
              password and enabling two-factor authentication on your
              email account. If this Site begins using a CRM, database, or
              third-party form service in the future, this Policy will be
              updated to describe the additional safeguards in place.
            </p>
          </Section>

          <Section title="8. Your Rights Under the Data Privacy Act">
            <p>As a data subject, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Be informed that your personal information is being processed;</li>
              <li>Access a copy of the information we hold about you;</li>
              <li>Object to or withdraw consent for further processing;</li>
              <li>Correct any inaccurate or outdated information;</li>
              <li>Request the erasure or blocking of your information;</li>
              <li>Be indemnified for damages from a violation of your rights; and</li>
              <li>File a complaint with the National Privacy Commission.</li>
            </ul>
            <p>
              To exercise any of these rights, contact {AGENT.name} using
              the details in Section 10 below. If your concern is not
              resolved, you may contact the National Privacy Commission at{" "}
              <a
                href="mailto:complaints@privacy.gov.ph"
                className="text-[var(--terracotta)] underline underline-offset-4"
              >
                complaints@privacy.gov.ph
              </a>{" "}
              or through{" "}
              <a
                href="https://privacy.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terracotta)] underline underline-offset-4"
              >
                privacy.gov.ph
              </a>
              .
            </p>
          </Section>

          <Section title="9. Cookies and Tracking">
            <p>
              As of the effective date above, this Site does not use
              cookies, analytics scripts, or advertising trackers. This
              page loads fonts from Google Fonts, which may log your IP
              address as part of delivering those fonts; no other data is
              shared with Google by this Site.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              This Site is intended for adults inquiring about residential
              real estate and is not directed at, nor knowingly collects
              information from, individuals under 18 years of age.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with a revised effective date.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-2 text-sm">
              <p className="font-medium text-foreground">{AGENT.name}</p>
              <p className="text-muted-foreground">
                {AGENT.title} · {AGENT.prc}
              </p>
              <a
                href={`tel:${AGENT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-foreground hover:text-[var(--terracotta)]"
              >
                <Phone className="h-4 w-4 text-[var(--terracotta)]" />{" "}
                {AGENT.phone}
              </a>
              <a
                href={`mailto:${AGENT.email}`}
                className="flex items-center gap-2 text-foreground hover:text-[var(--terracotta)] break-all"
              >
                <Mail className="h-4 w-4 text-[var(--terracotta)]" />{" "}
                {AGENT.email}
              </a>
            </div>
          </Section>
        </div>
      </main>

      <footer className="bg-[var(--ivory)] border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Vermira Lipa by Keyland Lipa
          Properties Inc.
        </div>
      </footer>
    </div>
  );
}
