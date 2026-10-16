import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { MapPin, ArrowUpRight, Quote, Sparkles } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section className="py-24 bg-[#07080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c24] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span>CURATED PORTFOLIO • CASE STUDIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Selected Melbourne Works.
            </h2>
          </div>

          <div className="text-sm text-[#cbd5e1] max-w-md">
            Every site managed under our director-led standard. No shortcuts, no subcontractor runarounds, delivered on the agreed date.
          </div>
        </div>

        {/* Case Studies 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-gradient-to-b from-[#181c24] to-[#0f1117] border border-white/10 hover:border-[#d4af37]/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter contrast-115 brightness-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c24] via-transparent to-black/30" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-black/85 backdrop-blur-md border border-[#d4af37]/40 py-1 px-3 rounded-full text-[10px] font-mono font-bold text-[#d4af37] uppercase tracking-wider">
                    {project.sector}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-white/20 py-1 px-3 rounded-full text-[10px] font-mono text-[#cbd5e1]">
                  {project.duration}
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c5a880] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span className="text-white font-bold">{project.sqm} sqm</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading mt-2 group-hover:text-amber-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-[#cbd5e1] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client quote highlight */}
                  {project.clientQuote && (
                    <div className="mt-4 p-3.5 rounded-xl bg-[#0a0c10] border border-[#d4af37]/20 text-xs italic text-[#cbd5e1]">
                      "{project.clientQuote.text.slice(0, 115)}..."
                      <div className="mt-1.5 text-[10px] font-mono not-italic text-[#c5a880] font-bold">
                        — {project.clientQuote.author}, {project.clientQuote.role}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom View Button */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#94a3b8]">HANDOVER {project.year}</span>
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#d4af37] transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#d4af37]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto">
          <div className="bg-[#0f1117] border border-[#d4af37]/40 max-w-3xl w-full p-6 sm:p-8 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.25)] relative my-8 animate-fadeIn">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-4 right-4 text-[#94a3b8] hover:text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-white/15"
            >
              [CLOSE ESC]
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c24] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>PROJECT SPECIFICATION BRIEF</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-1">
              {selectedCaseStudy.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#c5a880] mb-6">
              <span>{selectedCaseStudy.location}</span>
              <span>·</span>
              <span>{selectedCaseStudy.sqm} sqm</span>
              <span>·</span>
              <span>Program: {selectedCaseStudy.duration}</span>
            </div>

            {/* Gallery Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {selectedCaseStudy.gallery.map((img, i) => (
                <div key={i} className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={img}
                    alt={`${selectedCaseStudy.title} view ${i + 1}`}
                    className="w-full h-full object-cover filter contrast-110"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 text-sm text-[#cbd5e1] leading-relaxed">
              <p>{selectedCaseStudy.description}</p>
              
              <div className="p-4 rounded-xl bg-[#0a0c10] border border-white/10">
                <span className="text-[10px] font-mono text-[#d4af37] tracking-widest uppercase block mb-2 font-bold">
                  CRITICAL PATH SPECIFICATIONS DELIVERED:
                </span>
                <ul className="space-y-1.5 text-xs text-white">
                  {selectedCaseStudy.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedCaseStudy.clientQuote && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#181c24] to-[#12151c] border-l-2 border-[#d4af37] text-xs sm:text-sm italic text-white space-y-2">
                  <Quote className="w-4 h-4 text-[#d4af37]" />
                  <p>"{selectedCaseStudy.clientQuote.text}"</p>
                  <div className="font-mono not-italic text-xs text-[#c5a880]">
                    {selectedCaseStudy.clientQuote.author} — {selectedCaseStudy.clientQuote.role}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href="#qualification-terminal"
                onClick={() => setSelectedCaseStudy(null)}
                className="flex-1 py-3 bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-black text-center font-bold text-xs uppercase tracking-wider rounded-lg hover:from-white hover:to-[#e2e8f0] shadow-lg"
              >
                Inquire On Similar Melbourne Fit-Out ↗
              </a>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="py-3 px-6 border border-white/20 text-[#cbd5e1] hover:text-white rounded-lg text-xs uppercase tracking-wider"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
