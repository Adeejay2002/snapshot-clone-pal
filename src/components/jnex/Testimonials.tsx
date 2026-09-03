import { motion } from "motion/react";
import { Star } from "lucide-react";

/**
 * TODO (business owner action needed):
 * Replace every entry below with a REAL client, a REAL quote and their REAL
 * business name. Never publish invented reviews — it's misleading advertising
 * and can backfire badly if a client ever sees a quote attributed to them
 * that they didn't say. Once you have 3–6 genuine reviews (a WhatsApp voice
 * note or chat screenshot is enough to ask permission for), swap them in here.
 */
const testimonials = [
  {
    quote: "Add a short, specific quote from a real client here.",
    name: "[Client name]",
    business: "[Business name, Galle]",
  },
  {
    quote: "Add a short, specific quote from a real client here.",
    name: "[Client name]",
    business: "[Business name, Galle]",
  },
  {
    quote: "Add a short, specific quote from a real client here.",
    name: "[Client name]",
    business: "[Business name, Galle]",
  },
];

const stats = [
  { value: "[X]", label: "businesses using JNEX" },
  { value: "[X]", label: "bills processed monthly" },
  { value: "[X] yrs", label: "supporting local shops" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-teal">TRUSTED LOCALLY</p>
        <h2 className="mt-4 text-3xl text-navy sm:text-4xl">What business owners are saying</h2>
        <p className="mt-4 text-muted-foreground">
          Real feedback from real counters — ask us for references before you decide.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
            <p className="font-display text-3xl text-teal">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name + i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex gap-1 text-teal">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-navy">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.business}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
