import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setOpen(true);
    };
    const timer = setTimeout(() => setOpen(true), 45000);
    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mouseout", onLeave);
      clearTimeout(timer);
    };
  }, [dismissed]);

  return (
    <>
      <motion.a
        href={waLink("Hi Jenex Solution!")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.6, type: "spring", stiffness: 220, damping: 16 }}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-accent-red text-white shadow-glow-red"
      >
        <MessageCircle className="size-6" />
      </motion.a>

      <AnimatePresence>
        {open && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-40 w-[min(22rem,calc(100vw-3rem))] rounded-2xl border border-border bg-card p-6 shadow-depth"
          >
            <button
              aria-label="Dismiss"
              onClick={() => {
                setOpen(false);
                setDismissed(true);
              }}
              className="absolute right-4 top-4 text-muted-foreground hover:text-navy"
            >
              <X className="size-4" />
            </button>
            <p className="font-display text-lg text-navy">Before you go —</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Grab the 3-day full trial, or ask one quick question. No forms, no sales calls.
            </p>
            <Button variant="cta" className="mt-5 w-full" asChild>
              <a
                href={waLink("Hi! I'd like the 3-day free trial of JNEX.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" /> Get the free trial
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
