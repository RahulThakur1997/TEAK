import React, { useState, useEffect, useRef } from 'react';
import { GOOGLE_REVIEWS } from '../data/mockData';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalReviews = GOOGLE_REVIEWS.length;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        nextReview();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  return (
    <section id="reviews" className="py-24 bg-[#0A0C10] border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER & GOOGLE RATING BADGE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#999999] uppercase">
                SOCIAL PROOF • CLIENT REVIEWS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Melbourne’s Trusted Build Partner.
            </h2>
            <p className="mt-3 text-sm text-[#CCCCCC] max-w-xl">
              Endorsed by leading hospitality operators, medical practitioners, and workplace executives for exceptional timeline adherence and zero-subcontractor ambiguity.
            </p>
          </div>

          {/* 5.0 STAR GOOGLE REVIEW BADGE */}
          <div className="shrink-0 p-4 bg-[#121418] border border-white/20 flex items-center gap-4">
            {/* Google G logo stylized */}
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold font-heading text-lg">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
                <span className="ml-1 text-sm font-bold font-mono">5.0 / 5.0</span>
              </div>
              <div className="text-[10px] font-mono text-[#888888] tracking-wider uppercase mt-0.5">
                VERIFIED GOOGLE BUSINESS REVIEWS
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS CAROUSEL DISPLAY */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Active Testimonial Card */}
          <div className="bg-[#121418] border border-white/15 p-6 sm:p-10 shadow-2xl relative">
            <Quote className="w-12 h-12 text-white/10 absolute top-6 right-6 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white text-black font-extrabold flex items-center justify-center text-sm font-mono shrink-0">
                  {GOOGLE_REVIEWS[currentIndex].avatarText}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    {GOOGLE_REVIEWS[currentIndex].name}
                  </h4>
                  <div className="text-xs text-[#AAAAAA]">
                    {GOOGLE_REVIEWS[currentIndex].role} · <span className="text-white font-semibold">{GOOGLE_REVIEWS[currentIndex].company}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#888888] mt-0.5">
                    {GOOGLE_REVIEWS[currentIndex].projectType} · {GOOGLE_REVIEWS[currentIndex].date}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(GOOGLE_REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
            </div>

            {/* Quote content */}
            <blockquote className="text-sm sm:text-base lg:text-lg text-[#CCCCCC] leading-relaxed relative z-10 font-normal">
              "{GOOGLE_REVIEWS[currentIndex].comment}"
            </blockquote>

            {/* Key takeaway highlight banner */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span className="text-[#888888]">DIRECTOR IMPACT:</span>
              <span className="font-semibold">{GOOGLE_REVIEWS[currentIndex].highlight}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {GOOGLE_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-[#2A2E35] hover:bg-[#555555]'
                  }`}
                  aria-label={`Jump to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 border border-white/10 text-[#888888] hover:text-white transition-colors"
                title={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={prevReview}
                className="p-2 border border-white/10 text-[#CCCCCC] hover:text-white hover:border-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                className="p-2 border border-white/10 text-[#CCCCCC] hover:text-white hover:border-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* MASONRY MINI-CARDS TICKER BELOW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {GOOGLE_REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              onClick={() => {
                const idx = GOOGLE_REVIEWS.findIndex(r => r.id === rev.id);
                if (idx !== -1) setCurrentIndex(idx);
              }}
              className="p-4 bg-[#121418] border border-white/10 hover:border-white/30 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">{rev.name}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-white text-white" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#999999] line-clamp-2 italic">
                "{rev.comment}"
              </p>
              <span className="text-[10px] font-mono text-[#666666] block mt-2">
                {rev.company} · {rev.projectType}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
