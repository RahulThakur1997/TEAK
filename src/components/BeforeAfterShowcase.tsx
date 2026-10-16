import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/mockData';
import { MapPin, Sparkles, ChevronLeft, ChevronRight, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

export const BeforeAfterShowcase: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(BEFORE_AFTER_PROJECTS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = BEFORE_AFTER_PROJECTS.find(p => p.id === selectedProjectId) || BEFORE_AFTER_PROJECTS[0];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updatePosition(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section id="transformations" className="py-24 bg-[#07080a] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Ambient Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c24] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span>THE CRAFTSMANSHIP • TRANSFORMATION SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Before & After.
            </h2>
          </div>

          <div className="text-sm text-[#cbd5e1] max-w-md">
            Drag the custom gold divider horizontally to reveal the raw concrete shell transformed into a precision architectural landmark.
          </div>
        </div>

        {/* Project Switcher Bar */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-white/10 pb-4">
          {BEFORE_AFTER_PROJECTS.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setSliderPosition(50);
                }}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-[#181c24] text-white border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)] ring-1 ring-[#d4af37]'
                    : 'bg-[#0f1117] text-[#94a3b8] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {proj.title}
              </button>
            );
          })}
        </div>

        {/* MAIN SLIDER CONTAINER */}
        <div className="rounded-2xl bg-gradient-to-b from-[#181c24] to-[#0f1117] border border-[#d4af37]/40 p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] relative">
          
          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between text-xs py-2 px-4 bg-[#0a0c10] rounded-xl border border-white/10 mb-3 gap-3">
            <div className="flex items-center gap-2 text-white font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{currentProject.location}</span>
              <span className="text-[#64748b]">·</span>
              <span className="font-mono text-[#c5a880] font-bold">{currentProject.sqm}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#94a3b8]">Quick Position:</span>
              {[25, 50, 75].map((pos) => (
                <button
                  key={pos}
                  onClick={() => setSliderPosition(pos)}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all border ${
                    sliderPosition === pos
                      ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                      : 'bg-[#181c24] text-[#cbd5e1] border-white/10 hover:border-white/30'
                  }`}
                >
                  {pos}%
                </button>
              ))}
            </div>
          </div>

          {/* DUAL IMAGE SPLIT CANVAS */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[600px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-white/10 group"
          >
            {/* COMPLETED / AFTER IMAGE (Base Full-Width) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentProject.afterImage}
                alt={`${currentProject.title} Completed`}
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              {/* After Label Badge */}
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-[#d4af37]/40 py-1.5 px-3.5 rounded-full text-xs font-mono font-bold text-white uppercase tracking-wider shadow-lg flex items-center gap-2 pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{currentProject.afterLabel}</span>
              </div>
            </div>

            {/* RAW / BEFORE IMAGE (Clipped Overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden will-change-[width]"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentProject.beforeImage}
                alt={`${currentProject.title} Before`}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75 max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
              />
              {/* Dark subtle overlay */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              {/* Before Label Badge */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-white/20 py-1.5 px-3.5 rounded-full text-xs font-mono font-bold text-[#cbd5e1] uppercase tracking-wider shadow-lg pointer-events-none">
                {currentProject.beforeLabel}
              </div>
            </div>

            {/* CUSTOM DRAGGABLE GOLD/WHITE SLIDER HANDLE WITH < > ICONS */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] via-white to-[#c5a880] cursor-ew-resize z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Knurled Gold Pill Handle with < > Icons */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f3df9b] to-[#c5a880] text-black flex items-center justify-center border-2 border-black shadow-[0_0_20px_rgba(212,175,55,0.6)] pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                <div className="flex items-center -space-x-1">
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>

          {/* Accessible slider controls */}
          <div className="mt-3 flex items-center justify-between text-xs text-[#94a3b8] px-2">
            <span className="font-mono">RAW CONCRETE SHELL</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Comparison slider position"
              className="w-1/2 accent-[#d4af37] h-1.5 bg-[#1e2330] rounded-lg cursor-pointer"
            />
            <span className="font-mono text-[#d4af37] font-semibold">HANDOVER & OCCUPANCY</span>
          </div>

          {/* Details Bar */}
          <div className="mt-4 p-4 rounded-xl bg-[#0a0c10] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-3xl">
              <strong className="text-[#d4af37] font-mono uppercase text-xs mr-2 block sm:inline">Execution Notes:</strong>
              {currentProject.details}
            </p>
            <a
              href="#qualification-terminal"
              className="shrink-0 py-2.5 px-5 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-xs font-bold uppercase tracking-wider transition-all text-center"
            >
              Inquire on Similar Scope ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
