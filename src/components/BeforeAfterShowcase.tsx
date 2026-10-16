import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/mockData';
import { SlidersHorizontal, MapPin, Maximize2, Sparkles, Clock } from 'lucide-react';

export const BeforeAfterShowcase: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(BEFORE_AFTER_PROJECTS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = BEFORE_AFTER_PROJECTS.find(p => p.id === selectedProjectId) || BEFORE_AFTER_PROJECTS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMoveWindow = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMoveWindow);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveWindow);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="showcase" className="relative py-24 bg-[#08090B] border-t border-b border-white/10 overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#999999] uppercase">
                TRANSFORMATIVE CRAFTSMANSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
              From Raw Structural Shell to Architectural Landmark
            </h2>
          </div>

          <div className="text-sm text-[#CCCCCC] max-w-md">
            Drag the splitter handle to examine the transition between raw unserviced floorplates and TEAK’s bespoke director-led execution.
          </div>
        </div>

        {/* Project Switcher Bar */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          {BEFORE_AFTER_PROJECTS.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setSliderPosition(50);
                }}
                className={`py-2 px-4 text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-md'
                    : 'bg-[#121418] text-[#999999] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {proj.title}
              </button>
            );
          })}
        </div>

        {/* MAIN SLIDER CONTAINER */}
        <div className="bg-[#121418] border border-white/15 p-2 sm:p-4 shadow-2xl relative">
          {/* Metadata Bar above image */}
          <div className="flex flex-wrap items-center justify-between text-xs py-2 px-3 bg-[#0B0D11] border-b border-white/10 mb-2 gap-3">
            <div className="flex items-center gap-2 text-white font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#999999]" />
              <span>{currentProject.location}</span>
              <span className="text-[#666666]">·</span>
              <span className="font-mono text-[#CCCCCC]">{currentProject.sqm}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#888888]">Quick Split:</span>
              <button
                onClick={() => setSliderPosition(20)}
                className={`px-2 py-0.5 font-mono text-[11px] border ${sliderPosition === 20 ? 'bg-white text-black' : 'text-[#CCCCCC] border-white/10'}`}
              >
                20%
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-2 py-0.5 font-mono text-[11px] border ${sliderPosition === 50 ? 'bg-white text-black' : 'text-[#CCCCCC] border-white/10'}`}
              >
                50%
              </button>
              <button
                onClick={() => setSliderPosition(80)}
                className={`px-2 py-0.5 font-mono text-[11px] border ${sliderPosition === 80 ? 'bg-white text-black' : 'text-[#CCCCCC] border-white/10'}`}
              >
                80%
              </button>
            </div>
          </div>

          {/* Interactive Split Canvas */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] overflow-hidden select-none cursor-ew-resize border border-white/10 group"
          >
            {/* AFTER IMAGE (Base full width) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentProject.afterImage}
                alt={`${currentProject.title} Completed`}
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              {/* After label */}
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-white/20 py-1.5 px-3.5 text-xs font-mono font-bold text-white uppercase tracking-wider shadow-lg flex items-center gap-1.5 pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>{currentProject.afterLabel}</span>
              </div>
            </div>

            {/* BEFORE IMAGE (Clipped overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden will-change-[width]"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentProject.beforeImage}
                alt={`${currentProject.title} Before`}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 brightness-80 max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
              />
              {/* Dark dramatic overlay on before */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              {/* Before label */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-white/20 py-1.5 px-3.5 text-xs font-mono font-bold text-[#CCCCCC] uppercase tracking-wider shadow-lg pointer-events-none">
                {currentProject.beforeLabel}
              </div>
            </div>

            {/* SPLITTER LINE & HANDLE */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Draggable Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black flex items-center justify-center border-2 border-black shadow-2xl pointer-events-auto cursor-ew-resize hover:scale-105 transition-transform">
                <SlidersHorizontal className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Accessible slider input for keyboard users */}
          <div className="mt-3 flex items-center justify-between text-xs text-[#888888]">
            <span className="font-mono">RAW SITE CONDITION</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Comparison slider position"
              className="w-1/2 accent-white h-1 bg-[#23272F] cursor-pointer"
            />
            <span className="font-mono text-white">COMPLETED OCCUPANCY</span>
          </div>

          {/* Project Details Footer */}
          <div className="mt-4 p-4 bg-[#0E1014] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed max-w-3xl">
              <strong className="text-white block sm:inline mr-2 font-mono uppercase text-xs">Site Execution:</strong>
              {currentProject.details}
            </p>
            <a
              href="#qualification-widget"
              className="shrink-0 py-2 px-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Inquire On Similar Scope ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
