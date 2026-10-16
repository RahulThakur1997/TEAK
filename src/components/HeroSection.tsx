import React from 'react';
import { ProjectQualificationWidget } from './ProjectQualificationWidget';
import { ShieldCheck, ChevronRight, ArrowDown, Users, HardHat, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsult?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsult }) => {
  return (
    <section id="overview" className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0C10]">
      {/* Background Video - Commercial Construction Montage from Vimeo in 100% Full Vibrant Natural Color */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          poster="/vimeo-hero-poster.jpg"
          className="w-full h-full object-cover opacity-80 filter brightness-95 contrast-105"
        >
          <source src="/vimeo-hero.mp4" type="video/mp4" />
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-architectural-living-room-41551-large.mp4" type="video/mp4" />
        </video>
        {/* Subtle Edge Gradient Vignettes only - keeps video natural and vibrant while ensuring readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10] via-[#0A0C10]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-[#0A0C10]/50"></div>
        <div className="absolute inset-0 bg-architectural-grid opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* SPLIT LAYOUT: 7 COLS LEFT, 5 COLS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE: VALUE PROP & AUTHORITY */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Monospaced badge with pulsing emerald status beacon */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#13161F]/90 backdrop-blur-md border border-[#CCCCCC]/30 shadow-[0_0_20px_rgba(204,204,204,0.15)] text-[#E2E8F0] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981] animate-ping" />
              <span className="tracking-widest font-bold text-white uppercase">[ MELBOURNE COMMERCIAL & HOSPITALITY FIT-OUTS ]</span>
            </div>

            {/* Heavy Architectural Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold font-heading tracking-tighter leading-[1.03]">
                <span className="text-white block">Builders by Trade.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#999999] block">
                  Director-Led on Every Site.
                </span>
              </h1>
            </div>

            {/* Subtext Value Prop */}
            <p className="text-sm sm:text-base lg:text-lg text-[#CCCCCC] max-w-xl leading-relaxed font-normal">
              A standard of care and tight-sequencing that only in-house trades and hands-on founders can deliver. From Melbourne’s finest hospitality to complex medical & workplace fit-outs.
            </p>

            {/* 3 Key Metrics Chips with Emerald & Cobalt Accents */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#13161F]/85 backdrop-blur-md border border-white/10 hover:border-[#10B981]/50 transition-colors shadow-lg">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#10B981] mb-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Est. 2018</span>
                </div>
                <span className="text-sm font-bold text-white font-heading block">Melbourne Built</span>
                <span className="text-[11px] text-[#999999] mt-0.5 block font-mono">7+ Yrs Proven Delivery</span>
              </div>

              <div className="p-3.5 bg-[#13161F]/85 backdrop-blur-md border border-white/10 hover:border-[#3B82F6]/50 transition-colors shadow-lg">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#3B82F6] mb-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>In-House Trades</span>
                </div>
                <span className="text-sm font-bold text-white font-heading block">Core Payroll</span>
                <span className="text-[11px] text-[#999999] mt-0.5 block font-mono">0% Sub Broker Markup</span>
              </div>

              <div className="p-3.5 bg-[#13161F]/85 backdrop-blur-md border border-[#CCCCCC]/40 hover:border-white transition-colors shadow-[0_0_15px_rgba(204,204,204,0.1)]">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#E2E8F0] mb-1 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>CB-L 67337</span>
                </div>
                <span className="text-sm font-bold text-white font-heading block">VBA Registered</span>
                <span className="text-[11px] text-[#999999] mt-0.5 block font-mono">Commercial Master</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#advantage"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black hover:bg-[#CCCCCC] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(204,204,204,0.3)] border border-white"
              >
                <span>The In-House Advantage</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#transformations"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#CCCCCC]/40 hover:border-white text-[#CCCCCC] hover:text-white text-xs font-semibold tracking-wider transition-colors bg-[#13161F]/70 backdrop-blur-sm"
              >
                <span>Interactive Before & After</span>
                <ArrowDown className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Melbourne Technical Coordinate Footer */}
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#777777]">
              <span className="text-[#CCCCCC]">37°48'49"S 144°57'47"E</span>
              <span>·</span>
              <span>MELBOURNE CBD & GREATER COMMERCIAL PRECINCTS</span>
            </div>
          </div>

          {/* RIGHT SIDE: FROSTED PLATINUM INTAKE TERMINAL */}
          <div className="lg:col-span-5">
            <ProjectQualificationWidget />
          </div>

        </div>
      </div>
    </section>
  );
};
