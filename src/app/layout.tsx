import type { Metadata } from "next";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "ANVIL TECHNO FORGE | Closed Die Steel Forgings & Pipe Fittings Manufacturer Gujarat",
  description: "ANVIL TECHNO FORGE - Leading manufacturer of closed die steel forgings and pipe fittings in Shapar (Veraval), Rajkot, Gujarat. 350 MT monthly production capacity. Carbon, alloy, and stainless steel drop forging specialists.",
  keywords: [
    "closed die forging Gujarat",
    "steel forging Rajkot",
    "drop forging manufacturer India",
    "forging components manufacturer",
    "carbon steel forging",
    "alloy steel forging",
    "stainless steel forging",
    "forged components manufacturer",
    "pipe fittings",
    "pipe flanges"
  ],
  openGraph: {
    type: "website",
    title: "ANVIL TECHNO FORGE | Closed Die Steel Forgings & Pipe Fittings",
    description: "One of the largest makers of closed die steel forgings and pipe fittings in Gujarat. 350 MT monthly production, 25+ years machine shop experience.",
    url: "https://www.anviltechnoforge.co.in",
    siteName: "ANVIL TECHNO FORGE",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANVIL TECHNO FORGE - Steel Forging Excellence",
    description: "Closed die steel forgings & pipe fittings manufacturer in Rajkot, Gujarat.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "Manufacturer", "LocalBusiness"],
              "name": "ANVIL TECHNO FORGE",
              "url": "https://www.anviltechnoforge.co.in",
              "telephone": "+91 99980 22557",
              "email": "anviltechnoforge@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Shapar (Veraval), Rajkot",
                "addressRegion": "Gujarat",
                "postalCode": "360024",
                "addressCountry": "IN"
              },
              "description": "Closed die steel forgings and pipe fittings manufacturer with 350 MT monthly production capacity.",
              "areaServed": "Global",
              "makes": ["Closed Die Forgings", "Pipe Fittings", "Carbon Steel Forgings", "Alloy Steel Forgings", "Stainless Steel Forgings"]
            }),
          }}
        />
      </head>
      <body>
        <div className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5]">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />

          {/* Floating WhatsApp */}
          <a
            href="https://wa.me/919998022557"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={26} className="text-white" />
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
          </a>
        </div>
      </body>
    </html>
  );
}
