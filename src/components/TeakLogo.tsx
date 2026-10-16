import React from 'react';

interface TeakLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'monogram';
  lightText?: boolean;
}

export const TeakLogo: React.FC<TeakLogoProps> = ({
  className = '',
  variant = 'full',
  lightText = true
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* High-contrast architectural monogram mark */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-white text-black font-extrabold rounded-none border border-white/20 shadow-sm shrink-0 overflow-hidden">
        {/* Architectural diagonal cut & crossbar */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-current p-1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer framing line */}
          <rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="6" />
          {/* T bar */}
          <path d="M 20 22 H 80 V 32 H 56 V 78 H 44 V 32 H 20 Z" fill="currentColor" />
          {/* Sharp architectural chevron cut in corner */}
          <polygon points="76,60 90,60 90,74" fill="currentColor" />
          <polygon points="10,10 24,10 10,24" fill="currentColor" />
        </svg>
      </div>

      {variant !== 'monogram' && (
        <div className="flex flex-col justify-center leading-none">
          {/* Blocky Architectural Wordmark with stylized sharp A and K */}
          <div className="flex items-baseline tracking-[-0.03em] font-black text-xl text-white font-heading">
            <span className="tracking-tight">T</span>
            <span className="tracking-tight">E</span>
            {/* Stylized sharp A with angled crosscut */}
            <span className="relative inline-block tracking-tight text-white">
              A
            </span>
            {/* Stylized K with industrial diagonal cut */}
            <span className="relative inline-block tracking-tight text-white ml-px">
              K
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#CCCCCC]">
              BUILDING GROUP
            </span>
            <span className="w-1 h-1 bg-[#666666] inline-block"></span>
            <span className="text-[8px] font-medium tracking-[0.16em] uppercase text-[#999999]">
              MELB
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
