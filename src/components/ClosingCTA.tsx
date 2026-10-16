import React from 'react';
import { Phone, UploadCloud, ShieldCheck, Mail, PhoneCall } from 'lucide-react';

interface ClosingCTAProps {
  onOpenConsultModal?: () => void;
  onOpenTenderModal?: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ 
  onOpenConsultModal,
  onOpenTenderModal 
}) => {
  return (
    <section className="py-28 bg-[#090A0C] relative overflow-hidden border-b border-white/10">
      {/* RADIANT SILVER AMBIENT SPOTLIGHT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#CCCCCC]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Monospaced badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#111317] border border-[#CCCCCC]/40 text-[#CCCCCC] text-xs font-mono mb-6 shadow-[0_0_15px_rgba(204,204,204,0.15)]">
          <span className="w-1.5 h-1.5 bg-white inline-block"></span>
          <span className="tracking-widest uppercase font-bold">[ EXECUTIVE ENGAGEMENT ]</span>
          <span className="w-1 h-1 bg-[#666666]" />
          <span>DIRECTOR COMMITMENT</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-heading tracking-tighter max-w-5xl mx-auto leading-[1.05]">
          Ready to Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCCCCC] to-[#777777]">
            Without the Bureaucracy?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#999999] max-w-2xl mx-auto font-normal leading-relaxed">
          Skip the layers of management brokers. Partner with Melbourne’s hands-on building directors who personally guarantee constructability, cost certainty, and handover velocity.
        </p>

        {/* DIRECT CONTACT BUTTONS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:0390008325"
            className="py-4 px-6 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC] transition-all shadow-[0_0_20px_rgba(204,204,204,0.3)] border border-white flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Director James</span>
          </a>

          <a
            href="tel:0390008326"
            className="py-4 px-6 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC] transition-all shadow-[0_0_20px_rgba(204,204,204,0.3)] border border-white flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Director Matthew</span>
          </a>

          <button
            type="button"
            onClick={onOpenTenderModal}
            className="py-4 px-7 border border-[#CCCCCC]/40 bg-[#111317] text-[#E2E8F0] hover:text-white hover:border-white hover:bg-[#181B20] font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
          >
            <UploadCloud className="w-4 h-4 text-white" />
            <span>Upload Tender Documents ↗</span>
          </button>
        </div>

        {/* Direct Director Hotlines Grid */}
        <div className="mt-14 max-w-3xl mx-auto pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="p-5 bg-[#111317] border border-white/10 hover:border-[#CCCCCC]/40 transition-colors shadow-lg">
            <span className="text-[10px] font-mono tracking-widest text-[#CCCCCC] uppercase block font-semibold">
              OPERATIONS & IN-HOUSE MASTER TRADES
            </span>
            <div className="text-lg font-bold text-white font-heading mt-1">
              James Papadimitriou
            </div>
            <div className="text-xs text-[#999999] mt-0.5">
              Co-Director & Master Builder
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <a href="tel:0390008325" className="text-white hover:underline flex items-center gap-1 font-bold">
                <Phone className="w-3 h-3 text-[#CCCCCC]" />
                <span>03 9000 8325</span>
              </a>
              <a href="mailto:james@teakbuildinggroup.com.au" className="text-[#999999] hover:text-white">
                Email James ↗
              </a>
            </div>
          </div>

          <div className="p-5 bg-[#111317] border border-white/10 hover:border-[#CCCCCC]/40 transition-colors shadow-lg">
            <span className="text-[10px] font-mono tracking-widest text-[#CCCCCC] uppercase block font-semibold">
              CONTRACTS, PROGRAM & PRE-CONSTRUCTION
            </span>
            <div className="text-lg font-bold text-white font-heading mt-1">
              Matthew Papadimitriou
            </div>
            <div className="text-xs text-[#999999] mt-0.5">
              Co-Director & Commercial Contracts
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <a href="tel:0390008326" className="text-white hover:underline flex items-center gap-1 font-bold">
                <Phone className="w-3 h-3 text-[#CCCCCC]" />
                <span>03 9000 8326</span>
              </a>
              <a href="mailto:matthew@teakbuildinggroup.com.au" className="text-[#999999] hover:text-white">
                Email Matthew ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs font-mono text-[#777777] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#CCCCCC]" />
          <span>REGISTERED COMMERCIAL BUILDER CB-L 67337 • $20M PUBLIC LIABILITY INSURED</span>
        </div>

      </div>
    </section>
  );
};
