"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Play, Factory, Wrench, Shield, Cog, Flame, Hammer, Cpu, Award, Users, Target, TrendingUp, CheckCircle2, Phone } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeader from "@/components/SectionHeader";

const heroVideo = "/assets/client/hero2.webm";

const slides = [
  {
    kicker: "FORGING EXCELLENCE SINCE 2017",
    title: "ANVIL TECHNO FORGE",
    sub: "Closed Die Steel Forgings & Pipe Fittings",
    desc: "Engineering precision, delivering strength — one hot-forged component at a time.",
    video: heroVideo,
  },
  {
    kicker: "MANUFACTURING CAPACITY",
    title: "350 METRIC TONS",
    sub: "Monthly Production Capability",
    desc: "Heavy volume, uncompromising quality — delivering at industrial scale.",
    bg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
  },
  {
    kicker: "MATERIAL EXPERTISE",
    title: "CARBON · ALLOY · STAINLESS",
    sub: "Steel Forging Solutions",
    desc: "From carbon to stainless — engineered across every critical alloy grade.",
    bg: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    kicker: "END-TO-END MANUFACTURING",
    title: "FORGED · HEAT TREATED · MACHINED",
    sub: "Fully Machined Components",
    desc: "From raw billet to finished part — controlling every step in-house.",
    bg: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2000&auto=format&fit=crop",
  },
];

const whyChoose = [
  { icon: Hammer, title: "Closed Die Forging Expertise", desc: "Precision drop forging across carbon, alloy and stainless steels." },
  { icon: Factory, title: "350 MT Capacity", desc: "Monthly production capability with heavy volume throughput." },
  { icon: Cog, title: "In-House Die Shop", desc: "Fully functional tooling and die development facility." },
  { icon: Cpu, title: "CNC Machining Facility", desc: "Advanced CNC machining for precision finished components." },
  { icon: Shield, title: "Raw Material Inspection", desc: "Laboratory testing of every incoming material batch." },
  { icon: CheckCircle2, title: "Quality Controlled Manufacturing", desc: "Process control from billet to dispatch." },
  { icon: Award, title: "Global Industry Applications", desc: "Serving automotive, aerospace, defence, oil & gas sectors." },
  { icon: Users, title: "Customer Specific Manufacturing", desc: "Tailored forgings engineered to customer drawings." },
];

const materials = {
  "Carbon Steel": ["EN 8D", "EN 9", "SAE 1141", "A105", "St52-3", "SAE 1018", "SAE 1045"],
  "Alloy Steel": ["SAE 8620", "EN 353", "42CrMo4", "41Cr4", "25CrMo4", "SAE 4140", "SAE 4130", "20MnCr5", "EN 19", "EN 24"],
  "Stainless Steel": ["SS 316", "SS 304", "SS 410", "SS 420"],
};

const industries = [
  "Automotive", "Railways", "Industrial Machinery Parts", "Defence", "Aerospace",
  "Heavy Engineering", "Agriculture Equipment", "Textile Industries", "Marine",
  "Electrical Transmission", "Construction Equipment", "Gear & Transmission",
  "Power Generation", "Oil & Natural Gas",
];

const processSteps = [
  "Raw Material", "Inspection & Testing", "Cutting", "Weight Inspection",
  "Heating", "Forging", "Annealing", "Machining", "Final Inspection",
  "Packing", "Dispatch",
];

