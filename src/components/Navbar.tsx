"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";

const logo = "/assets/logo.png";

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

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block border-b border-neutral-200 bg-neutral-50/80 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6 text-neutral-600">
            <span className="flex items-center gap-2"><Phone size={13} className="text-[#D91E26]" /> +91 99980 22557 / +91 77375 77277</span>
            <span className="flex items-center gap-2"><Mail size={13} className="text-[#D91E26]" /> anviltechnoforge@gmail.com</span>
            <span className="flex items-center gap-2">📍 Shapar (Veraval), Rajkot, Gujarat 360024</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-600">
            <span>ISO Certified Manufacturing</span>
            <span className="w-px h-3 bg-neutral-200" />
            <span className="text-[#D91E26] font-semibold tracking-widest">CLOSED DIE FORGING SPECIALISTS</span>
            <span className="w-px h-3 bg-neutral-200" />
            <div className="flex items-center gap-2.5">
              <a href="https://www.facebook.com/people/Anvil-Techno-Froge/61550111096502/" target="_blank" rel="noreferrer" className="hover:text-[#D91E26] transition-colors"><Facebook size={13} /></a>
              <a href="https://www.instagram.com/anvil_techno_forge" target="_blank" rel="noreferrer" className="hover:text-[#D91E26] transition-colors"><Instagram size={13} /></a>
            </div>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-lg border-b border-neutral-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.05)]" : "bg-white border-b border-neutral-100"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Anvil Techno Forge"
              className="h-20 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => {
              const isActive = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  className={`nav-link px-4 py-2 text-sm font-medium tracking-wide transition-colors ${isActive ? "text-[#D91E26]" : "text-neutral-700 hover:text-neutral-900"
                    }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Contact Us <ChevronRight size={16} />
            </Link>
          </div>

          <button className="lg:hidden text-neutral-800 p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-t border-neutral-200 shadow-lg z-40"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((n) => {
                const isActive = pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    href={n.to}
                    className={`flex items-center justify-between px-6 py-4 border-b border-neutral-100 ${isActive ? "text-[#D91E26]" : "text-neutral-800 hover:text-neutral-900"
                      }`}
                  >
                    <span className="font-display tracking-widest text-base">{n.label.toUpperCase()}</span>
                    <ChevronRight size={16} />
                  </Link>
                );
              })}
              <div className="px-6 py-4 flex flex-col gap-2 text-sm text-neutral-600">
                <span>📞 +91 99980 22557</span>
                <span>✉️ anviltechnoforge@gmail.com</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
