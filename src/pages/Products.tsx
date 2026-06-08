import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";
import flangesImg from "../assets/client/flanges.PNG";
import gearImg from "../assets/client/autopartsgear.PNG";
import shaftingImg from "../assets/client/autopartsshafting.PNG";
import pipefittingImg from "../assets/client/pipefittings.PNG";

const products = [
  { cat: "FLANGES", title: "Forged Steel Flanges", desc: "Slip-on, weld neck, blind, socket weld and threaded flanges across pressure classes and material specifications.", img: flangesImg },
  { cat: "PIPE FITTINGS", title: "Pipe Fittings", desc: "Elbows, tees, reducers, couplings and forged pipe fittings for oil, gas and industrial applications.", img: pipefittingImg },
  { cat: "PRECISION FORGED", title: "Precision Forged Parts", desc: "Close-tolerance forged components with consistent grain flow and high structural integrity.", img: gearImg },
  // { cat: "INDUSTRIAL", title: "Industrial Components", desc: "Heavy-duty industrial forgings engineered for machinery, transmission and structural applications.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop" },
  // { cat: "CUSTOM", title: "Custom Forgings", desc: "Customer-specific closed die forgings built to drawings across carbon, alloy and stainless steels.", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1400&auto=format&fit=crop" },
  { cat: "MACHINED", title: "Machined Components", desc: "Fully machined forged components ready for assembly — CNC finished to tight tolerances.", img: shaftingImg },
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
                className="group relative flex flex-col bg-neutral-900/30 border border-white/10 hover:border-[#D91E26] transition-all duration-500 clip-corner overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/2] bg-neutral-950">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <div className="font-bebas text-xs tracking-[0.3em] text-white bg-[#D91E26] px-3 py-1">
                      {p.cat}
                    </div>
                  </div>

                  {/* Search Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-11 h-11 bg-[#D91E26] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Search size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Details Container */}
                <div className="flex-1 p-6 flex flex-col justify-between bg-black/50 border-t border-white/5">
                  <div>
                    <div className="font-bebas text-xs text-white/40 mb-2">PRODUCT {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display text-2xl text-white tracking-wide leading-tight mb-3 group-hover:text-[#D91E26] transition-colors">{p.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bebas tracking-widest text-[#D91E26] transition-all group-hover:gap-3">
                    INQUIRE NOW <ArrowRight size={14} />
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
