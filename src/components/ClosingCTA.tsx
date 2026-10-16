import React from 'react';
import { Phone, UploadCloud, ShieldCheck, Mail, Sparkles, PhoneCall } from 'lucide-react';

interface ClosingCTAProps {
  onOpenConsultModal?: () => void;
  onOpenTenderModal?: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ 
  onOpenConsultModal,
  onOpenTenderModal 
}) => {
  return (
    <section className="py-28 bg-[#07080a] relative overflow-hidden border-b border-white/10">
      {/* WARM GOLD AMBIENT RADIAL SPOTLIGHT GLOW */}
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Heraldic motto pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181c24] border border-[#d4af37]/40 text-[#d4af37] text-xs font-mono mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="tracking-[0.2em] font-serif-accent uppercase">VIRTUTE AD ALTISSIMA</span>
          <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
          <span>DIRECTOR COMMITMENT</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight max-w-5xl mx-auto leading-[1.06]">
          Ready to Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-zinc-100 to-amber-400">
            Without the Bureaucracy?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#cbd5e1] max-w-2xl mx-auto font-normal leading-relaxed">
          Skip the layers of management brokers. Partner with Melbourne’s hands-on building directors who personally guarantee constructability, cost certainty, and handover velocity.
        </p>

        {/* DIRECT CONTACT BUTTONS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:0390008325"
            className="py-4 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e2c67c] to-[#c5a880] text-black font-bold text-xs uppercase tracking-wider hover:from-white hover:to-[#e2e8f0] transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Director James</span>
          </a>

          <a
            href="tel:0390008326"
            className="py-4 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e2c67c] to-[#c5a880] text-black font-bold text-xs uppercase tracking-wider hover:from-white hover:to-[#e2e8f0] transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Director Matthew</span>
          </a>

          <button
            type="button"
            onClick={onOpenTenderModal}
            className="py-4 px-7 rounded-xl border border-[#d4af37]/50 bg-[#181c24]/80 text-[#e2e8f0] hover:text-white hover:border-[#d4af37] hover:bg-[#1f2430] font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
          >
            <UploadCloud className="w-4 h-4 text-[#d4af37]" />
            <span>Upload Tender Documents ↗</span>
          </button>
        </div>

        {/* Direct Director Hotlines Grid */}
        <div className="mt-14 max-w-3xl mx-auto pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#181c24] to-[#0f1117] border border-white/10 hover:border-[#d4af37]/40 transition-colors shadow-lg">
            <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block font-semibold">
              OPERATIONS & IN-HOUSE MASTER TRADES
            </span>
            <div className="text-lg font-bold text-white font-heading mt-1">
              James Papadimitriou
            </div>
            <div className="text-xs text-[#cbd5e1] mt-0.5">
              Co-Director & Master Builder
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <a href="tel:0390008325" className="text-[#d4af37] hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>03 9000 8325</span>
              </a>
              <a href="mailto:james@teakbuildinggroup.com.au" className="text-[#94a3b8] hover:text-white">
                Email James ↗
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#181c24] to-[#0f1117] border border-white/10 hover:border-[#d4af37]/40 transition-colors shadow-lg">
            <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block font-semibold">
              CONTRACTS, PROGRAM & PRE-CONSTRUCTION
            </span>
            <div className="text-lg font-bold text-white font-heading mt-1">
              Matthew Papadimitriou
            </div>
            <div className="text-xs text-[#cbd5e1] mt-0.5">
              Co-Director & Commercial Contracts
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <a href="tel:0390008326" className="text-[#d4af37] hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>03 9000 8326</span>
              </a>
              <a href="mailto:matthew@teakbuildinggroup.com.au" className="text-[#94a3b8] hover:text-white">
                Email Matthew ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs font-mono text-[#94a3b8] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
          <span>REGISTERED COMMERCIAL BUILDER CB-L 67337 • $20M PUBLIC LIABILITY INSURED</span>
        </div>

      </div>
    </section>
  );
};
