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
import { TenderUploadModal } from './components/TenderUploadModal';
import { Phone, Mail, X, Check, Calendar, HardHat, PhoneCall } from 'lucide-react';

export default function App() {
  const [directorModalOpen, setDirectorModalOpen] = useState<boolean>(false);
  const [tenderModalOpen, setTenderModalOpen] = useState<boolean>(false);
  const [consultBooked, setConsultBooked] = useState<boolean>(false);
  const [consultForm, setConsultForm] = useState({
    name: '',
    phone: '',
    director: 'james',
    notes: ''
  });

  const handleBookConsult = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-[#e2e8f0] selection:bg-[#d4af37] selection:text-black">
      {/* 1. TOP NAVIGATION: Floating Frosted Glass Capsule */}
      <Navbar onOpenConsult={() => setDirectorModalOpen(true)} />

      {/* 2. HERO SECTION: Split-Layout with Live Video Background & 4-Step Terminal */}
      <HeroSection onOpenConsult={() => setDirectorModalOpen(true)} />

      {/* 3. ELEVATED "ABOUT US & THE FOUNDERS": All Delivery. No Theatre. */}
      <AboutSection />

      {/* 4. SERVICES & SECTORS: Dynamic Filterable Cards */}
      <SectorsSection />

      {/* 5. INTERACTIVE BEFORE & AFTER SLIDER: Transformation Showcase */}
      <BeforeAfterShowcase />

      {/* 6. CASE STUDIES: Selected Melbourne Works */}
      <CaseStudiesSection />

      {/* 7. THE IN-HOUSE ADVANTAGE: Direct Master Trades vs Broker Model */}
      <TradesSection />

      {/* 8. GOOGLE REVIEWS: Infinite Smooth Scrolling Marquee (Left-to-Right) */}
      <ReviewsSection />

      {/* 9. FINAL HIGH-CONVERSION CTA SECTION */}
      <ClosingCTA 
        onOpenConsultModal={() => setDirectorModalOpen(true)}
        onOpenTenderModal={() => setTenderModalOpen(true)}
      />

      {/* 10. ARCHITECTURAL FOOTER */}
      <Footer />

      {/* TENDER UPLOAD MODAL */}
      <TenderUploadModal
        isOpen={tenderModalOpen}
        onClose={() => setTenderModalOpen(false)}
      />

      {/* DIRECTORS DIRECT CONSULT MODAL */}
      {directorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="bg-[#0f1117] border border-[#d4af37]/40 max-w-lg w-full p-6 sm:p-8 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.25)] relative animate-fadeIn">
            <button
              onClick={() => {
                setDirectorModalOpen(false);
                setConsultBooked(false);
              }}
              className="absolute top-4 right-4 text-[#94a3b8] hover:text-white text-xs font-mono px-2.5 py-1 rounded-lg border border-white/10"
            >
              [CLOSE]
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c24] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono mb-2">
              <HardHat className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>DIRECTOR DIRECT CONSULT</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-1">
              Talk Directly to Leadership
            </h3>
            <p className="text-xs text-[#94a3b8] mb-6">
              Zero brokers or junior coordinators. James & Matthew answer directly on Melbourne site matters.
            </p>

            {consultBooked ? (
              <div className="p-6 bg-gradient-to-b from-[#181c24] to-[#0b0c10] border border-[#d4af37]/40 rounded-xl text-center space-y-3">
                <div className="w-10 h-10 mx-auto bg-gradient-to-tr from-[#d4af37] to-[#c5a880] text-black rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  Callback Request Dispatched
                </h4>
                <p className="text-xs text-[#cbd5e1]">
                  Thank you, {consultForm.name || 'there'}. Directors James and Matthew have received your direct callback request and will connect via phone at {consultForm.phone || 'your number'}.
                </p>
                <button
                  onClick={() => {
                    setDirectorModalOpen(false);
                    setConsultBooked(false);
                  }}
                  className="mt-4 py-2 px-6 bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-black text-xs font-bold uppercase tracking-wider rounded-lg hover:from-white hover:to-[#e2e8f0]"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookConsult} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:0390008325"
                    className="p-3.5 rounded-xl bg-[#181c24] border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors block text-left"
                  >
                    <span className="text-[10px] font-mono text-[#d4af37] block font-bold">CO-DIRECTOR</span>
                    <span className="text-xs font-bold text-white block">James Papadimitriou</span>
                    <span className="text-[11px] font-mono text-[#c5a880] mt-1 flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-[#d4af37]" /> 03 9000 8325
                    </span>
                  </a>

                  <a
                    href="tel:0390008326"
                    className="p-3.5 rounded-xl bg-[#181c24] border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors block text-left"
                  >
                    <span className="text-[10px] font-mono text-[#d4af37] block font-bold">CO-DIRECTOR</span>
                    <span className="text-xs font-bold text-white block">Matthew Papadimitriou</span>
                    <span className="text-[11px] font-mono text-[#c5a880] mt-1 flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-[#d4af37]" /> 03 9000 8326
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
                      className="w-full bg-[#07080a] border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#d4af37] focus:outline-none"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="Direct Phone Number"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                      className="w-full bg-[#07080a] border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#d4af37] focus:outline-none"
                    />

                    <textarea
                      rows={2}
                      placeholder="Brief note or site address (e.g. 500 sqm office fit-out in Collins St)"
                      value={consultForm.notes}
                      onChange={(e) => setConsultForm({ ...consultForm, notes: e.target.value })}
                      className="w-full bg-[#07080a] border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#d4af37] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] via-[#e2c67c] to-[#c5a880] text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:from-white hover:to-[#e2e8f0] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Request Founder Callback ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
