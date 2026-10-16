import React from 'react';
import { TeakLogo } from './TeakLogo';
import { ShieldCheck, MapPin, Phone, Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/15 text-[#999999] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* COL 1: BRAND & CREDENTIALS (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <TeakLogo variant="full" />
            
            <p className="text-xs text-[#888888] leading-relaxed max-w-sm pt-2">
              Melbourne’s premier commercial and bespoke construction firm. Director-led on site, precision in-house carpentry, and high-performance commercial, hospitality, medical, and workplace fit-outs.
            </p>

            <div className="pt-2 space-y-1.5 text-xs font-mono text-[#CCCCCC]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span className="text-white font-bold">Registered Builder CB-L 67337</span>
              </div>
              <div className="text-[11px] text-[#777777]">
                Master Builders Association of Victoria (MBAV)
              </div>
              <div className="text-[11px] text-[#777777]">
                WorkSafe Victoria OHS Certified
              </div>
            </div>
          </div>

          {/* COL 2: SECTORS NAVIGATION (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-heading">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Hospitality, Bars & Dining
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Corporate Offices & Headquarters
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Medical & Specialist Clinics
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Retail Flagships & Showrooms
                </a>
              </li>
              <li>
                <a href="#trades" className="hover:text-white transition-colors">
                  In-House Carpentry & Joinery
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Before & After Transformations
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: MELBOURNE OFFICE & CONTACTS (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-heading">
              Melbourne Office
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>
                  Richmond / Melbourne CBD<br />
                  Victoria, Australia 3000
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <a href="tel:0390008325" className="hover:text-white font-mono">
                  03 9000 TEAK (03 9000 8325)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <a href="mailto:directors@teakbuildinggroup.com.au" className="hover:text-white font-mono">
                  directors@teakbuildinggroup.com.au
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#666666] uppercase block mb-1">
                HOURS OF SITE OPERATION:
              </span>
              <span className="text-xs text-[#888888]">
                Monday – Saturday: 06:30 – 17:00
              </span>
            </div>
          </div>

          {/* COL 4: SOCIAL & DIRECT ACTION (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-heading">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                aria-label="TEAK Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                aria-label="TEAK LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#CCCCCC] hover:text-white font-mono border border-white/10 px-3 py-1.5"
              >
                <ArrowUp className="w-3 h-3" />
                <span>TOP OF SITE</span>
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM MOTTO & LEGAL */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-center md:text-left">
            <span>© {new Date().getFullYear()} TEAK Building Group Pty Ltd. All rights reserved. ABN 92 628 419 283.</span>
          </div>

          {/* HERALDIC MOTTO */}
          <div className="font-crest text-xs tracking-[0.3em] uppercase text-white font-bold border-b border-white/20 pb-0.5">
            VIRTUTE AD ALTISSIMA
          </div>

          <div className="flex items-center gap-4 text-[#777777]">
            <span>Privacy</span>
            <span>·</span>
            <span>Terms of Engagement</span>
            <span>·</span>
            <span>Building Practitioner Board</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
