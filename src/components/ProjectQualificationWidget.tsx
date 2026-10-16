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
  RotateCcw,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface ProjectQualificationWidgetProps {
  onSuccess?: (data: any) => void;
  className?: string;
}

const SECTOR_OPTIONS = [
  { id: 'hospitality', label: 'Hospitality', icon: Utensils, desc: 'Dining, cafés, bars & commercial kitchens' },
  { id: 'commercial', label: 'Commercial Office', icon: Briefcase, desc: 'Corporate workplaces & acoustic suites' },
  { id: 'medical', label: 'Medical & Specialist', icon: Stethoscope, desc: 'Clinics, specialist suites & cleanrooms' },
  { id: 'retail', label: 'Retail & Flagship', icon: ShoppingBag, desc: 'Boutiques, flagships & showrooms' },
];

const AREA_PRESETS = [
  { id: 'under150', label: '< 150m²', desc: 'Boutique footprint / Rapid turnaround' },
  { id: '150-400', label: '150 – 400m²', desc: 'Standard hospitality or mid-scale workplace' },
  { id: '400-1000', label: '400 – 1,000m²', desc: 'Multi-zone enterprise or clinical floor' },
  { id: '1000plus', label: '1,000m²+', desc: 'Major commercial floorplate fit-out' }
];

