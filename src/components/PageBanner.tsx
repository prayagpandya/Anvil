import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  kicker: string;
  title: string;
  subtitle?: ReactNode;
}

export default function PageBanner({ kicker, title, subtitle }: Props) {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 steel-gradient" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Diag stripes */}
      <div className="absolute top-0 left-0 right-0 h-1 diag-stripes opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 diag-stripes opacity-60" />

      <div className="relative max-w-[1400px] mx-auto px-6 pb-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="kicker mb-4">{kicker}</div>
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white">
            {title}
          </h1>
          {subtitle && <p className="text-neutral-300 mt-4 max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>

      {/* Decorative big text */}
      <div className="absolute right-4 bottom-4 font-bebas text-white/5 text-[140px] md:text-[220px] leading-none pointer-events-none select-none">
        {title.split(" ")[0].toUpperCase()}
      </div>
    </section>
  );
}
