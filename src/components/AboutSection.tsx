import React, { useState } from 'react';
import { DIRECTORS } from '../data/mockData';
import { 
  ShieldCheck, 
  Users, 
  Hammer, 
  PhoneCall, 
  Sparkles,
  HardHat,
  Ruler,
  Layers
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: 'In-House Trades',
      badge: 'PILLAR 01 • DIRECT PAYROLL',
      tagline: '14+ Master Carpenters & Joiners Employed Full-Time',
      desc: 'While standard commercial builders subcontract 100% of the site to third-party low-bidders, TEAK employs full-time master carpenters, metalworkers, and plasterers. This ensures structural framing, curved acoustic baffles, and fine timber joinery happen without subcontractor margin stacking.',
      specs: [
        { label: 'DIRECT PAYROLL CREW', val: '14+ Full-Time Masters' },
        { label: 'CRITICAL PATH MARKUP', val: '0% Sub Brokerage' },
        { label: 'TIMBER & STEEL JOINERY', val: 'Direct In-House Shop' }
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 1,
      title: 'Cost Control',
      badge: 'PILLAR 02 • GUARANTEED GMP',
      tagline: 'Zero Variation Extortion & Transparent Take-Offs',
      desc: 'We eliminate variation extortion through meticulous constructability reviews during tender. By locking in mechanical plant, acoustic glazing, and custom metals months prior to demolition, our sites run on compressed, uninterrupted handover schedules under guaranteed lump-sum terms.',
      specs: [
        { label: 'CONTRACT FRAMEWORK', val: 'Guaranteed GMP / Lump Sum' },
        { label: 'PROGRAM ADHERENCE', val: '99.4% On Schedule' },
        { label: 'DEFECT-FREE CLOSEOUT', val: 'Mandatory Standard' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Founder-Led',
      badge: 'PILLAR 03 • ZERO BUREAUCRACY',
      tagline: 'Co-Directors Walking Your Site Slab Daily at 06:45',
      desc: 'No middleman project brokers or junior cadet site coordinators. Co-directors James and Matthew Papadimitriou walk the site every morning at 6:45 AM, driving subcontractor coordination, engineering resolutions, and architectural fidelity with personal accountability.',
      specs: [
        { label: 'ON-SITE PRESENCE', val: 'Daily at 06:45' },
        { label: 'DECISION LATENCY', val: 'Minutes, Not Days' },
        { label: 'FOUNDER DIRECT LINE', val: '100% Direct Mobile' }
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const currentPillar = pillars[activePillar];

  return (
    <section id="advantage" className="py-24 bg-[#090A0C] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111317] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-white inline-block" />
            <span>OPERATIONAL ARCHITECTURE • EST. 2018</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tighter">
            All Delivery. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCCCCC] to-[#777777]">No Theatre.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#999999] leading-relaxed">
            Commercial building in Melbourne has been burdened by corporate management tiers who add costs while dodging responsibility. We standardise zero bureaucracy: the men who sign the contract are the men walking your site.
          </p>
        </div>

        {/* INTERACTIVE 3-PILLAR SWITCHER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* LEFT: 3-PILLAR ACCORDION SWITCHER */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`cursor-pointer p-5 border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#181B20] border-[#CCCCCC] shadow-[0_0_25px_rgba(204,204,204,0.2)]'
                        : 'bg-[#111317] border-white/10 hover:border-white/30 hover:bg-[#14161C]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 ${isActive ? 'bg-white text-black' : 'bg-white/10 text-[#999999]'}`}>
                          0{pillar.id + 1}
                        </span>
                        <h3 className={`text-lg font-bold font-heading ${isActive ? 'text-white' : 'text-[#CCCCCC]'}`}>
                          {pillar.title}
                        </h3>
                      </div>
                      <span className={`w-2 h-2 ${isActive ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-transparent'}`} />
                    </div>

                    <p className="text-xs text-[#CCCCCC] font-mono mb-2">
                      {pillar.tagline}
                    </p>

                    {isActive && (
                      <div className="pt-2 border-t border-white/10 text-xs text-[#E2E8F0] leading-relaxed animate-fadeIn">
                        <p>{pillar.desc}</p>

                        {/* LIVE TECHNICAL SPECS GRID */}
                        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/5">
                          {pillar.specs.map((s, idx) => (
                            <div key={idx} className="p-2.5 bg-[#090A0C] border border-[#CCCCCC]/20">
                              <span className="text-[9px] font-mono text-[#777777] uppercase block truncate">{s.label}</span>
                              <span className="text-xs font-bold text-white font-mono mt-0.5 block">{s.val}</span>
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
            <div className="p-4 bg-[#111317] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#CCCCCC]">
                <HardHat className="w-4 h-4 text-white" />
                <span>Require an on-site constructability audit?</span>
              </div>
              <a
                href="#qualification-terminal"
                className="text-xs font-bold uppercase tracking-wider text-white hover:underline flex items-center gap-1"
              >
                <span>Book Direct ↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT: HIGH-CONTRAST MONOCHROME ARCHITECTURAL VISUAL */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-full min-h-[420px] overflow-hidden border border-[#CCCCCC]/40 shadow-[0_0_30px_rgba(204,204,204,0.12)] bg-[#111317] group">
              <img
                src={currentPillar.image}
                alt={currentPillar.title}
                className="w-full h-full object-cover filter contrast-125 grayscale brightness-80 transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-black/30" />

              {/* Monospaced Technical Badge */}
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#090A0C]/90 backdrop-blur-md border border-[#CCCCCC]/60 shadow-[0_0_15px_rgba(204,204,204,0.2)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white inline-block"></span>
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-white">
                    {currentPillar.badge}
                  </span>
                </div>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#090A0C]/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between text-xs font-mono text-[#CCCCCC] mb-1">
                  <span>MELBOURNE COMMERCIAL STANDARD</span>
                  <span>EST. 2018</span>
                </div>
                <h4 className="text-base font-bold text-white font-heading">
                  {currentPillar.title}
                </h4>
                <p className="text-xs text-[#999999] mt-1 font-mono">
                  {currentPillar.tagline}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FOUNDERS ROW WITH AUTHENTIC SITE PORTRAITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {DIRECTORS.map((dir, idx) => (
            <div
              key={dir.name}
              className="p-6 bg-[#111317] border border-white/10 hover:border-[#CCCCCC]/50 transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#CCCCCC] uppercase font-bold">
                    FOUNDING CO-DIRECTOR 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 bg-white" />
                </div>

                <div className="flex items-start gap-4 mb-3">
                  {/* Director Portrait */}
                  <div className="w-20 h-24 sm:w-24 sm:h-28 border border-[#CCCCCC]/40 overflow-hidden bg-black shrink-0 relative shadow-md">
                    <img
                      src={dir.image}
                      alt={dir.name}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (dir.fallbackImage && target.src !== dir.fallbackImage) {
                          target.src = dir.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Director Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold text-white font-heading">
                      {dir.name}
                    </h4>
                    <div className="text-xs text-[#CCCCCC] font-medium mt-0.5">
                      {dir.role}
                    </div>
                    <div className="text-[11px] font-mono text-[#999999] mt-1">
                      {dir.experience}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#999999] italic leading-relaxed pt-1">
                  {dir.quote}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#777777]">{dir.phone}</span>
                <a
                  href={`tel:${dir.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 border border-white/20 text-xs font-bold text-white hover:bg-white hover:text-black transition-all"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Call {dir.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
