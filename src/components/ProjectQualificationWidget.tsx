import React, { useState } from 'react';
import { 
  Utensils, 
  Briefcase, 
  Stethoscope, 
  ShoppingBag, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  ShieldCheck, 
  UserCheck,
  RotateCcw,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface ProjectQualificationWidgetProps {
  onSuccess?: (data: any) => void;
  className?: string;
}

const SECTOR_OPTIONS = [
  { id: 'hospitality', label: 'Hospitality / Cafe', icon: Utensils, desc: 'Dining, bars, roasteries & commercial kitchens' },
  { id: 'commercial', label: 'Commercial Workplace', icon: Briefcase, desc: 'Corporate HQs, acoustic suites & agile floors' },
  { id: 'medical', label: 'Medical & Specialist', icon: Stethoscope, desc: 'Clinics, day surgeries & dental suites' },
  { id: 'retail', label: 'Retail & Flagship', icon: ShoppingBag, desc: 'Boutiques, experiential spaces & showrooms' },
  { id: 'residential', label: 'Bespoke Residential', icon: Home, desc: 'Luxury penthouses & architectural private works' },
];

const AREA_PRESETS = [
  { id: 'under150', label: 'Under 150m²', desc: 'Boutique footprint / Rapid turnaround' },
  { id: '150-500', label: '150 – 500m²', desc: 'Standard hospitality or mid-scale office' },
  { id: '500-1500', label: '500 – 1,500m²', desc: 'Multi-zone enterprise or clinical suite' },
  { id: '1500plus', label: '1,500m²+', desc: 'Major commercial floorplate / Building revamp' }
];

const TIMELINE_OPTIONS = [
  { id: 'immediate', label: 'Immediate / Within 60 Days', desc: 'Fast-track site commencement & critical-path staging' },
  { id: '3to6', label: '3 – 6 Months', desc: 'Detailed documentation & permit approvals in progress' },
  { id: 'tender', label: 'Preliminary Tender / ECI Planning', desc: 'Early Contractor Involvement & constructability reviews' },
];

export const ProjectQualificationWidget: React.FC<ProjectQualificationWidgetProps> = ({
  onSuccess,
  className = ''
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketNumber, setTicketNumber] = useState<string>('');

  const [formData, setFormData] = useState({
    sector: 'hospitality',
    area: '150-500',
    timeline: 'immediate',
    fullName: '',
    company: '',
    phone: '',
    email: '',
    director: 'james'
  });

  const nextStep = () => {
    setErrorMsg('');
    if (currentStep === 1 && !formData.sector) {
      setErrorMsg('Please select a project space sector.');
      return;
    }
    if (currentStep === 4) {
      if (!formData.fullName.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        setErrorMsg('Please enter a valid Australian direct phone number.');
        return;
      }

      const randomRef = `TEAK-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNumber(randomRef);
      setIsSubmitted(true);
      if (onSuccess) onSuccess(formData);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setErrorMsg('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setErrorMsg('');
  };

  return (
    <div
      id="qualification-terminal"
      className={`relative rounded-2xl border border-[#d4af37]/30 bg-[#0f1117]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.08)] transition-all ${className}`}
    >
      {/* Warm Ambient Radial Glow behind the terminal card */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#d4af37] uppercase">
              PROJECT QUALIFICATION TERMINAL
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
            Direct Constructability Review
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono font-bold text-[#c5a880] bg-[#181c24] border border-[#d4af37]/30 px-2.5 py-1 rounded-md">
            {isSubmitted ? 'DISPATCHED' : `STEP 0${currentStep} / 04`}
          </span>
        </div>
      </div>

      {/* Step Indicator Progress Bars */}
      {!isSubmitted && (
        <div className="relative z-10 grid grid-cols-4 gap-2 mb-6">
          {[1, 2, 3, 4].map((step) => {
            const isCompleted = currentStep > step;
            const isCurrent = currentStep === step;
            return (
              <div key={step} className="space-y-1">
                <div className="h-1.5 w-full bg-[#1e2330] rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isCompleted || isCurrent
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a880] w-full'
                        : 'w-0'
                    }`}
                  />
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono text-[#94a3b8]">
                  <span>0{step}</span>
                  <span className={isCurrent ? 'text-[#d4af37] font-bold' : ''}>
                    {step === 1 ? 'Sector' : step === 2 ? 'Scale' : step === 3 ? 'Timeline' : 'Brief'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Error Alert */}
      {errorMsg && (
        <div className="relative z-10 mb-4 p-3 bg-red-950/60 border border-red-500/30 text-red-200 text-xs rounded-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0 animate-pulse"></span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* SUCCESS STATE */}
      {isSubmitted ? (
        <div className="relative z-10 py-4 space-y-6 animate-fadeIn">
          <div className="p-5 bg-gradient-to-b from-[#181c24] to-[#0f1117] border border-[#d4af37]/40 rounded-xl text-center">
            <div className="w-12 h-12 mx-auto bg-gradient-to-tr from-[#d4af37] to-[#c5a880] text-black rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#d4af37] uppercase block font-semibold">
              QUALIFICATION LODGED • REF: {ticketNumber}
            </span>
            <h4 className="text-2xl font-bold text-white mt-1 font-heading">
              Brief Dispatched to Directors
            </h4>
            <p className="text-xs sm:text-sm text-[#cbd5e1] mt-2 max-w-md mx-auto leading-relaxed">
              Your parameters have been transmitted directly to Co-Directors <strong className="text-white">James & Matthew Papadimitriou</strong>. We review site constructability and return with preliminary feasibility within <span className="text-[#d4af37] font-semibold">4 business hours</span>.
            </p>
          </div>

          <div className="bg-[#0b0c10] border border-white/10 rounded-xl p-4 space-y-2 text-xs">
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#94a3b8]">Client Contact:</span>
              <span className="text-white font-medium">{formData.fullName} ({formData.phone})</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#94a3b8]">Sector & Scope:</span>
              <span className="text-[#c5a880] font-medium capitalize">{formData.sector} · {formData.area}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#94a3b8]">Handover Readiness:</span>
              <span className="text-white font-medium capitalize">{formData.timeline}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#94a3b8]">Allocated Director:</span>
              <span className="text-[#d4af37] font-semibold">
                {formData.director === 'james' ? 'James Papadimitriou (Master Builder)' : 'Matthew Papadimitriou (Commercial Contracts)'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="tel:0390008325"
              className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-black font-bold text-xs uppercase tracking-wider text-center rounded-lg hover:from-white hover:to-[#e2e8f0] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Director Desk: 03 9000 8325</span>
            </a>
            <button
              onClick={resetForm}
              className="py-3 px-4 border border-white/20 text-[#cbd5e1] hover:text-white hover:border-[#d4af37] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Qualification</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          {/* STEP 1: Select Space Sector */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-[#cbd5e1] mb-2">
                Select your project space sector to allocate specific in-house trade sequencing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SECTOR_OPTIONS.map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.sector === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setFormData({ ...formData, sector: item.id })}
                      className={`text-left p-3.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#181c24] text-white border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] ring-1 ring-[#d4af37]'
                          : 'bg-[#0a0c10]/80 text-[#94a3b8] border-white/10 hover:border-white/30 hover:bg-[#12151c]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#d4af37] text-black' : 'bg-white/5 text-[#c5a880]'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                        )}
                      </div>
                      <div>
                        <span className={`text-xs font-bold block ${isSelected ? 'text-white' : 'text-[#e2e8f0]'}`}>
                          {item.label}
                        </span>
                        <span className="text-[11px] block mt-0.5 text-[#94a3b8] line-clamp-1">
                          {item.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Approximate Floor Area & Scope */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-xs text-[#cbd5e1] mb-2">
                Approximate floorplate dimension or construction scope footprint:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AREA_PRESETS.map((area) => {
                  const isSelected = formData.area === area.id;
                  return (
                    <button
                      type="button"
                      key={area.id}
                      onClick={() => setFormData({ ...formData, area: area.id })}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-[#181c24] text-white border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] ring-1 ring-[#d4af37]'
                          : 'bg-[#0a0c10]/80 text-[#94a3b8] border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span className={`text-sm font-bold block font-mono ${isSelected ? 'text-[#d4af37]' : 'text-white'}`}>
                        {area.label}
                      </span>
                      <span className="text-[11px] text-[#94a3b8] block mt-1">
                        {area.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 bg-[#0b0c10] border border-white/10 rounded-xl flex items-center gap-2 text-xs text-[#c5a880]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>TEAK operates guaranteed GMP / lump-sum contracts to eliminate trade variation bracket creep.</span>
              </div>
            </div>
          )}

          {/* STEP 3: Readiness & Timeline */}
          {currentStep === 3 && (
            <div className="space-y-3">
              <p className="text-xs text-[#cbd5e1] mb-2">
                Target site commencement or handover date requirements:
              </p>
              <div className="space-y-2">
                {TIMELINE_OPTIONS.map((item) => {
                  const isSelected = formData.timeline === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setFormData({ ...formData, timeline: item.id })}
                      className={`w-full p-3.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#181c24] text-white border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)] ring-1 ring-[#d4af37]'
                          : 'bg-[#0a0c10]/80 text-[#94a3b8] border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div>
                        <span className={`text-xs font-bold block ${isSelected ? 'text-[#d4af37]' : 'text-white'}`}>
                          {item.label}
                        </span>
                        <span className="text-[11px] text-[#94a3b8] block mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                      <Calendar className={`w-4 h-4 ${isSelected ? 'text-[#d4af37]' : 'text-[#64748b]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Direct Director Brief */}
          {currentStep === 4 && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#cbd5e1] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nicholas Reed"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#07080a] border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#cbd5e1] block mb-1">
                    Company / Venue Entity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Reed Hospitality Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#07080a] border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#cbd5e1] block mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#07080a] border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#cbd5e1] block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="nicholas@reedgroup.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#07080a] border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Radio choice for Director */}
              <div className="pt-2">
                <label className="text-[11px] font-medium text-[#cbd5e1] block mb-1.5">
                  Direct Brief Allocation:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, director: 'james' })}
                    className={`p-2.5 text-left rounded-lg border transition-all ${
                      formData.director === 'james'
                        ? 'bg-[#181c24] border-[#d4af37] text-white shadow-sm ring-1 ring-[#d4af37]'
                        : 'bg-[#07080a] border-white/10 text-[#94a3b8]'
                    }`}
                  >
                    <span className="text-[11px] font-bold block text-white">James Papadimitriou</span>
                    <span className="text-[10px] text-[#c5a880]">Master Builder & Trades</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, director: 'matthew' })}
                    className={`p-2.5 text-left rounded-lg border transition-all ${
                      formData.director === 'matthew'
                        ? 'bg-[#181c24] border-[#d4af37] text-white shadow-sm ring-1 ring-[#d4af37]'
                        : 'bg-[#07080a] border-white/10 text-[#94a3b8]'
                    }`}
                  >
                    <span className="text-[11px] font-bold block text-white">Matthew Papadimitriou</span>
                    <span className="text-[10px] text-[#c5a880]">Commercial Contracts</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="py-2.5 px-4 text-xs font-semibold text-[#cbd5e1] hover:text-white border border-white/15 hover:border-[#d4af37] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div className="text-[11px] font-mono text-[#94a3b8] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Zero Broker Layer</span>
              </div>
            )}

            <button
              type="button"
              onClick={nextStep}
              className="py-3 px-6 bg-gradient-to-r from-[#d4af37] via-[#e2c67c] to-[#c5a880] text-black hover:from-white hover:to-[#e2e8f0] text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <span>{currentStep === 4 ? 'Dispatch to Director Desk ↗' : 'Continue Step'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
