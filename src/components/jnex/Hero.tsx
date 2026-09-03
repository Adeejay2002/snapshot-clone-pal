import { motion } from "motion/react";
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Clock } from "lucide-react";
import mask from "@/assets/mask.png.asset.json";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

const stats = [
  { icon: Clock, value: "3.5 hrs", label: "saved every day" },
  { icon: ShieldCheck, value: "100%", label: "offline-ready billing" },
  { icon: Zap, value: "3 days", label: "free full trial" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/5 px-4 py-1.5 text-xs font-medium tracking-wide text-teal"
          >
            Built in Sri Lanka · Trusted by growing businesses
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-display text-4xl leading-[1.05] tracking-tight text-navy sm:text-6xl"
          >
            Take total control of your business.
            <span className="block text-teal">Leave the stress behind.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.15, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            JNEX builds the POS and learning systems that quietly run in the background —
            so your stock, sales, students and staff are always accounted for, and your
            evenings are yours again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button variant="cta" size="lg" asChild>
              <a href="#products">
                Explore our products <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outlineNavy" size="lg" asChild>
              <a href={waLink("Hi! I'd like a quick demo of JNEX POS.")} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <s.icon className="mb-2 size-4 text-teal" />
                <dt className="font-display text-xl text-navy">{s.value}</dt>
                <dd className="text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 shadow-depth">
            <div className="absolute inset-0 bg-grid opacity-[0.16]" />
            <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-teal/25 blur-3xl" />
            <motion.img
              src={mask.url}
              alt="Traditional Sri Lankan Raksha mask motif"
              width={520}
              height={520}
              className="relative mx-auto w-full max-w-[340px] drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="glass relative mt-8 rounded-2xl px-5 py-4">
              <p className="text-sm leading-relaxed text-white/80">
                Heritage discipline. Modern engineering. Software that guards your
                business the way the mask guards the door.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
