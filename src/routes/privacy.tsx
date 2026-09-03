import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/jnex/Navbar";
import { Footer } from "@/components/jnex/Footer";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Jenex Solution" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36">
        <h1 className="font-display text-3xl text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: [add date]</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            {/* TODO: This is a starting template only, not legal advice. Have a Sri Lankan
                lawyer review it against the Personal Data Protection Act (PDPA) before
                publishing, especially the data-retention and third-party sections. */}
            This policy explains what information Jenex Solution ("we", "us") collects when
            you use our website or JNEX software, and how we handle it.
          </p>

          <section>
            <h2 className="font-display text-lg text-navy">Information we collect</h2>
            <p className="mt-2">
              When you contact us via WhatsApp, phone or email, we receive your name, phone
              number and any details you share with us. JNEX POS and JNEX LMS are designed to
              store your business data (sales, stock, student records) on your own device by
              default. {/* TODO: state clearly whether any data ever syncs to a server you control */}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-navy">How we use it</h2>
            <p className="mt-2">
              To respond to enquiries, provide support, and improve our products. We do not
              sell your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-navy">Data retention</h2>
            <p className="mt-2">
              {/* TODO: state how long enquiry/contact data is kept */}
              Contact details shared with us are kept only as long as needed to respond to
              your enquiry or provide ongoing support.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-navy">Contact us</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-teal">
                {site.email}
              </a>{" "}
              or {site.phoneDisplay}.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
