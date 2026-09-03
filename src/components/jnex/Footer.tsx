import { Mail, MapPin, MessageCircle } from "lucide-react";
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
      { label: "Time saver", href: "#calculator" },
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
            <li className="inline-flex items-center gap-2">
              <Mail className="size-4 text-teal" /> {site.email}
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-teal" /> {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jenex Solution. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
