"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import {
  Wrench, FlaskConical, Scissors, Hammer, ScanSearch,
  Activity, Magnet, Droplets, Cog, SprayCan, ShieldCheck,
  Sticker, Package,
} from "lucide-react";

const capabilities = [
  { icon: Wrench, title: "Tooling & Die Development", desc: "In-house CAD/CAM die design and manufacturing for all closed die forging programs." },
  { icon: FlaskConical, title: "Laboratory & Inspection of Raw Material", desc: "Full material verification and lab inspection of every incoming raw material batch." },
  { icon: Scissors, title: "Raw Material Cutting", desc: "Precision bandsaw cutting of billets to required forging weights." },
  { icon: Hammer, title: "Closed Die Forging", desc: "1.5 MT and 2 MT belt drop hammer forging in carbon, alloy and stainless steels." },
  { icon: ScanSearch, title: "NDT Testing", desc: "Non-destructive testing to evaluate component integrity without damage." },
  { icon: Activity, title: "UT Testing", desc: "Ultrasonic testing for internal flaw detection and material soundness." },
  { icon: Magnet, title: "MPI Testing", desc: "Magnetic particle inspection for surface and near-surface discontinuity detection." },
  { icon: Droplets, title: "Dye Penetrant Inspection", desc: "Liquid penetrant testing for surface-breaking defect identification." },
  { icon: Cog, title: "Machining", desc: "Conventional and CNC machining to tight customer specifications." },
  { icon: SprayCan, title: "Surface Treatment", desc: "Protective surface treatments for corrosion resistance and finish." },
  { icon: ShieldCheck, title: "Passivation", desc: "Chemical passivation for stainless steel components post-machining." },
  { icon: SprayCan, title: "Zinc Plating", desc: "Electroplated zinc coating for enhanced corrosion protection." },
  { icon: Sticker, title: "Identification Marking", desc: "Permanent part marking for traceability and identification requirements." },
  { icon: Package, title: "Packing & Storage", desc: "Protective, export-grade packaging and organized storage before dispatch." },
];

export default function Capabilities() {
  return (
    <div>
      <PageBanner
        kicker="MANUFACTURING CAPABILITIES"
        title="Our Capabilities"
        subtitle="End-to-end forging and machining capabilities — from raw material inspection to finished, packed, ready-to-ship components."
      />

      <section className="relative py-24 lg:py-32 bg-black">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader
            kicker="ENGINEERING EXCELLENCE"
            title={<>Fourteen Stages of <span className="text-[#D91E26]">Controlled Manufacturing</span>.</>}
            subtitle="Every capability operates under standardized process controls — ensuring repeatability, traceability and quality across every production batch."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative p-8 bg-gradient-to-b from-neutral-900 to-black border border-white/5 hover:border-[#D91E26] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 font-bebas text-6xl text-white/5 leading-none p-2 group-hover:text-[#D91E26]/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#D91E26] clip-corner flex items-center justify-center font-bebas text-xs">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-14 h-14 mt-6 bg-[#D91E26]/10 border border-[#D91E26]/30 flex items-center justify-center mb-5 group-hover:bg-[#D91E26] transition-all">
                  <cap.icon size={22} className="text-[#D91E26] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg text-white tracking-wide mb-3 leading-tight">{cap.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{cap.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[10px] font-bebas tracking-widest text-[#D91E26]/60 group-hover:text-[#D91E26] transition-colors">
                  <span className="w-6 h-[2px] bg-[#D91E26]/40 group-hover:bg-[#D91E26] transition-colors" />
                  CAP-{String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process flow vertical */}
      <section className="relative py-24 lg:py-32 steel-gradient">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader kicker="PROCESS WORKFLOW" title={<>The <span className="text-[#D91E26]">Capability Chain</span>.</>} />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { group: "INPUT", items: ["Tooling & Die Development", "Laboratory & Inspection of Raw Material", "Raw Material Cutting"] },
              { group: "FORGING", items: ["Closed Die Forging", "Heat Treatment", "Surface Treatment"] },
              { group: "TESTING", items: ["NDT Testing", "UT Testing", "MPI Testing", "Dye Penetrant Inspection"] },
              { group: "FINISHING", items: ["Machining", "Passivation", "Zinc Plating", "Identification Marking", "Packing & Storage"] },
            ].map((g, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="p-6 bg-black/60 border border-white/10"
              >
                <div className="font-bebas text-xs text-[#D91E26] tracking-[0.4em] mb-3">PHASE 0{gi + 1}</div>
                <div className="font-display text-xl text-white tracking-wide mb-5">{g.group}</div>
                <div className="space-y-2">
                  {g.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                      <span className="font-bebas text-sm text-[#D91E26]">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="text-neutral-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
