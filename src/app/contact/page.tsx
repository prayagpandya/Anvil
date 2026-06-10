"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2, Clock } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { FaWhatsapp } from "react-icons/fa";

const Facebook = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const productsList = [
  "Forged Steel Flanges",
  "Pipe Fittings",
  "Precision Forged Parts",
  "Machined Components",
  "General / Custom Forging Inquiry"
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", product: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
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
      }, 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBanner
        kicker="GET IN TOUCH"
        title="Contact"
        subtitle="Request a quote, discuss a custom forging, or schedule a visit to our Shapar (Veraval) plant."
      />

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Inquiry Form */}
          <div className="p-8 lg:p-10 bg-gradient-to-br from-neutral-900 to-black border border-white/10">
            <div className="kicker mb-3">INQUIRY FORM</div>
            <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-2">Request a Quote</h2>
            <p className="text-neutral-400 mb-8">Share your requirements and our engineering team will respond within one business day.</p>

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
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    {productsList.map(p => (
                      <option key={p} value={p}>{p}</option>
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
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="p-8 lg:p-10 bg-[#D91E26] relative overflow-hidden">
              <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 30px)", opacity: 0.08 }} />
              <div className="relative">
                <div className="font-bebas text-xs tracking-[0.3em] text-black/70 mb-2">HEADQUARTERS & PLANT</div>
                <h3 className="font-display text-3xl text-white tracking-wide mb-6">Shapar (Veraval)</h3>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1" />
                    <div>
                      <div className="font-semibold">ANVIL TECHNO FORGE</div>
                      <div className="text-white/80 text-sm">Shapar (Veraval), Rajkot,<br />Gujarat 360024, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <a href="tel:+919998022557" className="p-6 bg-neutral-900 border border-white/5 hover:border-[#D91E26] transition-all group block">
                <Phone size={22} className="text-[#D91E26] mb-3" />
                <div className="font-bebas text-xs tracking-widest text-neutral-500 mb-1">PHONE</div>
                <div className="font-display text-lg text-white tracking-wide group-hover:text-[#D91E26] transition-colors">+91 99980 22557</div>
              </a>
              <a href="tel:+917737577277" className="p-6 bg-neutral-900 border border-white/5 hover:border-[#D91E26] transition-all group block">
                <Phone size={22} className="text-[#D91E26] mb-3" />
                <div className="font-bebas text-xs tracking-widest text-neutral-500 mb-1">ALTERNATE</div>
                <div className="font-display text-lg text-white tracking-wide group-hover:text-[#D91E26] transition-colors">+91 77375 77277</div>
              </a>
              <a href="mailto:anviltechnoforge@gmail.com" className="p-6 bg-neutral-900 border border-white/5 hover:border-[#D91E26] transition-all group block">
                <Mail size={22} className="text-[#D91E26] mb-3" />
                <div className="font-bebas text-xs tracking-widest text-neutral-500 mb-1">EMAIL</div>
                <div className="font-display text-base text-white group-hover:text-[#D91E26] transition-colors break-all">anviltechnoforge@gmail.com</div>
              </a>
              <a href="https://www.anviltechnoforge.co.in" className="p-6 bg-neutral-900 border border-white/5 hover:border-[#D91E26] transition-all group block">
                <Globe size={22} className="text-[#D91E26] mb-3" />
                <div className="font-bebas text-xs tracking-widest text-neutral-500 mb-1">WEBSITE</div>
                <div className="font-display text-base text-white group-hover:text-[#D91E26] transition-colors">www.anviltechnoforge.co.in</div>
              </a>
              <a href="https://www.facebook.com/people/Anvil-Techno-Froge/61550111096502/" target="_blank" rel="noreferrer" className="p-6 bg-neutral-900 border border-white/5 hover:border-[#D91E26] transition-all group block">
                <Facebook size={22} className="text-[#D91E26] mb-3" />
                <div className="font-bebas text-xs tracking-widest text-neutral-500 mb-1">FACEBOOK</div>
                <div className="font-display text-base text-white group-hover:text-[#D91E26] transition-colors">Anvil Techno Forge</div>
              </a>
              <a href="https://www.instagram.com/anvil_techno_forge" target="_blank" rel="noreferrer" className="p-6 bg-neutral-900 border border-white/5 hover:border-[#D91E26] transition-all group block">
                <Instagram size={22} className="text-[#D91E26] mb-3" />
                <div className="font-bebas text-xs tracking-widest text-neutral-500 mb-1">INSTAGRAM</div>
                <div className="font-display text-base text-white group-hover:text-[#D91E26] transition-colors">@anvil_techno_forge</div>
              </a>
            </div>

            <div className="p-6 bg-neutral-900 border border-white/5 flex items-center gap-4">
              <Clock size={22} className="text-[#D91E26]" />
              <div>
                <div className="font-bebas text-xs tracking-widest text-neutral-500">WORKING HOURS</div>
                <div className="text-white text-sm">Mon – Sat: 9:00 AM – 7:00 PM IST</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/919998022557"
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-display tracking-widest text-sm hover:bg-[#1fb855] transition-all"
              >
                <FaWhatsapp size={16} /> WHATSAPP
              </a>
              <a
                href="tel:+919998022557"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[#D91E26] text-white font-display tracking-widest text-sm hover:bg-[#ff252d] transition-all"
              >
                <Phone size={16} /> CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[450px] bg-neutral-900 overflow-hidden">
        <iframe
          title="Anvil Techno Forge Location"
          src="https://www.google.com/maps?q=Shapar+Veraval+Rajkot+Gujarat+360024&output=embed"
          className="w-full h-full"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute top-6 left-6 p-6 bg-black/90 border border-[#D91E26] max-w-sm">
          <MapPin size={22} className="text-[#D91E26] mb-2" />
          <div className="font-bebas text-xs tracking-widest text-[#D91E26]">PLANT LOCATION</div>
          <div className="font-display text-xl text-white tracking-wide mt-1">Shapar (Veraval), Rajkot</div>
          <div className="text-neutral-400 text-sm mt-1">Gujarat 360024 — 17 km from Rajkot</div>
        </div>
      </section>
    </div>
  );
}
