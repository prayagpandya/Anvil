import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

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
            <span className="flex items-center gap-2"><Phone size={13} className="text-[#D91E26]" /> +91 99980 22557 / +91 97254 88881</span>
            <span className="flex items-center gap-2"><Mail size={13} className="text-[#D91E26]" /> anviltechnoforge@gmail.com</span>
            <span className="flex items-center gap-2">📍 Shapar (Veraval), Rajkot, Gujarat 360024</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-600">
            <span>ISO Certified Manufacturing</span>
            <span className="w-px h-3 bg-neutral-200" />
            <span className="text-[#D91E26] font-semibold tracking-widest">CLOSED DIE FORGING SPECIALISTS</span>
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
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Anvil Techno Forge"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            // style={{ filter: "invert(1) hue-rotate(180deg)" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `nav-link px-4 py-2 text-sm font-medium tracking-wide transition-colors ${isActive ? "text-[#D91E26]" : "text-neutral-700 hover:text-neutral-900"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get Quote <ChevronRight size={16} />
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
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-6 py-4 border-b border-neutral-100 ${isActive ? "text-[#D91E26]" : "text-neutral-800 hover:text-neutral-900"
                    }`
                  }
                >
                  <span className="font-display tracking-widest text-base">{n.label.toUpperCase()}</span>
                  <ChevronRight size={16} />
                </NavLink>
              ))}
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
