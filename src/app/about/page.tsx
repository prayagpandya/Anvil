"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Target, TrendingUp, CheckCircle2, Flag, Heart, Sparkles } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";

const timeline = [
  { yr: "FOUNDATION", title: "Machine Shop Legacy", body: "Over 25 years of deep-rooted experience in the machine shop industry — a foundation of precision engineering and operational excellence." },
  { yr: "FORGING UNIT", title: "Anvil Techno Forge Established", body: "Over 7 years of dedicated forging expertise added to our legacy, bringing closed die forging capability to our integrated manufacturing portfolio." },
  { yr: "TODAY", title: "350 MT Monthly Capacity", body: "A fully functional die shop, forge shop and CNC machine shop operating at 350 metric tons monthly production, handling regular weights up to 21 kg." },
];

const values = [
  { icon: Heart, title: "Integrity", desc: "Transparent operations and uncompromising business ethics across every engagement." },
  { icon: Award, title: "Quality", desc: "Zero-defect manufacturing philosophy embedded in every stage from billet to dispatch." },
  { icon: Sparkles, title: "Innovation", desc: "Continuous improvement through modern tooling, CNC automation and material science." },
  { icon: CheckCircle2, title: "Reliability", desc: "Consistent on-time delivery with trusted repeat partnerships worldwide." },
];

const goals = [
  { t: "Expand Global Footprint", d: "Strengthen our presence across international markets as a trusted closed die forging and pipe fittings exporter." },
  { t: "Production Capacity Expansion", d: "Scale monthly production beyond current 350 MT capacity to meet rising global demand." },
  { t: "Advanced Machining Capability", d: "Continual investment in CNC machining, automation and precision tooling infrastructure." },
  { t: "Material Range Expansion", d: "Widen our material portfolio across exotic alloy and specialty stainless steel grades." },
  { t: "Certification Excellence", d: "Pursue and maintain globally recognized quality, environmental and industry certifications." },
  { t: "Customer Partnerships", d: "Forge long-term relationships through customer-specific manufacturing and engineering collaboration." },
];

