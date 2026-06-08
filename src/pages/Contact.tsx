import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Send, MessageCircle, CheckCircle2, Clock } from "lucide-react";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" }); }, 4000);
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
          {/* Form */}
          <div className="p-8 lg:p-10 bg-gradient-to-br from-neutral-900 to-black border border-white/10">
            <div className="kicker mb-3">INQUIRY FORM</div>
            <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-2">Request a Quote</h2>
            <p className="text-neutral-400 mb-8">Share your requirements and our engineering team will respond within one business day.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-10 border-2 border-[#D91E26] text-center">
                <CheckCircle2 size={54} className="text-[#D91E26] mx-auto mb-4" />
                <div className="font-display text-2xl text-white tracking-wide mb-2">Inquiry Received</div>
                <p className="text-neutral-400">Thank you. Our team will contact you within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  <Field label="Phone *" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
                </div>
                <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
                <div>
                  <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">REQUIREMENT / MESSAGE *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white resize-none"
                    placeholder="Describe the components, material, quantity, specifications..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Inquiry <Send size={14} />
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
              <a href="tel:+919725488881" className="p-6 bg-neutral-900 border border-white/5 hover:border-[#D91E26] transition-all group block">
                <Phone size={22} className="text-[#D91E26] mb-3" />
                <div className="font-bebas text-xs tracking-widest text-neutral-500 mb-1">ALTERNATE</div>
                <div className="font-display text-lg text-white tracking-wide group-hover:text-[#D91E26] transition-colors">+91 97254 88881</div>
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
                <MessageCircle size={16} /> WHATSAPP
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

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-bebas tracking-widest text-neutral-400 mb-2">{label}</label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/60 border border-white/10 focus:border-[#D91E26] outline-none p-4 text-sm text-white"
      />
    </div>
  );
}
