import React from 'react';
import { ProjectQualificationWidget } from './ProjectQualificationWidget';
import { ShieldCheck, ChevronRight, ArrowDown, Users, HardHat, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsult?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsult }) => {
  return (
    <section id="overview" className="relative pt-16 sm:pt-18 lg:pt-20 pb-4 sm:pb-6 min-h-[90vh] lg:min-h-[86vh] flex items-center justify-center overflow-hidden bg-[#090A0C]">
      {/* Background Video Markup as requested */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          poster="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover opacity-50 filter contrast-125 grayscale"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="https://cdn.jumpshare.com/preview/ul7Gxzt1WJbWYc1lC_s-Vwmb3lc2dD_cemUCbzl3pRkHXtX1YDvtlKrIe5mN0k7CmonMEH8arT25r6l6Y7BTDClQ1aySFEj8MvfMe-Fv-5KXUyHxfq6tk4n0gA3SReLgkXTBrfV985gZZB6_9vmuXm6yjbN-I2pg_cnoHs_AmgI-jtLDez1CmKkPH.mp4" type="video/mp4" />
          <source src="https://jumpshare.com/s/qJGAR5iGURutXfn7sBvI" type="video/mp4" />
        </video>
        {/* Ambient Vignette & Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-[#090A0C]/60"></div>
        <div className="absolute inset-0 bg-architectural-grid opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* SPLIT LAYOUT: 7 COLS LEFT, 5 COLS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
          
          {/* LEFT SIDE: VALUE PROP & AUTHORITY (ELEVATED HIGHER) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
            
            {/* Monospaced badge with pulsing silver LED beacon */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#111317] border border-[#CCCCCC]/30 shadow-[0_0_15px_rgba(204,204,204,0.15)] text-[#E2E8F0] text-[10px] sm:text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-ping" />
              <span className="tracking-widest font-bold">[ REG. BUILDER CB-L 67337 • MELBOURNE ]</span>
            </div>

            {/* Heavy Industrial Title (Tightened) */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-heading tracking-tighter leading-[1.02]">
                <span className="text-white block">BUILDERS BY TRADE.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCCCCC] to-[#777777] block">
                  DIRECTOR-LED ON SITE.
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#999999] max-w-xl leading-relaxed font-normal">
              No layers of site bureaucracy. We deploy our own in-house carpentry, framing, and plastering crews with founder-level accountability.
            </p>

            {/* Live KPI Badges in Pure Chrome */}
            <div className="pt-0.5 flex flex-wrap items-center gap-2 text-xs font-mono">
              <div className="px-2.5 py-0.5 bg-[#111317] border border-white/10 text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#CCCCCC]" />
                <span>Est. 2018 Melb</span>
              </div>
              <div className="px-2.5 py-0.5 bg-[#111317] border border-[#CCCCCC]/40 text-[#CCCCCC] flex items-center gap-1.5 shadow-[0_0_10px_rgba(204,204,204,0.15)]">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold text-white">CB-L 67337 Registered</span>
              </div>
              <div className="px-2.5 py-0.5 bg-[#111317] border border-white/10 text-white flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#999999]" />
                <span>100% Director-Led</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1.5 flex flex-wrap items-center gap-3">
              <a
                href="#advantage"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-[#CCCCCC] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(204,204,204,0.25)] border border-white"
              >
                <span>The In-House Advantage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#transformations"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#CCCCCC]/30 hover:border-white text-[#CCCCCC] hover:text-white text-xs font-semibold tracking-wider transition-colors"
              >
                <span>Before & After Slider</span>
                <ArrowDown className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            {/* Melbourne Technical Coordinate Footer */}
            <div className="pt-0.5 flex items-center gap-2 text-[10px] font-mono text-[#777777]">
              <span>37°48'49"S 144°57'47"E</span>
              <span>·</span>
              <span>MELBOURNE CBD & GREATER COMMERCIAL PRECINCTS</span>
            </div>
          </div>

          {/* RIGHT SIDE: FROSTED PLATINUM INTAKE TERMINAL (ELEVATED) */}
          <div className="lg:col-span-5">
            <ProjectQualificationWidget />
          </div>

        </div>
      </div>
    </section>
  );
};
