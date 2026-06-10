"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle2, Shield, Activity, FlaskConical, ClipboardCheck, Package, Search, Eye, Award } from "lucide-react";

const pillars = [
  { icon: ClipboardCheck, title: "Quality Policy", desc: "A company-wide commitment to quality embedded in every manufacturing operation, driven by customer specifications and international standards." },
  { icon: Search, title: "Inspection Standards", desc: "Incoming, in-process and final inspections performed against documented standards, customer drawings and acceptance criteria." },
  { icon: Activity, title: "Testing Methods", desc: "NDT, UT, MPI and Dye Penetrant testing for flaw detection, hardness testing, and mechanical property verification." },
  { icon: FlaskConical, title: "Material Verification", desc: "Mill certificates, PMI testing, chemical analysis and laboratory inspection for every incoming raw material batch." },
  { icon: Eye, title: "Process Control", desc: "Controlled process parameters with documented work instructions across cutting, heating, forging, heat treatment and machining." },
  { icon: CheckCircle2, title: "Final Inspection", desc: "Dimensional verification, visual inspection and documentation review before release of finished components." },
  { icon: Package, title: "Packing Standards", desc: "Export-grade, material-specific packaging ensuring corrosion protection, identification and safe transit." },
];

const compliance = [
  "Material Traceability by Heat Number",
  "Mill Test Certificates (MTC)",
  "In-process QA Checks",
  "Hardness Testing",
  "Dimensional Inspection Reports",
  "NDT / UT / MPI / DPI Testing",
  "Surface Finish Verification",
  "Visual Inspection Standards",
  "Packing & Preservation Protocol",
  "Pre-Dispatch Audit",
  "Customer-Specific Inspection",
  "Documented Work Instructions",
];

export default function Quality() {
  return (
    <div>
      <PageBanner
        kicker="QUALITY ASSURANCE"
        title="Quality"
        subtitle="Quality is not a stage — it is a culture embedded across every operation from raw material to dispatch."
      />

      {/* Quality Policy block */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square bg-gradient-to-br from-[#D91E26] to-[#7a1114] p-1 clip-corner">
              <div className="w-full h-full bg-black clip-corner flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative text-center">
                  <Award size={72} className="text-[#D91E26] mx-auto mb-4" />
                  <div className="font-bebas text-xl tracking-widest text-white">ISO CERTIFIED</div>
                  <div className="font-display text-sm tracking-widest text-[#D91E26] mt-2">MANUFACTURING</div>
                  <div className="mt-8 border-t border-b border-[#D91E26]/30 py-4 mx-8">
                    <div className="font-bebas text-5xl text-white leading-none">ANVIL</div>
                    <div className="font-display text-xs tracking-[0.4em] text-[#D91E26]">TECHNO FORGE</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 font-bebas text-xs tracking-widest text-white/50">QA / 001</div>
                <div className="absolute bottom-4 right-4 font-bebas text-xs tracking-widest text-white/50">CERT-A-01</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeader
              kicker="QUALITY POLICY"
              title={<>Certified Quality. <span className="text-[#D91E26]">Relentless Standards</span>.</>}
            />
            <div className="mt-8 space-y-5 text-neutral-300 leading-relaxed">
              <p className="text-lg border-l-2 border-[#D91E26] pl-6 italic">
                "At ANVIL TECHNO FORGE, quality is the foundation of every forged component we manufacture."
              </p>
              <p>
                Our quality policy is anchored in customer satisfaction, continuous improvement, strict material traceability and rigorous testing at every stage of production. From raw material verification through in-process controls to final inspection and packing, each step is governed by documented procedures, trained personnel and calibrated equipment.
              </p>
              <p>
                We commit to maintaining internationally accepted manufacturing and testing standards, ensuring every component leaving our plant meets customer specifications, material requirements and performance expectations.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "100%", l: "Raw Material Tested" },
                { v: "100%", l: "Dimensionally Inspected" },
                { v: "100%", l: "Traceable by Heat No." },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-neutral-900 border border-white/5 text-center"
                >
                  <div className="font-bebas text-3xl text-[#D91E26]">{s.v}</div>
                  <div className="text-xs text-neutral-400 tracking-wide mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32 steel-gradient">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader kicker="7 QUALITY PILLARS" title={<>The Assurance <span className="text-[#D91E26]">Framework</span>.</>} />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 bg-black/70 border border-white/10 hover:border-[#D91E26] transition-all group relative"
              >
                <div className="font-bebas text-7xl text-white/[0.04] absolute top-2 right-4 leading-none group-hover:text-[#D91E26]/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-12 h-12 bg-[#D91E26]/10 border border-[#D91E26]/30 flex items-center justify-center mb-5 group-hover:bg-[#D91E26] transition-colors">
                  <p.icon size={22} className="text-[#D91E26] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-white tracking-wide mb-3">{p.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed relative">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance list */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader kicker="COMPLIANCE & STANDARDS" title={<>Compliance Checklist.</>} />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
            {compliance.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.06 }}
                className="p-6 border-r border-b border-white/10 bg-neutral-950 hover:bg-[#D91E26]/10 hover:border-[#D91E26]/40 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#D91E26]/10 border border-[#D91E26]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D91E26] transition-all">
                    <CheckCircle2 size={14} className="text-[#D91E26] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-bebas text-xs text-[#D91E26]/70 mb-1">STD-0{i + 1}</div>
                    <div className="text-sm text-neutral-200 leading-snug">{c}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#D91E26] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 30px)", opacity: 0.07 }} />
        <div className="relative max-w-[1400px] mx-auto px-6 text-center">
          <Shield size={40} className="mx-auto text-white/80 mb-4" />
          <div className="font-display text-3xl md:text-4xl text-white tracking-wide">
            Material Test Certificates Provided With Every Dispatch
          </div>
        </div>
      </section>
    </div>
  );
}
