import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";

const products = [
  { cat: "FLANGES", title: "Forged Steel Flanges", desc: "Slip-on, weld neck, blind, socket weld and threaded flanges across pressure classes and material specifications.", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1400&auto=format&fit=crop" },
  { cat: "PIPE FITTINGS", title: "Pipe Fittings", desc: "Elbows, tees, reducers, couplings and forged pipe fittings for oil, gas and industrial applications.", img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1400&auto=format&fit=crop" },
  { cat: "PRECISION FORGED", title: "Precision Forged Parts", desc: "Close-tolerance forged components with consistent grain flow and high structural integrity.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop" },
  { cat: "INDUSTRIAL", title: "Industrial Components", desc: "Heavy-duty industrial forgings engineered for machinery, transmission and structural applications.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop" },
  { cat: "CUSTOM", title: "Custom Forgings", desc: "Customer-specific closed die forgings built to drawings across carbon, alloy and stainless steels.", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1400&auto=format&fit=crop" },
  { cat: "MACHINED", title: "Machined Components", desc: "Fully machined forged components ready for assembly — CNC finished to tight tolerances.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop" },
];

const materials = ["Carbon Steel", "Alloy Steel", "Stainless Steel"];
const weightRange = ["Up to 21 KG regular", "Up to 30 KG capacity"];

export default function Products() {
  return (
    <div>
      <PageBanner
        kicker="PRODUCT CATALOGUE"
        title="Products"
        subtitle="An industrial catalogue of forged and machined components — engineered across materials, applications and specifications."
      />

      {/* Product grid */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeader
            kicker="FORGING COMPONENTS"
            title={<>A Catalogue of <span className="text-[#D91E26]">Forged Strength</span>.</>}
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 border border-white/10 group-hover:border-[#D91E26] transition-colors" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="font-bebas text-xs tracking-[0.3em] text-[#D91E26] bg-black/70 px-3 py-1">
                      {p.cat}
                    </div>
                    <div className="w-10 h-10 bg-[#D91E26] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Search size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-bebas text-xs text-white/50 mb-1">PRODUCT {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display text-2xl text-white tracking-wide leading-tight mb-3">{p.title}</h3>
                    <p className="text-neutral-300 text-sm mb-4 line-clamp-2">{p.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-bebas tracking-widest text-[#D91E26] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      INQUIRE NOW <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 steel-gradient">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="p-10 bg-black/70 border border-white/10">
            <div className="kicker mb-4">MATERIAL RANGE</div>
            <h3 className="font-display text-3xl text-white mb-6 tracking-wide">Materials We Forge</h3>
            <ul className="space-y-3">
              {materials.map((m) => (
                <li key={m} className="flex items-center gap-3 py-2 border-b border-white/5 text-neutral-300">
                  <span className="w-2 h-2 bg-[#D91E26]" /> {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-black/70 border border-white/10">
            <div className="kicker mb-4">WEIGHT CAPACITY</div>
            <h3 className="font-display text-3xl text-white mb-6 tracking-wide">Forging Weight Range</h3>
            <ul className="space-y-3">
              {weightRange.map((w) => (
                <li key={w} className="flex items-center gap-3 py-2 border-b border-white/5 text-neutral-300">
                  <span className="w-2 h-2 bg-[#D91E26]" /> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionHeader
            kicker="CUSTOM MANUFACTURING"
            title={<>Need a <span className="text-[#D91E26]">Custom Forging</span>?</>}
            subtitle="We manufacture customer-specific forgings and machined components to your drawings, specifications and material requirements."
            align="center"
          />
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/contact" className="btn-primary">Submit Your Drawing <ArrowRight size={14} /></Link>
            <Link to="/capabilities" className="btn-outline">See Capabilities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
