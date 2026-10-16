/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SectorsSection } from './components/SectorsSection';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { TradesSection } from './components/TradesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { Phone, Mail, X, Check, Calendar, HardHat } from 'lucide-react';

export default function App() {
  const [directorModalOpen, setDirectorModalOpen] = useState<boolean>(false);
  const [consultBooked, setConsultBooked] = useState<boolean>(false);
  const [selectedDirector, setSelectedDirector] = useState<'both' | 'james' | 'matthew'>('both');
  const [consultForm, setConsultForm] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    notes: ''
  });

  const handleBookConsult = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#CCCCCC] selection:bg-white selection:text-black">
      {/* 1. Global Navigation & Header */}
      <Navbar onOpenConsult={() => setDirectorModalOpen(true)} />

      {/* 2. Hero Section with Background Video & 4-Step Qualification Funnel */}
      <HeroSection onOpenConsult={() => setDirectorModalOpen(true)} />

      {/* 3. "The Tradition" — About Us (Royal Accented / Bespoke Heritage) */}
      <AboutSection onOpenDirectorContact={() => setDirectorModalOpen(true)} />

      {/* 4. "The Capabilities" — Sector Services Grid */}
      <SectorsSection />

      {/* 5. Interactive Before & After Showcase (Dual Image Drag Slider) */}
      <BeforeAfterShowcase />

      {/* 6. Case Studies Showcase — Standout Melbourne Projects */}
      <CaseStudiesSection />

      {/* 7. "The In-House Advantage" Deep Dive — Direct Master Trades */}
      <TradesSection />

      {/* 8. Social Proof — Google Reviews Scrolling Carousel */}
      <ReviewsSection />

      {/* 9. Closing Call-To-Action (Before Footer) */}
      <ClosingCTA onOpenConsultModal={() => setDirectorModalOpen(true)} />

      {/* 10. Architectural Footer */}
      <Footer />

      {/* DIRECTORS DIRECT CONSULT MODAL */}
      {directorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#121418] border border-white/20 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => {
                setDirectorModalOpen(false);
                setConsultBooked(false);
              }}
              className="absolute top-4 right-4 text-[#888888] hover:text-white text-xs font-mono px-2.5 py-1 border border-white/10"
            >
              [CLOSE]
            </button>

            <div className="flex items-center gap-2 mb-2">
              <HardHat className="w-4 h-4 text-white" />
              <span className="text-xs font-mono tracking-widest text-[#999999] uppercase">
                DIRECTOR DIRECT BRIEFING
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-1">
              Talk Directly to Leadership
            </h3>
            <p className="text-xs text-[#999999] mb-6">
              Zero brokers or project coordinators. James & Matthew answer directly on Melbourne site matters.
            </p>

            {consultBooked ? (
              <div className="p-6 bg-white/5 border border-white/20 text-center space-y-3">
                <div className="w-10 h-10 mx-auto bg-white text-black flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  Brief Request Dispatched
                </h4>
                <p className="text-xs text-[#CCCCCC]">
                  Thank you, {consultForm.name || 'there'}. Directors James and Matthew have received your direct callback request and will connect via phone at {consultForm.phone || 'your number'}.
                </p>
                <button
                  onClick={() => {
                    setDirectorModalOpen(false);
                    setConsultBooked(false);
                  }}
                  className="mt-4 py-2 px-6 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#CCCCCC]"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookConsult} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:0390008325"
                    className="p-3 bg-[#1A1D24] border border-white/10 hover:border-white transition-colors block text-left"
                  >
                    <span className="text-[10px] font-mono text-[#888888] block">CO-DIRECTOR</span>
                    <span className="text-xs font-bold text-white block">James Papadimitriou</span>
                    <span className="text-[11px] font-mono text-[#CCCCCC] mt-1 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-white" /> 03 9000 8325
                    </span>
                  </a>

                  <a
                    href="tel:0390008326"
                    className="p-3 bg-[#1A1D24] border border-white/10 hover:border-white transition-colors block text-left"
                  >
                    <span className="text-[10px] font-mono text-[#888888] block">CO-DIRECTOR</span>
                    <span className="text-xs font-bold text-white block">Matthew Papadimitriou</span>
                    <span className="text-[11px] font-mono text-[#CCCCCC] mt-1 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-white" /> 03 9000 8326
                    </span>
                  </a>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-bold text-white block mb-2">
                    Or Request an Immediate Callback:
                  </span>
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name & Business"
                      value={consultForm.name}
                      onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                      className="w-full bg-[#0B0D11] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-white focus:outline-none"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="Direct Phone Number"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                      className="w-full bg-[#0B0D11] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-white focus:outline-none"
                    />

                    <textarea
                      rows={2}
                      placeholder="Brief note or site address (e.g. 500 sqm office fit-out in Collins St)"
                      value={consultForm.notes}
                      onChange={(e) => setConsultForm({ ...consultForm, notes: e.target.value })}
                      className="w-full bg-[#0B0D11] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-white focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC] transition-colors"
                >
                  Send Brief Direct to Directors ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
