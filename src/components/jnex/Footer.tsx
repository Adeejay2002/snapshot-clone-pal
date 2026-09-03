import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import logo from "@/assets/jnex-mark.png.asset.json";
import { site, waLink } from "@/lib/site";

const columns = [
  {
    title: "Products",
    links: [
      { label: "JNEX POS", href: "#products" },
      { label: "JNEX LMS", href: "#products" },
      { label: "Custom builds", href: "#custom" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Founder story", href: "#story" },
      { label: "Pricing", href: "#pricing" },
      { label: "Time saver", href: "#calculator" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img
            src={logo.url}
            alt="Jenex Solution"
            width={56}
            height={56}
            loading="lazy"
            className="h-12 w-12 object-contain"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Dependable POS and institute software, engineered in Sri Lanka for owners who
            want their time back.
          </p>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold text-navy">{c.title}</p>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-teal">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-navy">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={waLink("Hi Jenex Solution!")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-teal"
              >
                <MessageCircle className="size-4 text-teal" /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 hover:text-teal">
                <Phone className="size-4 text-teal" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-teal">
                <Mail className="size-4 text-teal" /> {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-teal" /> {site.location}
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="size-4 text-teal" /> {site.supportHours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jenex Solution. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-teal">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-teal">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
