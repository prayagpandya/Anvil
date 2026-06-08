import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ kicker, title, subtitle, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className={`kicker ${align === "center" ? "justify-center" : ""}`}>{kicker}</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-wide text-white mt-4">
        {title}
      </h2>
      {subtitle && <p className="text-neutral-400 mt-5 leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
