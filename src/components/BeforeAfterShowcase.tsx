import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/mockData';
import { MapPin, ChevronLeft, ChevronRight, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

export const BeforeAfterShowcase: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(BEFORE_AFTER_PROJECTS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(1200);
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
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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
    <section id="transformations" className="py-24 bg-[#090A0C] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111317] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 bg-white inline-block" />
              <span>THE CRAFTSMANSHIP • TRANSFORMATION SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tighter">
              Before & After.
            </h2>
          </div>

          <div className="text-sm text-[#999999] max-w-md">
            Drag the custom metallic divider line to reveal raw structural shell versus completed bespoke architectural fit-out.
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
                className={`py-2 px-4 text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-[#181B20] text-white border-[#CCCCCC] shadow-[0_0_15px_rgba(204,204,204,0.25)]'
                    : 'bg-[#111317] text-[#999999] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {proj.title}
              </button>
            );
          })}
        </div>

        {/* MAIN SLIDER CONTAINER */}
        <div className="bg-[#111317] border border-[#CCCCCC]/30 p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(204,204,204,0.1)] relative">
          
          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between text-xs py-2 px-4 bg-[#090A0C] border border-white/10 mb-3 gap-3">
            <div className="flex items-center gap-2 text-white font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#CCCCCC]" />
              <span>{currentProject.location}</span>
              <span className="text-[#666666]">·</span>
              <span className="font-mono text-[#CCCCCC] font-bold">{currentProject.sqm}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#999999]">Quick Split:</span>
              {[25, 50, 75].map((pos) => (
                <button
                  key={pos}
                  onClick={() => setSliderPosition(pos)}
                  className={`px-2.5 py-0.5 text-[11px] font-mono transition-all border ${
                    sliderPosition === pos
                      ? 'bg-white text-black font-bold border-white'
                      : 'bg-[#181B20] text-[#CCCCCC] border-white/10 hover:border-white/30'
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
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[600px] overflow-hidden select-none cursor-ew-resize border border-white/10 group"
          >
            {/* COMPLETED / AFTER IMAGE (Base Full-Width) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentProject.afterImage}
                alt={`${currentProject.title} Completed`}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (currentProject.fallbackAfterImage && target.src !== currentProject.fallbackAfterImage) {
                    target.src = currentProject.fallbackAfterImage;
                  }
                }}
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
              />
              {/* After Label Badge in Chrome */}
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-[#CCCCCC]/40 py-1.5 px-3.5 text-xs font-mono font-bold text-white uppercase tracking-wider shadow-lg flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 bg-white inline-block"></span>
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
                onError={(e) => {
                  const target = e.currentTarget;
                  if (currentProject.fallbackBeforeImage && target.src !== currentProject.fallbackBeforeImage) {
                    target.src = currentProject.fallbackBeforeImage;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: `${containerWidth}px`,
                  height: '100%'
                }}
              />
              {/* Subtle edge vignette */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              {/* Before Label Badge */}
              <div className="absolute top-4 left-4 bg-[#0A0C10]/90 backdrop-blur-md border border-white/25 py-1.5 px-3.5 text-xs font-mono font-bold text-[#E2E8F0] uppercase tracking-wider shadow-lg pointer-events-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span>{currentProject.beforeLabel}</span>
              </div>
            </div>

            {/* CUSTOM METALLIC DIVIDER LINE & DRAG HANDLE WITH < > ICONS */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#CCCCCC] via-white to-[#999999] cursor-ew-resize z-20 pointer-events-none shadow-[0_0_15px_rgba(204,204,204,0.6)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Knurled Silver Handle with < > Icons */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black flex items-center justify-center border-2 border-black shadow-[0_0_20px_rgba(204,204,204,0.7)] pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                <div className="flex items-center -space-x-1">
                  <ChevronLeft className="w-4 h-4 stroke-[3]" />
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            </div>
          </div>

          {/* Accessible slider controls */}
          <div className="mt-3 flex items-center justify-between text-xs text-[#999999] px-2">
            <span className="font-mono">RAW CONCRETE SHELL</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Comparison slider position"
              className="w-1/2 accent-white h-1 bg-[#181B20] cursor-pointer"
            />
            <span className="font-mono text-white font-semibold">HANDOVER & OCCUPANCY</span>
          </div>

          {/* Details Bar */}
          <div className="mt-4 p-4 bg-[#090A0C] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed max-w-3xl">
              <strong className="text-white font-mono uppercase text-xs mr-2 block sm:inline">Execution Notes:</strong>
              {currentProject.details}
            </p>
            <a
              href="#qualification-terminal"
              className="shrink-0 py-2.5 px-5 bg-transparent border border-[#CCCCCC]/40 text-white hover:bg-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all text-center"
            >
              Inquire on Similar Scope ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
