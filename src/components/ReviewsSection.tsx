import React from 'react';
import { GOOGLE_REVIEWS } from '../data/mockData';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  // Duplicate reviews array to create seamless infinite scrolling marquee
  const marqueeReviews = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section id="endorsements" className="py-24 bg-[#0A0C10] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* SECTION HEADER & GOOGLE RATING BADGE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#13161F] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-ping" />
              <span className="font-bold text-white">SOCIAL PROOF • VERIFIED CLIENT ENDORSEMENTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tighter">
              Melbourne’s Most Trusted Build Partner.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#999999] max-w-xl">
              Praised by restaurant owners, office managers, and enterprise directors for zero variation extortion, remarkable timeline adherence, and founder presence on site.
            </p>
          </div>

          {/* 5.0 STAR GOOGLE REVIEW BADGE WITH AUTHENTIC BRANDING & GLOWING AMBER STARS */}
          <div className="shrink-0 p-5 bg-[#13161F] border border-[#CCCCCC]/40 shadow-[0_0_25px_rgba(251,188,5,0.15)] flex items-center gap-4">
            {/* Authentic Multi-colored Google G Icon */}
            <div className="w-12 h-12 bg-white flex items-center justify-center p-2.5 shadow-md shrink-0">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05] drop-shadow-[0_0_6px_rgba(251,188,5,0.45)]" />
                ))}
                <span className="ml-1.5 text-base font-extrabold font-mono text-white">5.0 / 5.0</span>
              </div>
              <div className="text-[10px] font-mono text-[#FBBC05] tracking-wider uppercase mt-1 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
                <span>OFFICIAL GOOGLE BUSINESS RATING</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS INFINITE SMOOTH HORIZONTAL MARQUEE (LEFT-TO-RIGHT) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Edge gradient masks */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#0A0C10] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#0A0C10] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6">
          {marqueeReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[360px] sm:w-[420px] shrink-0 bg-[#13161F] border border-white/10 hover:border-[#CCCCCC]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white text-black font-extrabold flex items-center justify-center text-xs font-mono shadow-md">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-[#CCCCCC] truncate max-w-[190px]">
                        {rev.role} · <strong className="text-white">{rev.company}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Verified Google Chip with Emerald Green */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 border border-[#10B981]/30 font-semibold shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* 5 Glowing Amber Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05] drop-shadow-[0_0_4px_rgba(251,188,5,0.4)]" />
                  ))}
                  <span className="text-[11px] font-mono text-[#999999] ml-1.5">{rev.date}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed line-clamp-4 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Highlight Tag with Cobalt Blue Indicator */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#CCCCCC] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                <span className="truncate">{rev.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Interaction Hint */}
      <div className="text-center mt-6">
        <span className="text-[11px] font-mono text-[#777777]">
          [ Hover anywhere on the marquee ribbon to pause and read ]
        </span>
      </div>
    </section>
  );
};
