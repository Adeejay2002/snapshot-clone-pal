import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/jnex-logo.jpg.asset.json";
import { waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#products", label: "Products" },
  { href: "#calculator", label: "Time Saved" },
  { href: "#custom", label: "Custom Builds" },
  { href: "#story", label: "Our Story" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Jenex Solution"
            width={48}
            height={48}
            className="h-11 w-11 rounded-xl object-contain"
          />
          <span className="hidden text-sm font-semibold tracking-[0.28em] text-navy sm:block">
            JNEX SOLUTION
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="cta" size="sm" asChild className="hidden sm:inline-flex">
            <a href={waLink("Hi Jenex Solution, I'd like to know more about your systems.")} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> Talk to us
            </a>
          </Button>
          <button
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-navy md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-navy/80"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
