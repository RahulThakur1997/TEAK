import React, { useState, useEffect } from 'react';
import { TeakLogo } from './TeakLogo';
import { Menu, X, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConsult?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'In-House Advantage', href: '#advantage' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Client Endorsements', href: '#endorsements' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3 pb-1 transition-all duration-300 pointer-events-none">
      {/* Floating Frosted Glass Capsule with Platinum Silver Border */}
      <div
        className={`max-w-7xl mx-auto rounded-none border transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-[#090A0C]/90 backdrop-blur-xl border-[#CCCCCC]/40 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.9),0_0_20px_rgba(204,204,204,0.15)] py-2 px-5'
            : 'bg-[#111317]/85 backdrop-blur-md border-white/10 py-2.5 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center focus:outline-none">
            <TeakLogo variant="full" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-medium text-[#999999] hover:text-white transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CCCCCC] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Minimalist Stark White / Chrome CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:0390008325"
              className="text-xs font-mono text-[#999999] hover:text-[#CCCCCC] transition-colors flex items-center gap-1.5"
              title="Direct Director Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#CCCCCC]" />
              <span className="hidden xl:inline">03 9000 TEAK</span>
            </a>

            {/* Dynamic CTA with Silver Luminous Glow */}
            <button
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#CCCCCC] rounded-none transition-all duration-200 shadow-[0_0_20px_rgba(204,204,204,0.25)] border border-white gap-1.5"
            >
              <span>Consult a Director</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              type="button"
              onClick={onOpenConsult}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-white"
            >
              Consult ↗
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E2E8F0] hover:text-white focus:outline-none border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 max-w-7xl mx-auto bg-[#090A0C]/95 backdrop-blur-2xl border border-[#CCCCCC]/30 p-6 space-y-4 shadow-2xl pointer-events-auto">
          <div className="text-[10px] font-mono tracking-widest text-[#CCCCCC] uppercase flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>REG. COMMERCIAL BUILDER CB-L 67337</span>
          </div>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider uppercase text-white hover:text-[#CCCCCC] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsult) onOpenConsult();
              }}
              className="block w-full py-3 text-center bg-white text-black text-xs font-bold uppercase tracking-widest"
            >
              Consult a Director ↗
            </button>
            <a
              href="tel:0390008325"
              className="block w-full py-2.5 text-center border border-white/20 text-[#E2E8F0] text-xs font-mono"
            >
              Direct Dial: 03 9000 8325
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
