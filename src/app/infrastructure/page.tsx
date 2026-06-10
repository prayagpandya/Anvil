"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const sections = [
  {
    id: "raw",
    title: "Raw Material Yard",
    desc: "A dedicated raw material storage and handling yard stocking carbon steel, alloy steel and stainless steel billets and bars. Traceability and batch identification maintained from entry to issue.",
    images: ["/assets/client/rawmaterialyard.webp"],
    specs: ["Segregated material bays", "Heat number traceability", "Batch testing protocol", "Certified mill reports"],
  },
  {
    id: "cutting",
    title: "Cutting Area",
    desc: "High-speed band saw cutting facility for billet preparation, with weight accuracy controls to ensure consistent forging input weights.",
    images: ["/assets/client/cutting area.webp"],
    specs: ["Bandsaw cutting", "Weight verification", "Batch identification", "Cut-to-length accuracy"],
  },
  {
    id: "tooling",
    title: "Tooling & Die Development",
    desc: "Full in-house die design and tooling development capability using CAD/CAM for closed die forging dies, ensuring shorter lead times and die longevity.",
    images: ["/assets/client/toolingdieingfacility.webp"],
    specs: ["CAD / CAM design", "Die sinking", "Tool steel selection", "Die life monitoring"],
  },
  {
    id: "belt",
    title: "Belt Drop Hammer",
    desc: "Equipped with 1.5 MT and 2 MT belt drop hammers for closed die forging operations, enabling high-volume production across a wide range of component sizes and geometries.",
    images: ["/assets/client/drophammer.webp"],
    specs: ["1.5 MT Hammer capacity", "2 MT Hammer capacity", "Closed die forging", "Pneumatic assisted"],
  },
  {
    id: "forging",
    title: "Die Developement Shop",
    desc: "Our core forging line producing precision closed die steel forgings up to 30 KG job handling capacity, delivering consistent grain flow, dimensional accuracy and structural integrity.",
    images: ["/assets/client/diedevelopement.webp"],
    specs: ["Up to 30 KG job handling capacity", "Carbon / Alloy / Stainless steels", "Consistent grain flow", "Heat treatment ready"],
  },
  {
    id: "die",
    title: "Die Shop",
    desc: "Dedicated die manufacturing and maintenance shop supporting forging operations with die repair, re-cutting, polishing and validation between production runs.",
    images: ["/assets/client/dieshop.webp"],
    specs: ["Die manufacturing", "Die repair & maintenance", "Re-cutting & polishing", "Die validation"],
  },
  // {
  //   id: "machining",
  //   title: "Machining Facility",
  //   desc: "Full-fledged machining facility equipped with lathes, drill presses, milling and grinding machines — supporting pre-machining and secondary operations on forged parts.",
  //   images: ["/assets/client/cncarea.webp"],
  //   specs: ["Lathe work", "Milling & drilling", "Surface grinding", "Pre-machining operations"],
  // },
  {
    id: "cnc",
    title: "CNC Machining",
    desc: "Modern CNC turning and machining centers producing fully machined components to tight tolerances, directly from in-house forged blanks.",
    images: ["/assets/client/cncarea.webp"],
    specs: ["CNC turning centers", "Tight tolerance machining", "Fully machined components", "CAD / CAM programming"],
  },
];

export default function Infrastructure() {
  const [lightbox, setLightbox] = useState<{ section: number; image: number } | null>(null);

  const openLightbox = (sectionIdx: number, imageIdx: number) => setLightbox({ section: sectionIdx, image: imageIdx });
  const closeLightbox = () => setLightbox(null);
  const nav = (dir: 1 | -1) => {
    if (!lightbox) return;
    const sec = sections[lightbox.section];
    const next = (lightbox.image + dir + sec.images.length) % sec.images.length;
    setLightbox({ ...lightbox, image: next });
  };

  return (
    <div>
      <PageBanner
        kicker="MANUFACTURING INFRASTRUCTURE"
        title="The Facility"
        subtitle="8 integrated zones. One closed die forging ecosystem. Shapar (Veraval), Rajkot."
      />

      <section className="py-24 lg:py-32 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6 space-y-24">
          {sections.map((s, i) => (
            <div key={s.id} id={s.id} className="grid lg:grid-cols-12 gap-10 items-center scroll-mt-28">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="kicker mb-3">ZONE {String(i + 1).padStart(2, "0")} / INFRASTRUCTURE</div>
                  <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-6 leading-[1.05]">
                    {s.title}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {s.specs.map((sp) => (
                      <li key={sp} className="flex items-center gap-2 text-sm text-neutral-300">
                        <span className="w-2 h-2 bg-[#D91E26]" /> {sp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <button onClick={() => openLightbox(i, 0)} className="block relative w-full aspect-[16/10] overflow-hidden group clip-corner border border-white/10 hover:border-[#D91E26] transition-colors cursor-zoom-in">
                  <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 font-display text-white tracking-wide text-lg text-left">{s.title} — Plant Facility View</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/80 hover:text-white">
              <X size={32} />
            </button>
            {sections[lightbox.section].images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); nav(-1); }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 text-white hover:border-[#D91E26] hover:text-[#D91E26]"
                >
                  ←
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nav(1); }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 text-white hover:border-[#D91E26] hover:text-[#D91E26]"
                >
                  →
                </button>
              </>
            )}
            <motion.img
              key={`${lightbox.section}-${lightbox.image}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={sections[lightbox.section].images[lightbox.image]}
              alt=""
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm font-bebas tracking-widest">
              {sections[lightbox.section].title} — {lightbox.image + 1} / {sections[lightbox.section].images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
