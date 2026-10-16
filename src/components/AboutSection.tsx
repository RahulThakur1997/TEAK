import React, { useState } from 'react';
import { DIRECTORS } from '../data/mockData';
import { 
  ShieldCheck, 
  Users, 
  Hammer, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  HardHat
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features = [
    {
      id: 0,
      title: 'Director-Led Delivery',
      subtitle: 'Hands-on founders on your concrete slab daily',
      desc: 'No middleman project brokers or junior cadet site coordinators. Co-directors James and Matthew Papadimitriou walk the site every morning at 6:45 AM, driving subcontractor coordination, engineering resolutions, and architectural fidelity.',
      kpis: [
        { label: 'Site Presence', val: 'Daily at 06:45' },
        { label: 'Decision Latency', val: 'Minutes, Not Days' },
        { label: 'Founder Direct Access', val: '100% Mobile Access' }
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 1,
      title: 'In-House Carpentry & Plaster Crew',
      subtitle: 'Full-time master trades on TEAK direct payroll',
      desc: 'While standard commercial builders subcontract 100% of the site to third-party low-bidders, TEAK employs full-time master carpenters and partitioning specialists. This ensures structural framing, curved acoustic baffles, and fine timber joinery happen without delay.',
      kpis: [
        { label: 'Payroll Trades', val: '14+ Master Carpenters' },
        { label: 'Markup on Critical Path', val: '0% Sub Brokerage' },
        { label: 'Custom Joinery', val: 'Direct In-House Shop' }
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Tighter Sequence & Cost Control',
      subtitle: 'Pre-procured long-lead materials & guaranteed GMP',
      desc: 'We eliminate variation extortion through meticulous constructability reviews during tender. By locking in mechanical plant, acoustic glazing, and custom metals months prior to demolition, our sites run on compressed, uninterrupted handover schedules.',
      kpis: [
        { label: 'Contract Model', val: 'Lump Sum / GMP' },
        { label: 'Handover Punctuality', val: '99.4% On Schedule' },
        { label: 'Defect Free Closeout', val: 'Standard Protocol' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const currentFeature = features[activeTab];

  return (
    <section id="advantage" className="py-24 bg-[#07080a] relative overflow-hidden border-t border-b border-white/10">
      {/* Subtle warm gold ambient backlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c24] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>THE TRADITION • EST. 2018</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight">
            All Delivery. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-zinc-100 to-amber-400">No Theatre.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
            Commercial building in Melbourne has been burdened by corporate management tiers who add costs while dodging responsibility. We standardise zero bureaucracy: the men who sign the contract are the men walking your site.
          </p>
        </div>

        {/* DYNAMIC 2-COLUMN FEATURE SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* LEFT: INTERACTIVE TABS / ACCORDION */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {features.map((feat) => {
                const isActive = activeTab === feat.id;
                return (
                  <div
                    key={feat.id}
                    onClick={() => setActiveTab(feat.id)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#181c24] to-[#0f1117] border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.15)] ring-1 ring-[#d4af37]/40'
                        : 'bg-[#0f1117]/80 border-white/10 hover:border-white/20 hover:bg-[#141720]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isActive ? 'bg-[#d4af37] text-black' : 'bg-white/10 text-[#94a3b8]'}`}>
                          0{feat.id + 1}
                        </span>
                        <h3 className={`text-lg font-bold font-heading ${isActive ? 'text-white' : 'text-[#cbd5e1]'}`}>
                          {feat.title}
                        </h3>
                      </div>
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#d4af37] shadow-[0_0_8px_#d4af37]' : 'bg-transparent'}`} />
                    </div>

                    <p className="text-xs text-[#c5a880] font-medium mb-2">
                      {feat.subtitle}
                    </p>

                    {isActive && (
                      <div className="pt-2 border-t border-white/10 text-xs text-[#cbd5e1] leading-relaxed animate-fadeIn">
                        <p>{feat.desc}</p>

                        {/* Spotlight Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/5">
                          {feat.kpis.map((k, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-[#07080a] border border-[#d4af37]/20">
                              <span className="text-[9px] font-mono text-[#94a3b8] uppercase block truncate">{k.label}</span>
                              <span className="text-xs font-bold text-white font-mono mt-0.5 block">{k.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-4 rounded-xl bg-[#0f1117] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                <HardHat className="w-4 h-4 text-[#d4af37]" />
                <span>Need a site walkover this week?</span>
              </div>
              <a
                href="#qualification-terminal"
                className="text-xs font-bold uppercase tracking-wider text-[#d4af37] hover:underline flex items-center gap-1"
              >
                <span>Book Direct ↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT: HIGH-CONTRAST ARCHITECTURAL VISUAL WITH ILLUMINATED BADGE */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-[0_0_35px_rgba(212,175,55,0.15)] bg-[#0f1117] group">
              <img
                src={currentFeature.image}
                alt={currentFeature.title}
                className="w-full h-full object-cover filter contrast-110 brightness-85 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/30 to-transparent" />

              {/* Illuminated Latin Badge: "VIRTUTE AD ALTISSIMA" */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#0a0c10]/90 backdrop-blur-md border border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="font-serif-accent text-xs font-bold tracking-[0.2em] uppercase text-white">
                    VIRTUTE AD ALTISSIMA
                  </span>
                </div>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0a0c10]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-[#c5a880] mb-1">
                  <span>MELBOURNE COMMERCIAL STANDARD</span>
                  <span>EST. 2018</span>
                </div>
                <h4 className="text-base font-bold text-white font-heading">
                  {currentFeature.title}
                </h4>
                <p className="text-xs text-[#94a3b8] mt-1">
                  {currentFeature.subtitle}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FOUNDERS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {DIRECTORS.map((dir, idx) => (
            <div
              key={dir.name}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#141720] to-[#0f1117] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase font-bold">
                    FOUNDING DIRECTOR 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_6px_#d4af37]" />
                </div>
                <h4 className="text-xl font-bold text-white font-heading">
                  {dir.name}
                </h4>
                <div className="text-xs text-[#c5a880] font-medium mt-0.5">
                  {dir.role}
                </div>
                <p className="text-xs text-[#cbd5e1] mt-3 italic leading-relaxed">
                  {dir.quote}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#94a3b8]">{dir.phone}</span>
                <a
                  href={`tel:${dir.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/40 text-xs font-bold text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Call Director</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
