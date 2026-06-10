"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, X, Send, CheckCircle2 } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";

const flangesImg = "/assets/client/flanges.PNG";
const gearImg = "/assets/client/autopartsgear.PNG";
const shaftingImg = "/assets/client/autopartsshafting.PNG";
const pipefittingImg = "/assets/client/pipefittings.PNG";

const products = [
  { cat: "FLANGES", title: "Forged Steel Flanges", desc: "Slip-on, weld neck, blind, socket weld and threaded flanges across pressure classes and material specifications.", img: flangesImg },
  { cat: "PIPE FITTINGS", title: "Pipe Fittings", desc: "Elbows, tees, reducers, couplings and forged pipe fittings for oil, gas and industrial applications.", img: pipefittingImg },
  { cat: "PRECISION FORGED", title: "Precision Forged Parts", desc: "Close-tolerance forged components with consistent grain flow and high structural integrity.", img: gearImg },
  { cat: "MACHINED", title: "Machined Components", desc: "Fully machined forged components ready for assembly — CNC finished to tight tolerances.", img: shaftingImg },
];

const materials = ["Carbon Steel", "Alloy Steel", "Stainless Steel"];
const weightRange = ["Up to 21 KG regular", "Up to 30 KG capacity"];

export default function Products() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [inquiryProduct, setInquiryProduct] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", product: "", message: "" });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", company: "", product: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
        setInquiryProduct(null);
      }, 4000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActiveImage(p.img)}
                      className="w-12 h-12 bg-[#D91E26] hover:bg-[#ff252d] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg cursor-pointer"
                      title="Zoom Image"
                    >
                      <Search size={20} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Details Container */}
                <div className="flex-1 p-6 flex flex-col justify-between bg-black/50 border-t border-white/5">
                  <div>
                    <div className="font-bebas text-xs text-white/40 mb-2">PRODUCT {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display text-2xl text-white tracking-wide leading-tight mb-3 group-hover:text-[#D91E26] transition-colors">{p.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">{p.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setInquiryProduct(p.title);
                      setForm(f => ({ ...f, product: p.title }));
                    }}
                    className="btn-primary w-full justify-center text-sm py-3.5 mt-4 flex items-center gap-2 cursor-pointer font-bebas tracking-widest"
                  >
                    INQUIRE NOW <ArrowRight size={16} />
                  </button>
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
            <Link href="/contact" className="btn-primary">Submit Your Drawing <ArrowRight size={14} /></Link>
            <Link href="/capabilities" className="btn-outline">See Capabilities</Link>
          </div>
        </div>
      </section>

      {/* Magnified Image Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={activeImage}
              alt="Magnified view"
              className="max-w-[90vw] max-h-[85vh] object-contain border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Inquiry Form Modal */}
      <AnimatePresence>
        {inquiryProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-black/85">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative w-full max-w-xl bg-neutral-950 border border-white/10 p-8 lg:p-10 text-left my-8"
              >
                <button
                  onClick={() => setInquiryProduct(null)}
                  className="absolute top-6 right-6 text-white/60 hover:text-white cursor-pointer"
                >
                  <X size={24} />
                </button>

                <div className="kicker mb-3">PRODUCT INQUIRY</div>
                <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-2">Request Quote</h2>
                <p className="text-neutral-400 mb-8">Share your requirements and we will send a customized quotation.</p>

                {error && (
                  <div className="p-4 mb-6 bg-red-950/40 border border-red-800 text-red-200 text-sm font-medium">
                    {error}
                  </div>
                )}

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-10 border-2 border-[#D91E26] text-center">
                    <CheckCircle2 size={54} className="text-[#D91E26] mx-auto mb-4" />
                    <div className="font-display text-2xl text-white tracking-wide mb-2">Inquiry Received</div>
                    <p className="text-neutral-400">Thank you. Our team will contact you within one business day.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">FULL NAME *</label>
                        <input
                          required
                          disabled={loading}
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">COMPANY</label>
                        <input
                          disabled={loading}
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">EMAIL *</label>
                        <input
                          required
                          disabled={loading}
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">PHONE *</label>
                        <input
                          required
                          disabled={loading}
                          type="text"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">PRODUCT OF INTEREST *</label>
                      <select
                        required
                        disabled={loading}
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white appearance-none disabled:opacity-50"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", backgroundSize: "16px" }}
                      >
                        <option value="">Select a Product</option>
                        {products.map(p => (
                          <option key={p.title} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">REQUIREMENT / MESSAGE *</label>
                      <textarea
                        required
                        disabled={loading}
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white resize-none disabled:opacity-50"
                        placeholder="Describe specifications, quantity, material grade..."
                      />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? "Submitting..." : "Submit Inquiry"} <Send size={14} />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
