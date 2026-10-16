import React from 'react';
import { Hammer, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

export const TradesSection: React.FC = () => {
  const comparisonItems = [
    {
      metric: 'Site Supervision & Oversight',
      teak: '100% Director-Led (James & Matthew on site daily at 6:45 AM)',
      traditional: 'Junior project coordinator or subcontracted site manager'
    },
    {
      metric: 'Critical Path Framing & Carpentry',
      teak: 'Direct payroll master carpenters & joiners (14+ full-time crew)',
      traditional: 'Brokered out to 3rd-party lowest bidding subcontractors'
    },
    {
      metric: 'Variation & Schedule Extortion',
      teak: 'Direct trades adapt to design changes without bloated markups',
      traditional: 'Subcontractor markups stacked 15–30% on every minor tweak'
    },
    {
      metric: 'Handover Quality & Punch-Lists',
      teak: 'Zero-punch-list culture with direct craftsman pride',
      traditional: 'Lengthy defect disputes between main contractor and subs'
    },
    {
      metric: 'Builder Registration & Liability',
      teak: 'Victorian Commercial Builder CB-L 67337 + $20M Insurance',
      traditional: 'Often subcontracted under fragmented trade warranties'
    }
  ];

  return (
    <section className="py-24 bg-[#090A0C] border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111317] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 bg-white inline-block" />
            <span>UNMATCHED ACCOUNTABILITY • DIRECT WORKFORCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tighter">
            Why In-House Trades Change Everything.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#999999] leading-relaxed">
            In commercial construction, 80% of delays and budget blowouts originate from subcontractor disputes on the critical path. By maintaining full-time employed carpenters, metalworkers, and plasterers, TEAK delivers unyielding speed and millimeter craftsmanship.
          </p>
        </div>

        {/* COMPARISON MATRIX IN LUXURY MONOCHROME */}
        <div className="bg-[#111317] border border-[#CCCCCC]/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(204,204,204,0.1)] mb-16">
          <div className="p-5 sm:p-6 bg-[#090A0C] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white text-black">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-white font-heading">
                Operational Delivery Comparison
              </span>
            </div>
            <div className="text-xs font-mono text-[#CCCCCC]">
              TEAK Director Model vs. Traditional Commercial Broker
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {comparisonItems.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-center hover:bg-white/[0.02] transition-colors">
                <div className="md:col-span-4">
                  <span className="text-[10px] font-mono text-[#CCCCCC] block">OPERATIONAL CRITERIA 0{index + 1}</span>
                  <span className="text-sm font-bold text-white font-heading">{item.metric}</span>
                </div>
                
                {/* TEAK WAY */}
                <div className="md:col-span-4 p-4 bg-[#181B20] border border-[#CCCCCC]/40 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>TEAK IN-HOUSE DIRECT</span>
                  </div>
                  <p className="text-xs text-[#E2E8F0] leading-relaxed">
                    {item.teak}
                  </p>
                </div>

                {/* TRADITIONAL WAY */}
                <div className="md:col-span-4 p-4 bg-[#090A0C] border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#999999] mb-1.5">
                    <XCircle className="w-4 h-4 text-[#666666]" />
                    <span>TRADITIONAL BROKER</span>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.traditional}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 CORE TRADES CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Master Carpentry',
              specs: 'Bespoke hardwood joinery, curved timber paneling, concealed doors & acoustic timber slat systems.'
            },
            {
              title: 'Structural Steel Framing',
              specs: 'Portal frames, mezzanine decks, heavy stone counter supports & architectural brass detailing.'
            },
            {
              title: 'Acoustic Partitioning',
              specs: 'Rw 45-55 sound isolation suites, lead-lined X-ray enclosures, fire-rated ceiling assemblies.'
            },
            {
              title: 'Specialist Finishes',
              specs: 'Seamless micro-cement, Venetian plaster, terrazzo restoration, and flawless commercial paint.'
            }
          ].map((t, idx) => (
            <div key={idx} className="p-5 bg-[#111317] border border-white/10 hover:border-[#CCCCCC]/50 transition-all duration-300 shadow-md">
              <span className="text-[10px] font-mono text-[#CCCCCC] tracking-widest uppercase block mb-1">
                DISCIPLINE 0{idx + 1}
              </span>
              <h4 className="text-base font-bold text-white font-heading mb-2">
                {t.title}
              </h4>
              <p className="text-xs text-[#999999] leading-relaxed">
                {t.specs}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
