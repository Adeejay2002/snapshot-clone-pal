import { motion } from "motion/react";
import { Globe, MonitorSmartphone, Boxes, MessageCircle } from "lucide-react";
import guardianLaptop from "@/assets/guardian-laptop.jpg";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

const services = [
  { icon: Globe, title: "Websites", copy: "Fast, SEO-ready sites that actually bring enquiries." },
  {
    icon: MonitorSmartphone,
    title: "Web Apps",
    copy: "Dashboards, portals and workflows shaped around your team.",
  },
  {
    icon: Boxes,
    title: "Desktop POS",
    copy: "Custom offline systems for unusual counters and industries.",
  },
];

export function CustomDev() {
  return (
    <section id="custom" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-ink p-6 shadow-depth sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.16]" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-52 w-52 rounded-full bg-teal/25 blur-3xl" />
          <img
            src={guardianLaptop}
            alt="The JNEX guardian at work, building a custom system on a laptop"
            width={1400}
            height={782}
            loading="lazy"
            className="relative mx-auto w-full max-w-[420px] rounded-2xl drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
          />
          <div className="glass relative mt-8 rounded-2xl px-5 py-4">
            <p className="text-sm leading-relaxed text-white/80">
              Same guardian, same discipline — this time hand-coding the exact system
              your business needs.
            </p>
          </div>
        </motion.div>

        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-teal">CUSTOM DEVELOPMENT</p>
          <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
            Need something built exactly for your business?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Off-the-shelf doesn&apos;t always fit. Tell me what you run and how you run it —
            I&apos;ll build the web app, website or desktop POS system around it.
          </p>
          <Button variant="cta" size="lg" className="mt-8" asChild>
            <a
              href={waLink("Hi! I need a custom system built. Can we discuss?")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4" /> Start the conversation
            </a>
          </Button>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-teal/40"
              >
                <s.icon className="size-6 text-teal" />
                <h3 className="mt-4 font-display text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
