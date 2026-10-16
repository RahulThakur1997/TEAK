import React, { useState } from 'react';
import { SECTORS_DATA } from '../data/mockData';
import { SectorItem } from '../types';
import { ArrowUpRight, Check, ChevronRight, Layers, Clock, ShieldCheck } from 'lucide-react';

interface SectorsSectionProps {
  onSelectSector?: (sectorId: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onSelectSector }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [inspectedSector, setInspectedSector] = useState<SectorItem | null>(null);

  const filteredSectors = activeFilter === 'all'
    ? SECTORS_DATA
    : SECTORS_DATA.filter(s => s.category === activeFilter);

  return (
    <section id="sectors" className="py-24 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#999999] uppercase">
                THE CAPABILITIES • SECTORS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Built to Perform.
            </h2>
          </div>

          <div className="text-sm text-[#CCCCCC] max-w-md">
            Engineered specifically for high-stakes environments where trading days, acoustic integrity, and strict health codes govern project success.
          </div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'hospitality', label: 'Hospitality & Dining' },
            { id: 'commercial', label: 'Commercial & Workplace' },
            { id: 'medical', label: 'Medical & Specialist' },
            { id: 'retail', label: 'Retail & Flagships' },
            { id: 'trades', label: 'In-House Trades' },
          ].map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`py-2 px-4 text-xs font-bold uppercase tracking-wider transition-all border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-[#121418] text-[#999999] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSectors.map((sector) => (
            <div
              key={sector.id}
              className="group bg-[#121418] border border-white/10 hover:border-white/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-[#121418]/40 to-transparent" />
                
                {/* Metric pill */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 py-1 px-2.5 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                  {sector.metrics}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block mb-1">
                    SECTOR SPECIFICATION
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-white transition-colors">
                    {sector.title}
                  </h3>
                  <div className="text-xs text-[#AAAAAA] font-medium mt-1 mb-3">
                    {sector.subtitle}
                  </div>
                  <p className="text-xs text-[#999999] leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {sector.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[#CCCCCC]">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#888888] truncate max-w-[170px]">
                    {sector.sampleProject}
                  </span>
                  
                  <button
                    onClick={() => setInspectedSector(sector)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:text-[#999999] transition-colors"
                  >
                    <span>Inspect Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fast-track banner */}
        <div className="mt-12 p-6 bg-[#161920] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-heading">
              Have complex drawings or a tight handover deadline?
            </h4>
            <p className="text-xs text-[#999999]">
              Our in-house carpentry and construction teams can fast-track site commencement within 72 hours of permit issuance.
            </p>
          </div>
          <a
            href="#qualification-widget"
            className="shrink-0 py-3 px-6 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors text-center"
          >
            Qualify Project Now ↗
          </a>
        </div>

      </div>

      {/* INSPECTED SECTOR MODAL */}
      {inspectedSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#121418] border border-white/20 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setInspectedSector(null)}
              className="absolute top-4 right-4 text-[#888888] hover:text-white text-xs font-mono px-2 py-1 border border-white/10"
            >
              [CLOSE ESC]
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span className="text-xs font-mono tracking-widest text-[#999999] uppercase">
                {inspectedSector.category} SPECIFICATION
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-1">
              {inspectedSector.title}
            </h3>
            <p className="text-xs text-[#AAAAAA] mb-4">
              {inspectedSector.subtitle}
            </p>

            <div className="aspect-[16/8] overflow-hidden mb-4 border border-white/10">
              <img
                src={inspectedSector.image}
                alt={inspectedSector.title}
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed mb-6">
              {inspectedSector.description}
            </p>

            <div className="space-y-2 mb-6 bg-[#0B0D11] p-4 border border-white/10">
              <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase block mb-1">
                ENGINEERING & TRADE CAPABILITIES
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
                href="#qualification-widget"
                onClick={() => setInspectedSector(null)}
                className="flex-1 py-3 bg-white text-black text-center font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC]"
              >
                Request Consultation for this Sector ↗
              </a>
              <button
                onClick={() => setInspectedSector(null)}
                className="py-3 px-6 border border-white/20 text-[#CCCCCC] hover:text-white text-xs uppercase tracking-wider"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
