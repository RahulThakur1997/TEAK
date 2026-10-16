import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { MapPin, Clock, Maximize2, ArrowUpRight, X, Quote } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#999999] uppercase">
                CURATED PORTFOLIO • CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Selected Melbourne Works.
            </h2>
          </div>

          <div className="text-sm text-[#CCCCCC] max-w-md">
            Every site managed under our director-led standard. No shortcuts, no subcontractor runarounds, delivered on the agreed date.
          </div>
        </div>

        {/* Case Studies 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-[#121418] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-103 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/30" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-black/80 backdrop-blur-md border border-white/20 py-1 px-3 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    {project.sector}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 py-1 px-3 text-[10px] font-mono text-[#CCCCCC]">
                  {project.duration}
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#999999] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span className="text-white font-bold">{project.sqm} sqm</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading mt-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-[#CCCCCC] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client quote highlight */}
                  {project.clientQuote && (
                    <div className="mt-4 p-3 bg-white/5 border border-white/10 text-xs italic text-[#CCCCCC]">
                      "{project.clientQuote.text.slice(0, 110)}..."
                      <div className="mt-1 text-[10px] font-mono not-italic text-[#888888] font-bold">
                        — {project.clientQuote.author}, {project.clientQuote.role}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom View Button */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#888888]">HANDOVER {project.year}</span>
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#999999] transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#121418] border border-white/20 max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-fadeIn">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-4 right-4 text-[#888888] hover:text-white text-xs font-mono px-3 py-1.5 border border-white/15"
            >
              [CLOSE ESC]
            </button>

            <div className="text-[10px] font-mono tracking-widest text-[#999999] uppercase mb-1">
              PROJECT SPECIFICATION BRIEF
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-1">
              {selectedCaseStudy.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#CCCCCC] mb-6">
              <span>{selectedCaseStudy.location}</span>
              <span>·</span>
              <span>{selectedCaseStudy.sqm} sqm</span>
              <span>·</span>
              <span>Program: {selectedCaseStudy.duration}</span>
            </div>

            {/* Gallery Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {selectedCaseStudy.gallery.map((img, i) => (
                <div key={i} className="aspect-[16/10] overflow-hidden border border-white/10 bg-black">
                  <img
                    src={img}
                    alt={`${selectedCaseStudy.title} view ${i + 1}`}
                    className="w-full h-full object-cover filter contrast-110"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 text-sm text-[#CCCCCC] leading-relaxed">
              <p>{selectedCaseStudy.description}</p>
              
              <div className="p-4 bg-[#0B0D11] border border-white/10">
                <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase block mb-2">
                  CRITICAL PATH SPECIFICATIONS DELIVERED:
                </span>
                <ul className="space-y-1.5 text-xs text-white">
                  {selectedCaseStudy.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedCaseStudy.clientQuote && (
                <div className="p-4 bg-white/5 border-l-2 border-white text-xs sm:text-sm italic text-white space-y-2">
                  <Quote className="w-4 h-4 text-[#999999]" />
                  <p>"{selectedCaseStudy.clientQuote.text}"</p>
                  <div className="font-mono not-italic text-xs text-[#999999]">
                    {selectedCaseStudy.clientQuote.author} — {selectedCaseStudy.clientQuote.role}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href="#qualification-widget"
                onClick={() => setSelectedCaseStudy(null)}
                className="flex-1 py-3 bg-white text-black text-center font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC]"
              >
                Inquire On Similar Melbourne Fit-Out ↗
              </a>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="py-3 px-6 border border-white/20 text-[#CCCCCC] hover:text-white text-xs uppercase tracking-wider"
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
