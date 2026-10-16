import React from 'react';
import { GOOGLE_REVIEWS } from '../data/mockData';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  // Duplicate reviews array to create seamless infinite scrolling marquee
  const marqueeReviews = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section id="endorsements" className="py-24 bg-[#07080a] relative overflow-hidden border-t border-b border-white/10">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* SECTION HEADER & GOOGLE RATING BADGE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c24] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span>SOCIAL PROOF • VERIFIED ENDORSEMENTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Melbourne’s Most Trusted Build Partner.
            </h2>
            <p className="mt-3 text-sm text-[#cbd5e1] max-w-xl">
              Praised by restaurant owners, office managers, and enterprise directors for zero variation extortion, remarkable timeline adherence, and founder presence on site.
            </p>
          </div>

          {/* 5.0 STAR GOOGLE REVIEW BADGE */}
          <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-b from-[#181c24] to-[#0f1117] border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)] flex items-center gap-4">
            {/* Google G Logo Stylized */}
            <div className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center font-black font-heading text-xl shadow-md">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
                <span className="ml-1 text-sm font-bold font-mono text-white">5.0 / 5.0</span>
              </div>
              <div className="text-[10px] font-mono text-[#c5a880] tracking-wider uppercase mt-0.5 font-semibold">
                VERIFIED GOOGLE BUSINESS REVIEWS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFINITE SMOOTH SCROLLING MARQUEE (LEFT-TO-RIGHT / CONTINUOUS) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and right edge gradient masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#07080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#07080a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6">
          {marqueeReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[360px] sm:w-[420px] shrink-0 rounded-2xl bg-gradient-to-b from-[#181c24] to-[#0f1117] border border-white/10 hover:border-[#d4af37]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#c5a880] text-black font-extrabold flex items-center justify-center text-xs font-mono shadow-md">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-[#c5a880] truncate max-w-[190px]">
                        {rev.role} · <strong className="text-white">{rev.company}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Verified Google Chip */}
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#94a3b8] bg-[#07080a] px-2 py-0.5 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Stars in warm amber */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                  <span className="text-[11px] font-mono text-[#94a3b8] ml-1.5">{rev.date}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed line-clamp-4 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Highlight Tag */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#c5a880] font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span className="truncate">{rev.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Interaction Hint */}
      <div className="text-center mt-6">
        <span className="text-[11px] font-mono text-[#94a3b8]">
          Hover anywhere on the review ribbon to pause and read
        </span>
      </div>
    </section>
  );
};
