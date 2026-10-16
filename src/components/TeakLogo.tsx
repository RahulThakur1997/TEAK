import React from 'react';

interface TeakLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'monogram';
  goldAccent?: boolean;
}

export const TeakLogo: React.FC<TeakLogoProps> = ({
  className = '',
  variant = 'full',
  goldAccent = true
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* High-contrast architectural monogram mark with warm gold illuminated border */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-[#0f1117] text-white font-extrabold rounded-none border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] shrink-0 overflow-hidden group">
        {/* Subtle gold ambient glow in center */}
        <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
        
        {/* Architectural diagonal cut & crossbar */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1.5 z-10 transition-transform duration-300 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer framing line */}
          <rect x="5" y="5" width="90" height="90" fill="none" stroke="#d4af37" strokeWidth="4" />
          {/* T bar */}
          <path d="M 20 22 H 80 V 32 H 56 V 78 H 44 V 32 H 20 Z" fill="#ffffff" />
          {/* Sharp architectural chevron cut in corner with gold accent */}
          <polygon points="76,60 90,60 90,74" fill="#d4af37" />
          <polygon points="10,10 24,10 10,24" fill="#c5a880" />
        </svg>
      </div>

      {variant !== 'monogram' && (
        <div className="flex flex-col justify-center leading-none">
          {/* Blocky Architectural Wordmark */}
          <div className="flex items-baseline tracking-[-0.03em] font-black text-xl text-white font-heading">
            <span className="tracking-tight">T</span>
            <span className="tracking-tight">E</span>
            <span className="relative inline-block tracking-tight text-white">
              A
            </span>
            <span className="relative inline-block tracking-tight text-white ml-px">
              K
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#c5a880]">
              BUILDING GROUP
            </span>
            <span className="w-1 h-1 bg-[#d4af37]/60 inline-block"></span>
            <span className="text-[8px] font-medium tracking-[0.18em] uppercase text-[#94a3b8]">
              MELBOURNE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
