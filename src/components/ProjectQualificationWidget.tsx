import React, { useState } from 'react';
import { 
  Building2, 
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
  FileText,
  UserCheck,
  RotateCcw
} from 'lucide-react';
import { QualificationFormData } from '../types';

interface ProjectQualificationWidgetProps {
  onSuccess?: (data: QualificationFormData) => void;
  className?: string;
}

const SECTOR_OPTIONS = [
  { id: 'hospitality', label: 'Hospitality / Café', icon: Utensils, desc: 'Dining, bars & venues' },
  { id: 'commercial', label: 'Commercial Office', icon: Briefcase, desc: 'HQs, fit-outs & agile floors' },
  { id: 'medical', label: 'Medical / Specialist', icon: Stethoscope, desc: 'Clinics, dental & surgical' },
  { id: 'retail', label: 'Retail / Showroom', icon: ShoppingBag, desc: 'Flagships & boutique spaces' },
  { id: 'residential', label: 'Custom Residential', icon: Home, desc: 'Architectural penthouses & homes' },
];

const SCALE_PRESETS = [
  { id: 'sub100', label: '< 100 sqm', min: 40, max: 99, defaultVal: 75, badge: 'Boutique footprint' },
  { id: '100-300', label: '100 – 300 sqm', min: 100, max: 300, defaultVal: 220, badge: 'Standard commercial' },
  { id: '300-1000', label: '300 – 1,000 sqm', min: 300, max: 1000, defaultVal: 650, badge: 'Mid-scale enterprise' },
  { id: '1000plus', label: '1,000+ sqm', min: 1000, max: 3500, defaultVal: 1800, badge: 'Major floorplate' }
];

const TIMELINE_OPTIONS = [
  { id: 'immediate', label: 'Within 3 Months', note: 'Immediate site start / Fast-track' },
  { id: '3to6', label: '3 – 6 Months', note: 'Documentation & tender stage' },
  { id: 'planning', label: 'Planning & Feasibility', note: 'Early contractor involvement (ECI)' },
];

const BUDGET_TIERS = [
  '$150k – $350k',
  '$350k – $750k',
  '$750k – $1.5M',
  '$1.5M – $3.5M+'
];

