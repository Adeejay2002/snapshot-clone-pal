import { motion } from "motion/react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

/**
 * TODO (business owner action needed): fill in your real LKR prices once
 * decided. Showing at least a starting price (even "From Rs. X,000/month")
 * reduces friction a lot more than "Contact us" alone — buyers filter out
 * businesses that hide pricing entirely.
 */
const plans = [
  {
    name: "Starter",
    price: "Contact for pricing",
    tagline: "Single counter, one branch.",
    features: ["1 billing terminal", "Offline billing & stock", "Daily sales reports", "WhatsApp support"],
  },
  {
    name: "Growth",
    price: "Contact for pricing",
    tagline: "Multiple counters or staff.",
    features: [
      "Up to 5 terminals",
      "Supplier & GRN tracking",
      "Multi-staff cashier reports",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Custom / Institute",
    price: "Contact for pricing",
    tagline: "LMS, multi-branch or a custom build.",
    features: ["Unlimited terminals/branches", "Custom workflows", "Dedicated onboarding", "SLA-backed support"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-teal">PRICING</p>
        <h2 className="mt-4 text-3xl text-navy sm:text-4xl">Plans that scale with your counter</h2>
        <p className="mt-4 text-muted-foreground">
          Every business is billed differently depending on terminals and features — message us your
          setup and we&apos;ll quote it the same day.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`flex flex-col rounded-[1.75rem] border p-8 ${
              p.highlighted ? "border-teal/40 bg-accent shadow-glow-teal" : "border-border bg-card"
            }`}
          >
            <h3 className="font-display text-xl text-navy">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            <p className="mt-6 font-display text-2xl text-teal">{p.price}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" /> {f}
                </li>
              ))}
            </ul>

            <Button variant={p.highlighted ? "cta" : "outlineNavy"} size="lg" className="mt-8" asChild>
              <a
                href={waLink(`Hi! I'd like a quote for the ${p.name} plan.`)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" /> Get a quote
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
