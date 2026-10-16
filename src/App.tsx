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
    <div className="min-h-screen bg-[#090A0C] text-[#E2E8F0] selection:bg-[#CCCCCC] selection:text-black">
      {/* 1. TOP NAVIGATION: Floating Frosted Glass Capsule */}
      <Navbar onOpenConsult={() => setDirectorModalOpen(true)} />

      {/* 2. HERO SECTION: Split-Layout with Live Video Background & 4-Step Intake Terminal */}
      <HeroSection onOpenConsult={() => setDirectorModalOpen(true)} />

      {/* 3. ABOUT SECTION: "All Delivery. No Theatre." (3-Pillar Switcher) */}
      <AboutSection />

      {/* 4. SERVICES & SECTORS: Fine 1px Metallic Border Grid */}
      <SectorsSection />

      {/* 5. INTERACTIVE BEFORE & AFTER SLIDER: Split Transformation Showcase */}
      <BeforeAfterShowcase />

      {/* 6. CASE STUDIES: Selected Melbourne Works */}
      <CaseStudiesSection />

      {/* 7. THE IN-HOUSE ADVANTAGE: Direct Master Trades vs Broker Model */}
      <TradesSection />

      {/* 8. GOOGLE REVIEWS: Continuous Infinite Smooth Horizontal Marquee (Left-to-Right) */}
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
          <div className="bg-[#111317] border border-[#CCCCCC]/40 max-w-lg w-full p-6 sm:p-8 shadow-[0_0_40px_rgba(204,204,204,0.18)] relative animate-fadeIn">
            <button
              onClick={() => {
                setDirectorModalOpen(false);
                setConsultBooked(false);
              }}
              className="absolute top-4 right-4 text-[#999999] hover:text-white text-xs font-mono px-2.5 py-1 border border-white/10"
            >
              [CLOSE]
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B20] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-2">
              <HardHat className="w-3.5 h-3.5 text-white" />
              <span>DIRECTOR DIRECT CONSULT</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-heading tracking-tight mb-1">
              Talk Directly to Leadership
            </h3>
            <p className="text-xs text-[#999999] mb-6">
              Zero brokers or junior coordinators. James & Matthew answer directly on Melbourne site matters.
            </p>

            {consultBooked ? (
              <div className="p-6 bg-[#090A0C] border border-[#CCCCCC]/40 text-center space-y-3 shadow-lg">
                <div className="w-10 h-10 mx-auto bg-white text-black flex items-center justify-center shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  Callback Request Dispatched
                </h4>
                <p className="text-xs text-[#E2E8F0]">
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
                    className="p-3.5 bg-[#181B20] border border-[#CCCCCC]/30 hover:border-white transition-colors block text-left"
                  >
                    <span className="text-[10px] font-mono text-[#CCCCCC] block font-bold">CO-DIRECTOR</span>
                    <span className="text-xs font-bold text-white block">James Papadimitriou</span>
                    <span className="text-[11px] font-mono text-[#999999] mt-1 flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-[#CCCCCC]" /> 03 9000 8325
                    </span>
                  </a>

                  <a
                    href="tel:0390008326"
                    className="p-3.5 bg-[#181B20] border border-[#CCCCCC]/30 hover:border-white transition-colors block text-left"
                  >
                    <span className="text-[10px] font-mono text-[#CCCCCC] block font-bold">CO-DIRECTOR</span>
                    <span className="text-xs font-bold text-white block">Matthew Papadimitriou</span>
                    <span className="text-[11px] font-mono text-[#999999] mt-1 flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-[#CCCCCC]" /> 03 9000 8326
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
                      className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="Direct Phone Number"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                      className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                    />

                    <textarea
                      rows={2}
                      placeholder="Brief note or site address (e.g. 500 sqm office fit-out in Collins St)"
                      value={consultForm.notes}
                      onChange={(e) => setConsultForm({ ...consultForm, notes: e.target.value })}
                      className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC] transition-all shadow-[0_0_20px_rgba(204,204,204,0.25)]"
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
