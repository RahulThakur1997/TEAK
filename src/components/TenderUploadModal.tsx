import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, FileText, X, Phone, ShieldCheck } from 'lucide-react';

interface TenderUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TenderUploadModal: React.FC<TenderUploadModalProps> = ({ isOpen, onClose }) => {
  const [fileList, setFileList] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [tenderId, setTenderId] = useState<string>('');

  const [form, setForm] = useState({
    projectName: '',
    address: '',
    contactName: '',
    phone: '',
    email: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSimulatedDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const names = Array.from(e.dataTransfer.files).map(f => f.name);
      setFileList(prev => [...prev, ...names]);
    }
  };

  const handleAddSampleFile = () => {
    const samples = [
      'Architectural_Plans_Rev_C.pdf (14.2 MB)',
      'Services_Mechanical_Brief.dwg (28.4 MB)',
      'Tender_Finishes_Schedule.xlsx (2.1 MB)'
    ];
    setFileList(prev => [...prev, samples[prev.length % samples.length]]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TEAK-TDR-${Math.floor(1000 + Math.random() * 9000)}`;
    setTenderId(id);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div className="bg-[#111317] border border-[#CCCCCC]/40 max-w-xl w-full p-6 sm:p-8 shadow-[0_0_40px_rgba(204,204,204,0.15)] relative my-8 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#999999] hover:text-white text-xs font-mono px-3 py-1.5 border border-white/10"
        >
          [CLOSE ESC]
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B20] border border-[#CCCCCC]/30 text-[#CCCCCC] text-xs font-mono mb-2">
          <UploadCloud className="w-3.5 h-3.5 text-white" />
          <span>DIRECT TENDER SUBMISSION PORTAL</span>
        </div>

        <h3 className="text-2xl font-bold text-white font-heading mb-1">
          Upload Tender & Constructability Brief
        </h3>
        <p className="text-xs text-[#999999] mb-6">
          Architectural drawings, MEP schedules, and ECI briefs go straight to Commercial Director Matthew Papadimitriou.
        </p>

        {isSubmitted ? (
          <div className="p-6 bg-[#090A0C] border border-[#CCCCCC]/40 text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-white text-black flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono text-[#CCCCCC] tracking-widest font-bold uppercase block">
              TENDER LODGED • REF: {tenderId}
            </span>
            <h4 className="text-xl font-bold text-white font-heading">
              Documentation Received
            </h4>
            <p className="text-xs sm:text-sm text-[#E2E8F0] max-w-md mx-auto leading-relaxed">
              Thank you, {form.contactName || 'there'}. Matthew Papadimitriou and our commercial estimating desk have received your documents for <span className="text-white font-medium">{form.projectName || 'your project'}</span>. We initiate quantity take-offs and confirm tender receipt within 4 hours.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0390008326"
                className="flex-1 py-3 px-4 bg-white text-black font-bold text-xs uppercase tracking-wider text-center hover:bg-[#CCCCCC]"
              >
                Call Matthew Directly: 03 9000 8326
              </a>
              <button
                onClick={onClose}
                className="py-3 px-5 border border-white/20 text-white text-xs uppercase tracking-wider hover:border-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* File Dropzone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleSimulatedDrop}
              onClick={handleAddSampleFile}
              className={`p-6 border-2 border-dashed text-center transition-all cursor-pointer ${
                isDragging
                  ? 'border-white bg-[#181B20]'
                  : 'border-white/15 bg-[#090A0C] hover:border-[#CCCCCC]/50'
              }`}
            >
              <UploadCloud className="w-8 h-8 text-white mx-auto mb-2" />
              <span className="text-xs font-bold text-white block">
                Drag and drop drawing sets, or click to attach files
              </span>
              <span className="text-[10px] text-[#999999] block mt-1 font-mono">
                Supports PDF, DWG, RVT, ZIP up to 100MB per file
              </span>
            </div>

            {/* Attached files list */}
            {fileList.length > 0 && (
              <div className="space-y-1.5 p-3 bg-[#090A0C] border border-white/10 text-xs">
                <span className="text-[10px] font-mono text-[#CCCCCC] block mb-1">
                  ATTACHED FILES ({fileList.length}):
                </span>
                {fileList.map((f, i) => (
                  <div key={i} className="flex items-center justify-between text-white py-1 border-b border-white/5 last:border-0">
                    <span className="flex items-center gap-1.5 truncate max-w-[340px]">
                      <FileText className="w-3.5 h-3.5 text-[#CCCCCC] shrink-0" />
                      <span>{f}</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFileList(fileList.filter((_, idx) => idx !== i));
                      }}
                      className="text-[#999999] hover:text-white text-xs font-mono"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                  Project Title / Venue *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Flinders Lane Dining Room"
                  value={form.projectName}
                  onChange={(e) => setForm({ ...form, projectName: e.target.value })}
                  className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                  Project Address / Suburb *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 101 Collins St, Melbourne"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Matthew Vance"
                  value={form.contactName}
                  onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                  className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                  Direct Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0400 000 000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-[#E2E8F0] block mb-1">
                Tender Deadline & Key Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Tenders close 14 Nov. Early contractor involvement (ECI) preferred on steel structure."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-[#090A0C] border border-white/15 p-2.5 text-xs text-white placeholder-[#666666] focus:border-[#CCCCCC] focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#CCCCCC] transition-all shadow-[0_0_20px_rgba(204,204,204,0.25)] flex items-center justify-center gap-2"
              >
                <span>Submit Tender to Directors Desk ↗</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