export default function About() {
  return (
    <div>
      <PageBanner
        kicker="ABOUT ANVIL"
        title="The Company"
        subtitle="A legacy of machine-shop mastery, re-engineered for closed die forging excellence."
      />

      {/* OVERVIEW */}
      <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden clip-corner">
              <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1400&auto=format&fit=crop" alt="Anvil Techno Forge plant" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="kicker text-white/70 mb-1">SINCE ESTABLISHMENT</div>
                <div className="font-bebas text-6xl text-white leading-none">GUJARAT</div>
                <div className="text-white/70 text-sm">Shapar (Veraval), Rajkot</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeader
              kicker="COMPANY OVERVIEW"
              title={<>One of Gujarat's Largest <span className="text-[#D91E26]">Closed Die Forging</span> Makers.</>}
            />
            <div className="mt-8 space-y-5 text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-white">ANVIL TECHNO FORGE</strong> is one of the largest makers of closed die steel forgings and pipe fittings in Gujarat, located in industrial zone of Shapar (Veraval), 17 km from Rajkot.
              </p>
              <p>
                We specialize in various varieties of drop forging (closed die) in carbon steel, alloy steel and stainless steel and deliver them in forged, heat treated, pre machined or completely machined as per customer requirements.
              </p>
              <p>
                Our company is run by well-experienced and qualified individuals with more than 25 years of experience in the machine shop and over 7 years of experience in the forging industries.
              </p>
              <p>
                In our entire group of companies, we undertake material cutting, forging and machining. Our monthly production capability is 350 metric tons, with regular weights up to 21 kg. Our company features a fully functional die shop, forge shop and CNC machine shop.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
              <AnimatedCounter value={350} suffix=" MT" label="MONTHLY PRODUCTION" />
              <AnimatedCounter value={25} suffix="+" label="YEARS EXPERIENCE" />
              <AnimatedCounter value={21} suffix=" KG" label="WEIGHT CAPABILITY" />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-24 lg:py-32 steel-gradient">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader kicker="OUR HISTORY" title={<>Milestones of <span className="text-[#D91E26]">Mastery</span>.</>} />

          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D91E26] to-transparent -translate-x-1/2 hidden md:block" />
            <div className="space-y-16">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className="relative p-8 lg:p-10 bg-black/60 border border-white/10 clip-corner">
                    <div className="font-bebas text-5xl text-[#D91E26] mb-3">{t.yr}</div>
                    <h3 className="font-display text-2xl text-white mb-3 tracking-wide">{t.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t.body}</p>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <div className="relative w-16 h-16 bg-[#D91E26] flex items-center justify-center font-bebas text-xl">
                      0{i + 1}
                      <div className="absolute inset-0 border-2 border-white/20 animate-ping opacity-30" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="relative py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, label: "VISION", body: "To be a global leader in closed die steel forgings and pipe fittings, providing high-quality products that meet customer specifications, delivered in various conditions, including forged, heat treated, pre-machined or fully machined." },
            { icon: TrendingUp, label: "MISSION", body: "To excel in the manufacturing industry by leveraging our expertise in machine shop and forging unit, providing innovative solutions, and maintaining strong customer relationships, while fostering a culture of continuous improvement and sustainability." },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-10 lg:p-14 bg-gradient-to-br from-neutral-900 to-black border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 diag-stripes opacity-[0.03]" />
              <c.icon size={38} className="text-[#D91E26] mb-6" />
              <div className="kicker mb-4">{c.label}</div>
              <p className="text-neutral-300 text-lg leading-relaxed relative">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 lg:py-32 steel-gradient">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader kicker="CORE VALUES" title={<>Principles That <span className="text-[#D91E26]">Forge Us</span>.</>} />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-black/60 border border-white/10 hover:border-[#D91E26] group transition-all"
              >
                <div className="w-14 h-14 bg-[#D91E26]/10 border border-[#D91E26]/40 flex items-center justify-center mb-5 group-hover:bg-[#D91E26] transition-colors">
                  <v.icon size={22} className="text-[#D91E26] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-white tracking-wide">{v.title}</h3>
                <p className="text-neutral-400 text-sm mt-3 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS ROADMAP */}
      <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader kicker="OUR GOALS" title={<>A Roadmap Forged in <span className="text-[#D91E26]">Steel</span>.</>} />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {goals.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 bg-gradient-to-b from-neutral-900 to-black border border-white/5 hover:border-[#D91E26]/50 transition-all group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <Flag size={22} className="text-[#D91E26]" />
                  <div className="font-bebas text-4xl text-white/10 group-hover:text-[#D91E26]/40 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="font-display text-xl text-white mb-3 tracking-wide leading-tight">{g.t}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{g.d}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 group-hover:w-full bg-[#D91E26] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="relative py-24 lg:py-32 bg-black border-t border-white/10">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader kicker="LEADERSHIP TEAM" title={<>Board of <span className="text-[#D91E26]">Directors</span>.</>} />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dinesh Detroja", role: "Director", img: "/assets/client/dineshdetroja.webp" },
              { name: "Sailesh Ladani", role: "Director", img: "/assets/client/saileshladani.webp" },
              { name: "Bhargav Detroja", role: "Director", img: "/assets/client/bhargavdetroja.webp" },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-neutral-900/40 border border-white/10 hover:border-[#D91E26] transition-all duration-500 clip-corner overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-2xl text-white tracking-wide leading-tight group-hover:text-[#D91E26] transition-colors">{d.name}</h3>
                    <div className="font-bebas text-sm text-[#D91E26] mt-1 tracking-widest">{d.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE GROWTH */}
      <section className="relative py-24 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              kicker="TARGET FUTURE"
              title={<>Engineered for <span className="text-[#D91E26]">Tomorrow</span>.</>}
            />
            <p className="mt-6 text-neutral-300 leading-relaxed text-lg">
              Our vision extends beyond current capacity. We are investing in next-generation forging technology, expanding our CNC machining footprint, and pursuing certifications that open new global markets. Our trajectory is clear: to become the benchmark name in closed die steel forgings across Asia, Europe and the Americas.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/infrastructure" className="btn-primary">Explore Infrastructure <ArrowRight size={14} /></Link>
              <Link href="/contact" className="btn-outline">Partner With Us</Link>
            </div>
          </div>

          {/* Animated growth graph */}
          <div className="relative">
            <div className="p-8 bg-black border border-white/10 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="font-display text-sm tracking-widest text-white/70">PRODUCTION GROWTH</div>
                <div className="text-[#D91E26] font-bebas text-2xl">+ MT / YEAR</div>
              </div>
              <svg viewBox="0 0 400 200" className="w-full">
                <defs>
                  <linearGradient id="gred" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#D91E26" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#D91E26" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 50, 100, 150, 200].map((y) => (
                  <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
                ))}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M 0 180 L 60 160 L 120 140 L 180 110 L 240 80 L 300 50 L 400 20"
                  fill="none" stroke="#D91E26" strokeWidth="2"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  d="M 0 180 L 60 160 L 120 140 L 180 110 L 240 80 L 300 50 L 400 20 L 400 200 L 0 200 Z"
                  fill="url(#gred)"
                />
                {[[0,180],[60,160],[120,140],[180,110],[240,80],[300,50],[400,20]].map(([x, y], i) => (
                  <motion.circle key={i} cx={x} cy={y} r="4" fill="#D91E26"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.5 }}
                  />
                ))}
              </svg>
              <div className="flex justify-between mt-3 text-xs text-neutral-500 font-bebas tracking-widest">
                <span>Y1</span><span>Y2</span><span>Y3</span><span>Y4</span><span>Y5</span><span>TARGET</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
