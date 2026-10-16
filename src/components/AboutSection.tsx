import React from 'react';
import { DIRECTORS } from '../data/mockData';
import { ShieldCheck, Award, Ruler, Compass, HardHat, PhoneCall } from 'lucide-react';

interface AboutSectionProps {
  onOpenDirectorContact?: (director: 'james' | 'matthew') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDirectorContact }) => {
  return (
    <section id="tradition" className="py-24 bg-[#0A0C10] border-b border-white/10 relative overflow-hidden">
      {/* Background CAD Subtle Matrix */}
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-white inline-block"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#999999] uppercase">
              THE TRADITION • BESPOKE EXCELLENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight max-w-3xl">
            Your Project. Our Personal Responsibility.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#999999] max-w-2xl font-crest">
            VIRTUTE AD ALTISSIMA — TO THE HIGHEST THROUGH INTEGRITY & VIRTUE
          </p>
        </div>

        {/* 2-COLUMN STARK GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: HIGH-CONTRAST B&W PHOTOGRAPHIC COMPOSITION */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#CCCCCC]/40 p-2 bg-[#121418] shadow-2xl">
              {/* Corner crosshairs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white" />

              <div className="relative overflow-hidden aspect-[4/5] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="TEAK Director reviewing blueprint plans on Melbourne commercial site"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 hover:scale-102 transition-transform duration-700"
                />

                {/* Subdued blueprint technical overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/85 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between text-xs font-mono text-[#CCCCCC]">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <HardHat className="w-3.5 h-3.5" />
                      ON-SITE DAILY
                    </span>
                    <span>EST. 2018</span>
                  </div>
                  <div className="text-[11px] text-[#999999] mt-1 font-mono">
                    James & Matthew Papadimitriou — Co-Directors
                  </div>
                </div>
              </div>
            </div>

            {/* Micro stats banner below image */}
            <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
              <div className="p-3 bg-[#121418] border border-white/10">
                <div className="text-[10px] text-[#888888]">BUILDER LICENCE</div>
                <div className="text-white font-bold text-sm mt-0.5">CB-L 67337</div>
              </div>
              <div className="p-3 bg-[#121418] border border-white/10">
                <div className="text-[10px] text-[#888888]">SECTOR FOCUS</div>
                <div className="text-white font-bold text-sm mt-0.5">Commercial & Bespoke</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: EDITORIAL NARRATIVE & METRICS */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none text-[#CCCCCC] space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="text-white font-medium text-lg leading-snug">
                Established in 2018 by master builder James Papadimitriou and later joined by commercial director Matthew Papadimitriou, TEAK Building Group was founded on a singular principle: <span className="text-white underline decoration-white/40 decoration-1 underline-offset-4">standardizing zero bureaucracy</span>.
              </p>
              
              <p>
                In an Australian construction landscape saturated by corporate management brokers who tender jobs only to hand them off to distant third-party subcontractors, TEAK operates with classical trade integrity. We believe that true commercial luxury is not merely specified on a drawing—it is executed in the millimeter tolerances of custom timber joints, precise steel portal alignments, and acoustic isolation that never compromises.
              </p>

              <p>
                Every client has direct, immediate access to both directors. When site conditions change, when council requests a clarification, or when an aggressive handover deadline must be achieved, James and Matthew are on the concrete slab making decisions in minutes—not through weeks of committee emails.
              </p>
            </div>

            {/* BOLD KEY STATS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 bg-[#121418] border border-white/10 hover:border-white/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  100%
                </div>
                <div className="text-xs font-bold text-[#CCCCCC] mt-1">
                  Director Managed
                </div>
                <div className="text-[10px] text-[#888888] mt-0.5">
                  James & Matthew on site
                </div>
              </div>

              <div className="p-4 bg-[#121418] border border-white/10 hover:border-white/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  In-House
                </div>
                <div className="text-xs font-bold text-[#CCCCCC] mt-1">
                  Trades Division
                </div>
                <div className="text-[10px] text-[#888888] mt-0.5">
                  Direct payroll master crew
                </div>
              </div>

              <div className="p-4 bg-[#121418] border border-white/10 hover:border-white/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  Est. 2018
                </div>
                <div className="text-xs font-bold text-[#CCCCCC] mt-1">
                  Melbourne Built
                </div>
                <div className="text-[10px] text-[#888888] mt-0.5">
                  CBD & Inner Metro
                </div>
              </div>

              <div className="p-4 bg-[#121418] border border-white/10 hover:border-white/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  0 Days
                </div>
                <div className="text-xs font-bold text-[#CCCCCC] mt-1">
                  Critical Delays
                </div>
                <div className="text-[10px] text-[#888888] mt-0.5">
                  Tight sequence control
                </div>
              </div>
            </div>

            {/* DIRECTORS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {DIRECTORS.map((dir, idx) => (
                <div
                  key={dir.name}
                  className="p-5 bg-[#14171E] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase">
                        CO-DIRECTOR 0{idx + 1}
                      </span>
                      <span className="w-1.5 h-1.5 bg-white"></span>
                    </div>
                    <h4 className="text-base font-bold text-white font-heading">
                      {dir.name}
                    </h4>
                    <div className="text-xs text-[#CCCCCC] mt-0.5 font-medium">
                      {dir.role}
                    </div>
                    <p className="text-xs text-[#999999] mt-3 italic leading-relaxed">
                      {dir.quote}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#888888]">{dir.phone}</span>
                    <a
                      href={`tel:${dir.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-bold text-white hover:underline flex items-center gap-1"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>Direct Line</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
