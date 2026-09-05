import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, MessageCircle, Play, Store, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import posBilling from "@/assets/pos4.png.asset.json";
import posMenu from "@/assets/pos2.png.asset.json";
import posReports from "@/assets/pos.png.asset.json";
import posHistory from "@/assets/pos1.png.asset.json";
import posReceipt from "@/assets/pos3.png.asset.json";
import posLock from "@/assets/pos5.png.asset.json";
import lmsDashboard from "@/assets/lms1.png.asset.json";
import lmsProgress from "@/assets/lms.png.asset.json";
import lmsLogin from "@/assets/lms2.png.asset.json";

type Product = {
  id: string;
  name: string;
  tagline: string;
  icon: typeof Store;
  points: string[];
  shots: { src: string; caption: string }[];
  wa: string;
};

const products: Product[] = [
  {
    id: "pos",
    name: "JNEX POS",
    tagline: "Billing, stock and profit — in one calm screen.",
    icon: Store,
    points: [
      "Offline-first billing that never stops at the counter",
      "Live stock, GRN and supplier tracking",
      "Daily profit, expense and cashier reports",
      "Barcode, thermal printer and cash drawer ready",
    ],
    shots: [
      { src: posBilling.url, caption: "Fast billing terminal with product grid and live totals" },
      { src: posMenu.url, caption: "Owner menu — inventory, debt, reports and settings" },
      { src: posReports.url, caption: "Sales reports — revenue, cost and profit per item" },
      { src: posHistory.url, caption: "Bill history with reprint and item-level refunds" },
      { src: posReceipt.url, caption: "Thermal-ready receipt with discounts, tax and change" },
      { src: posLock.url, caption: "Passcode lock screen keeps the till secure" },
    ],
    wa: "Hi! I'd like the 3-day free trial of JNEX POS.",
  },
  {
    id: "lms",
    name: "JNEX LMS",
    tagline: "Run classes, payments and attendance without paperwork.",
    icon: GraduationCap,
    points: [
      "Student registration with QR attendance",
      "Class fees, receipts and arrears tracking",
      "Marks, results and parent notifications",
      "Institute-wide reporting for multiple branches",
    ],
    shots: [
      { src: lmsDashboard.url, caption: "Admin dashboard — students, payments and content at a glance" },
      { src: lmsProgress.url, caption: "Student progress with XP, badges and streaks" },
      { src: lmsLogin.url, caption: "Student and admin login with Google sign-in" },
    ],
    wa: "Hi! I'd like a demo of JNEX LMS for my institute.",
  },
];

function Showcase({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const shot = product.shots[index]!;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="mt-8 grid gap-8 rounded-[2rem] bg-ink p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={shot.src}
                src={shot.src}
                alt={shot.caption}
                width={1280}
                height={800}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="w-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-sm text-white/60">{shot.caption}</p>
            <div className="flex gap-2">
              {product.shots.map((s, i) => (
                <button
                  key={s.src}
                  aria-label={`Screenshot ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-teal" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>

          <a
            href={waLink(`Hi! Can I book a live walkthrough of ${product.name}?`)}
            target="_blank"
            rel="noreferrer"
            className="glass mt-6 flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white/10"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-red text-white">
              <Play className="size-4 fill-current" />
            </span>
            <div>
              <p className="text-sm font-medium text-white">Book a live walkthrough</p>
              <p className="text-xs text-white/55">
                15-minute screen-share demo of {product.name}, on WhatsApp
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col justify-between">
          <ul className="space-y-3">
            {product.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-white/75">
                <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href={waLink(product.wa)} target="_blank" rel="noreferrer">
                <Download className="size-4" /> Request 3-Day Free Trial
              </a>
            </Button>
            <Button size="lg" variant="tealSoft" asChild>
              <a href={waLink(product.wa)} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Let&apos;s Talk via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  const [active, setActive] = useState<string | null>("pos");

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-teal">CORE PRODUCTS</p>
        <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
          Two systems. Built from the shop floor up.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tap a product to open its showcase — real screens, real workflows, no sales fluff.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((p) => {
          const isActive = active === p.id;
          return (
            <motion.button
              key={p.id}
              onClick={() => setActive(isActive ? null : p.id)}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border p-8 text-left transition-colors ${
                isActive
                  ? "border-teal/40 bg-accent shadow-glow-teal"
                  : "border-border bg-card hover:border-teal/30"
              }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-teal/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <p.icon className="size-7 text-teal" />
              <h3 className="mt-5 font-display text-2xl text-navy">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <span className="mt-6 inline-block text-xs font-semibold tracking-widest text-accent-red">
                {isActive ? "CLOSE SHOWCASE —" : "OPEN SHOWCASE +"}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence initial={false}>
        {active && <Showcase key={active} product={products.find((p) => p.id === active)!} />}
      </AnimatePresence>
    </section>
  );
}