const infraCards = [
  { title: "Raw Material Yard", img: "/assets/client/rawmaterialyard.webp" },
  { title: "Cutting Area", img: "/assets/client/cutting area.webp" },
  { title: "Tooling & Die Development", img: "/assets/client/toolingdieingfacility.webp" },
  { title: "Belt Drop Hammer", img: "/assets/client/drophammer.webp" },
  { title: "Closed Die Forging", img: "/assets/client/diedevelopement.webp" },
  { title: "Die Shop", img: "/assets/client/dieshop.webp" },
  { title: "CNC Machining", img: "/assets/client/cncarea.webp" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [activeMat, setActiveMat] = useState<keyof typeof materials>("Carbon Steel");

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((s, i) =>
            i === current && (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {s.video ? (
                  <video
                    src={s.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${s.bg || ""}')` }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-0 grid-bg opacity-40" />
              </motion.div>
            )
          )}
        </AnimatePresence>

        {/* Sparks animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#D91E26] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "0",
                animation: `spark-up ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: "0 0 8px #D91E26",
              }}
            />
          ))}
        </div>

        <div className="relative h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-end pb-28">
          <AnimatePresence mode="wait">
            {slides.map((s, i) =>
              i === current && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="max-w-3xl"
                >
                  <div className="kicker mb-5">{s.kicker}</div>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide text-white mb-5">
                    {s.title}
                  </h1>
                  <div className="text-xl md:text-3xl font-display tracking-wide text-[#D91E26] mb-4">
                    {s.sub}
                  </div>
                  <p className="text-neutral-300 text-base md:text-lg max-w-xl mb-8">{s.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/products" className="btn-primary shine">Explore Products <ArrowRight size={16} /></Link>
                    <Link href="/infrastructure" className="btn-outline">Our Infrastructure <Play size={14} /></Link>
                    <Link href="/contact" className="btn-outline">Contact us</Link>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Slide nav */}
        <div className="absolute bottom-8 left-6 lg:left-auto lg:right-12 flex items-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[3px] transition-all duration-500 ${i === current ? "w-16 bg-[#D91E26]" : "w-8 bg-white/30"}`}
            />
          ))}
          <span className="ml-3 font-bebas text-sm text-white/70 w-10">
            {String(current + 1).padStart(2, "0")}
            <span className="text-white/30">/{String(slides.length).padStart(2, "0")}</span>
          </span>
        </div>

        {/* Vertical text */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
          <div className="w-px h-20 bg-white/20" />
          <div className="font-bebas text-xs tracking-[0.4em] text-white/50" style={{ writingMode: "vertical-rl" }}>
            EST. GUJARAT • INDIA
          </div>
          <div className="w-px h-20 bg-white/20" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative bg-[#D91E26] py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 20px)" }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0">
          {[
            { v: 350, s: "MT", l: "Monthly Production" },
            { v: 25, s: "+", l: "Years Machine Shop" },
            { v: 15, s: "+", l: "Years Forging Industry" },
            { v: 21, s: "KG", l: "Regular Weight Capability" },
          ].map((c, i) => {
            const borderClasses =
              i === 0 ? "border-r border-b lg:border-b-0 border-white/20 pr-6 pb-6 lg:pb-0" :
                i === 1 ? "border-b lg:border-b-0 lg:border-r border-white/20 pb-6 lg:pb-0 lg:pr-6" :
                  i === 2 ? "border-r border-white/20 pr-6 pt-6 lg:pt-0" :
                    "pt-6 lg:pt-0";
            return (
              <div key={i} className={`text-white ${borderClasses}`}>
                <AnimatedCounter
                  value={c.v}
                  suffix={c.s}
                  label={c.l}
                  duration={2}
                  numberColorClassName="text-white"
                  lineColorClassName="bg-white/80"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-black border-y border-white/10 py-4 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap font-display tracking-[0.3em] text-neutral-500">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["CLOSED DIE FORGING", "★", "PIPE FITTINGS", "★", "CARBON STEEL", "★", "ALLOY STEEL", "★", "STAINLESS STEEL", "★", "CNC MACHINING", "★", "HEAT TREATMENT", "★", "350 MT CAPACITY", "★"].map((t, i) => (
                <span key={i} className="text-sm">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT COMPANY */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 steel-gradient" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <SectionHeader
              kicker="ABOUT COMPANY"
              title={<>Forges of<br /><span className="text-[#D91E26]">Endurance</span>.</>}
            />
            <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-[#D91E26] hover:gap-4 transition-all font-display tracking-widest text-sm">
              LEARN MORE <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="relative font-bebas text-[180px] md:text-[280px] leading-none text-[#D91E26]/10 absolute -top-8 -right-4 select-none pointer-events-none">
              25+
            </div>
            <div className="relative grid md:grid-cols-2 gap-4">
              {[
                {
                  yr: "01",
                  title: "Gujarat's Forging Powerhouse",
                  body: "ANVIL TECHNO FORGE is one of the largest makers of closed die steel forgings and pipe fittings in Gujarat, located in industrial zone of Shapar (Veraval), 17 km from Rajkot.",
                },
                {
                  yr: "02",
                  title: "Material Expertise",
                  body: "We specialize in various varieties of drop forging (closed die) in carbon steel, alloy steel and stainless steel and deliver them in forged, heat treated, pre machined or completely machined as per customer requirements.",
                },
                {
                  yr: "03",
                  title: "Experienced Leadership",
                  body: "Our company is run by well-experienced and qualified individuals with more than 25 years of experience in the machine shop and over 15 years of experience in the forging industries.",
                },
                {
                  yr: "04",
                  title: "Integrated Manufacturing",
                  body: "In our entire group of companies, we undertake material cutting, forging and machining. Our monthly production capability is 350 metric tons, with regular weights up to 21 kg. Our company features a fully functional die shop, forge shop and CNC machine shop.",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-8 bg-black/50 border border-white/10 hover:border-[#D91E26] transition-all duration-500 clip-corner"
                >
                  <div className="font-bebas text-6xl text-[#D91E26]/30 leading-none mb-4 group-hover:text-[#D91E26] transition-colors">
                    {t.yr}
                  </div>
                  <h3 className="font-display text-xl tracking-wide text-white mb-3">{t.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 lg:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <SectionHeader
              kicker="WHY CHOOSE US"
              title={<>Precision Engineered.<br /><span className="text-stroke">Industrially Proven.</span></>}
            />
            <p className="text-neutral-400 max-w-md">
              Eight pillars of operational strength that differentiate ANVIL TECHNO FORGE as a trusted global forging partner.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyChoose.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative p-6 lg:p-8 bg-gradient-to-b from-neutral-900 to-black border border-white/5 hover:border-[#D91E26] transition-all duration-500 overflow-hidden tilt-card"
              >
                <div className="absolute top-0 right-0 font-bebas text-7xl text-white/[0.03] leading-none p-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-12 h-12 bg-[#D91E26]/10 border border-[#D91E26]/30 flex items-center justify-center mb-6 group-hover:bg-[#D91E26] group-hover:border-[#D91E26] transition-all">
                  <f.icon size={22} className="text-[#D91E26] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg tracking-wide text-white mb-2 leading-tight">{f.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-6 h-[2px] w-0 group-hover:w-12 bg-[#D91E26] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="relative py-24 lg:py-32 steel-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader
            kicker="MATERIALS WE FORGE"
            title={<>Metallurgical <span className="text-[#D91E26]">Mastery</span>.</>}
            subtitle="A broad portfolio of carbon, alloy and stainless steel grades — each forged, heat-treated and machined to meet international specifications."
          />

          <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {Object.keys(materials).map((m) => (
              <button
                key={m}
                onClick={() => setActiveMat(m as keyof typeof materials)}
                className={`px-6 py-3 font-display tracking-widest text-sm transition-all relative ${activeMat === m ? "text-[#D91E26]" : "text-neutral-400 hover:text-white"
                  }`}
              >
                {m.toUpperCase()}
                {activeMat === m && (
                  <motion.div layoutId="matUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D91E26]" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-10"
            >
              {materials[activeMat].map((g, i) => (
                <motion.div
                  key={g}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative p-5 bg-black/60 border border-white/10 hover:border-[#D91E26] transition-all duration-300"
                >
                  <div className="absolute top-2 right-2 text-[10px] font-bebas text-white/30">{String(i + 1).padStart(2, "0")}</div>
                  <Wrench size={16} className="text-[#D91E26] mb-3" />
                  <div className="font-display text-lg tracking-wide text-white">{g}</div>
                  <div className="text-xs text-neutral-500 mt-1">{activeMat}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 lg:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            kicker="APPLICATION INDUSTRIES"
            title={<>Forging <span className="text-[#D91E26]">Global</span> Industries.</>}
            subtitle="Our forgings power mission-critical applications across fourteen diverse industrial sectors worldwide."
          />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-0">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 7) * 0.05 }}
                className="group relative p-6 border border-white/5 hover:border-[#D91E26] hover:bg-[#D91E26]/5 transition-all cursor-default min-h-[140px] flex flex-col justify-between"
              >
                <div className="font-bebas text-xs text-[#D91E26]/50 group-hover:text-[#D91E26]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-display text-sm md:text-base tracking-wide text-white leading-tight">{ind}</div>
                </div>
                <ChevronRight size={14} className="text-[#D91E26] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader
            kicker="MANUFACTURING PROCESS"
            title={<>From <span className="text-[#D91E26]">Raw Billet</span> to <span className="text-stroke">Finished Component</span>.</>}
            subtitle="An eleven-stage, fully-integrated closed die forging process — engineered and executed entirely in-house."
          />

          <div className="mt-16 relative overflow-x-auto pb-8 no-scrollbar">
            <div className="flex gap-0 min-w-max">
              {processSteps.map((step, i) => (
                <div key={i} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group relative w-44"
                  >
                    <div className="relative h-28 border border-white/10 bg-gradient-to-br from-neutral-900 to-black flex flex-col items-center justify-center hover:border-[#D91E26] transition-all">
                      <div className="font-bebas text-3xl text-[#D91E26]">{String(i + 1).padStart(2, "0")}</div>
                      <div className="font-display text-xs tracking-widest text-center px-3 text-white mt-1">{step}</div>
                      <Flame size={10} className="absolute -bottom-2 text-[#D91E26]" />
                    </div>
                    <div className="h-[2px] w-full bg-white/10 relative">
                      <div className="process-line absolute inset-0 text-[#D91E26]" style={{ background: "repeating-linear-gradient(90deg, #D91E26 0 6px, transparent 6px 12px)" }} />
                    </div>
                  </motion.div>
                  {i < processSteps.length - 1 && (
                    <div className="w-6 h-[2px] bg-gradient-to-r from-[#D91E26] to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="relative py-24 lg:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <SectionHeader
              kicker="OUR INFRASTRUCTURE"
              title={<>A Plant Built for <span className="text-[#D91E26]">Heavy Precision</span>.</>}
            />
            <Link href="/infrastructure" className="inline-flex items-center gap-2 text-[#D91E26] font-display tracking-widest text-sm hover:gap-4 transition-all">
              TOUR THE FACILITY <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {infraCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden h-72 ${i === 0 ? "md:row-span-2 md:h-auto" : ""}`}
              >
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${c.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D91E26] transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-bebas text-xs text-[#D91E26] mb-1">{String(i + 1).padStart(2, "0")} / INFRA</div>
                  <h3 className="font-display text-lg tracking-wide text-white">{c.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="relative py-24 lg:py-32 steel-gradient">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, label: "OUR VISION", title: "To be a global leader", body: "To be a global leader in closed die steel forgings and pipe fittings, providing high-quality products that meet customer specifications, delivered in various conditions, including forged, heat treated, pre-machined or fully machined." },
            { icon: TrendingUp, label: "OUR MISSION", title: "To excel in manufacturing", body: "To excel in the manufacturing industry by leveraging our expertise in machine shop and forging unit, providing innovative solutions, and maintaining strong customer relationships, while fostering a culture of continuous improvement and sustainability." },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-10 lg:p-14 bg-black/60 border border-white/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-bebas text-[200px] leading-none text-[#D91E26]/[0.06]">
                0{i + 1}
              </div>
              <div className="relative">
                <c.icon size={32} className="text-[#D91E26] mb-6" />
                <div className="kicker mb-4">{c.label}</div>
                <h3 className="font-display text-3xl lg:text-4xl text-white mb-6 tracking-wide">{c.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{c.body}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 diag-stripes" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-24 bg-[#D91E26] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 20px)" }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <div className="font-bebas text-sm tracking-[0.4em] text-black/60 mb-3">START A CONVERSATION</div>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide leading-[1.05]">
              Ready to Forge<br />Something Strong?
            </h2>
            <p className="text-white/80 mt-5 max-w-lg">Request a quote, schedule a plant visit, or discuss your custom forging requirements with our engineering team.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-display tracking-widest text-sm hover:bg-white hover:text-black transition-all">
              GET A QUOTE <ArrowRight size={16} />
            </Link>
            <a href="tel:+919998022557" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black font-display tracking-widest text-sm hover:bg-black hover:text-white transition-all">
              <Phone size={16} /> CALL NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
