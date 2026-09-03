import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/jnex/Navbar";
import { Footer } from "@/components/jnex/Footer";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms of Service — Jenex Solution" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36">
        <h1 className="font-display text-3xl text-navy">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: [add date]</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            {/* TODO: This is a starting template only, not legal advice — have a lawyer
                review before publishing, especially the trial, refund and liability terms. */}
            These terms govern your use of the JNEX POS and JNEX LMS software provided by
            Jenex Solution ("we", "us").
          </p>

          <section>
            <h2 className="font-display text-lg text-navy">Free trial</h2>
            <p className="mt-2">
              {/* TODO: confirm exact trial terms */}
              We offer a 3-day free trial of our software. No payment is required to start a
              trial. Continued use after the trial period requires a paid plan.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-navy">Support & availability</h2>
            <p className="mt-2">
              Support is available via WhatsApp, phone and email during {site.supportHours}. We
              aim to respond to critical issues promptly but do not guarantee uninterrupted
              service. {/* TODO: add a formal SLA if you want to commit to specific response times */}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-navy">Payments & refunds</h2>
            <p className="mt-2">
              {/* TODO: fill in your actual billing cycle and refund policy */}
              [Add your billing cycle, invoicing and refund policy here.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-navy">Limitation of liability</h2>
            <p className="mt-2">
              {/* TODO: have a lawyer draft this section properly for a business-critical
                  billing product — it matters a lot if a client claims lost sales due to
                  a software issue. */}
              [Add a liability clause appropriate for business-critical software, reviewed by
              a lawyer.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-navy">Contact us</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
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
