import React, { useState } from 'react';
import { SECTORS_DATA } from '../data/mockData';
import { SectorItem } from '../types';
import { ArrowUpRight, Check, MapPin, Clock, Sparkles } from 'lucide-react';

interface SectorsSectionProps {
  onSelectSector?: (sectorId: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onSelectSector }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [inspectedSector, setInspectedSector] = useState<SectorItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Sectors' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'commercial', label: 'Commercial Office' },
    { id: 'medical', label: 'Specialist Healthcare' },
    { id: 'retail', label: 'Bespoke Retail' },
  ];

  const filteredSectors = activeFilter === 'all'
    ? SECTORS_DATA
    : SECTORS_DATA.filter(s => s.category === activeFilter);

  const locationMap: Record<string, { precinct: string; timeline: string }> = {
    hospitality: { precinct: 'Brunswick East & Fitzroy', timeline: '6 – 8 Weeks Delivery' },
    commercial: { precinct: 'Melbourne CBD & Docklands', timeline: '8 – 11 Weeks Delivery' },
    medical: { precinct: 'East Melbourne & Epworth', timeline: '7 – 9 Weeks Delivery' },
    retail: { precinct: 'High St Armadale & Collins', timeline: '5 – 7 Weeks Delivery' },
    trades: { precinct: 'Greater Melbourne Sites', timeline: 'Critical-Path Rapid Deploy' }
  };

  return (
    <section id="sectors" className="py-24 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111317] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 bg-white inline-block" />
              <span>THE CAPABILITIES • COMMERCIAL DISCIPLINES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tighter">
              Services & Sectors.
            </h2>
          </div>

          <div className="text-sm text-[#999999] max-w-md">
            Specialized fit-out execution designed for strict handover dates, acoustic compliance, and uninterrupted patron flow.
          </div>
        </div>

        {/* Dynamic Sector Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-white/10 pb-5">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`py-2 px-5 text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(204,204,204,0.3)]'
                    : 'bg-[#111317] text-[#999999] border-white/10 hover:border-white/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sectors Grid with fine 1px metallic borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSectors.map((sector) => {
            const loc = locationMap[sector.id] || { precinct: 'Melbourne Metro', timeline: 'Rapid Delivery' };
            return (
              <div
                key={sector.id}
                className="group bg-[#111317] border border-white/10 hover:border-[#CCCCCC] hover:shadow-[0_0_25px_rgba(204,204,204,0.2)] transition-all duration-400 flex flex-col justify-between overflow-hidden relative shadow-lg"
              >
                {/* Image Frame with Micro-tags (100% Full Vibrant Natural Color) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0C10]">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13161F] via-transparent to-black/20" />

                  {/* Micro-tags with vibrant emerald dot */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-[#0A0C10]/90 backdrop-blur-md border border-[#CCCCCC]/40 text-[10px] font-mono font-bold text-white flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <MapPin className="w-3 h-3 text-[#CCCCCC]" />
                      <span>{loc.precinct}</span>
                    </span>
                  </div>

                  {/* Reveal Delivery Timeline on Hover */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#0A0C10]/90 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#CCCCCC] flex items-center gap-1 shadow-md">
                    <Clock className="w-3 h-3 text-[#3B82F6]" />
                    <span>{loc.timeline}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#CCCCCC] uppercase block mb-1">
                      {sector.metrics}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-white transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-[#999999] mt-1 mb-3 font-medium">
                      {sector.subtitle}
                    </p>
                    <p className="text-xs text-[#777777] leading-relaxed mb-4">
                      {sector.description}
                    </p>

                    {/* Capabilities bullets */}
                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      {sector.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                          <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#777777] truncate max-w-[160px]">
                      {sector.sampleProject}
                    </span>

                    <button
                      onClick={() => setInspectedSector(sector)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#CCCCCC] transition-colors"
                    >
                      <span>Inspect Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#CCCCCC]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* INSPECTED SECTOR MODAL */}
      {inspectedSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="bg-[#111317] border border-[#CCCCCC]/40 max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_40px_rgba(204,204,204,0.15)] relative animate-fadeIn">
            <button
              onClick={() => setInspectedSector(null)}
              className="absolute top-4 right-4 text-[#999999] hover:text-white text-xs font-mono px-3 py-1.5 border border-white/15"
            >
              [CLOSE ESC]
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B20] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-2">
              <span className="w-1.5 h-1.5 bg-white inline-block"></span>
              <span>{inspectedSector.category.toUpperCase()} SCOPE BRIEF</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-1">
              {inspectedSector.title}
            </h3>
            <p className="text-xs text-[#999999] mb-4">
              {inspectedSector.subtitle}
            </p>

            <div className="aspect-[16/8] overflow-hidden mb-4 border border-white/10">
              <img
                src={inspectedSector.image}
                alt={inspectedSector.title}
                className="w-full h-full object-cover filter contrast-125 grayscale"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed mb-4">
              {inspectedSector.description}
            </p>

            <div className="space-y-2 mb-6 bg-[#090A0C] p-4 border border-white/10">
              <span className="text-[10px] font-mono text-[#CCCCCC] tracking-widest uppercase block mb-1">
                IN-HOUSE ENGINEERING DELIVERABLES:
              </span>
              {inspectedSector.capabilities.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white">
                  <Check className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#qualification-terminal"
                onClick={() => setInspectedSector(null)}
                className="flex-1 py-3 bg-white text-black text-center font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC] shadow-[0_0_15px_rgba(204,204,204,0.25)]"
              >
                Inquire on this Sector with Directors ↗
              </a>
              <button
                onClick={() => setInspectedSector(null)}
                className="py-3 px-6 border border-white/20 text-[#E2E8F0] hover:text-white text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
