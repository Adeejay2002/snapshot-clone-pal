import { motion, useScroll, useSpring } from "motion/react";
import mask from "@/assets/mask-art.png.asset.json";

/** Background SVG line that draws itself as the page scrolls and ends at the mask motif. */
export function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const draw = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.4 });

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden justify-center lg:flex">
      <svg
        className="h-full w-[720px]"
        viewBox="0 0 720 2400"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M360 0 C 120 320, 640 620, 360 940 C 90 1250, 660 1500, 360 1820 C 200 2010, 360 2180, 360 2400"
          stroke="currentColor"
          className="text-teal/35"
          strokeWidth="1.5"
          style={{ pathLength: draw }}
        />
      </svg>
      <motion.img
        src={mask.url}
        alt=""
        aria-hidden
        className="absolute bottom-24 left-1/2 w-40 -translate-x-1/2 opacity-[0.09]"
        style={{ scale: draw }}
      />
    </div>
  );
}
