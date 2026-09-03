import { LifeBuoy, Clock, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  {
    icon: LifeBuoy,
    title: "Real support, not a ticket queue",
    copy: `Call or WhatsApp us directly — ${site.supportHours}.`,
  },
  {
    icon: Clock,
    title: "Fast response",
    copy: "Critical billing issues are usually picked up within a few hours during support hours.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    copy: "Offline-first design means your sales and stock data lives on your own device, not a server we control.",
  },
];

export function Support() {
  return (
    <section id="support" className="relative mx-auto max-w-7xl px-5 pb-24">
      <div className="grid gap-6 rounded-[2rem] border border-border bg-card p-8 sm:p-12 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title}>
            <it.icon className="size-6 text-teal" />
            <h3 className="mt-4 font-display text-lg text-navy">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
