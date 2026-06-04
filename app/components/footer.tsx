import Image from "next/image";
import Logo from "../../public/Fadis Bites__Logo-01.png";

const footerLinks = {
  Main: [
    { name: "Menu", href: "/menu" },
    { name: "Reviews", href: "/#testimonials" },
    { name: "About Us", href: "/#about" },
    { name: "Blog", href: "/#blog" },
  ],
  Categories: [
    { name: "Samosas & Pies", href: "/menu#samosas" },
    { name: "Spring Rolls", href: "/menu#spring-rolls" },
    { name: "Savoury Kebabs", href: "/menu#kebabs" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-red-600 pt-24">
      <div className="container-custom">
        
        {/* Top Segment: Links & Brand Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-8 items-start">
          
          {/* Brand & Slogan Segment (Spans 5 Columns) */}
          <div className="md:col-span-5 flex flex-col items-start">
            {/* Minimal White Logo Badge */}
            <div className="flex w-14 h-14 items-center justify-center rounded-full bg-white overflow-hidden p-2">
              <Image
                src={Logo}
                alt="Fadi's Bites logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            
            <h3 className="mt-6 font-display text-2xl text-white leading-tight max-w-[260px]">
              Baked with Love, <br />Spiced with Culture
            </h3>
            
            {/* Contact Details */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+12125550198"
                className="flex items-center gap-3 font-body text-sm text-white/80 hover:text-white transition-colors"
              >
                +1 (212) 555-0198
              </a>
              <a
                href="mailto:hello@fadisbites.com"
                className="flex items-center gap-3 font-body text-sm text-white/80 hover:text-white transition-colors"
              >
                info@fadisfusion.com
              </a>
            </div>
          </div>

          {/* Spacer Column (Spans 1 Column) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Main Links Column (Spans 2 Columns) */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="font-body text-xs font-bold uppercase tracking-wider text-white/50 mb-6">
              Main
            </span>
            <ul className="space-y-4">
              {footerLinks.Main.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-display text-lg text-white hover:text-white/80 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links Column (Spans 2 Columns) */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="font-body text-xs font-bold uppercase tracking-wider text-white/50 mb-6">
              Categories
            </span>
            <ul className="space-y-4">
              {footerLinks.Categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-display text-lg text-white hover:text-white/80 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Social Segment (Spans 2 Columns) */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="font-body text-xs font-bold uppercase tracking-wider text-white/50 mb-6">
              Follow Us
            </span>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/fadis_fusion/"
                className="flex w-10 h-10 items-center justify-center rounded-full bg-white text-red-600 hover:opacity-90 active:scale-95 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Fadis-Fusion/61580798266949/"
                className="flex w-10 h-10 items-center justify-center rounded-full bg-white text-red-600 hover:opacity-90 active:scale-95 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                className="flex w-10 h-10 items-center justify-center rounded-full bg-white text-red-600 hover:opacity-90 active:scale-95 transition-all duration-300"
                aria-label="X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Middle Segment: Massive Corporate Editorial Statement Display */}
        <div className="mt-24 md:mt-32 select-none overflow-hidden text-center">
          <h2 className="font-display text-[14vw] leading-none text-white font-bold uppercase tracking-tight whitespace-nowrap">
            Fadi&apos;s Bites
          </h2>
        </div>

  

      </div>

      {/* Bottom Segment: Metadata Legal & System Anchors */}
      <div className="mt-8 bg-white/10 py-6 border-t border-white/10">
        <div className="container-custom">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center text-xs font-body text-white/60">
            <p>2026 © Fadi&apos;s Bites</p>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}