import { motion } from "motion/react";
import mask from "@/assets/mask.png.asset.json";

const chapters = [
  {
    year: "The counter",
    text: "Years spent behind real counters and stock rooms — counting, reconciling, chasing missing items after closing time.",
  },
  {
    year: "The frustration",
    text: "Every system on the market was built by people who had never run a shop. Too heavy, too foreign, too fragile.",
  },
  {
    year: "The build",
    text: "So the code came next. Engineering discipline applied to problems learned the hard way, on the floor.",
  },
  {
    year: "JNEX today",
    text: "Software made for Sri Lankan businesses — dependable, quiet, and shaped by someone who has stood where you stand.",
  },
];

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="absolute inset-0 bg-grid opacity-[0.14]" />
      <img
        src={mask.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -right-16 top-1/2 w-[420px] -translate-y-1/2 opacity-[0.12]"
      />
      <div className="relative mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-[0.3em] text-teal">FOUNDER STORY</p>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
          From the shop floor to the source code.
        </h2>

        <div className="mt-14 space-y-10 border-l border-white/15 pl-8">
          {chapters.map((c, i) => (
            <motion.div
              key={c.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 size-3 rounded-full bg-teal" />
              <p className="font-display text-lg text-white">{c.year}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-14 max-w-2xl font-display text-xl leading-relaxed text-white/85">
          &ldquo;I don&apos;t sell software. I hand over peace of mind — the kind I wished
          someone had handed me.&rdquo;
        </p>
        <p className="mt-3 text-sm text-teal">Founder, Jenex Solution</p>
      </div>
    </section>
  );
}