const TIMELINE_OPTIONS = [
  { id: 'immediate', label: 'Immediate / Within 60 Days', desc: 'Fast-track site commencement & sequencing' },
  { id: '2to4', label: '2 – 4 Months', desc: 'Permits, architectural plans & procurement' },
  { id: 'tender', label: 'Tender / ECI Stage', desc: 'Early Contractor Involvement & feasibility' },
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
      className={`relative rounded-none border border-[#CCCCCC]/30 bg-[#111317]/90 backdrop-blur-xl p-4 sm:p-5 shadow-[0_0_30px_rgba(204,204,204,0.12)] transition-all ${className}`}
    >
      {/* Subtle silver ambient backlight */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#CCCCCC]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#CCCCCC] uppercase">
              PROJECT INTAKE TERMINAL
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white font-heading tracking-tight">
            Director Constructability Review
          </h3>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono font-bold text-white bg-[#181B20] border border-[#CCCCCC]/30 px-2 py-0.5">
            {isSubmitted ? 'DISPATCHED' : `STEP 0${currentStep} / 04`}
          </span>
        </div>
      </div>

      {/* Animated Silver Progress Bar */}
      {!isSubmitted && (
        <div className="relative z-10 grid grid-cols-4 gap-2 mb-3">
          {[1, 2, 3, 4].map((step) => {
            const isCompleted = currentStep > step;
            const isCurrent = currentStep === step;
            return (
              <div key={step} className="space-y-1">
                <div className="h-1 w-full bg-[#181B20] overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isCompleted || isCurrent
                        ? 'bg-gradient-to-r from-white to-[#CCCCCC] w-full shadow-[0_0_10px_rgba(204,204,204,0.5)]'
                        : 'w-0'
                    }`}
                  />
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono text-[#999999]">
                  <span>0{step}</span>
                  <span className={isCurrent ? 'text-white font-bold' : ''}>
                    {step === 1 ? 'Sector' : step === 2 ? 'Area' : step === 3 ? 'Programme' : 'Director'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Error Alert */}
      {errorMsg && (
        <div className="relative z-10 mb-4 p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0 animate-pulse"></span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* SUCCESS STATE */}
      {isSubmitted ? (
        <div className="relative z-10 py-4 space-y-6 animate-fadeIn">
          <div className="p-5 bg-[#090A0C] border border-[#CCCCCC]/40 text-center shadow-[0_0_20px_rgba(204,204,204,0.15)]">
            <div className="w-12 h-12 mx-auto bg-white text-black flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#CCCCCC] uppercase block font-semibold">
              INTAKE LODGED • REF: {ticketNumber}
            </span>
            <h4 className="text-2xl font-extrabold text-white mt-1 font-heading">
              Brief Dispatched to Directors
            </h4>
            <p className="text-xs sm:text-sm text-[#E2E8F0] mt-2 max-w-md mx-auto leading-relaxed">
              Your parameters have been transmitted directly to Co-Directors <strong className="text-white">James & Matthew Papadimitriou</strong>. We review site constructability and return with preliminary feasibility within <span className="text-white font-semibold underline decoration-[#CCCCCC]">4 business hours</span>.
            </p>
          </div>

          <div className="bg-[#090A0C] border border-white/10 p-4 space-y-2 text-xs">
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#999999]">Client Contact:</span>
              <span className="text-white font-medium">{formData.fullName} ({formData.phone})</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#999999]">Sector & Scope:</span>
              <span className="text-[#CCCCCC] font-medium capitalize">{formData.sector} · {formData.area}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#999999]">Target Readiness:</span>
              <span className="text-white font-medium capitalize">{formData.timeline}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#999999]">Allocated Director:</span>
              <span className="text-white font-semibold">
                {formData.director === 'james' ? 'James Papadimitriou (Master Builder)' : 'Matthew Papadimitriou (Commercial Contracts)'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="tel:0390008325"
              className="flex-1 py-3 px-4 bg-white text-black font-bold text-xs uppercase tracking-wider text-center hover:bg-[#CCCCCC] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(204,204,204,0.3)]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Call: 03 9000 8325</span>
            </a>
            <button
              onClick={resetForm}
              className="py-3 px-4 border border-white/20 text-[#E2E8F0] hover:text-white hover:border-[#CCCCCC] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
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
              <p className="text-xs text-[#E2E8F0] mb-2">
                Select your project space sector to allocate specific in-house trade sequencing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SECTOR_OPTIONS.map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.sector === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setFormData({ ...formData, sector: item.id })}
                      className={`text-left p-2.5 sm:p-3 border transition-all relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#181B20] text-white border-[#CCCCCC] shadow-[0_0_20px_rgba(204,204,204,0.25)]'
                          : 'bg-[#090A0C]/90 text-[#999999] border-white/10 hover:border-white/30 hover:bg-[#111317]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className={`p-1.5 ${isSelected ? 'bg-white text-black' : 'bg-white/5 text-[#CCCCCC]'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                        )}
                      </div>
                      <div>
                        <span className={`text-xs font-bold block ${isSelected ? 'text-white' : 'text-[#E2E8F0]'}`}>
                          {item.label}
                        </span>
                        <span className="text-[10px] block mt-0.5 text-[#999999] line-clamp-1 font-mono">
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
              <p className="text-xs text-[#E2E8F0] mb-2">
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
                      className={`p-4 text-left border transition-all ${
                        isSelected
                          ? 'bg-[#181B20] text-white border-[#CCCCCC] shadow-[0_0_20px_rgba(204,204,204,0.25)]'
                          : 'bg-[#090A0C]/90 text-[#999999] border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span className={`text-sm font-bold block font-mono ${isSelected ? 'text-white' : 'text-[#E2E8F0]'}`}>
                        {area.label}
                      </span>
                      <span className="text-[11px] text-[#999999] block mt-1">
                        {area.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 bg-[#090A0C] border border-white/10 flex items-center gap-2 text-xs text-[#CCCCCC]">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Fixed-price lump sum or GMP models to eliminate variation bracket creep.</span>
              </div>
            </div>
          )}

          {/* STEP 3: Programme & Timeline */}
          {currentStep === 3 && (
            <div className="space-y-3">
              <p className="text-xs text-[#E2E8F0] mb-2">
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
                      className={`w-full p-3.5 text-left border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#181B20] text-white border-[#CCCCCC] shadow-[0_0_15px_rgba(204,204,204,0.25)]'
                          : 'bg-[#090A0C]/90 text-[#999999] border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div>
                        <span className={`text-xs font-bold block ${isSelected ? 'text-white' : 'text-[#E2E8F0]'}`}>
                          {item.label}
                        </span>
                        <span className="text-[11px] text-[#999999] block mt-0.5 font-mono">
                          {item.desc}
                        </span>
                      </div>
                      <Calendar className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#666666]'}`} />
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
                  <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nicholas Reed"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                    Company / Venue Entity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Reed Hospitality Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="nicholas@reedgroup.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                  />
                </div>
              </div>

              {/* Radio choice for Director */}
              <div className="pt-2">
                <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1.5">
                  Direct Brief Allocation:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, director: 'james' })}
                    className={`p-2.5 text-left border transition-all ${
                      formData.director === 'james'
                        ? 'bg-[#181B20] border-[#CCCCCC] text-white shadow-[0_0_15px_rgba(204,204,204,0.2)]'
                        : 'bg-[#090A0C] border-white/10 text-[#999999]'
                    }`}
                  >
                    <span className="text-[11px] font-bold block text-white">James Papadimitriou</span>
                    <span className="text-[10px] text-[#CCCCCC]">Master Builder & Trades</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, director: 'matthew' })}
                    className={`p-2.5 text-left border transition-all ${
                      formData.director === 'matthew'
                        ? 'bg-[#181B20] border-[#CCCCCC] text-white shadow-[0_0_15px_rgba(204,204,204,0.2)]'
                        : 'bg-[#090A0C] border-white/10 text-[#999999]'
                    }`}
                  >
                    <span className="text-[11px] font-bold block text-white">Matthew Papadimitriou</span>
                    <span className="text-[10px] text-[#CCCCCC]">Commercial Contracts</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-3.5 border-t border-white/10 mt-3.5">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="py-2 px-3.5 text-xs font-semibold text-[#E2E8F0] hover:text-white border border-white/15 hover:border-[#CCCCCC] transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div className="text-[11px] font-mono text-[#999999] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#CCCCCC]" />
                <span>Zero Broker Layer</span>
              </div>
            )}

            <button
              type="button"
              onClick={nextStep}
              className="py-2.5 px-5 bg-white text-black hover:bg-[#CCCCCC] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(204,204,204,0.25)]"
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
