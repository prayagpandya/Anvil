import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, ArrowUpRight, Rss, Share2, MessageSquare, Send } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-neutral-200 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-[2px] diag-stripes opacity-30" />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src={logo}
                alt="Anvil Techno Forge"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              One of the largest makers of closed die steel forgings and pipe fittings in Gujarat, delivering forged, heat treated, pre-machined or fully machined components.
            </p>
            <div className="flex items-center gap-3">
              {[Rss, Share2, MessageSquare, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-neutral-200 text-neutral-600 flex items-center justify-center hover:border-[#D91E26] hover:text-[#D91E26] transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D91E26]" /> NAVIGATION
            </h4>
            <ul className="space-y-3 text-neutral-600 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/infrastructure", label: "Infrastructure" },
                { to: "/capabilities", label: "Capabilities" },
                { to: "/products", label: "Products" },
                { to: "/quality", label: "Quality Assurance" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="flex items-center gap-2 hover:text-[#D91E26] transition-colors group">
                    <span className="w-4 h-[1px] bg-[#D91E26] group-hover:w-6 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D91E26]" /> CAPABILITIES
            </h4>
            <ul className="space-y-3 text-neutral-600 text-sm">
              {[
                "Closed Die Forging",
                "CNC Machining",
                "Heat Treatment",
                "Tooling & Die Development",
                "NDT / UT / MPI Testing",
                "Surface Treatment",
                "Custom Forging Solutions",
                "Pipe Fittings Manufacturing",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
                  <ArrowUpRight size={13} className="text-[#D91E26]" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D91E26]" /> CONTACT
            </h4>
            <ul className="space-y-4 text-neutral-600 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D91E26] mt-1 shrink-0" />
                <span>Shapar (Veraval),<br />Rajkot, Gujarat 360024</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D91E26] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919998022557" className="hover:text-[#D91E26] transition-colors">+91 99980 22557</a>
                  <a href="tel:+919725488881" className="hover:text-[#D91E26] transition-colors">+91 97254 88881</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D91E26] shrink-0" />
                <a href="mailto:anviltechnoforge@gmail.com" className="hover:text-[#D91E26] transition-colors break-all">anviltechnoforge@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="text-[#D91E26] shrink-0" />
                <a href="https://www.anviltechnoforge.co.in" className="hover:text-[#D91E26] transition-colors">www.anviltechnoforge.co.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Big logo */}
        <div className="border-t border-neutral-200 pt-8 mb-8">
          <div className="font-bebas text-[18vw] lg:text-[12vw] leading-none text-neutral-900/[0.03] tracking-[0.02em] select-none">
            ANVIL TECHNO FORGE
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 border-t border-neutral-200 pt-6">
          <p>© {new Date().getFullYear()} ANVIL TECHNO FORGE. All rights reserved.</p>
          <p className="tracking-widest">ENGINEERED IN GUJARAT • FORGED FOR THE WORLD</p>
          <p>Designed for Industrial Excellence</p>
        </div>
      </div>
    </footer>
  );
}
