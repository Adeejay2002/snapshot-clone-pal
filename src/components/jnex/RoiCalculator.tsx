import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function RoiCalculator() {
  const [bills, setBills] = useState(120);
  const [staff, setStaff] = useState(3);

  const { hoursDaily, hoursMonthly, daysYearly } = useMemo(() => {
    // ~1.4 manual minutes saved per bill, plus ~18 min/day of manual reconciliation per staff member
    const minutes = bills * 1.4 + staff * 18;
    const hoursDaily = minutes / 60;
    return {
      hoursDaily,
      hoursMonthly: hoursDaily * 26,
      daysYearly: (hoursDaily * 26 * 12) / 8,
    };
  }, [bills, staff]);

  return (
    <section id="calculator" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-depth sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-teal">TIME SAVER</p>
          <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
            How many hours is manual work stealing from you?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Slide to match your shop, and see what JNEX POS gives back.
          </p>

          <div className="mt-10 space-y-9">
            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-navy">Bills per day</label>
                <span className="font-display text-lg text-teal">{bills}</span>
              </div>
              <Slider
                value={[bills]}
                onValueChange={(v) => setBills(v[0]!)}
                min={10}
                max={600}
                step={10}
                className="mt-4"
              />
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-navy">Staff handling records</label>
                <span className="font-display text-lg text-teal">{staff}</span>
              </div>
              <Slider
                value={[staff]}
                onValueChange={(v) => setStaff(v[0]!)}
                min={1}
                max={15}
                step={1}
                className="mt-4"
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] bg-ink p-8 sm:p-10">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          <div className="relative">
            <p className="text-sm text-white/60">You get back roughly</p>
            <motion.p
              key={hoursDaily.toFixed(1)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-6xl text-white"
            >
              {hoursDaily.toFixed(1)}
              <span className="ml-2 text-2xl text-teal">hrs / day</span>
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-4">
                <p className="font-display text-2xl text-white">{Math.round(hoursMonthly)}</p>
                <p className="text-xs text-white/55">hours saved monthly</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="font-display text-2xl text-white">{Math.round(daysYearly)}</p>
                <p className="text-xs text-white/55">full work days a year</p>
              </div>
            </div>

            <Button variant="cta" size="lg" className="mt-8 w-full" asChild>
              <a
                href={waLink(
                  `Hi! Your calculator says JNEX POS saves me about ${hoursDaily.toFixed(1)} hours a day. I'd like to try it.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" /> Claim these hours
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
