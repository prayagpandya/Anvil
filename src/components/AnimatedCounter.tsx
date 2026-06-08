import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
  duration?: number;
  numberColorClassName?: string;
  lineColorClassName?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  sub,
  duration = 2,
  numberColorClassName = "text-[#D91E26]",
  lineColorClassName = "bg-[#D91E26]",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="flex items-baseline gap-1">
        <span className={`text-5xl md:text-6xl font-bebas ${numberColorClassName} leading-none`}>
          {prefix}{display}
        </span>
        <span className="text-2xl md:text-3xl font-bebas text-white/80">{suffix}</span>
      </div>
      <div className="mt-3 font-display text-sm tracking-widest text-white uppercase">{label}</div>
      {sub && <div className="text-xs text-neutral-500 mt-1">{sub}</div>}
      <div className={`mt-3 h-[2px] w-16 ${lineColorClassName}`} />
    </motion.div>
  );
}
