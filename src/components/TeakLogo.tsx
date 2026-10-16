import React from 'react';

interface TeakLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'monogram';
}

export const TeakLogo: React.FC<TeakLogoProps> = ({
  className = '',
  variant = 'full'
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Industrial Monogram Mark in Platinum & Brushed Steel */}
      <div className="relative flex items-center justify-center w-9 h-9 bg-[#111317] text-white font-extrabold rounded-none border border-[#CCCCCC]/40 shadow-[0_0_15px_rgba(204,204,204,0.18)] shrink-0 overflow-hidden group">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1.5 transition-transform duration-300 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer technical frame */}
          <rect x="6" y="6" width="88" height="88" fill="none" stroke="#CCCCCC" strokeWidth="4" />
          {/* T Structural Beam */}
          <path d="M 18 22 H 82 V 32 H 56 V 78 H 44 V 32 H 18 Z" fill="#FFFFFF" />
          {/* Sharp Industrial Diagonal Rafter Accents */}
          <polygon points="74,58 88,58 88,72" fill="#CCCCCC" />
          <polygon points="12,12 26,12 12,26" fill="#999999" />
        </svg>
      </div>

      {variant !== 'monogram' && (
        <div className="flex flex-col justify-center leading-none">
          {/* Heavy Architectural Wordmark */}
          <div className="flex items-baseline tracking-[-0.04em] font-extrabold text-xl text-white font-heading">
            <span>TEAK</span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#CCCCCC]">
              BUILDING GROUP
            </span>
            <span className="w-1 h-1 bg-[#666666] inline-block"></span>
            <span className="text-[8px] font-mono tracking-[0.16em] uppercase text-[#999999]">
              MELB
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
