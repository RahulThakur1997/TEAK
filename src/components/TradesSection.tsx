import React from 'react';
import { Hammer, CheckCircle2, XCircle, ShieldCheck, Ruler, Wrench } from 'lucide-react';

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
    <section id="trades" className="py-24 bg-[#0A0C10] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-white inline-block"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#999999] uppercase">
              THE IN-HOUSE ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            Why In-House Trades Change Everything.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
            In commercial construction, 80% of delays and budget blowouts originate from subcontractor disputes on the critical path. By maintaining full-time employed carpenters, metalworkers, and plasterers, TEAK delivers unyielding speed and millimeter craftsmanship.
          </p>
        </div>

        {/* COMPARISON MATRIX */}
        <div className="bg-[#121418] border border-white/15 overflow-hidden shadow-2xl mb-16">
          <div className="p-4 sm:p-6 bg-[#161922] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Hammer className="w-5 h-5 text-white" />
              <span className="text-sm font-bold uppercase tracking-wider text-white font-heading">
                Operational Model Comparison
              </span>
            </div>
            <div className="text-xs font-mono text-[#999999]">
              TEAK Building Group Model vs. Traditional Tier-3 Commercial Broker
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {comparisonItems.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-center hover:bg-white/[0.02] transition-colors">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-[#888888] block">METRIC 0{index + 1}</span>
                  <span className="text-sm font-bold text-white font-heading">{item.metric}</span>
                </div>
                
                {/* TEAK WAY */}
                <div className="md:col-span-4 p-3 bg-white/5 border border-white/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>TEAK IN-HOUSE DIRECT</span>
                  </div>
                  <p className="text-xs text-[#CCCCCC] leading-relaxed">
                    {item.teak}
                  </p>
                </div>

                {/* TRADITIONAL WAY */}
                <div className="md:col-span-4 p-3 bg-black/40 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#888888] mb-1">
                    <XCircle className="w-4 h-4 text-[#888888]" />
                    <span>TRADITIONAL BROKER</span>
                  </div>
                  <p className="text-xs text-[#777777] leading-relaxed">
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
            <div key={idx} className="p-5 bg-[#121418] border border-white/10 hover:border-white/30 transition-colors">
              <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase block mb-1">
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