export const ProjectQualificationWidget: React.FC<ProjectQualificationWidgetProps> = ({
  onSuccess,
  className = ''
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketNumber, setTicketNumber] = useState<string>('');

  const [formData, setFormData] = useState<QualificationFormData>({
    sector: 'hospitality',
    scaleSqm: '100-300',
    scaleSqmNumeric: 220,
    timeline: 'immediate',
    budgetRange: '$350k – $750k',
    notes: '',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectAddress: '',
    preferredDirector: 'either'
  });

  const nextStep = () => {
    setErrorMsg('');
    if (currentStep === 1 && !formData.sector) {
      setErrorMsg('Please select a project category to continue.');
      return;
    }
    if (currentStep === 4) {
      // Validate step 4 inputs
      if (!formData.fullName.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        setErrorMsg('Please provide a valid direct Australian phone number.');
        return;
      }
      if (!formData.projectAddress.trim()) {
        setErrorMsg('Please enter the project site address or suburb.');
        return;
      }

      // Generate reference ticket
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const ticket = `TEAK-MEL-2026-${randNum}`;
      setTicketNumber(ticket);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess(formData);
      }
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
      id="qualification-widget"
      className={`relative rounded-none border border-white/15 bg-[#1B1E24]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl transition-all ${className}`}
    >
      {/* Architectural Corner Accents */}
      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border border-black z-10" />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border border-black z-10" />
      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border border-black z-10" />
      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-black z-10" />

      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#999999] uppercase block mb-1">
            PROJECT QUALIFICATION
          </span>
          <h3 className="text-xl font-bold text-white font-heading">
            Director-Led Constructability Review
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono font-bold text-white">
            {isSubmitted ? 'COMPLETE' : `STEP 0${currentStep} / 04`}
          </span>
        </div>
      </div>

      {/* Progress Line */}
      {!isSubmitted && (
        <div className="w-full bg-[#2A2E35] h-1 mb-6 relative overflow-hidden">
          <div 
            className="bg-white h-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      )}

      {/* Error alert if any */}
      {errorMsg && (
        <div className="mb-4 p-3 bg-red-950/70 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0 animate-pulse"></span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* SUCCESS STATE */}
      {isSubmitted ? (
        <div className="py-4 space-y-6 animate-fadeIn">
          <div className="p-4 bg-white/5 border border-white/20 text-center">
            <div className="w-12 h-12 mx-auto bg-white text-black flex items-center justify-center mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#999999] uppercase block">
              QUALIFICATION LODGED • REF: {ticketNumber}
            </span>
            <h4 className="text-2xl font-bold text-white mt-1 font-heading">
              Brief Received & Allocated
            </h4>
            <p className="text-sm text-[#CCCCCC] mt-2 max-w-md mx-auto leading-relaxed">
              Your project parameters have been routed directly to Directors <span className="text-white font-medium">James & Matthew Papadimitriou</span>. We review preliminary site plans and call back within <span className="text-white font-semibold">4 business hours</span>.
            </p>
          </div>

          {/* Submitted Summary Overview */}
          <div className="bg-[#121418] border border-white/10 p-4 space-y-2.5 text-xs">
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#999999]">Client Contact:</span>
              <span className="text-white font-medium">{formData.fullName} ({formData.phone})</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#999999]">Project Location:</span>
              <span className="text-white font-medium">{formData.projectAddress || 'Melbourne VIC'}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#999999]">Sector & Footprint:</span>
              <span className="text-white font-medium uppercase">{formData.sector} · ~{formData.scaleSqmNumeric} sqm</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-[#999999]">Target Mobilisation:</span>
              <span className="text-white font-medium">{formData.timeline === 'immediate' ? 'Within 3 Months (Urgent)' : formData.timeline}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#999999]">Director Assigned:</span>
              <span className="text-white font-medium">
                {formData.preferredDirector === 'james' ? 'James Papadimitriou' : formData.preferredDirector === 'matthew' ? 'Matthew Papadimitriou' : 'Joint Directors'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a 
              href="tel:0390008325"
              className="flex-1 py-3 px-4 bg-white text-black font-bold text-xs uppercase tracking-wider text-center hover:bg-[#CCCCCC] transition-colors flex items-center justify-center gap-2"
            >
              <span>Call Director Directly (03 9000 8325)</span>
            </a>
            <button
              onClick={resetForm}
              className="py-3 px-4 border border-white/20 text-[#CCCCCC] hover:text-white hover:border-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Modify Parameters</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* STEP 1: Describe Your Vision */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[#CCCCCC] mb-3">
                  Select your project sector to tailor our trade sequencing and constructability review:
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
                        className={`text-left p-3.5 border transition-all relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-white text-black border-white shadow-lg'
                            : 'bg-[#121418] text-[#CCCCCC] border-white/10 hover:border-white/40 hover:bg-[#181B22]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-white'}`} />
                          {isSelected && <span className="w-2 h-2 bg-black rounded-full"></span>}
                        </div>
                        <div>
                          <span className={`text-xs font-bold block ${isSelected ? 'text-black' : 'text-white'}`}>
                            {item.label}
                          </span>
                          <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-black/70' : 'text-[#888888]'}`}>
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Dimensions & Scale */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <label className="text-xs text-[#CCCCCC] block mb-2">
                  Select approximate floorplate or site footprint:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SCALE_PRESETS.map((preset) => {
                    const isSelected = formData.scaleSqm === preset.id;
                    return (
                      <button
                        type="button"
                        key={preset.id}
                        onClick={() => setFormData({
                          ...formData,
                          scaleSqm: preset.id,
                          scaleSqmNumeric: preset.defaultVal
                        })}
                        className={`p-3 text-left border transition-all ${
                          isSelected
                            ? 'bg-white text-black border-white'
                            : 'bg-[#121418] text-[#CCCCCC] border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span className="text-xs font-bold block">{preset.label}</span>
                        <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-black/70' : 'text-[#888888]'}`}>
                          {preset.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fine-Tuning Scale Slider */}
              <div className="p-4 bg-[#121418] border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#999999]">Precise Area:</span>
                  <span className="text-sm font-mono font-bold text-white">
                    {formData.scaleSqmNumeric} sqm
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="2500"
                  step="20"
                  value={formData.scaleSqmNumeric}
                  onChange={(e) => setFormData({ ...formData, scaleSqmNumeric: Number(e.target.value) })}
                  className="w-full accent-white h-1.5 bg-[#2A2E35] rounded-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#666666] mt-1 font-mono">
                  <span>40 sqm</span>
                  <span>1,000 sqm</span>
                  <span>2,500+ sqm</span>
                </div>
              </div>

              <div className="text-[11px] text-[#888888] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>TEAK provides fixed-price lump sum or GMP models to eliminate variation bracket creep.</span>
              </div>
            </div>
          )}

          {/* STEP 3: Target Launch & Intent */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-[#CCCCCC] block mb-2">
                  Anticipated Site Start / Handover Requirement:
                </label>
                <div className="space-y-2">
                  {TIMELINE_OPTIONS.map((opt) => {
                    const isSelected = formData.timeline === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, timeline: opt.id })}
                        className={`w-full p-3 text-left border flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-white text-black border-white'
                            : 'bg-[#121418] text-[#CCCCCC] border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold block">{opt.label}</span>
                          <span className={`text-[10px] block ${isSelected ? 'text-black/70' : 'text-[#888888]'}`}>
                            {opt.note}
                          </span>
                        </div>
                        <Calendar className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#666666]'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs text-[#CCCCCC] block mb-2">
                  Estimated CapEx Allocation / Budget Range:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGET_TIERS.map((tier) => {
                    const isSelected = formData.budgetRange === tier;
                    return (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budgetRange: tier })}
                        className={`p-2.5 text-center text-xs font-mono font-bold border transition-all ${
                          isSelected
                            ? 'bg-white text-black border-white'
                            : 'bg-[#121418] text-[#CCCCCC] border-white/10 hover:border-white/30'
                        }`}
                      >
                        {tier}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs text-[#999999] block mb-1">
                  Brief Project Scope / Existing Site Condition (Optional):
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Existing warm shell in Richmond, heritage brick, requires commercial kitchen exhaust..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#121418] border border-white/10 p-2.5 text-xs text-white placeholder-[#666666] focus:border-white focus:outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Secure Consult */}
          {currentStep === 4 && (
            <div className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#CCCCCC] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#121418] border border-white/15 p-2.5 text-xs text-white placeholder-[#555555] focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#CCCCCC] block mb-1">
                    Company / Venue Entity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vance Hospitality Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#121418] border border-white/15 p-2.5 text-xs text-white placeholder-[#555555] focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#CCCCCC] block mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#121418] border border-white/15 p-2.5 text-xs text-white placeholder-[#555555] focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#CCCCCC] block mb-1">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    placeholder="marcus@vance.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#121418] border border-white/15 p-2.5 text-xs text-white placeholder-[#555555] focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#CCCCCC] block mb-1">
                  Site Address / Suburb *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 144 Gertrude St, Fitzroy / Collins St CBD"
                  value={formData.projectAddress}
                  onChange={(e) => setFormData({ ...formData, projectAddress: e.target.value })}
                  className="w-full bg-[#121418] border border-white/15 p-2.5 text-xs text-white placeholder-[#555555] focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#CCCCCC] block mb-1.5">
                  Request Meeting With:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'james', label: 'James Papadimitriou', sub: 'Site & Trades' },
                    { id: 'matthew', label: 'Matthew Papadimitriou', sub: 'Contracts & Budget' },
                    { id: 'either', label: 'Joint Directors', sub: 'First Available' }
                  ].map((dir) => {
                    const isSelected = formData.preferredDirector === dir.id;
                    return (
                      <button
                        type="button"
                        key={dir.id}
                        onClick={() => setFormData({ ...formData, preferredDirector: dir.id as any })}
                        className={`p-2 text-center border transition-all ${
                          isSelected
                            ? 'bg-white text-black border-white'
                            : 'bg-[#121418] text-[#999999] border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span className="text-[11px] font-bold block truncate">{dir.label}</span>
                        <span className="text-[9px] block text-[#777777]">{dir.sub}</span>
                      </button>
                    );
                  })}
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
                className="py-2.5 px-4 text-xs font-semibold text-[#CCCCCC] hover:text-white border border-white/15 hover:border-white/30 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div className="text-[11px] text-[#666666] flex items-center gap-1">
                <span>Melbourne CB-L 67337</span>
              </div>
            )}

            <button
              type="button"
              onClick={nextStep}
              className="py-3 px-6 bg-white text-black hover:bg-[#E5E5E5] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
            >
              <span>{currentStep === 4 ? 'Submit Secure Details ↗' : 'Next Step'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
