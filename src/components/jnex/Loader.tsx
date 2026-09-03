import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "@/assets/jnex-mark.png.asset.json";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl px-8 py-7"
            >
              <img
                src={logo.url}
                alt="Jenex Solution logo"
                width={160}
                height={160}
                className="h-24 w-24 object-contain brightness-0 invert"
              />
            </motion.div>
            <div className="h-px w-40 overflow-hidden bg-white/15">
              <motion.div
                className="h-full bg-teal"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
            <p className="text-xs tracking-[0.4em] text-white/60">JNEX SOLUTION</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
