import React from 'react';
import { ProjectQualificationWidget } from './ProjectQualificationWidget';
import { Shield, Hammer, Users, ArrowDown, ChevronRight, CheckSquare } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsult?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsult }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#08090B]">
      {/* Background Architectural Video & Visual Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* HTML video element pointing to placeholder with aesthetic fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-40 scale-105 transform"
        >
          <source src="#" type="video/mp4" />
        </video>

        {/* Heavy dark gradient overlay to ensure WCAG AA contrast and pure monochrome luxury */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-[#08090B]/90 to-[#08090B]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/80" />
        <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* SPLIT LAYOUT: 7 COLS LEFT, 5 COLS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: VALUE PROP & AUTHORITY */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Latin Motto / Established Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 text-[#CCCCCC] text-[11px] font-crest tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 bg-white inline-block"></span>
              <span>VIRTUTE AD ALTISSIMA • EST. 2018</span>
            </div>

            {/* Cinematic Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight leading-[1.04]">
                Builders by Trade. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E0E0] to-[#999999]">
                  Director-Led On Site.
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#CCCCCC] max-w-2xl leading-relaxed font-normal">
              A standard of care and tight-sequencing that only in-house trades and hands-on founders can deliver. From Melbourne’s finest hospitality to complex medical & workplace fit-outs.
            </p>

            {/* Trust Points Badges */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#999999]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-white shrink-0" />
                  <span className="text-white font-semibold">Registered Builder CB-L 67337</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-white shrink-0" />
                  <span className="text-[#CCCCCC]">No Subcontractor Markup on Critical Path</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#999999]">
                <div className="flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-white shrink-0" />
                  <span className="text-[#CCCCCC]">Direct In-House Master Carpenters & Joinery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-white shrink-0" />
                  <span className="text-[#CCCCCC]">Co-Founders James & Matthew Daily on Site</span>
                </div>
              </div>
            </div>

            {/* Action buttons & anchor jumps */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#tradition"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white hover:border-white hover:bg-white/5 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>The Director Advantage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#showcase"
                className="inline-flex items-center gap-2 px-5 py-3 text-[#999999] hover:text-white text-xs font-semibold tracking-wider transition-colors"
              >
                <span>Interactive Before & After</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Melbourne Footprint Tag */}
            <div className="pt-2 text-[11px] font-mono text-[#666666]">
              37.8136° S, 144.9631° E — MELBOURNE CBD & GREATER COMMERCIAL PRECINCTS
            </div>
          </div>

          {/* RIGHT SIDE: 4-STEP PROJECT QUALIFICATION WIDGET */}
          <div className="lg:col-span-5">
            <ProjectQualificationWidget />
          </div>

        </div>
      </div>
    </section>
  );
};
