import React from 'react';
import { Phone, ArrowUpRight, ShieldCheck, Mail, Calendar } from 'lucide-react';

interface ClosingCTAProps {
  onOpenConsultModal?: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenConsultModal }) => {
  return (
    <section className="py-28 bg-[#08090B] relative overflow-hidden border-b border-white/10">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Heraldic motto tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 text-[#CCCCCC] text-[11px] font-crest tracking-[0.2em] uppercase mb-6">
          <span>VIRTUTE AD ALTISSIMA</span>
          <span className="w-1 h-1 bg-white inline-block"></span>
          <span>MELBOURNE COMMERCIAL BUILDERS</span>
        </div>

        {/* Huge Typographic Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight max-w-5xl mx-auto leading-[1.08]">
          The space you want, on the timeline we promised.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#CCCCCC] max-w-2xl mx-auto font-normal leading-relaxed">
          Skip the layers of management brokers. Partner with Melbourne’s hands-on building directors who personally guarantee constructability, cost certainty, and handover velocity.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#qualification-widget"
            className="w-full sm:w-auto py-4 px-8 bg-white text-black font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#CCCCCC] transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Schedule Site Visit & Constructability Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="tel:0390008325"
            className="w-full sm:w-auto py-4 px-8 border border-white/30 text-white hover:border-white hover:bg-white/5 font-bold text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Talk to Directors James & Matthew Papadimitriou</span>
          </a>
        </div>

        {/* Direct Director Hotlines Grid */}
        <div className="mt-14 max-w-3xl mx-auto pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="p-4 bg-[#121418] border border-white/10">
            <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block">
              OPERATIONS & SITE EXECUTION
            </span>
            <div className="text-base font-bold text-white font-heading mt-0.5">
              James Papadimitriou
            </div>
            <div className="text-xs text-[#999999] mt-1">
              Co-Director & Master Builder
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono">
              <a href="tel:0390008325" className="text-white hover:underline">
                03 9000 8325
              </a>
              <a href="mailto:james@teakbuildinggroup.com.au" className="text-[#888888] hover:text-white">
                Email James ↗
              </a>
            </div>
          </div>

          <div className="p-4 bg-[#121418] border border-white/10">
            <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block">
              CONTRACTS, PROGRAM & PRE-CONSTRUCTION
            </span>
            <div className="text-base font-bold text-white font-heading mt-0.5">
              Matthew Papadimitriou
            </div>
            <div className="text-xs text-[#999999] mt-1">
              Co-Director & Commercial Contracts
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono">
              <a href="tel:0390008326" className="text-white hover:underline">
                03 9000 8326
              </a>
              <a href="mailto:matthew@teakbuildinggroup.com.au" className="text-[#888888] hover:text-white">
                Email Matthew ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs font-mono text-[#666666] flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
          <span>VICTORIAN COMMERCIAL BUILDER CB-L 67337 · $20M PUBLIC LIABILITY INSURED</span>
        </div>

      </div>
    </section>
  );
};
