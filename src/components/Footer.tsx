import React from 'react';
import { TeakLogo } from './TeakLogo';
import { ShieldCheck, MapPin, Phone, Mail, Instagram, Linkedin, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-[#94a3b8] pt-16 pb-12 relative overflow-hidden">
      {/* Discreet Latin Motto Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.03] font-serif-accent font-bold text-7xl sm:text-9xl whitespace-nowrap text-white">
        VIRTUTE AD ALTISSIMA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* COL 1: BRAND & CREDENTIALS (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <TeakLogo variant="full" />
            
            <p className="text-xs text-[#cbd5e1] leading-relaxed max-w-sm pt-2">
              Melbourne’s premier commercial, hospitality, and corporate fit-out builder. In-house master trades, zero subcontract bureaucracy, and hands-on founder delivery on site.
            </p>

            <div className="pt-2 space-y-1.5 text-xs font-mono text-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-white font-bold">Victorian Registered Builder CB-L 67337</span>
              </div>
              <div className="text-[11px] text-[#94a3b8]">
                Master Builders Association of Victoria (MBAV Member)
              </div>
              <div className="text-[11px] text-[#94a3b8]">
                Victorian Building Authority (VBA Licensee)
              </div>
            </div>
          </div>

          {/* COL 2: SECTORS NAVIGATION (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] font-heading">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Hospitality, Cafés & Venues
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Corporate Offices & Headquarters
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Medical, Dental & Specialist Suites
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Luxury Retail & Showrooms
                </a>
              </li>
              <li>
                <a href="#advantage" className="hover:text-white transition-colors">
                  In-House Carpentry & Plaster Crew
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-white transition-colors">
                  Before & After Transformations
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: MELBOURNE OFFICE & CONTACTS (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] font-heading">
              Melbourne Office
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  Richmond / Melbourne CBD<br />
                  Victoria, Australia 3000
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="tel:0390008325" className="hover:text-white font-mono">
                  03 9000 TEAK (03 9000 8325)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="mailto:directors@teakbuildinggroup.com.au" className="hover:text-white font-mono">
                  directors@teakbuildinggroup.com.au
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#94a3b8] uppercase block mb-1">
                SITE OPERATING HOURS:
              </span>
              <span className="text-xs text-[#cbd5e1]">
                Monday – Saturday: 06:30 – 17:00
              </span>
            </div>
          </div>

          {/* COL 4: CONNECT & ACTION (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] font-heading">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-white hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="TEAK Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-white hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="TEAK LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#cbd5e1] hover:text-white font-mono border border-white/10 hover:border-[#d4af37] px-3 py-1.5 rounded-lg transition-colors"
              >
                <ArrowUp className="w-3 h-3 text-[#d4af37]" />
                <span>TOP OF SITE</span>
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM MOTTO & LEGAL */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-center md:text-left">
            <span>© {new Date().getFullYear()} TEAK Building Group Pty Ltd. ABN 92 628 419 283.</span>
          </div>

          {/* HERALDIC MOTTO */}
          <div className="font-serif-accent text-sm tracking-[0.25em] uppercase text-[#d4af37] font-bold border-b border-[#d4af37]/30 pb-0.5">
            VIRTUTE AD ALTISSIMA
          </div>

          <div className="flex items-center gap-4 text-[#94a3b8]">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Engagement</span>
            <span>·</span>
            <span>CB-L 67337</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
