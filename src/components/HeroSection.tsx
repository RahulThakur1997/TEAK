import React from 'react';
import { ProjectQualificationWidget } from './ProjectQualificationWidget';
import { ShieldCheck, ChevronRight, ArrowDown, Award, Users, HardHat } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsult?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsult }) => {
  return (
    <section id="overview" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#07080a]">
      {/* FULL-BLEED LIVE VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90 contrast-110"
        >
          <source src="https://jumpshare.com/s/qJGAR5iGURutXfn7sBvI" type="video/mp4" />
        </video>

        {/* Deep layered obsidian and charcoal gradient overlays ensuring 100% legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/90 to-[#07080a]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/80" />
        
        {/* Subtle Warm Gold Radial Glows for luxury depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* SPLIT LAYOUT: 7 COLS LEFT, 5 COLS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: EDITORIAL AUTHORITY & VALUE PROP */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill tag with glowing dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181c24]/90 border border-[#d4af37]/35 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-[#e2e8f0] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37] animate-pulse" />
              <span className="tracking-wide">DIRECTORS ON SITE • IN-HOUSE CRITICAL TRADES</span>
            </div>

            {/* Bold, Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05]">
                <span className="text-white">Builders by Trade.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-zinc-100 to-amber-400">
                  Mastery on Site.
                </span>
              </h1>
            </div>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#cbd5e1] max-w-2xl leading-relaxed font-normal">
              Melbourne’s leading hospitality, commercial, and healthcare spaces delivered with zero subcontract bureaucracy, direct founder accountability, and unmatched precision.
            </p>

            {/* Live KPI Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-[#0f1117] border border-white/10 text-white flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span>Est. 2018 Melbourne</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#0f1117] border border-[#d4af37]/40 text-[#d4af37] flex items-center gap-2 shadow-[0_0_10px_rgba(212,175,55,0.15)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-semibold text-white">CB-L 67337 Registered</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#0f1117] border border-white/10 text-white flex items-center gap-2 shadow-sm">
                <Users className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>100% Director-Led</span>
              </div>
            </div>

            {/* Action Buttons & Anchor Jumps */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#advantage"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e2c67c] to-[#c5a880] text-black font-bold text-xs uppercase tracking-wider hover:from-white hover:to-[#e2e8f0] transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)]"
              >
                <span>The In-House Advantage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#transformations"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 hover:border-[#d4af37] text-[#cbd5e1] hover:text-white text-xs font-semibold tracking-wider transition-colors"
              >
                <span>Interactive Before & After</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#d4af37]" />
              </a>
            </div>

            {/* Latin Motto & Coordinates Subtext */}
            <div className="pt-2 flex items-center gap-3 text-[11px] font-mono text-[#94a3b8]">
              <span className="font-serif-accent italic text-[#c5a880] text-sm">Virtute Ad Altissima</span>
              <span>·</span>
              <span>37°48'49"S 144°57'47"E MELBOURNE</span>
            </div>
          </div>

          {/* RIGHT COLUMN: 4-STEP TERMINAL */}
          <div className="lg:col-span-5">
            <ProjectQualificationWidget />
          </div>

        </div>
      </div>
    </section>
  );
};
